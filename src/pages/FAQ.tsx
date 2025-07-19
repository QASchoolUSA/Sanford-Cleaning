import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData: FAQItem[] = [
    {
      question: "What's the next step after I book online?",
      answer: "Once you complete your online booking, you'll receive a detailed confirmation email containing your service details and scheduled appointment time. Please take a moment to review this information carefully and contact us immediately if any details need to be adjusted or corrected."
    },
    {
      question: "When will I be charged?",
      answer: "Payment is processed after your cleaning service has been completed to your satisfaction. We accept various payment methods including credit cards, and you'll receive an invoice via email once the service is finished. This ensures you only pay for the quality service you've received."
    },
    {
      question: "What if I have pets?",
      answer: "We absolutely love pets and understand they're cherished family members! We're experienced in cleaning homes with furry friends and can work around their needs. For your pet's comfort and safety, we recommend securing them in a quiet area during our visit, as some pets may feel anxious around vacuum sounds or unfamiliar people. Please let us know about your pets when booking so we can plan accordingly and ensure both your home and your beloved companions are well cared for."
    },
    {
      question: "What if I'm not satisfied with my service?",
      answer: "Your satisfaction is our top priority, and we stand behind our work with a comprehensive satisfaction guarantee. We use proven cleaning methods and create personalized cleaning plans during your initial consultation to meet your specific needs. While we strive for perfection every time, we understand that sometimes adjustments may be needed. If you're not completely satisfied, simply contact us within 24 hours of your service, and we'll return to address any concerns at no additional charge."
    },
    {
      question: "Do your housecleaners accept tips?",
      answer: "Tips are never expected but are always appreciated when our team has provided exceptional service. Our cleaners are allowed to accept gratuities if you choose to offer them. Another wonderful way to show appreciation is by leaving a positive review on our website, Google Maps, or Facebook page – these reviews help us grow and help other customers find our services."
    },
    {
      question: "Do I have to be home during the visit?",
      answer: "Your presence during cleaning is completely optional – whatever works best for your schedule! Many of our clients prefer to be away during service and provide us with a house key or access code for entry. We treat all access information with the highest level of security and confidentiality. Whether you're home or away, our professional team will provide the same thorough, reliable service."
    },
    {
      question: "How do I prepare my home for cleaning?",
      answer: "Minimal preparation is needed! We recommend picking up personal items, toys, and clutter from surfaces to allow our team to focus on deep cleaning. Please secure any valuable or fragile items, and let us know about any specific areas that need special attention or should be avoided."
    },
    {
      question: "What cleaning supplies do you use?",
      answer: "We bring all necessary professional-grade cleaning supplies and equipment. Our products are effective yet safe for your family and pets. If you have specific preferences or allergies, please let us know in advance, and we can accommodate your needs with alternative products."
    },
    {
      question: "How long does a typical cleaning take?",
      answer: "Cleaning time varies based on your home's size, condition, and the services requested. A standard residential cleaning typically takes 2-4 hours. We'll provide an estimated timeframe when you book, and our team works efficiently while maintaining our high-quality standards."
    },
    {
      question: "Can I customize my cleaning service?",
      answer: "Absolutely! We understand every home and family has unique needs. During your consultation, we'll discuss your priorities and create a customized cleaning plan. Whether you need extra attention in certain areas or have specific requests, we're happy to tailor our service to meet your expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Helmet>
        <title>Frequently Asked Questions | Sanford Cleaning Services FAQ</title>
        <meta name="description" content="Find answers to common questions about our cleaning services in Sanford, FL. Learn about booking, pricing, preparation, and our satisfaction guarantee." />
        <meta name="keywords" content="cleaning service FAQ, Sanford cleaning questions, house cleaning FAQ, cleaning service answers, cleaning preparation" />
        <meta property="og:title" content="Frequently Asked Questions | Sanford Cleaning Services" />
        <meta property="og:description" content="Find answers to common questions about our cleaning services in Sanford, FL." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sanfordcleaning.com/faq" />
      </Helmet>
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about our cleaning services.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-700 mb-6">
              Can't find the answer you're looking for? Our friendly team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/booking"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book a Service
              </Link>
              <a 
                href="tel:(321) 236-0618"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Call Us: (321) 236-0618
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;