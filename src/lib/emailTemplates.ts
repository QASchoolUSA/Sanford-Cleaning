const BRAND = {
  primary: '#2563eb', // blue-600
  text: '#111827', // gray-900
  muted: '#6b7280', // gray-500
  border: '#e5e7eb', // gray-200
  bgLight: '#f9fafb', // gray-50
};

function wrapHtml(title: string, inner: string, preheader?: string) {
  const safePreheader = preheader || '';
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>${title}</title>
    <style>
      /* Basic resets for email clients */
      body { margin:0; padding:0; background:${BRAND.bgLight}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif; color:${BRAND.text}; }
      a { color:${BRAND.primary}; text-decoration:none; }
    </style>
  </head>
  <body>
    <div style="display:none; max-height:0; overflow:hidden; opacity:0; color:transparent;">${safePreheader}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.bgLight};">
      <tr>
        <td align="center" style="padding:24px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%; max-width:600px; background:#ffffff; border:1px solid ${BRAND.border}; border-radius:12px; overflow:hidden;">
            <tr>
              <td style="background:${BRAND.primary}; padding:20px 24px;">
                <h1 style="margin:0; font-size:20px; line-height:28px; color:#ffffff;">Sanford Cleaning</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;">
                ${inner}
              </td>
            </tr>
            <tr>
              <td style="padding:16px 24px; border-top:1px solid ${BRAND.border};">
                <p style="margin:0; font-size:12px; color:${BRAND.muted};">Sanford, FL · (321) 236-0618 · info@sanfordcleaning.com</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function sectionHeading(text: string) {
  return `<h2 style="margin:0 0 12px 0; font-size:18px; line-height:26px; color:${BRAND.text};">${text}</h2>`;
}

function paragraph(text: string) {
  return `<p style="margin:0 0 12px 0; font-size:14px; line-height:22px; color:${BRAND.text};">${text}</p>`;
}

function keyValue(label: string, value: string) {
  return `<tr>
    <td style="padding:8px 12px; font-size:14px; color:${BRAND.muted}; width:40%; border-bottom:1px solid ${BRAND.border};">${label}</td>
    <td style="padding:8px 12px; font-size:14px; color:${BRAND.text}; border-bottom:1px solid ${BRAND.border};">${value}</td>
  </tr>`;
}

