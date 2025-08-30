const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { sendBookingConfirmation, sendCustomerConfirmation } = require('../utils/mailer');

const router = express.Router();

// Webhook endpoint for Stripe events
router.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('Payment successful for session:', session.id);
      console.log('Booking metadata:', session.metadata);
      
      await sendBookingConfirmation(session);
      
      // Also send confirmation to the customer
      await sendCustomerConfirmation({
        name: session.metadata.customerName,
        email: session.customer_details.email,
        service: session.metadata.service,
        scheduledDate: session.metadata.scheduledDate,
        paymentType: 'Credit Card'
      }, true);
      
      break;
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent was successful:', paymentIntent.id);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({received: true});
});

// Create Stripe Checkout Session
router.post('/create-checkout-session', async (req, res) => {
  try {
    const { bookingData } = req.body;
    
    if (!bookingData) {
      return res.status(400).json({ error: 'Booking data is required' });
    }

    const serviceDescription = bookingData.frequency 
      ? `${bookingData.service} (${bookingData.frequency})` 
      : bookingData.service;
    
    const lineItems = [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: serviceDescription,
          description: `${bookingData.squareFootage} sq ft, ${bookingData.bedrooms} bed, ${bookingData.bathrooms} bath`,
        },
        unit_amount: Math.round(bookingData.estimatedPrice * 100),
      },
      quantity: 1,
    }];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NODE_ENV === 'production' ? (process.env.FRONTEND_URL || 'https://your-vercel-app.vercel.app') : 'http://localhost:5173'}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NODE_ENV === 'production' ? (process.env.FRONTEND_URL || 'https://your-vercel-app.vercel.app') : 'http://localhost:5173'}/stripe-payment`,
      customer_email: bookingData.email,
      metadata: {
        bookingId: `booking_${Date.now()}`,
        service: bookingData.service,
        frequency: bookingData.frequency || '',
        squareFootage: bookingData.squareFootage,
        bedrooms: bookingData.bedrooms,
        bathrooms: bookingData.bathrooms,
        customerName: `${bookingData.firstName} ${bookingData.lastName}`,
        customerPhone: bookingData.phone,
        customerAddress: bookingData.address,
        scheduledDate: bookingData.scheduledDate ? new Date(bookingData.scheduledDate).toISOString() : '',
        scheduledTime: bookingData.scheduledTime || '',
        extras: JSON.stringify(bookingData.extras || []),
        maintenancePrice: bookingData.maintenancePrice || ''
      },
      billing_address_collection: 'required',
    });

    res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ 
      error: 'Failed to create checkout session',
      message: error.message 
    });
  }
});

// Get session details
router.get('/session/:sessionId', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);
    res.json({
      session: {
        id: session.id,
        payment_status: session.payment_status,
        customer_email: session.customer_email,
        amount_total: session.amount_total,
        metadata: session.metadata
      }
    });
  } catch (error) {
    console.error('Error retrieving session:', error);
    res.status(500).json({ error: 'Failed to retrieve session' });
  }
});

module.exports = router;
