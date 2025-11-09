import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { SentMessageInfo } from 'nodemailer';

type BookingData = {
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
};

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const bookingData: BookingData | undefined = body?.bookingData;
    const bookingId: string | undefined = body?.bookingId;

    if (!bookingData || !bookingData.email || !bookingData.firstName || !bookingData.lastName) {
      return NextResponse.json({ error: 'Missing required booking fields' }, { status: 400 });
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

Service: ${bookingData.service}
Square Footage: ${bookingData.squareFootage || 'N/A'}
Bedrooms: ${bookingData.bedrooms ?? 'N/A'}
Bathrooms: ${bookingData.bathrooms ?? 'N/A'}

Payment Method: ${bookingData.paymentType}
Payment Comment: ${bookingData.paymentComment || 'N/A'}
Maintenance Price: ${typeof bookingData.maintenancePrice === 'number' ? `$${bookingData.maintenancePrice}` : 'N/A'}
`;

    // Ensure SMTP is configured
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error('Email disabled: SMTP not fully configured');
      return NextResponse.json({ error: 'SMTP not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const sendEmail = async (to: string, text: string): Promise<SentMessageInfo> => {
      const info: SentMessageInfo = await transporter.sendMail({
        from: EMAIL_FROM,
        to,
        subject,
        text,
        replyTo: EMAIL_TO,
      });
      return info;
    };

    const results: Array<{ to: string; ok: boolean; id?: string }> = [];

    // Send to business
    try {
      const r = await sendEmail(EMAIL_TO, plainText);
      results.push({ to: EMAIL_TO, ok: true, id: r.messageId });
    } catch (e) {
      console.error('Failed to send admin booking email:', e);
      results.push({ to: EMAIL_TO, ok: false });
    }

    // Send to customer
    try {
      const r = await sendEmail(bookingData.email, plainText);
      results.push({ to: bookingData.email, ok: true, id: r.messageId });
    } catch (e) {
      console.error('Failed to send customer booking email:', e);
      results.push({ to: bookingData.email, ok: false });
    }

    const anySuccess = results.some(r => r.ok);
    if (!anySuccess) {
      return NextResponse.json({ error: 'Failed to send emails', results }, { status: 502 });
    }

    return NextResponse.json({ ok: true, provider: 'smtp', results }, { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('confirm-booking API error:', message);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}