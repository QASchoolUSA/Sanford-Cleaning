import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Check, Home, ArrowRight } from 'lucide-react';

const GetHiredSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
      <Helmet>
        <title>Application Received | Sanford Cleaning</title>
        <meta name="description" content="Thank you for your application! We have received your information and will be in touch soon." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="max-w-md mx-auto text-center p-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Application Received!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for your interest in joining our team. We have received your application and will review it shortly. If your qualifications match our needs, we will be in touch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetHiredSuccess;
