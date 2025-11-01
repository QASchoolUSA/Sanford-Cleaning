import React from 'react';
import { Phone, Star, Clock, Shield, Calculator } from 'lucide-react';
import PriceCalculator from './PriceCalculator';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Content Section */}
        <div className="text-center mb-14 max-w-4xl mx-auto">

          {/* Main Headline */}
          <div className="space-y-6 mb-10">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mt-4">
              Professional
              <span className="block text-blue-600">Cleaning Services</span>
              <span className="block text-2xl lg:text-3xl xl:text-4xl font-normal text-gray-600 mt-2">
                in Sanford, Florida
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Get instant pricing and book your cleaning service in under 60 seconds. 
              Professional, reliable, and affordable cleaning for your home or business.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="tel:+14077474555" 
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Call (407) 747-4555
            </a>
            <button 
              onClick={() => document.getElementById('price-calculator')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-blue-600 transform hover:-translate-y-0.5"
            >
              <Calculator className="w-5 h-5" />
              Get Instant Quote
            </button>
          </div>

          {/* Trust Badges moved closer to Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 text-sm mt-6 mb-6">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-gray-700 font-medium">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700 font-medium">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-gray-700 font-medium">Insured & Bonded</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-blue-600">5★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-blue-600">24h</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
          </div>
        </div>

        {/* Full-Width Calculator Section */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Calculator Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 lg:px-8 py-6">
              <div className="flex items-center justify-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">Get Your Instant Quote</h3>
                  <p className="text-blue-100 text-lg">Professional pricing in 3 easy steps</p>
                </div>
              </div>
            </div>
            
            {/* Calculator Content */}
            <div id="price-calculator" className="p-6 lg:p-8">
              <PriceCalculator />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;