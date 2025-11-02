import { Suspense } from 'react';
import PriceCalculator from '@/components/PriceCalculator';
import { Calculator } from 'lucide-react';

export const metadata = {
  title: 'Book Cleaning Service Online | Instant Price & Booking',
  description:
    'Book cleaning online in Sanford, FL. Get instant quotes, choose services, and schedule your appointment.',
  alternates: { canonical: 'https://sanfordcleaning.com/booking' },
  openGraph: {
    title: 'Book Cleaning Service Online',
    description:
      'Book your cleaning service online in Sanford, FL. Get instant quotes and schedule your appointment.',
    type: 'website',
    url: 'https://sanfordcleaning.com/booking',
  },
  twitter: {
    card: 'summary',
    title: 'Book Cleaning Service Online',
    description:
      'Book your cleaning service online in Sanford, FL. Get instant quotes and schedule your appointment.',
  },
};

export default function BookingPage() {
  return (
    <div className="pt-20">
      {/* Hero-like Header for Booking */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Book Cleaning Service Online</h1>
            <p className="text-lg text-gray-600">Get instant pricing and schedule your appointment in minutes.</p>
          </div>
        </div>
      </section>

      {/* Calculator Card with Blue Header (matches homepage style) */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Calculator Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 lg:px-8 py-6">
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <h1 className="text-2xl lg:text-3xl font-bold text-white">Get Your Instant Quote</h1>
                    <p className="text-blue-100 text-lg">Professional pricing in 3 easy steps</p>
                  </div>
                </div>
              </div>

              {/* Calculator Content */}
              <div id="price-calculator" className="p-2 lg:p-8">
                <Suspense fallback={<div className="py-12 text-center text-gray-500">Loading booking options...</div>}>
                  <PriceCalculator />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}