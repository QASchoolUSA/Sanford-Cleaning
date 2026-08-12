import { NextResponse } from 'next/server';
import { forwardQuoteRequestToBookingBroom } from '@/lib/booking-broom';

type QuoteRequest = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
};

/**
 * Forwards quote requests to Booking Broom. Confirmation emails are sent by
 * Booking Broom (same path as bookings) — not via Worker SMTP.
 */
export async function POST(req: Request) {
  try {
    const body: QuoteRequest | null = await req.json().catch(() => null);
    if (!body || !body.name || !body.email) {
      return NextResponse.json({ error: 'Missing required fields: name, email' }, { status: 400 });
    }

    const broom = await forwardQuoteRequestToBookingBroom(body);
    if (broom.error) {
      console.error('Failed to forward quote request to Booking Broom:', broom.error);
    }

    if (!broom.forwarded) {
      return NextResponse.json(
        { error: broom.error || 'Failed to submit quote request' },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { ok: true, provider: 'booking-broom', id: broom.id },
      { status: 200 },
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('quote-request API error:', message);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
