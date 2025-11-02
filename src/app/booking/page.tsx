import { Suspense } from 'react';
import PriceCalculator from '@/components/PriceCalculator';

export const metadata = {
  title: 'Book Cleaning Service Online | Sanford Cleaning - Instant Price & Booking',
  description:
    'Book cleaning online in Sanford, FL. Get instant quotes, choose services, and schedule your appointment.',
  alternates: { canonical: 'https://sanfordcleaning.com/booking' },
  openGraph: {
    title: 'Book Cleaning Service Online | Sanford Cleaning',
    description:
      'Book your cleaning service online in Sanford, FL. Get instant quotes and schedule your appointment.',
    type: 'website',
    url: 'https://sanfordcleaning.com/booking',
  },
  twitter: {
    card: 'summary',
    title: 'Book Cleaning Service Online | Sanford Cleaning',
    description:
      'Book your cleaning service online in Sanford, FL. Get instant quotes and schedule your appointment.',
  },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="text-center text-gray-600">Loading booking options...</div>}>
            <PriceCalculator />
          </Suspense>
        </div>
      </main>
    </div>
  );
}