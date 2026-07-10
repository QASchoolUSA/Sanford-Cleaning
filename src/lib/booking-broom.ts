/**
 * Forward a Sanford booking to Booking Broom (manager dashboard).
 * No-ops when BOOKING_BROOM_URL / BOOKING_BROOM_API_KEY are unset.
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
}

function buildNotes(booking: SanfordBookingPayload, bookingId?: string): string {
  const parts: string[] = [];

  if (bookingId) parts.push(`Booking ID: ${bookingId}`);
  if (booking.keyInfo) parts.push(`Key info: ${booking.keyInfo}`);
  if (booking.squareFootage) parts.push(`Sq ft: ${booking.squareFootage}`);
  if (booking.bedrooms != null) parts.push(`Bedrooms: ${booking.bedrooms}`);
  if (booking.bathrooms != null) parts.push(`Bathrooms: ${booking.bathrooms}`);
  if (booking.frequency) parts.push(`Frequency: ${booking.frequency}`);
  if (booking.paymentType) parts.push(`Payment: ${booking.paymentType}`);
  if (booking.paymentComment) parts.push(`Payment note: ${booking.paymentComment}`);
  if (typeof booking.estimatedPrice === "number") {
    parts.push(`Estimated price: $${booking.estimatedPrice}`);
  }
  if (typeof booking.maintenancePrice === "number") {
    parts.push(`Maintenance price: $${booking.maintenancePrice}`);
  }
  if (booking.extras?.length) {
    parts.push(
      "Extras: " +
        booking.extras
          .map((extra) =>
            typeof extra.price === "number"
              ? `${extra.name} ($${extra.price})`
              : extra.name,
          )
          .join("; "),
    );
  }

  return parts.join("\n");
}

export async function forwardToBookingBroom(
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
    const response = await fetch(`${baseUrl}/api/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
        notes: buildNotes(booking, bookingId),
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