export function bookingConfirmationHtml(data: {
  firstName: string; lastName: string; email: string; phone: string;
  address: string; aptUnit?: string; keyInfo: string; service: string;
  squareFootage?: string; bedrooms?: number; bathrooms?: number;
  paymentType: string; paymentComment?: string; maintenancePrice?: number;
}, bookingId?: string) {
  const title = `Booking Confirmed ${bookingId ? `#${bookingId}` : ''}`.trim();
  const header = sectionHeading('Your Booking Is Confirmed');
  const intro = paragraph(`Hi ${data.firstName}, thanks for booking with Sanford Cleaning. Here are your booking details:`);
  const addressLine = data.aptUnit ? `${data.address}, ${data.aptUnit}` : data.address;
  const table = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.border}; border-radius:8px; overflow:hidden;">
      ${keyValue('Booking #', bookingId ? `#${bookingId}` : 'N/A')}
      ${keyValue('Customer', `${data.firstName} ${data.lastName}`)}
      ${keyValue('Email', data.email)}
      ${keyValue('Phone', data.phone)}
      ${keyValue('Address', addressLine)}
      ${keyValue('Key Info', data.keyInfo)}
      ${keyValue('Service', data.service)}
      ${keyValue('Square Footage', data.squareFootage || 'N/A')}
      ${keyValue('Bedrooms', typeof data.bedrooms === 'number' ? String(data.bedrooms) : 'N/A')}
      ${keyValue('Bathrooms', typeof data.bathrooms === 'number' ? String(data.bathrooms) : 'N/A')}
      ${keyValue('Payment Method', data.paymentType)}
      ${keyValue('Payment Comment', data.paymentComment || 'N/A')}
      ${keyValue('Maintenance Price', typeof data.maintenancePrice === 'number' ? `$${data.maintenancePrice}` : 'N/A')}
    </table>
  `;
  const outro = paragraph('If you need to modify your booking, just reply to this email and we’ll assist you right away.');
  const inner = `${header}${intro}${table}${outro}`;
  return wrapHtml(title, inner, 'Your Sanford Cleaning booking is confirmed');
}

export function adminBookingHtml(data: Parameters<typeof bookingConfirmationHtml>[0], bookingId?: string) {
  const title = `New Booking ${bookingId ? `#${bookingId}` : ''}`.trim();
  const header = sectionHeading('New Booking Received');
  const intro = paragraph('A new booking has been confirmed. Here are the details:');
  const addressLine = data.aptUnit ? `${data.address}, ${data.aptUnit}` : data.address;
  const table = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.border}; border-radius:8px; overflow:hidden;">
      ${keyValue('Booking #', bookingId ? `#${bookingId}` : 'N/A')}
      ${keyValue('Customer', `${data.firstName} ${data.lastName}`)}
      ${keyValue('Email', data.email)}
      ${keyValue('Phone', data.phone)}
      ${keyValue('Address', addressLine)}
      ${keyValue('Key Info', data.keyInfo)}
      ${keyValue('Service', data.service)}
      ${keyValue('Square Footage', data.squareFootage || 'N/A')}
      ${keyValue('Bedrooms', typeof data.bedrooms === 'number' ? String(data.bedrooms) : 'N/A')}
      ${keyValue('Bathrooms', typeof data.bathrooms === 'number' ? String(data.bathrooms) : 'N/A')}
      ${keyValue('Payment Method', data.paymentType)}
      ${keyValue('Payment Comment', data.paymentComment || 'N/A')}
      ${keyValue('Maintenance Price', typeof data.maintenancePrice === 'number' ? `$${data.maintenancePrice}` : 'N/A')}
    </table>
  `;
  const inner = `${header}${intro}${table}`;
  return wrapHtml(title, inner, 'New booking received at Sanford Cleaning');
}

export function quoteRequestAdminHtml(data: { name: string; email: string; phone?: string; service?: string; message?: string; }) {
  const title = 'New Quote Request';
  const header = sectionHeading('New Quote Request');
  const intro = paragraph('A customer requested a quote. Details below:');
  const table = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.border}; border-radius:8px; overflow:hidden;">
      ${keyValue('Name', data.name)}
      ${keyValue('Email', data.email)}
      ${keyValue('Phone', data.phone || 'N/A')}
      ${keyValue('Service', data.service || 'N/A')}
      ${keyValue('Message', data.message || 'N/A')}
    </table>
  `;
  const inner = `${header}${intro}${table}`;
  return wrapHtml(title, inner, 'New quote request received');
}

export function quoteRequestCustomerHtml(data: { name: string; service?: string; phone?: string; }) {
  const title = 'We received your quote request';
  const header = sectionHeading('Thanks for contacting Sanford Cleaning');
  const intro = paragraph(`Hi ${data.name}, thanks for reaching out. We received your request and will contact you within 24 hours.`);
  const summary = `
    <div style="margin:12px 0; padding:12px; background:${BRAND.bgLight}; border:1px solid ${BRAND.border}; border-radius:8px;">
      <p style="margin:0; font-size:14px; line-height:22px; color:${BRAND.text};"><strong>Summary</strong></p>
      <p style="margin:8px 0 0 0; font-size:14px; color:${BRAND.text};">Service: ${data.service || 'N/A'}<br/>Phone: ${data.phone || 'N/A'}</p>
    </div>
  `;
  const outro = paragraph('If this was not you, please ignore this email. For urgent requests, call us at (321) 236-0618.');
  const inner = `${header}${intro}${summary}${outro}`;
  return wrapHtml(title, inner, 'We received your quote request');
}