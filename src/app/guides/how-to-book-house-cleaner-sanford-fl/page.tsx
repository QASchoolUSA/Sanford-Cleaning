import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Book a House Cleaner in Sanford FL | Sanford Cleaning',
  description:
    'A simple guide to booking a house cleaner in Sanford FL. Steps, preparation tips, and scheduling options with Sanford Cleaning.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/how-to-book-house-cleaner-sanford-fl' },
  openGraph: {
    title: 'How to Book a House Cleaner in Sanford FL',
    description:
      'From selecting a service to confirmation—book your Sanford house cleaner quickly with Sanford Cleaning.',
    url: 'https://sanfordcleaning.com/guides/how-to-book-house-cleaner-sanford-fl',
    siteName: 'Sanford Cleaning',
  },
};

export default function Page() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sanfordcleaning.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://sanfordcleaning.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'How to Book a House Cleaner in Sanford FL', item: 'https://sanfordcleaning.com/guides/how-to-book-house-cleaner-sanford-fl' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">How to Book a House Cleaner in Sanford FL</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Sanford Cleaning makes scheduling easy: pick your service, choose your time, and submit your booking.
            This guide includes prep tips to make the most of your appointment.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/booking" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book Online</Link>
            <Link href="/free-custom-quote" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Custom Quote</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">Booking Steps</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Select service (house cleaning, deep cleaning, move-out)</li>
          <li>Choose frequency (weekly, biweekly, one-time)</li>
          <li>Prepare home: tidy surfaces, secure pets, list priorities</li>
        </ul>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Local and Friendly</h3>
          <p className="mt-2 text-slate-700">
            If you’re searching “house cleaning services near me,” book with Sanford Cleaning for a smooth, professional
            experience.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/house-cleaning" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">View Services</Link>
            <Link href="/deep-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Deep Cleaning</Link>
          </div>
        </div>
      </section>
    </main>
  );
}