const express = require('express');
const { sendBookingConfirmation, sendQuoteRequest, sendCustomerConfirmation, sendHireRequest } = require('../utils/mailer');

const router = express.Router();

// Non-Stripe booking confirmation
router.post('/confirm-booking', async (req, res) => {
  try {
    const { bookingData, bookingId } = req.body;
    
    console.log('Received booking data:', JSON.stringify(bookingData, null, 2));
    console.log('Using booking ID:', bookingId);
    
    if (!bookingData || !bookingId) {
      return res.status(400).json({ error: 'Booking data and booking ID are required' });
    }
    
    const mockSession = {
      id: bookingId,
      payment_status: 'pending',
      customer_details: { email: bookingData.email },
      amount_total: bookingData.estimatedPrice * 100,
      metadata: {
        bookingId: bookingId,
        service: bookingData.service,
        frequency: bookingData.frequency || '',
        squareFootage: bookingData.squareFootage,
        bedrooms: bookingData.bedrooms,
        bathrooms: bookingData.bathrooms,
        customerName: `${bookingData.firstName} ${bookingData.lastName}`,
        customerPhone: bookingData.phone,
        customerAddress: `${bookingData.address}${bookingData.aptUnit ? `, ${bookingData.aptUnit}` : ''}`,
        customerEmail: bookingData.email,
        scheduledDate: bookingData.scheduledDate ? new Date(bookingData.scheduledDate).toISOString() : '',
        scheduledTime: bookingData.scheduledTime || '',
        extras: JSON.stringify(bookingData.extras || []),
        maintenancePrice: bookingData.maintenancePrice || '',
        paymentType: bookingData.paymentType,
        paymentComment: bookingData.paymentComment || '',
        keyInfo: bookingData.keyInfo || '',
        customerNote: bookingData.customerNote || ''
      }
    };
    
    console.log('Constructed mockSession:', JSON.stringify(mockSession, null, 2));
    
    await sendBookingConfirmation(mockSession);
    await sendCustomerConfirmation({
      ...bookingData,
      name: `${bookingData.firstName} ${bookingData.lastName}`
    }, true);
    
    console.log('Non-Stripe booking confirmed:', bookingId);
    console.log('Booking metadata:', mockSession.metadata);
    
    res.json({ success: true, message: 'Booking confirmed successfully', bookingId });
  } catch (error) {
    console.error('Error confirming booking:', error);
    res.status(500).json({ error: 'Failed to confirm booking' });
  }
});

// Quote request
router.post('/quote-request', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }
    
    const quoteData = { name, email, phone, service, message };
    
    await sendQuoteRequest(quoteData);
    await sendCustomerConfirmation(quoteData);
    
    res.json({ success: true, message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('Error processing quote request:', error);
    res.status(500).json({ error: 'Failed to send quote request' });
  }
});

// Hire request
router.post('/hire-request', async (req, res) => {
  try {
    await sendHireRequest(req.body);
    res.json({ success: true, message: 'Hire request sent successfully' });
  } catch (error) {
    console.error('Error processing hire request:', error);
    res.status(500).json({ error: 'Failed to send hire request' });
  }
});

module.exports = router;
