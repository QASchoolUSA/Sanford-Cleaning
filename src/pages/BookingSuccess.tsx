import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { Check, Calendar, Mail, Phone, Home, ArrowRight, Clock, MapPin, User, CreditCard, Ruler, Bed, Bath, RotateCcw } from 'lucide-react';

interface SessionData {
  id: string;
  payment_status: string;
  customer_email: string;
  amount_total: number;
  metadata: {
    bookingId: string;
    service: string;
    frequency: string;
    customerName: string;
    customerPhone: string;
    customerAddress: string;
    scheduledDate: string;
    scheduledTime: string;
    squareFootage: string;
    bedrooms: string;
    bathrooms: string;
    extras: string;
    maintenancePrice: string;
  };
}

interface BookingData {
  service: string;
  frequency?: string;
  squareFootage: string;
  bedrooms: string;
  bathrooms: string;
  extras: { name: string; quantity?: number }[];
  scheduledDate: Date | undefined;
  scheduledTime: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  aptUnit?: string;
  keyInfo: string;
  customerNote: string;
  paymentType: string;
  estimatedPrice: number;
  maintenancePrice?: number;
}

const BookingSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sessionId = searchParams.get('session_id');
  const bookingData = location.state?.bookingData as BookingData;
  const bookingId = location.state?.bookingId as string;

  useEffect(() => {
    if (sessionId) {
      const fetchSessionData = async () => {
        try {
          const apiUrl = process.env.NODE_ENV === 'production' 
            ? `/api/stripe/session/${sessionId}` 
            : `http://localhost:3001/api/stripe/session/${sessionId}`;
        
        const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Failed to fetch session data');
          }
          const data = await response.json();
          setSessionData(data.session);
        } catch (err) {
          console.error('Error fetching session data:', err);
          setError('Failed to load booking details');
        } finally {
          setLoading(false);
        }
      };

      fetchSessionData();
    }
    else if (bookingData && bookingId) {
      const mockSessionData: SessionData = {
        id: bookingId,
        payment_status: 'pending',
        customer_email: bookingData.email,
        amount_total: bookingData.estimatedPrice * 100, // Convert to cents for consistency
        metadata: {
          bookingId: bookingId,
          service: bookingData.service,
          frequency: bookingData.frequency || '',
          customerName: `${bookingData.firstName} ${bookingData.lastName}`,
          customerPhone: bookingData.phone,
          customerAddress: `${bookingData.address}${bookingData.aptUnit ? `, ${bookingData.aptUnit}` : ''}`,
          scheduledDate: bookingData.scheduledDate ? bookingData.scheduledDate.toISOString() : '',
          scheduledTime: bookingData.scheduledTime,
          squareFootage: bookingData.squareFootage,
          bedrooms: bookingData.bedrooms,
          bathrooms: bookingData.bathrooms,
          extras: JSON.stringify(bookingData.extras),
          maintenancePrice: bookingData.maintenancePrice?.toString() || ''
        }
      };
      setSessionData(mockSessionData);
      setLoading(false);
    }
    // No valid data found
    else {
      setError('No booking information found');
      setLoading(false);
    }
  }, [sessionId, bookingData, bookingId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your booking confirmation...</p>
        </div>
      </div>
    );
  }

  if (error || !sessionData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-2xl">✕</span>
          </div>
          <h1 data-cy="booking-error-title" className="text-2xl font-bold text-gray-900 mb-2">Booking Error</h1>
          <p className="text-gray-600 mb-6">{error || 'Unable to load booking details'}</p>
          <button
            onClick={() => navigate('/booking')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            data-cy="booking-success-return-to-booking-button"
          >
            Return to Booking
          </button>
        </div>
      </div>
    );
  }

  const formatAmount = (amount: number) => {
    return (amount / 100).toFixed(2);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not scheduled';
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const parseExtras = (extrasString: string) => {
    try {
      return JSON.parse(extrasString || '[]');
    } catch {
      return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <Helmet>
        <title>Booking Confirmed | Sanford Cleaning - Thank You!</title>
        <meta name="description" content="Your cleaning service booking has been confirmed! Thank you for choosing Sanford Cleaning. Check your email for booking details and confirmation." />
        <meta name="keywords" content="booking confirmed, cleaning service booked, Sanford cleaning confirmation" />
        <meta property="og:title" content="Booking Confirmed | Sanford Cleaning" />
        <meta property="og:description" content="Your cleaning service booking has been confirmed! Thank you for choosing Sanford Cleaning." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 data-cy="booking-confirmed-title" className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-lg text-gray-600">
            {sessionData.payment_status === 'paid' ? 'Payment successful' : 'Booking received'}
          </p>
        </div>

        {/* Booking Details */}
        <div className="bg-white rounded-lg shadow-sm border mb-4 md:mb-6">
          <div className="p-4 md:p-6 text-center">
            <h2 data-cy="booking-details-title" className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Booking Details</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 text-center max-w-3xl mx-auto">
              {/* Service Information */}
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-2">
                <Home className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <div className="text-center">
                  <p className="text-xs md:text-sm text-gray-600">Service Type</p>
                  <p className="font-medium text-gray-900 text-sm md:text-base">
                    {sessionData.metadata.service}
                  </p>
                </div>
              </div>
              
              {sessionData.metadata.frequency && (
                <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-2">
                  <RotateCcw className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600">Frequency</p>
                    <p className="font-medium text-gray-900 text-sm md:text-base">{sessionData.metadata.frequency}</p>
                  </div>
                </div>
              )}
              
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-2">
                <Ruler className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <div className="text-center">
                  <p className="text-xs md:text-sm text-gray-600">Square Footage</p>
                  <p className="font-medium text-gray-900 text-sm md:text-base">{sessionData.metadata.squareFootage} sq ft</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-2">
                <Bed className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <div className="text-center">
                  <p className="text-xs md:text-sm text-gray-600">Bedrooms</p>
                  <p className="font-medium text-gray-900 text-sm md:text-base">{sessionData.metadata.bedrooms}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-2">
                <Bath className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <div className="text-center">
                  <p className="text-xs md:text-sm text-gray-600">Bathrooms</p>
                  <p className="font-medium text-gray-900 text-sm md:text-base">{sessionData.metadata.bathrooms}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-2">
                <User className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <div className="text-center">
                  <p className="text-xs md:text-sm text-gray-600">Customer Name</p>
                  <p className="font-medium text-gray-900 text-sm md:text-base">{sessionData.metadata.customerName}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <div className="text-center">
                  <p className="text-xs md:text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900 text-sm md:text-base">{sessionData.customer_email}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <div className="text-center">
                  <p className="text-xs md:text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900 text-sm md:text-base">{sessionData.metadata.customerPhone}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <div className="text-center">
                  <p className="text-xs md:text-sm text-gray-600">Service Address</p>
                  <p className="font-medium text-gray-900 text-sm md:text-base">{sessionData.metadata.customerAddress}</p>
                </div>
              </div>
              
              {sessionData.metadata.scheduledDate && (
                <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-2">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600">Scheduled Date</p>
                    <p className="font-medium text-gray-900 text-sm md:text-base">{formatDate(sessionData.metadata.scheduledDate)}</p>
                  </div>
                </div>
              )}
              
              {sessionData.metadata.scheduledTime && (
                <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-2">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600">Scheduled Time</p>
                    <p className="font-medium text-gray-900 text-sm md:text-base">{sessionData.metadata.scheduledTime}</p>
                  </div>
                </div>
              )}
            </div>
            
            {parseExtras(sessionData.metadata.extras).length > 0 && (
              <div className="mt-4 md:mt-6 text-center">
                <h3 className="text-sm md:text-base font-medium text-gray-600 mb-2">Extra Services</h3>
                <div className="space-y-1">
                  {parseExtras(sessionData.metadata.extras).map((extra: any, index: number) => (
                    <p key={index} className="font-medium text-gray-900 text-sm md:text-base">
                      • {extra.name} {extra.quantity && `(${extra.quantity})`}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-white rounded-lg shadow-sm border mb-4 md:mb-6">
          <div className="p-4 md:p-6 text-center">
            <h2 data-cy="payment-summary-title" className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Payment Summary</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto">
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-2">
                <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <div className="text-center">
                  <p className="text-xs md:text-sm text-gray-600">Payment Status</p>
                  <p className={`font-medium capitalize text-sm md:text-base ${
                    sessionData.payment_status === 'paid' ? 'text-green-600' : 
                    sessionData.payment_status === 'pending' ? 'text-yellow-600' : 'text-gray-600'
                  }`}>
                    {sessionData.payment_status === 'pending' ? 'Pending (Non-Card Payment)' : sessionData.payment_status}
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-xs md:text-sm text-gray-600">Amount Paid</p>
                <p className="text-lg md:text-xl font-bold text-green-600">${formatAmount(sessionData.amount_total)}</p>
              </div>
              
              {sessionData.metadata.maintenancePrice && (
                <div className="col-span-1 md:col-span-2 text-center">
                  <p className="text-xs md:text-sm text-gray-500">Future {sessionData.metadata.frequency} cleanings: <span className="font-medium text-gray-700">${sessionData.metadata.maintenancePrice}</span></p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-4 md:p-6 mb-4 md:mb-6">
          <h2 data-cy="whats-next-title" className="text-base md:text-lg font-semibold text-blue-900 mb-3 text-center md:text-left">What's Next?</h2>
          <div className="space-y-2 text-blue-800">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-1 md:space-y-0">
              <Mail className="w-4 h-4 md:mr-2 text-blue-600" />
              <span className="text-xs md:text-sm">You'll receive a confirmation email shortly</span>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-1 md:space-y-0">
              <Phone className="w-4 h-4 md:mr-2 text-blue-600" />
              <span className="text-xs md:text-sm">Our team will contact you within 24 hours to confirm details</span>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-1 md:space-y-0">
              <Calendar className="w-4 h-4 md:mr-2 text-blue-600" />
              <span className="text-xs md:text-sm">We'll arrive on your scheduled date and time</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
            data-cy="booking-success-return-to-homepage-button"
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Homepage
          </button>
          
          <button
            onClick={() => navigate('/booking')}
            className="flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm md:text-base"
            data-cy="booking-success-book-another-service-button"
          >
            Book Another Service
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-6 md:mt-8 text-xs md:text-sm text-gray-500">
          <p>Questions about your booking? Contact us at:</p>
        <p className="font-medium text-gray-700">
          <a href="mailto:info@sanfordcleaning.com" className="text-blue-600 hover:underline" data-cy="booking-success-email-link">info@sanfordcleaning.com</a> • <a href="tel:321-236-0618" className="text-blue-600 hover:underline" data-cy="booking-success-phone-link">321-236-0618</a>
        </p>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;