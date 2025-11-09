import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Placeholder: In production, integrate with your mailer or CRM.
    // Example: send email to HR with application details.
    if (!data || !data.email || !data.firstName || !data.lastName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Simulate success
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}