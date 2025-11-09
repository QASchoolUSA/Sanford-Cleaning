import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Book a Professional House Cleaner in Sanford FL | Sanford Cleaning',
  description:
    'Step-by-step guide to booking a professional house cleaner in Sanford, FL. Learn scheduling options, what to expect, and tips to prepare your home.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/how-to-book-professional-house-cleaner-sanford-fl' },
  openGraph: {
    title: 'How to Book a Professional House Cleaner in Sanford FL',
    description:
      'From selecting a service to confirming your appointment—here’s how Sanford Cleaning makes booking fast and easy in Sanford, FL.',
    url: 'https://sanfordcleaning.com/guides/how-to-book-professional-house-cleaner-sanford-fl',
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
      { '@type': 'ListItem', position: 3, name: 'How to Book a Professional House Cleaner in Sanford FL', item: 'https://sanfordcleaning.com/guides/how-to-book-professional-house-cleaner-sanford-fl' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">How to Book a Professional House Cleaner in Sanford FL</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Booking with Sanford Cleaning is fast and straightforward. Whether you need a one-time refresh or recurring
            weekly and biweekly cleaning, this guide walks you through the process—service selection, scheduling,
            preparation tips, and what happens on the day of your appointment.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/booking" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book Online</Link>
            <Link href="/free-custom-quote" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Request a Quote</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">Step 1 — Choose Your Service</h2>
        <p className="mt-3 text-slate-700">
          Select from house cleaning, deep cleaning, or move-in/move-out cleaning. For first visits, many clients choose
          deep cleaning to set a fresh baseline before switching to recurring maintenance.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Step 2 — Pick a Schedule</h2>
        <p className="mt-3 text-slate-700">Weekly, biweekly, monthly, or one-time—Sanford Cleaning offers flexible options to fit your routine.</p>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Keywords: book house cleaner Sanford FL, house cleaning services near me, weekly cleaning Sanford</li>
          <li>Mid-week slots can offer the best availability</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Step 3 — Prepare Your Home</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Secure pets and tidy surfaces to maximize efficiency</li>
          <li>Point out priorities: bathrooms, kitchen, high-traffic areas</li>
          <li>Add extras like inside oven, fridge, and windows for a complete reset</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Step 4 — Day of Service</h2>
        <p className="mt-3 text-slate-700">
          Our team arrives on time, follows a detailed checklist, and confirms completion before leaving. You’ll receive
          friendly communication and the option to adjust future visits as needed.
        </p>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Ready to Book?</h3>
          <p className="mt-2 text-slate-700">
            Sanford Cleaning serves Sanford, Lake Mary, and nearby communities. If you’ve been searching for “house
            cleaning services near me,” you can book online in minutes.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/booking" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Schedule Your Cleaning</Link>
            <Link href="/house-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Explore House Cleaning</Link>
          </div>
        </div>
      </section>
    </main>
  );
}