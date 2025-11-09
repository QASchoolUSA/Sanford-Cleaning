import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Book a Professional House Cleaner in Sanford FL with Customer Reviews | Sanford Cleaning',
  description:
    'Combine booking tips with customer review insights to choose a professional house cleaner in Sanford FL. Learn what to expect and how to prepare.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/how-to-book-professional-house-cleaner-sanford-fl-customer-reviews' },
  openGraph: {
    title: 'Booking a Professional House Cleaner in Sanford FL (with Reviews)',
    description:
      'A booking and reviews guide for Sanford homeowners: scheduling, preparation, and reading customer feedback with Sanford Cleaning.',
    url: 'https://sanfordcleaning.com/guides/how-to-book-professional-house-cleaner-sanford-fl-customer-reviews',
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
      { '@type': 'ListItem', position: 3, name: 'How to Book a Professional House Cleaner in Sanford FL with Reviews', item: 'https://sanfordcleaning.com/guides/how-to-book-professional-house-cleaner-sanford-fl-customer-reviews' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">How to Book a Professional House Cleaner in Sanford FL (Using Customer Reviews)</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Reviews help you select the right cleaner; booking makes it official. This guide combines both—what to look
            for in feedback and how to schedule a smooth appointment with Sanford Cleaning.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/booking" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book Online</Link>
            <Link href="/house-cleaning" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">House Cleaning</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">How to Read Reviews</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Look for repeat mentions of punctuality and communication</li>
          <li>Check comments about kitchen and bathroom detail work</li>
          <li>Note responsiveness and follow-up after appointments</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Booking Steps</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Select service: house cleaning, deep cleaning, or move-in/move-out</li>
          <li>Pick frequency: weekly, biweekly, or one-time</li>
          <li>Prepare: tidy surfaces, secure pets, list priorities</li>
        </ul>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Sanford Cleaning: Reviewed and Reliable</h3>
          <p className="mt-2 text-slate-700">
            Our local team is praised for friendliness and consistency. If you want a cleaner that’s easy to book and
            straightforward to work with, we’re here.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/booking" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book Now</Link>
            <Link href="/deep-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Deep Cleaning</Link>
          </div>
        </div>
      </section>
    </main>
  );
}