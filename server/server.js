const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Stripe with secret key
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? process.env.FRONTEND_URL || 'https://sanforcleaning.com' : 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

// Webhook endpoint for Stripe events (must be before express.json())
app.post('/api/webhook', express.raw({type: 'application/json'}), (req, res) => {
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
      
      // Here you would typically:
      // 1. Save the booking to your database
      // 2. Send confirmation email to customer
      // 3. Send notification to your team
      // 4. Update your booking system
      
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

// Apply JSON middleware after webhook
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Create Stripe Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { bookingData } = req.body;
    
    if (!bookingData) {
      return res.status(400).json({ error: 'Booking data is required' });
    }

    // Calculate line items
    const lineItems = [];
    
    // Main service item
    const serviceDescription = bookingData.frequency 
      ? `${bookingData.service} (${bookingData.frequency})` 
      : bookingData.service;
    
    lineItems.push({
      price_data: {
        currency: 'usd',
        product_data: {
          name: serviceDescription,
          description: `${bookingData.squareFootage} sq ft, ${bookingData.bedrooms} bed, ${bookingData.bathrooms} bath`,
          images: ['https://your-domain.com/cleaning-service-image.jpg'], // Optional: Add your service image
        },
        unit_amount: Math.round(bookingData.estimatedPrice * 100), // Convert to cents
      },
      quantity: 1,
    });

    // Add extras as separate line items
    if (bookingData.extras && bookingData.extras.length > 0) {
      // For simplicity, we'll add extras as part of the main service
      // You could also create separate line items for each extra
    }

    // Create checkout session
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



// Get session details (for success page)
app.get('/api/session/:sessionId', async (req, res) => {
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

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// For Vercel deployment, export the app
module.exports = app;

// If running locally, start the server
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
    console.log(`💳 Stripe webhook: http://localhost:${PORT}/webhook`);
  });
}