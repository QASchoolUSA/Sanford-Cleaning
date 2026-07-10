import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { SentMessageInfo } from 'nodemailer';
import { adminBookingHtml, bookingConfirmationHtml } from '@/lib/emailTemplates';
import {
  forwardToBookingBroom,
  type SanfordBookingPayload,
} from '@/lib/booking-broom';

type BookingData = SanfordBookingPayload;

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const bookingData: BookingData | undefined = body?.bookingData;
    const bookingId: string | undefined = body?.bookingId;

    if (!bookingData || !bookingData.email || !bookingData.firstName || !bookingData.lastName) {
      return NextResponse.json({ error: 'Missing required booking fields' }, { status: 400 });
    }

    const broom = await forwardToBookingBroom(bookingData, bookingId);
    if (broom.error) {
      console.error('Booking Broom forward failed:', broom.error);
    }

    const EMAIL_FROM = process.env.EMAIL_FROM || 'no-reply@sanfordcleaning.com';
    const EMAIL_TO = process.env.EMAIL_TO || 'info@sanfordcleaning.com';
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const SMTP_SECURE = (process.env.SMTP_SECURE || 'false') === 'true';

    const subject = `Booking Confirmation ${bookingId ? `#${bookingId}` : ''} - ${bookingData.firstName} ${bookingData.lastName}`.trim();

    const plainText = `
Booking Confirmed ${bookingId ? `#${bookingId}` : ''}

Customer: ${bookingData.firstName} ${bookingData.lastName}
Email: ${bookingData.email}
Phone: ${bookingData.phone}
Address: ${bookingData.address}${bookingData.aptUnit ? `, ${bookingData.aptUnit}` : ''}
Key Info: ${bookingData.keyInfo}
Scheduled: ${bookingData.scheduledDate || 'N/A'} ${bookingData.scheduledTime || ''}

Service: ${bookingData.service}
Square Footage: ${bookingData.squareFootage || 'N/A'}
Bedrooms: ${bookingData.bedrooms ?? 'N/A'}
Bathrooms: ${bookingData.bathrooms ?? 'N/A'}

Payment Method: ${bookingData.paymentType}
Payment Comment: ${bookingData.paymentComment || 'N/A'}
Estimated Price: ${typeof bookingData.estimatedPrice === 'number' ? `$${bookingData.estimatedPrice}` : 'N/A'}
Maintenance Price: ${typeof bookingData.maintenancePrice === 'number' ? `$${bookingData.maintenancePrice}` : 'N/A'}
`;

    const smtpConfigured = Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS);

    if (!smtpConfigured) {
      if (broom.forwarded) {
        console.warn('Email disabled: SMTP not fully configured — booking still forwarded to Booking Broom');
        return NextResponse.json(
          { ok: true, provider: 'booking-broom', bookingBroom: true, id: broom.id },
          { status: 200 },
        );
      }
      console.error('Email disabled: SMTP not fully configured');
      return NextResponse.json({ error: 'SMTP not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const sendEmail = async (to: string, text: string, html?: string): Promise<SentMessageInfo> => {
      const info: SentMessageInfo = await transporter.sendMail({
        from: EMAIL_FROM,
        to,
        subject,
        text,
        html,
        replyTo: EMAIL_TO,
      });
      return info;
    };

    const results: Array<{ to: string; ok: boolean; id?: string }> = [];

    // Send to business
    try {
      const adminHtml = adminBookingHtml(bookingData, bookingId);
      const r = await sendEmail(EMAIL_TO, plainText, adminHtml);
      results.push({ to: EMAIL_TO, ok: true, id: r.messageId });
    } catch (e) {
      console.error('Failed to send admin booking email:', e);
      results.push({ to: EMAIL_TO, ok: false });
    }

    // Send to customer
    try {
      const customerHtml = bookingConfirmationHtml(bookingData, bookingId);
      const r = await sendEmail(bookingData.email, plainText, customerHtml);
      results.push({ to: bookingData.email, ok: true, id: r.messageId });
    } catch (e) {
      console.error('Failed to send customer booking email:', e);
      results.push({ to: bookingData.email, ok: false });
    }

    const anySuccess = results.some(r => r.ok);
    if (!anySuccess && !broom.forwarded) {
      return NextResponse.json({ error: 'Failed to send emails', results }, { status: 502 });
    }

    return NextResponse.json(
      {
        ok: true,
        provider: 'smtp',
        results,
        bookingBroom: broom.forwarded,
        bookingBroomId: broom.id,
      },
      { status: 200 },
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('confirm-booking API error:', message);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
