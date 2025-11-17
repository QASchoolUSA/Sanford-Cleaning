import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affordable Deep Cleaning Companies Near Sanford FL',
  description:
    'Find affordable deep cleaning near Sanford, FL. Learn what’s included, pricing tips, and how Sanford Cleaning delivers value without compromising quality.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/affordable-deep-cleaning-companies-sanford-fl' },
  openGraph: {
    title: 'Affordable Deep Cleaning Near Sanford FL',
    description:
      'A practical guide to affordable deep cleaning companies in Sanford, FL, including checklists, common add-ons, and budget-friendly scheduling with Sanford Cleaning.',
    url: 'https://sanfordcleaning.com/guides/affordable-deep-cleaning-companies-sanford-fl',
    siteName: 'Sanford Cleaning',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Deep Cleaning Companies Near Sanford FL',
    description:
      'Find affordable deep cleaning near Sanford, FL. Learn what’s included, pricing tips, and how Sanford Cleaning delivers value without compromising quality.',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
};

export default function Page() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sanfordcleaning.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://sanfordcleaning.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Affordable Deep Cleaning Near Sanford FL', item: 'https://sanfordcleaning.com/guides/affordable-deep-cleaning-companies-sanford-fl' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Affordable Deep Cleaning Companies Near Sanford FL</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Searching for “deep cleaning near me” in Sanford, FL? Sanford Cleaning provides thorough, budget-conscious
            deep cleaning services that reset your home to a fresh baseline. Here’s how to compare prices, understand
            what’s included, and choose the right plan for your space.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/booking" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book Deep Cleaning</Link>
            <Link href="/deep-cleaning" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Deep Cleaning Details</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">What’s Included in Deep Cleaning</h2>
        <p className="mt-3 text-slate-700">
          Deep cleaning covers detailed attention to built-up grime: baseboards, fixtures, cabinet exteriors, heavy
          bathroom descaling, and kitchen degreasing. Add-ons such as inside oven, fridge, and windows are available
          for a complete reset prior to recurring service.
        </p>
        <ul className="mt-4 list-disc pl-6 text-slate-700">
          <li>Keywords: deep cleaning near me, deep cleaning Sanford FL, affordable deep cleaning</li>
          <li>Best for: first-time cleanings, post-renovation refresh, renter turnover</li>
          <li>Follow-up: shift to weekly or biweekly maintenance to keep results</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">How to Keep Costs Down</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Declutter surfaces before the team arrives to reduce time on-site</li>
          <li>Bundle add-ons in one visit to maximize efficiency</li>
          <li>Schedule mid-week appointments for better availability</li>
          <li>Move to recurring service after the reset for lower per-visit pricing</li>
        </ul>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Sanford Cleaning: Local, Thorough, Transparent</h3>
          <p className="mt-2 text-slate-700">
            Our deep cleaning teams bring pro-grade supplies and a detailed checklist. If you’ve been searching for
            “deep cleaning Sanford FL,” we’re ready to help with clear pricing and flexible booking.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/booking" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Get a Deep Clean</Link>
            <Link href="/house-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Switch to Maintenance</Link>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-semibold">Popular Searches Near You</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>affordable deep cleaning companies near Sanford FL</li>
          <li>deep cleaning near me</li>
          <li>apartment deep cleaning Sanford FL</li>
          <li>best deep cleaning services in Seminole County</li>
        </ul>
      </section>
    </main>
  );
}