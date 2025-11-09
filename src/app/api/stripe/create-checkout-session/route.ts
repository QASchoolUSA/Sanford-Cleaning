import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripeSecret = process.env.STRIPE_SECRET_KEY;

export async function POST(req: Request) {
  try {
    if (!stripeSecret) {
      return NextResponse.json({ error: 'Stripe secret key not configured' }, { status: 500 });
    }

    const stripe = new Stripe(stripeSecret);

    const body = await req.json().catch(() => ({}));
    const amount = Number(body?.amount);
    const service = typeof body?.service === 'string' ? body.service : 'Cleaning Service';
    const customerEmail = typeof body?.customerEmail === 'string' ? body.customerEmail : undefined;
    const address = typeof body?.address === 'string' ? body.address : undefined;
    const squareFootage = typeof body?.squareFootage === 'string' ? body.squareFootage : undefined;

    if (!amount || isNaN(amount) || amount <= 0) {
      return NextResponse.json({ error: 'Invalid or missing amount' }, { status: 400 });
    }

    const amountInCents = Math.round(amount * 100);

    const origin =
      process.env.NEXT_PUBLIC_SITE_URL || req.headers.get('origin') || new URL(req.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: customerEmail,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: service },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/booking-success?paid=stripe`,
      cancel_url: `${origin}/booking?returnToStep=4`,
      // Store business metadata on the PaymentIntent for later reconciliation
      payment_intent_data: {
        metadata: {
          service,
          address: address || '',
          squareFootage: squareFootage || '',
        },
      },
      // Also include on the session for quick retrieval if needed
      metadata: {
        service,
        address: address || '',
        squareFootage: squareFootage || '',
      },
    });

    return NextResponse.json({ id: session.id, url: session.url }, { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Stripe session error:', message);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}