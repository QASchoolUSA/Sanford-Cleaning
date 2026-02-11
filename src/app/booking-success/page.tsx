export const metadata = {
  title: "Booking Confirmed | Sanford Cleaning",
  description: "Your cleaning appointment has been scheduled.",
  alternates: { canonical: "https://sanfordcleaning.com/booking-success" },
  openGraph: {
    title: "Booking Confirmed | Sanford Cleaning",
    description: "Your cleaning appointment has been scheduled.",
    type: "website",
    url: "https://sanfordcleaning.com/booking-success",
  },
  twitter: {
    card: "summary",
    title: "Booking Confirmed | Sanford Cleaning",
    description: "Your cleaning appointment has been scheduled.",
  },
  robots: { index: false, follow: false },
};

// Ensure this page renders dynamically so query `searchParams` like `?paid=stripe`
// are respected at request time in production builds.
export const dynamic = 'force-dynamic';

import BookingSuccessPayments from "@/components/BookingSuccessPayments";
import Link from "next/link";

export default async function BookingSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const paidParam = resolvedSearchParams?.paid;
  const isStripePaidParam = Array.isArray(paidParam)
    ? paidParam.includes('stripe')
    : paidParam === 'stripe';
  return (
    <div className="pt-20 bg-gray-50">
      {/* Confirmation Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 md:p-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Booking Confirmed</h1>
              <p className="text-lg text-gray-600">Thank you! Your appointment is confirmed. A confirmation email has been sent with your details.</p>
              <p className="text-gray-600 mt-3">Questions? Call <a href="tel:321-236-0618" className="text-blue-600 hover:underline">(321) 236-0618</a> or email <a href="mailto:info@sanfordcleaning.com" className="text-blue-600 hover:underline">info@sanfordcleaning.com</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {!isStripePaidParam && (
        <BookingSuccessPayments paidParam={paidParam} />
      )}

      {/* Help & Next Actions */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700">Need to modify your booking or have questions? Call <a href="tel:321-236-0618" className="text-blue-600 hover:underline">(321) 236-0618</a> or email <a href="mailto:info@sanfordcleaning.com" className="text-blue-600 hover:underline">info@sanfordcleaning.com</a>.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Book Another Service</Link>
              <Link href="/" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Go to Homepage</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}