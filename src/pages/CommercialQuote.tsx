import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageSquare } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';
import ContactInfo from '../components/ContactInfo';

const CommercialQuote: React.FC = () => {
  const [showChatNotification, setShowChatNotification] = useState(false);

  useEffect(() => {
    // Show chat notification after 5 seconds
    const timer = setTimeout(() => {
      setShowChatNotification(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const openChat = () => {
    // Access Chatwoot's global object to open the widget
    if ((window as any).chatwootSDK) {
      (window as any).chatwootSDK.toggle();
    }
    setShowChatNotification(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Free Commercial Cleaning Quote | Sanford Business Cleaning Services</title>
        <meta name="description" content="Get a free, no-obligation quote for professional commercial cleaning services in Sanford, FL. Customized cleaning solutions for offices, retail spaces, medical facilities, and more." />
        <meta name="keywords" content="commercial cleaning quote, business cleaning estimate, office cleaning services Sanford, commercial cleaning cost, janitorial service quote" />
        <meta property="og:title" content="Free Commercial Cleaning Quote | Sanford Business Cleaning Services" />
        <meta property="og:description" content="Get a free, no-obligation quote for professional commercial cleaning services in Sanford, FL. Customized solutions for your business." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sanfordcleaning.com/commercial-quote" />
      </Helmet>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get Your Free Commercial Cleaning Quote
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Receive a customized quote for your business cleaning needs. Our commercial cleaning services are tailored to your specific requirements and budget.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-6 md:p-8 lg:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Commercial Cleaning Services</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-600 text-sm font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">Customized cleaning plans based on your business needs</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-600 text-sm font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">Flexible scheduling - daily, weekly, or monthly service</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-600 text-sm font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">Trained and background-checked cleaning professionals</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-600 text-sm font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">Eco-friendly cleaning products and methods available</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-600 text-sm font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">Comprehensive liability insurance coverage</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Businesses We Serve</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Office Buildings</h3>
                      <p className="text-sm text-gray-600">Clean workspaces for productivity</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Medical Facilities</h3>
                      <p className="text-sm text-gray-600">Sanitized environments for health</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Retail Stores</h3>
                      <p className="text-sm text-gray-600">Spotless spaces for customers</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Restaurants</h3>
                      <p className="text-sm text-gray-600">Hygienic dining environments</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Schools</h3>
                      <p className="text-sm text-gray-600">Clean learning spaces</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Churches</h3>
                      <p className="text-sm text-gray-600">Pristine worship areas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form Section - Positioned after information sections */}
          <div id="quote-form" className="scroll-mt-24 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Quote</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to experience professional commercial cleaning? Fill out the form below for a free, no-obligation quote.
              </p>
            </div>
            <QuoteForm />
          </div>
          
          {/* Get in Touch Section - Positioned at the bottom */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8 lg:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Have questions about our commercial cleaning services? Contact us directly through any of these channels.
                </p>
              </div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>

      {/* Chat Notification */}
      {showChatNotification && (
        <div className="fixed bottom-24 right-4 max-w-xs bg-white rounded-lg shadow-lg p-4 border border-blue-100 animate-bounce-slow z-50">
          <button 
            onClick={openChat}
            className="flex items-center space-x-3 w-full"
          >
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
              <MessageSquare className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-gray-900">Need immediate assistance?</p>
              <p className="text-xs text-gray-600">Chat with our team now!</p>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default CommercialQuote;