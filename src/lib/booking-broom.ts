/**
 * Forward a Sanford booking to Booking Broom (manager dashboard).
 * No-ops when BOOKING_BROOM_URL / BOOKING_BROOM_API_KEY are unset.
 *
 * When a bookingId is provided, forwards are idempotent within this process:
 * concurrent or repeated calls with the same id share one upstream POST.
 */

export type SanfordBookingPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  aptUnit?: string;
  keyInfo: string;
  service: string;
  squareFootage?: string;
  /** Present when the customer picked a range instead of typing an exact figure. */
  squareFootageLabel?: string;
  bedrooms?: number;
  bathrooms?: number;
  paymentType: string;
  paymentComment?: string;
  maintenancePrice?: number;
  scheduledDate?: string;
  scheduledTime?: string;
  estimatedPrice?: number;
  frequency?: string;
  extras?: Array<{ name: string; price?: number }>;
};

export interface BookingBroomResult {
  forwarded: boolean;
  id?: string;
  error?: string;
  /** True when this call reused a prior forward for the same bookingId. */
  deduped?: boolean;
}

const IDEMPOTENCY_TTL_MS = 10 * 60 * 1000;

type CacheEntry = {
  promise: Promise<BookingBroomResult>;
  expiresAt: number;
};

/** In-process cache so the same bookingId only creates one Booking Broom row. */
const forwardCache = new Map<string, CacheEntry>();

/** Test helper — clears idempotency cache between cases. */
export function clearBookingBroomForwardCache(): void {
  forwardCache.clear();
}

function pruneExpiredCache(now = Date.now()): void {
  for (const [key, entry] of forwardCache) {
    if (entry.expiresAt <= now) forwardCache.delete(key);
  }
}

/** Only what has no structured home: the ID, access info and payment remarks. */
function buildNotes(booking: SanfordBookingPayload, bookingId?: string): string {
  const parts: string[] = [];

  if (bookingId) parts.push(`Booking ID: ${bookingId}`);
  if (booking.keyInfo) parts.push(`Key info: ${booking.keyInfo}`);
  if (booking.paymentComment) parts.push(`Payment note: ${booking.paymentComment}`);
  if (typeof booking.maintenancePrice === "number") {
    parts.push(`Maintenance price: $${booking.maintenancePrice}`);
  }

  return parts.join("\n");
}

function buildProperty(booking: SanfordBookingPayload) {
  const parsed = booking.squareFootage
    ? Number(booking.squareFootage.replace(/[^0-9]/g, ""))
    : undefined;
  const squareFeet = Number.isFinite(parsed) ? parsed : undefined;
  // A band came from a quick pick, so its midpoint is not a real measurement.
  const fromBand = Boolean(booking.squareFootageLabel);

  return {
    bedrooms: booking.bedrooms ?? undefined,
    bathrooms: booking.bathrooms ?? undefined,
    square_feet: fromBand ? undefined : squareFeet,
    size_label: booking.squareFootageLabel ?? (squareFeet ? undefined : booking.squareFootage),
  };
}

function buildQuote(booking: SanfordBookingPayload) {
  return {
    estimate: booking.estimatedPrice,
    currency: "USD",
    frequency: booking.frequency,
    add_ons: booking.extras?.map((extra) => ({
      label: extra.name,
      price: extra.price,
    })),
    payment_terms: booking.paymentType,
  };
}

async function postToBookingBroom(
  booking: SanfordBookingPayload,
  bookingId?: string,
): Promise<BookingBroomResult> {
  const baseUrl = process.env.BOOKING_BROOM_URL?.replace(/\/$/, "");
  const apiKey = process.env.BOOKING_BROOM_API_KEY;
  const siteSlug = process.env.BOOKING_BROOM_SITE_SLUG || "sanford";

  if (!baseUrl || !apiKey) {
    console.info(
      "[booking-broom] BOOKING_BROOM_URL / BOOKING_BROOM_API_KEY not set — skip forward",
    );
    return { forwarded: false };
  }

  const address = booking.aptUnit
    ? `${booking.address}, ${booking.aptUnit}`
    : booking.address;

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (bookingId) {
      headers["Idempotency-Key"] = bookingId;
    }

    const response = await fetch(`${baseUrl}/api/bookings`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        site_slug: siteSlug,
        api_key: apiKey,
        customer_name: `${booking.firstName} ${booking.lastName}`.trim(),
        email: booking.email,
        phone: booking.phone,
        address,
        service_type: booking.service,
        preferred_date: booking.scheduledDate,
        preferred_time: booking.scheduledTime,
        notes: buildNotes(booking, bookingId) || undefined,
        property: buildProperty(booking),
        quote: buildQuote(booking),
        // Hint for Booking Broom / Convex to treat retries as the same booking.
        ...(bookingId
          ? { idempotency_key: bookingId, external_id: bookingId }
          : {}),
      }),
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => ({}))) as { error?: string };
      const error = data.error ?? `HTTP ${response.status}`;
      console.error("[booking-broom] forward failed:", error);
      return { forwarded: false, error };
    }

    const data = (await response.json()) as { id?: string };
    return { forwarded: true, id: data.id };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[booking-broom] forward error:", message);
    return { forwarded: false, error: message };
  }
}

export async function forwardToBookingBroom(
  booking: SanfordBookingPayload,
  bookingId?: string,
): Promise<BookingBroomResult> {
  if (!bookingId) {
    return postToBookingBroom(booking, bookingId);
  }

  pruneExpiredCache();
  const existing = forwardCache.get(bookingId);
  if (existing && existing.expiresAt > Date.now()) {
    const result = await existing.promise;
    return { ...result, deduped: true };
  }

  const promise = postToBookingBroom(booking, bookingId).then((result) => {
    // Do not cache hard failures forever — allow a deliberate retry later.
    if (!result.forwarded && result.error) {
      forwardCache.delete(bookingId);
    }
    return result;
  });

  forwardCache.set(bookingId, {
    promise,
    expiresAt: Date.now() + IDEMPOTENCY_TTL_MS,
  });

  return promise;
}
