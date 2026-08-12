import { NextResponse } from 'next/server';
import {
  forwardToBookingBroom,
  type SanfordBookingPayload,
} from '@/lib/booking-broom';

type BookingData = SanfordBookingPayload;

/**
 * Accepts a booking from the price calculator, forwards it to Booking Broom,
 * and lets Booking Broom send customer + admin confirmation emails (SpaceMail
 * or shared SMTP). Local SMTP/nodemailer is not used — Cloudflare Workers
 * cannot reliably open outbound SMTP sockets.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const bookingData: BookingData | undefined = body?.bookingData;
    const bookingId: string =
      typeof body?.bookingId === 'string' && body.bookingId.trim()
        ? body.bookingId.trim()
        : `BK${Date.now()}`;

    if (!bookingData || !bookingData.email || !bookingData.firstName || !bookingData.lastName) {
      return NextResponse.json({ error: 'Missing required booking fields' }, { status: 400 });
    }

    const broom = await forwardToBookingBroom(bookingData, bookingId);
    if (broom.error) {
      console.error('Booking Broom forward failed:', broom.error);
    }

    if (!broom.forwarded) {
      return NextResponse.json(
        {
          error: broom.error || 'Failed to create booking',
          bookingId,
        },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        provider: 'booking-broom',
        bookingBroom: true,
        id: broom.id,
        bookingId,
        deduped: broom.deduped === true,
      },
      { status: 200 },
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('confirm-booking API error:', message);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
