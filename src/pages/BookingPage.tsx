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

          <PriceCalculator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;