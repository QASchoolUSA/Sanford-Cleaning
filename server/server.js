const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Stripe with secret key
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: process.env.EMAIL_SECURE === 'true' || false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Email template for booking confirmation
const createBookingEmailTemplate = (session) => {
  const metadata = session.metadata;
  const customerDetails = session.customer_details;
  const amount = (session.amount_total / 100).toFixed(2);
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
        .section { background: white; margin: 20px 0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .field { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
        .field:last-child { border-bottom: none; }
        .label { font-weight: bold; color: #475569; }
        .value { color: #1e293b; }
        .total { background: #dcfce7; padding: 15px; border-radius: 8px; text-align: center; font-size: 18px; font-weight: bold; color: #166534; }
        .footer { text-align: center; margin-top: 30px; color: #64748b; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 New Booking Confirmed!</h1>
          <p>Payment Successfully Processed</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h2>📋 Booking Details</h2>
            <div class="field">
              <span class="label">Booking ID:</span>
              <span class="value">${metadata.bookingId}</span>
            </div>
            <div class="field">
              <span class="label">Service:</span>
              <span class="value">${metadata.service}${metadata.frequency ? ` (${metadata.frequency})` : ''}</span>
            </div>
            <div class="field">
              <span class="label">Property Size:</span>
              <span class="value">${metadata.squareFootage} sq ft</span>
            </div>
            <div class="field">
              <span class="label">Bedrooms:</span>
              <span class="value">${metadata.bedrooms}</span>
            </div>
            <div class="field">
              <span class="label">Bathrooms:</span>
              <span class="value">${metadata.bathrooms}</span>
            </div>
            ${metadata.scheduledDate ? `
            <div class="field">
              <span class="label">Scheduled Date:</span>
              <span class="value">${new Date(metadata.scheduledDate).toLocaleDateString()}</span>
            </div>
            ` : ''}
            ${metadata.scheduledTime ? `
            <div class="field">
              <span class="label">Scheduled Time:</span>
              <span class="value">${metadata.scheduledTime}</span>
            </div>
            ` : ''}
            ${metadata.extras && metadata.extras !== '[]' ? `
            <div class="field">
              <span class="label">Extras:</span>
              <span class="value">${JSON.parse(metadata.extras).map(extra => extra.name + (extra.quantity ? ` (${extra.quantity})` : '')).join(', ')}</span>
            </div>
            ` : ''}
          </div>
          
          <div class="section">
            <h2>👤 Customer Information</h2>
            <div class="field">
              <span class="label">Name:</span>
              <span class="value">${metadata.customerName}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value">${customerDetails.email}</span>
            </div>
            <div class="field">
              <span class="label">Phone:</span>
              <span class="value">${metadata.customerPhone}</span>
            </div>
            <div class="field">
              <span class="label">Address:</span>
              <span class="value">${metadata.customerAddress}</span>
            </div>
            <div class="field">
              <span class="label">Billing Address:</span>
              <span class="value">${customerDetails.address.line1}${customerDetails.address.line2 ? ', ' + customerDetails.address.line2 : ''}, ${customerDetails.address.city}, ${customerDetails.address.state} ${customerDetails.address.postal_code}</span>
            </div>
          </div>
          
          <div class="section">
            <h2>💳 Payment Information</h2>
            <div class="field">
              <span class="label">Session ID:</span>
              <span class="value">${session.id}</span>
            </div>
            <div class="field">
              <span class="label">Payment Status:</span>
              <span class="value">${session.payment_status.toUpperCase()}</span>
            </div>
            <div class="field">
              <span class="label">Payment Method:</span>
              <span class="value">Card</span>
            </div>
          </div>
          
          <div class="total">
            💰 Total Amount: $${amount}
          </div>
          
          <div class="footer">
            <p>This booking was processed on ${new Date().toLocaleString()}</p>
            <p>Sanford Cleaning Company | (321) 236-0618 | info@sanfordcleaning.com</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Function to send booking confirmation email
const sendBookingConfirmation = async (session) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@sanfordcleaning.com',
      subject: `🎉 New Booking Confirmed - ${session.metadata.bookingId}`,
      html: createBookingEmailTemplate(session)
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Booking confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending booking confirmation email:', error);
  }
};

// Email template for quote requests
const createQuoteEmailTemplate = (quoteData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #059669; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f0fdf4; padding: 30px; border-radius: 0 0 8px 8px; }
        .section { background: white; margin: 20px 0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .field { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
        .field:last-child { border-bottom: none; }
        .label { font-weight: bold; color: #475569; }
        .value { color: #1e293b; }
        .message-box { background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #059669; }
        .footer { text-align: center; margin-top: 30px; color: #64748b; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>💬 New Quote Request</h1>
          <p>Customer Inquiry Received</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h2>👤 Customer Information</h2>
            <div class="field">
              <span class="label">Name:</span>
              <span class="value">${quoteData.name}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value">${quoteData.email}</span>
            </div>
            <div class="field">
              <span class="label">Phone:</span>
              <span class="value">${quoteData.phone || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="label">Service Interest:</span>
              <span class="value">${quoteData.service || 'General Inquiry'}</span>
            </div>
          </div>
          
          <div class="section">
            <h2>📝 Message</h2>
            <div class="message-box">
              ${quoteData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div class="footer">
            <p>This quote request was received on ${new Date().toLocaleString()}</p>
            <p>Please respond promptly to maintain excellent customer service.</p>
            <p>Sanford Cleaning Company | (321) 236-0618 | info@sanfordcleaning.com</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Function to send quote request email
const sendQuoteRequest = async (quoteData) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@sanfordcleaning.com',
      subject: `💬 New Quote Request from ${quoteData.name}`,
      html: createQuoteEmailTemplate(quoteData),
      replyTo: quoteData.email
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Quote request email sent successfully');
  } catch (error) {
    console.error('Error sending quote request email:', error);
  }
};

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? process.env.FRONTEND_URL || 'https://sanforcleaning.com' : 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

// Webhook endpoint for Stripe events (must be before express.json())
app.post('/api/webhook', express.raw({type: 'application/json'}), async (req, res) => {
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
      
      // Send booking confirmation email
      await sendBookingConfirmation(session);
      
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

// Quote request endpoint
app.post('/api/quote-request', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }
    
    const quoteData = {
      name,
      email,
      phone,
      service,
      message
    };
    
    // Send quote request email
    await sendQuoteRequest(quoteData);
    
    res.json({ success: true, message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('Error processing quote request:', error);
    res.status(500).json({ error: 'Failed to send quote request' });
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