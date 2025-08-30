import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, User, Phone, Mail, CreditCard, CheckCircle, Home, RotateCcw, Ruler, Bed, Bath } from 'lucide-react';

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
  paymentComment: string;
  estimatedPrice: number;
  maintenancePrice?: number;
}

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state?.bookingData as BookingData;

  if (!bookingData) {
    navigate('/');
    return null;
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const handleConfirmBooking = async () => {
    try {
      const bookingId = `BK${Date.now()}`; // Generate a simple booking ID
      
      // Send booking data to backend for confirmation and email sending
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/api/email/confirm-booking' 
        : 'http://localhost:3001/api/email/confirm-booking';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookingData, bookingId }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to confirm booking');
      }
      
      const result = await response.json();
      console.log('Booking confirmed:', result);
      
      // Navigate to success page
      navigate('/booking-success', { 
        state: { 
          bookingData,
          bookingId: bookingId
        } 
      });
    } catch (error) {
      console.error('Error confirming booking:', error);
      // Still navigate to success page but show a warning about email
      const bookingId = `BK${Date.now()}`;
      navigate('/booking-success', { 
        state: { 
          bookingData,
          bookingId: bookingId,
          emailError: true
        } 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-4">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 md:p-6">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />
              <div className="text-center">
                <h1 className="text-xl md:text-2xl font-bold">Booking Summary</h1>
                <p className="text-blue-100 text-sm md:text-base">Please review your booking details</p>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-5 md:space-y-7">
            {/* Service Details */}
            <div className="border-b border-gray-200 pb-4 md:pb-5">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-5 text-center">Service Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 max-w-3xl mx-auto">
                <div className="flex flex-col items-center space-y-1 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-2">
                  <Home className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600">Service Type</p>
                    <p className="font-medium text-gray-900 text-sm md:text-base">{bookingData.service}</p>
                  </div>
                </div>
                {bookingData.frequency && (
                  <div className="flex flex-col items-center space-y-1 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-2">
                    <RotateCcw className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    <div className="text-center">
                      <p className="text-xs md:text-sm text-gray-600">Frequency</p>
                      <p className="font-medium text-gray-900 text-sm md:text-base">{bookingData.frequency}</p>
                    </div>
                  </div>
                )}
                <div className="flex flex-col items-center space-y-1 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-2">
                  <Ruler className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600">Square Footage</p>
                    <p className="font-medium text-gray-900 text-sm md:text-base">{bookingData.squareFootage} sq ft</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-1 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-2">
                  <Bed className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600">Bedrooms</p>
                    <p className="font-medium text-gray-900 text-sm md:text-base">{bookingData.bedrooms}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-1 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-2">
                  <Bath className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600">Bathrooms</p>
                    <p className="font-medium text-gray-900 text-sm md:text-base">{bookingData.bathrooms}</p>
                  </div>
                </div>
              </div>
              
              {bookingData.extras.length > 0 && (
                <div className="mt-4 md:mt-5 text-center col-span-full">
                  <p className="text-sm text-gray-600 mb-2 md:mb-3">Extra Services</p>
                  <div className="space-y-2">
                    {bookingData.extras.map((extra, index) => (
                      <p key={index} className="font-medium text-gray-900 text-sm md:text-base">
                        {extra.name}
                        {extra.quantity && extra.quantity > 1 && ` (${extra.quantity})`}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Schedule */}
            <div className="border-b border-gray-200 pb-4 md:pb-5">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-5 text-center">Schedule</h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 max-w-2xl mx-auto">
                <div className="flex flex-col items-center space-y-1 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-2">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600">Date</p>
                    <p className="font-medium text-gray-900 text-sm md:text-base">
                      {bookingData.scheduledDate ? formatDate(bookingData.scheduledDate) : 'Not selected'}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-1 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-2">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600">Time</p>
                    <p className="font-medium text-gray-900 text-sm md:text-base">
                      {bookingData.scheduledTime ? formatTime(bookingData.scheduledTime) : 'Not selected'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-b border-gray-200 pb-4 md:pb-5">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-5 text-center">Contact Information</h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 max-w-3xl mx-auto">
                <div className="flex flex-col items-center space-y-1 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-2">
                  <User className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600">Name</p>
                    <p className="font-medium text-gray-900 text-sm md:text-base">{bookingData.firstName} {bookingData.lastName}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-1 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-2">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600">Email</p>
                    <p className="font-medium text-gray-900 text-sm md:text-base">{bookingData.email}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-1 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-2">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600">Phone</p>
                    <p className="font-medium text-gray-900 text-sm md:text-base">{bookingData.phone}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-1 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-2">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600">Address</p>
                    <p className="font-medium text-gray-900 text-sm md:text-base">
                      {bookingData.address}
                      {bookingData.aptUnit && `, ${bookingData.aptUnit}`}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-5 text-center col-span-full">
                <p className="text-sm text-gray-600 mb-2">Key Information</p>
                <p className="font-medium text-gray-900 text-sm md:text-base">{bookingData.keyInfo}</p>
              </div>
              
              {bookingData.customerNote && (
                <div className="mt-3 md:mt-4 text-center col-span-full">
                  <p className="text-sm text-gray-600 mb-2">Customer Note</p>
                  <p className="font-medium text-gray-900 text-sm md:text-base">{bookingData.customerNote}</p>
                </div>
              )}
            </div>

            {/* Payment Information */}
            <div className="border-b border-gray-200 pb-4 md:pb-5">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-5 text-center">Payment Information</h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 max-w-2xl mx-auto">
                <div className="flex flex-col items-center space-y-1 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-2">
                  <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600">Payment Method</p>
                    <p className="font-medium text-gray-900 text-sm md:text-base">{bookingData.paymentType}</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs md:text-sm text-gray-600">Estimated Price</p>
                  <p className="text-lg md:text-2xl font-bold text-green-600">${bookingData.estimatedPrice}</p>
                  {bookingData.maintenancePrice && bookingData.maintenancePrice > 0 && (
                    <p className="text-xs md:text-sm text-gray-600">
                      Maintenance: ${bookingData.maintenancePrice}
                    </p>
                  )}
                </div>
              </div>
              
              {bookingData.paymentComment && (
                <div className="mt-4 md:mt-5 text-center col-span-full">
                  <p className="text-sm text-gray-600 mb-2">Payment Comment</p>
                  <p className="font-medium text-gray-900 text-sm md:text-base">{bookingData.paymentComment}</p>
                </div>
              )}
            </div>

            {/* Payment Method Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-center md:items-center justify-center text-center space-y-2 md:space-y-0 md:space-x-3">
                <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-blue-900 text-sm md:text-base">Payment Instructions</h3>
                  <p className="text-xs md:text-sm text-blue-700 mt-1">
                    You have selected <strong>{bookingData.paymentType}</strong> as your payment method. 
                    Our team will contact you to arrange payment details and confirm your booking.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-5 max-w-md mx-auto">
              <button
                onClick={() => navigate('/booking', { state: { returnToStep: 4 } })}
                className="flex-1 px-4 md:px-6 py-2.5 md:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm md:text-base"
              >
                Back to Edit
              </button>
              <button
                onClick={handleConfirmBooking}
                className="flex-1 px-4 md:px-6 py-2.5 md:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm md:text-base"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;