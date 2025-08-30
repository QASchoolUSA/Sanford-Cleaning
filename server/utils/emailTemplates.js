const sanitizeHtml = require('sanitize-html');

const getFullServiceName = (serviceValue) => {
  const serviceMap = {
    'residential': 'Residential Cleaning',
    'commercial': 'Commercial Cleaning',
    'deep': 'Deep Cleaning',
    'carpet': 'Carpet Cleaning',
    'construction': 'Post-Construction',
    'senior': 'Senior Care Cleaning'
  };
  return serviceMap[serviceValue] || serviceValue || 'General Inquiry';
};

const createEmailLayout = (header, content) => {
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
        .label { font-weight: bold; color: #475569; padding-right: 15px; }
        .value { color: #1e293b; }
        .total { background: #dcfce7; padding: 15px; border-radius: 8px; text-align: center; font-size: 18px; font-weight: bold; color: #166534; }
        .footer { text-align: center; margin-top: 30px; color: #64748b; font-size: 14px; }
        .section h2, .section h3 { margin-bottom: 15px; }
      </style>
    </head>
    <body>
      <div class="container">
        ${header}
        <div class="content">
          ${content}
          <div class="footer">
            <p>This email was processed on ${new Date().toLocaleString()}</p>
            <p>Sanford Cleaning Company | (321) 236-0618 | info@sanfordcleaning.com</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

const createBookingEmailTemplate = (session) => {
  const metadata = session.metadata;
  const customerDetails = session.customer_details;
  const amount = (session.amount_total / 100).toFixed(2);
  const isNonStripePayment = metadata.paymentType && metadata.paymentType !== 'Credit Card';

  const header = `
    <div class="header">
      <h1>🎉 New Booking Confirmed!</h1>
      <p>${isNonStripePayment ? 'Booking Received - Payment Pending' : 'Payment Successfully Processed'}</p>
    </div>
  `;

  const content = `
    <div class="section">
      <h2 style="margin-bottom: 20px;">📋 Booking Details</h2>
      <div class="field">
        <span class="label">Service:</span>
        <span class="value">${getFullServiceName(metadata.service)}${metadata.frequency ? ` (${metadata.frequency})` : ''}</span>
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
      ${metadata.scheduledDate ? `<div class="field"><span class="label">Scheduled Date:</span><span class="value">${new Date(metadata.scheduledDate).toLocaleDateString()}</span></div>` : ''}
      ${metadata.scheduledTime ? `<div class="field"><span class="label">Scheduled Time:</span><span class="value">${metadata.scheduledTime}</span></div>` : ''}
      ${metadata.extras && metadata.extras !== '[]' ? `<div class="field"><span class="label">Extras:</span><span class="value">${JSON.parse(metadata.extras).map(extra => extra.name + (extra.quantity ? ` (${extra.quantity})` : '')).join(', ')}</span></div>` : ''}
    </div>
    <div class="section">
      <h2 style="margin-bottom: 20px;">👤 Customer Information</h2>
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">${metadata.customerName}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value">${customerDetails ? customerDetails.email : metadata.customerEmail}</span>
      </div>
      <div class="field">
        <span class="label">Phone:</span>
        <span class="value">${metadata.customerPhone}</span>
      </div>
      <div class="field">
        <span class="label">Address:</span>
        <span class="value">${metadata.customerAddress}</span>
      </div>
      ${!isNonStripePayment && customerDetails && customerDetails.address ? `<div class="field"><span class="label">Billing Address:</span><span class="value">${customerDetails.address.line1}${customerDetails.address.line2 ? ', ' + customerDetails.address.line2 : ''}, ${customerDetails.address.city}, ${customerDetails.address.state} ${customerDetails.address.postal_code}</span></div>` : ''}
      ${metadata.keyInfo ? `<div class="field"><span class="label">Key Information:</span><span class="value">${metadata.keyInfo}</span></div>` : ''}
      ${metadata.customerNote ? `<div class="field"><span class="label">Customer Note:</span><span class="value">${metadata.customerNote}</span></div>` : ''}
    </div>
    <div class="section">
      <h2 style="margin-bottom: 20px;">💳 Payment Information</h2>
      <div class="field">
        <span class="label">${isNonStripePayment ? 'Booking ID:' : 'Session ID:'}</span>
        <span class="value">${session.id}</span>
      </div>
      <div class="field">
        <span class="label">Payment Status:</span>
        <span class="value">${session.payment_status.toUpperCase()}</span>
      </div>
      <div class="field">
        <span class="label">Payment Method:</span>
        <span class="value">${metadata.paymentType || 'Card'}</span>
      </div>
      ${metadata.paymentComment ? `<div class="field"><span class="label">Payment Notes:</span><span class="value">${metadata.paymentComment}</span></div>` : ''}
    </div>
    ${isNonStripePayment ? `<div class="section" style="background: #fef3c7; border: 1px solid #f59e0b;"><h3 style="color: #92400e; margin-top: 0;">⚠️ Payment Instructions</h3><p style="color: #92400e; margin-bottom: 0;">This booking uses <strong>${metadata.paymentType}</strong> payment method. Our team will contact you within 24 hours to arrange payment details and confirm your booking schedule.</p></div>` : ''}
    <div class="total">💰 ${isNonStripePayment ? 'Estimated' : 'Total'} Amount: $${amount}</div>
  `;

  return createEmailLayout(header, content);
};

const createQuoteEmailTemplate = (quoteData) => {
  const header = `
    <div class="header" style="background: #059669;">
      <h1>💬 New Quote Request</h1>
      <p>Customer Inquiry Received</p>
    </div>
  `;

  const content = `
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
        <span class="label">Service:</span>
        <span class="value">${getFullServiceName(quoteData.service)}</span>
      </div>
    </div>
    <div class="section">
      <h2>📝 Message</h2>
      <div class="message-box">${sanitizeHtml(quoteData.message, { allowedTags: [], allowedAttributes: {} }).replace(/\n/g, '<br>')}</div>
    </div>
  `;

  return createEmailLayout(header, content);
};

const createCustomerConfirmationTemplate = (customerData, isBooking = false) => {
  const isNonStripePayment = isBooking && customerData.paymentType && customerData.paymentType !== 'Credit Card';

  const header = `
    <div class="header" style="background: #059669;">
      <h1>${isBooking ? '🎉 Your Booking is Confirmed!' : '✨ Thank You for Your Inquiry!'}</h1>
      <p>${isBooking ? 'We look forward to serving you' : 'We have received your request and will respond promptly'}</p>
    </div>
  `;

  const content = `
    <div class="section">
      <h2>Dear ${customerData.name},</h2>
      <p>Thank you for reaching out to Sanford Cleaning Company. We have successfully received your ${isBooking ? 'booking' : 'inquiry'} and truly appreciate your interest in our professional cleaning services.</p>
      <div class="message-box">
        <h3>📋 ${isBooking ? 'Booking Summary' : 'Your Request Summary'}:</h3>
        <div class="field">
          <span class="label">Service:</span>
          <span class="value">${getFullServiceName(customerData.service)}</span>
        </div>
        <div class="field">
          <span class="label">${isBooking ? 'Service Date:' : 'Submitted:'}</span>
          <span class="value">${isBooking && customerData.scheduledDate ? new Date(customerData.scheduledDate).toLocaleDateString() : new Date().toLocaleString()}</span>
        </div>
      </div>
    </div>
    ${isNonStripePayment ? `<div class="section" style="background: #fef3c7; border: 1px solid #f59e0b;"><h3 style="color: #92400e; margin-top: 0;">⚠️ Payment Instructions</h3><p style="color: #92400e; margin-bottom: 0;">You have selected <strong>${customerData.paymentType}</strong> as your payment method. Our team will contact you within 24 hours to arrange payment details and confirm your booking schedule.</p></div>` : ''}
    <div class="cta-section">
      <h3>🚀 What Happens Next?</h3>
      <p>${isBooking ? 'Our team will arrive at your scheduled time. If you have any questions, please contact us.' : 'Our team will review your request and contact you within <strong>24 hours</strong> to discuss your cleaning needs and provide a personalized quote.'}</p>
    </div>
    <div class="section">
      <h3>🏆 Why Choose Sanford Cleaning?</h3>
      <ul style="padding-left: 20px; color: #475569;">
        <li>✅ Licensed, bonded, and insured professionals</li>
        <li>✅ Eco-friendly cleaning products available</li>
        <li>✅ Flexible scheduling to fit your needs</li>
        <li>✅ 100% satisfaction guarantee</li>
        <li>✅ Competitive pricing with no hidden fees</li>
      </ul>
    </div>
    <div class="contact-info">
      <h3>📞 Need Immediate Assistance?</h3>
      <p><strong>Phone:</strong> (321) 236-0618</p>
      <p><strong>Email:</strong> info@sanfordcleaning.com</p>
      <p><strong>Service Area:</strong> Sanford, FL and surrounding areas</p>
    </div>
  `;

  return createEmailLayout(header, content);
};

const createHireRequestEmailTemplate = (formData) => {
  const header = `
    <div class="header">
      <h1>👋 New Hire Request</h1>
    </div>
  `;

  const content = `
    <div class="section">
      <h2 style="margin-bottom: 20px;">👤 Applicant Information</h2>
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">${formData.firstName} ${formData.lastName}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value">${formData.email}</span>
      </div>
      <div class="field">
        <span class="label">Phone:</span>
        <span class="value">${formData.phoneNumber}</span>
      </div>
      <div class="field">
        <span class="label">Gender:</span>
        <span class="value">${formData.gender}</span>
      </div>
       <div class="field">
        <span class="label">Zipcode:</span>
        <span class="value">${formData.zipcode}</span>
      </div>
    </div>
    <div class="section">
      <h2 style="margin-bottom: 20px;">📝 Application Details</h2>
      <div class="field">
        <span class="label">Eligible to work in the USA:</span>
        <span class="value">${formData.eligibleToWork}</span>
      </div>
      <div class="field">
        <span class="label">Willing to travel:</span>
        <span class="value">${formData.travelDistance}</span>
      </div>
      <div class="field">
        <span class="label">Hours per week:</span>
        <span class="value">${formData.hoursPerWeek}</span>
      </div>
      <div class="field">
        <span class="label">Work days:</span>
        <span class="value">${formData.workDays.join(', ')}</span>
      </div>
      <div class="field">
        <span class="label">Time of day:</span>
        <span class="value">${formData.timeOfDay.join(', ')}</span>
      </div>
      <div class="field">
        <span class="label">English level:</span>
        <span class="value">${formData.englishLevel}</span>
      </div>
      <div class="field">
        <span class="label">Other languages:</span>
        <span class="value">${formData.otherLanguages.join(', ')}${formData.otherLanguageText ? ` (${formData.otherLanguageText})` : ''}</span>
      </div>
      <div class="field">
        <span class="label">Has reliable vehicle:</span>
        <span class="value">${formData.hasVehicle}</span>
      </div>
      <div class="field">
        <span class="label">Has valid driver's license:</span>
        <span class="value">${formData.hasLicense}</span>
      </div>
      <div class="field">
        <span class="label">Criminal record:</span>
        <span class="value">${formData.criminalRecord}</span>
      </div>
      <div class="field">
        <span class="label">Tech proficiency:</span>
        <span class="value">${formData.techProficiency}</span>
      </div>
       <div class="field">
        <span class="label">How did you hear about us:</span>
        <span class="value">${formData.howDidYouHear}</span>
      </div>
    </div>
     <div class="section">
      <h2>📝 Experience</h2>
      <div class="message-box">${sanitizeHtml(formData.experience, { allowedTags: [], allowedAttributes: {} }).replace(/\n/g, '<br>')}</div>
    </div>
  `;

  return createEmailLayout(header, content);
};

module.exports = {
  createBookingEmailTemplate,
  createQuoteEmailTemplate,
  createCustomerConfirmationTemplate,
  createHireRequestEmailTemplate
};
