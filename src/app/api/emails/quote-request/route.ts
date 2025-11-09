import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { SentMessageInfo } from 'nodemailer';

type QuoteRequest = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body: QuoteRequest | null = await req.json().catch(() => null);
    if (!body || !body.name || !body.email) {
      return NextResponse.json({ error: 'Missing required fields: name, email' }, { status: 400 });
    }

    const EMAIL_FROM = process.env.EMAIL_FROM || 'no-reply@sanfordcleaning.com';
    const EMAIL_TO = process.env.EMAIL_TO || 'info@sanfordcleaning.com';
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const SMTP_SECURE = (process.env.SMTP_SECURE || 'false') === 'true';

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

    const subject = `Quote Request - ${body.name}`;
    const plainText = `
New Quote Request

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone || 'N/A'}
Service: ${body.service || 'N/A'}
Message: ${body.message || 'N/A'}
`;

    const results: Array<{ to: string; ok: boolean; id?: string }> = [];

    try {
      const info: SentMessageInfo = await transporter.sendMail({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject,
        text: plainText,
        replyTo: body.email,
      });
      results.push({ to: EMAIL_TO, ok: true, id: info.messageId });
    } catch (e) {
      console.error('Failed to send admin quote email:', e);
      results.push({ to: EMAIL_TO, ok: false });
    }

    try {
      const info: SentMessageInfo = await transporter.sendMail({
        from: EMAIL_FROM,
        to: body.email,
        subject: 'We received your quote request',
        text: `Hi ${body.name},\n\nThanks for reaching out to Sanford Cleaning. We received your request and will contact you within 24 hours.\n\nSummary:\n- Service: ${body.service || 'N/A'}\n- Phone: ${body.phone || 'N/A'}\n\nIf this was not you, please ignore this email.\n\nBest,\nSanford Cleaning Team`,
        replyTo: EMAIL_TO,
      });
      results.push({ to: body.email, ok: true, id: info.messageId });
    } catch (e) {
      console.error('Failed to send customer quote email:', e);
      results.push({ to: body.email, ok: false });
    }

    const anySuccess = results.some(r => r.ok);
    if (!anySuccess) {
      return NextResponse.json({ error: 'Failed to send emails', results }, { status: 502 });
    }

    return NextResponse.json({ ok: true, provider: 'smtp', results }, { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('quote-request API error:', message);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}