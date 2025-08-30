const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'mail.spacemail.com',
  port: process.env.EMAIL_PORT || 465,
  secure: process.env.EMAIL_SECURE === 'true' || true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true, // Show debug output
  logger: true // Log information in console
});

const { 
  createBookingEmailTemplate, 
  createQuoteEmailTemplate, 
  createCustomerConfirmationTemplate,
  createHireRequestEmailTemplate
} = require('./emailTemplates');

const sendBookingConfirmation = async (session) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@sanfordcleaning.com',
      subject: `🎉 New Booking Confirmed`,
      html: createBookingEmailTemplate(session)
    };
    console.log('Sending booking confirmation with mailOptions:', JSON.stringify(mailOptions, null, 2));
    await transporter.sendMail(mailOptions);
    console.log('Booking confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending booking confirmation email:', error);
    throw error; // Re-throw the error to be caught by the route handler
  }
};

const sendQuoteRequest = async (quoteData) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@sanfordcleaning.com',
      subject: `💬 New Quote Request from ${quoteData.name}`,
      html: createQuoteEmailTemplate(quoteData),
      replyTo: 'info@sanfordcleaning.com'
    };
    await transporter.sendMail(mailOptions);
    console.log('Quote request email sent successfully');
  } catch (error) {
    console.error('Error sending quote request email:', error);
  }
};

const sendCustomerConfirmation = async (customerData, isBooking = false) => {
  try {
    const subject = isBooking 
      ? `🎉 Your Booking is Confirmed - Sanford Cleaning Company`
      : `✨ Thank You for Your Inquiry - Sanford Cleaning Company`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: customerData.email,
      subject: subject,
      html: createCustomerConfirmationTemplate(customerData, isBooking)
    };
    console.log('Sending customer confirmation with mailOptions:', JSON.stringify(mailOptions, null, 2));
    await transporter.sendMail(mailOptions);
    console.log('Customer confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending customer confirmation email:', error);
    throw error; // Re-throw the error to be caught by the route handler
  }
};

const sendHireRequest = async (formData) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@sanfordcleaning.com',
      subject: `👋 New Hire Request from ${formData.firstName} ${formData.lastName}`,
      html: createHireRequestEmailTemplate(formData),
      replyTo: formData.email
    };
    await transporter.sendMail(mailOptions);
    console.log('Hire request email sent successfully');
  } catch (error) {
    console.error('Error sending hire request email:', error);
  }
};

module.exports = {
  sendBookingConfirmation,
  sendQuoteRequest,
  sendCustomerConfirmation,
  sendHireRequest
};
