import React from 'react';
import { Helmet } from 'react-helmet-async';
import PriceCalculator from '../components/PriceCalculator';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BookingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Book Cleaning Service Online | Sanford Cleaning - Instant Quote & Booking</title>
        <meta name="description" content="Book your cleaning service online in Sanford, FL. Get instant quotes, choose your services, and schedule your cleaning appointment. Easy online booking system." />
        <meta name="keywords" content="book cleaning service Sanford FL, online booking, cleaning appointment, instant quote, schedule cleaning" />
        <meta property="og:title" content="Book Cleaning Service Online | Sanford Cleaning" />
        <meta property="og:description" content="Book your cleaning service online in Sanford, FL. Get instant quotes and schedule your appointment." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sanfordcleaning.com/booking" />
      </Helmet>
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