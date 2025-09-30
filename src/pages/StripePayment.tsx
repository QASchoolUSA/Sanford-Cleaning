import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, ExternalLink, Check, AlertCircle } from 'lucide-react';

interface BookingData {
  service: string;
  frequency?: string;
  squareFootage: string;
  bedrooms: string;
  bathrooms: string;
  extras: { name: string; quantity?: number }[];
  scheduledDate?: Date;
  scheduledTime: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  estimatedPrice: number;
  maintenancePrice?: number;
}

const CheckoutComponent: React.FC<{ bookingData: BookingData }> = ({ bookingData }) => {
  const [isCreatingSession, setIsCreatingSession] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setIsCreatingSession(true);
    setError(null);

    try {
      // Call your backend to create a Stripe Checkout session
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/api/stripe/create-checkout-session' 
        : 'http://localhost:3001/api/stripe/create-checkout-session';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookingData }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create checkout session');
      }

      const { url } = await response.json();
      
      // Redirect to Stripe Checkout
      window.location.href = url;
      
    } catch (err) {
      console.error('Error creating checkout session:', err);
      setError(err instanceof Error ? err.message : 'Failed to start payment process');
    } finally {
      setIsCreatingSession(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <CreditCard className="w-5 h-5 mr-2" />
          Secure Payment with Stripe
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-blue-50 rounded-lg">
            <ExternalLink className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <p className="text-sm font-medium text-blue-900">
                You'll be redirected to Stripe's secure payment page
              </p>
              <p className="text-xs text-blue-700">
                Complete your payment safely on Stripe's platform
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center text-gray-600">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              256-bit SSL encryption
            </div>
            <div className="flex items-center text-gray-600">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              PCI DSS compliant
            </div>
            <div className="flex items-center text-gray-600">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              No card details stored
            </div>
            <div className="flex items-center text-gray-600">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Instant confirmation
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start">
            <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-red-800">Payment Error</p>
              <p className="text-sm text-red-600">{error}</p>
              <p className="text-xs text-red-500 mt-1">
                Make sure the backend server is running on port 3001
              </p>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handlePayment}
        disabled={isCreatingSession}
        className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
          isCreatingSession
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
        }`}
      >
        {isCreatingSession ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
            Creating secure payment session...
          </>
        ) : (
          <>
            <CreditCard className="w-5 h-5 mr-3" />
            Pay ${bookingData.estimatedPrice.toFixed(2)} with Stripe
            <ExternalLink className="w-4 h-4 ml-2" />
          </>
        )}
      </button>
      
      <p className="text-xs text-gray-500 text-center">
        By clicking "Pay with Stripe", you'll be redirected to Stripe's secure checkout page
      </p>
    </div>
  );
};

const StripePayment: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  useEffect(() => {
    // Get booking data from navigation state
    if (location.state && location.state.bookingData) {
      setBookingData(location.state.bookingData);
    } else {
      // If no booking data, redirect back to booking page
      navigate('/booking', { replace: true });
    }
  }, [location.state, navigate]);

  if (!bookingData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>Secure Payment | Sanford Cleaning - Complete Your Booking</title>
        <meta name="description" content="Complete your cleaning service booking with secure Stripe payment. Safe, encrypted payment processing for your Sanford cleaning appointment." />
        <meta name="keywords" content="secure payment, cleaning service payment, Stripe payment, book cleaning Sanford" />
        <meta property="og:title" content="Secure Payment | Sanford Cleaning" />
        <meta property="og:description" content="Complete your cleaning service booking with secure payment processing." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/booking')}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Booking
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Complete Your Payment</h1>
          <p className="text-gray-600 mt-2">Secure payment powered by Stripe</p>
        </div>

        {/* Booking Summary */}
        <div className="bg-white rounded-lg shadow-sm border mb-6 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Booking Summary</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Service:</span>
              <span className="font-medium">{bookingData.service}</span>
            </div>
            
            {bookingData.frequency && (
              <div className="flex justify-between">
                <span className="text-gray-600">Frequency:</span>
                <span className="font-medium">{bookingData.frequency}</span>
              </div>
            )}
            
            <div className="flex justify-between">
              <span className="text-gray-600">Home Size:</span>
              <span className="font-medium">
                {bookingData.squareFootage} sq ft, {bookingData.bedrooms} bed, {bookingData.bathrooms} bath
              </span>
            </div>
            
            {bookingData.extras.length > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-600">Extras:</span>
                <div className="text-right">
                  {bookingData.extras.map((extra, index) => (
                    <div key={index} className="font-medium">
                      {extra.name} {extra.quantity && `(${extra.quantity})`}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {bookingData.scheduledDate && (
              <div className="flex justify-between">
                <span className="text-gray-600">Scheduled:</span>
                <span className="font-medium">
                  {bookingData.scheduledDate.toLocaleDateString()} at {bookingData.scheduledTime}
                </span>
              </div>
            )}
            
            <div className="flex justify-between">
              <span className="text-gray-600">Customer:</span>
              <span className="font-medium">
                {bookingData.firstName} {bookingData.lastName}
              </span>
            </div>
            
            <hr className="my-4" />
            
            <div className="flex justify-between text-lg font-bold">
              <span>Total Amount:</span>
              <span className="text-blue-600">${bookingData.estimatedPrice.toFixed(2)}</span>
            </div>
            
            {bookingData.maintenancePrice && (
              <div className="text-sm text-gray-600">
                Future {bookingData.frequency} cleanings: ${bookingData.maintenancePrice.toFixed(2)}
              </div>
            )}
          </div>
        </div>

        {/* Payment Form */}
        <CheckoutComponent bookingData={bookingData} />

        {/* Security Notice */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>🔒 Your payment is secured with 256-bit SSL encryption</p>
          <p className="mt-1">We never store your card information</p>
        </div>
      </div>
    </div>
  );
};

export default StripePayment;