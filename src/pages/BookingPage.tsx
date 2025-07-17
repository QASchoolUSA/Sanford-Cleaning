import React from 'react';
import PriceCalculator from '../components/PriceCalculator';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BookingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Book Your Cleaning Service
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get an instant quote and schedule your cleaning service in just a few simple steps.
            </p>
          </div>
          <PriceCalculator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;