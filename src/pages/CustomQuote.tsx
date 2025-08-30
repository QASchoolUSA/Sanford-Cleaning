import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';
import ContactInfo from '../components/ContactInfo';

const CustomQuote: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className="pt-20">
      <Helmet>
        <title>Free Custom Quote | Sanford Business Cleaning Services</title>
        <meta name="description" content="Get a free, no-obligation custom quote for professional cleaning services in Sanford, FL. Customized cleaning solutions for residential and commercial properties." />
        <meta name="keywords" content="free custom quote, professional cleaning estimate, cleaning services Sanford, customized cleaning cost, free cleaning quote" />
        <meta property="og:title" content="Free Custom Quote | Sanford Cleaning Services" />
        <meta property="og:description" content="Get a free, no-obligation custom quote for professional cleaning services in Sanford, FL. Customized solutions for your property." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sanfordcleaning.com/free-custom-quote" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Custom Quote
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional cleaning quotes tailored to your specific needs. Residential and commercial cleaning services in Sanford, Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13212360618"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (321) 236-0618
              </a>
              <button
                onClick={() => scrollToSection('quote-form')}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-flex items-center justify-center"
              >
                Request Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-6 md:p-8 lg:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Cleaning Services</h2>
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
                  <h3 className="font-semibold text-gray-900 mb-2">Businesses & Homes We Serve</h3>
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
                      <h3 className="font-semibold text-gray-900 mb-2">Homes</h3>
                      <p className="text-sm text-gray-600">Perfect residential cleaning</p>
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
    </div>
  );
};

export default CustomQuote;