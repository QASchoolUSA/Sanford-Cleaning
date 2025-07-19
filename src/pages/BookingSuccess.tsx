import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Check, Calendar, Mail, Phone, Home, ArrowRight } from 'lucide-react';

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

const BookingSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (!sessionId) {
      setError('No session ID found');
      setLoading(false);
      return;
    }

    const fetchSessionData = async () => {
      try {
        const apiUrl = process.env.NODE_ENV === 'production' 
          ? `/api/session/${sessionId}` 
          : `http://localhost:3001/api/session/${sessionId}`;
      
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
  }, [sessionId]);

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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Booking Error</h1>
          <p className="text-gray-600 mb-6">{error || 'Unable to load booking details'}</p>
          <button
            onClick={() => navigate('/booking')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-lg text-gray-600">
            Payment successful • Booking ID: {sessionData.metadata.bookingId}
          </p>
        </div>

        {/* Booking Details */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Booking Details</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Service Information */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Service</h3>
                  <p className="text-gray-900">
                    {sessionData.metadata.service}
                    {sessionData.metadata.frequency && ` (${sessionData.metadata.frequency})`}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Property Details</h3>
                  <p className="text-gray-900">
                    {sessionData.metadata.squareFootage} sq ft • 
                    {sessionData.metadata.bedrooms} bed • 
                    {sessionData.metadata.bathrooms} bath
                  </p>
                </div>
                
                {parseExtras(sessionData.metadata.extras).length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Extras</h3>
                    <div className="space-y-1">
                      {parseExtras(sessionData.metadata.extras).map((extra: any, index: number) => (
                        <p key={index} className="text-gray-900 text-sm">
                          • {extra.name} {extra.quantity && `(${extra.quantity})`}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Customer & Schedule Information */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Customer</h3>
                  <p className="text-gray-900">{sessionData.metadata.customerName}</p>
                  <p className="text-gray-600 text-sm">{sessionData.customer_email}</p>
                  <p className="text-gray-600 text-sm">{sessionData.metadata.customerPhone}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Service Address</h3>
                  <p className="text-gray-900">{sessionData.metadata.customerAddress}</p>
                </div>
                
                {sessionData.metadata.scheduledDate && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Scheduled</h3>
                    <p className="text-gray-900">
                      {formatDate(sessionData.metadata.scheduledDate)}
                      {sessionData.metadata.scheduledTime && ` at ${sessionData.metadata.scheduledTime}`}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Status:</span>
                <span className="font-medium text-green-600 capitalize">{sessionData.payment_status}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Amount Paid:</span>
                <span className="font-medium text-gray-900">${formatAmount(sessionData.amount_total)}</span>
              </div>
              
              {sessionData.metadata.maintenancePrice && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Future {sessionData.metadata.frequency} cleanings:</span>
                  <span className="text-gray-700">${sessionData.metadata.maintenancePrice}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-3">What's Next?</h2>
          <div className="space-y-2 text-blue-800">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">You'll receive a confirmation email shortly</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">Our team will contact you within 24 hours to confirm details</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">We'll arrive on your scheduled date and time</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Homepage
          </button>
          
          <button
            onClick={() => navigate('/booking')}
            className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Book Another Service
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Questions about your booking? Contact us at:</p>
          <p className="font-medium text-gray-700">support@yourcleaningservice.com • (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;