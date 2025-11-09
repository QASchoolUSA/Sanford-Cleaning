import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best House Cleaning Deals and Discounts in Sanford FL | Sanford Cleaning',
  description:
    'Find the best house cleaning deals and discounts in Sanford FL. Learn savings strategies and how recurring service reduces costs.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/best-house-cleaning-deals-discounts-sanford-fl' },
  openGraph: {
    title: 'Best House Cleaning Deals and Discounts in Sanford FL',
    description:
      'Savings guide for Sanford homeowners: recurring cleaning discounts, bundled add-ons, and seasonal promotions from Sanford Cleaning.',
    url: 'https://sanfordcleaning.com/guides/best-house-cleaning-deals-discounts-sanford-fl',
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
      { '@type': 'ListItem', position: 3, name: 'Best House Cleaning Deals and Discounts in Sanford FL', item: 'https://sanfordcleaning.com/guides/best-house-cleaning-deals-discounts-sanford-fl' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Best House Cleaning Deals and Discounts in Sanford FL</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Looking for the best cleaning deals? Sanford Cleaning offers savings through recurring plans, mid-week slots,
            and bundled add-ons. Use this guide to plan a cost-efficient service without sacrificing quality.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/booking" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">View Availability</Link>
            <Link href="/free-custom-quote" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">Savings Strategies</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Weekly or biweekly plans reduce per-visit pricing</li>
          <li>Bundle add-ons like oven, fridge, and windows in one visit</li>
          <li>Book mid-week for broader availability</li>
          <li>Start with a deep clean, then switch to maintenance</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Keywords and Searches</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>best house cleaning deals Sanford FL</li>
          <li>house cleaning discounts near me</li>
          <li>Sanford FL cleaning promotions</li>
        </ul>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Sanford Cleaning: Value Without Compromise</h3>
          <p className="mt-2 text-slate-700">
            We combine quality checklists, trained teams, and friendly communication—then layer in ways to save. Ask
            about seasonal promotions and recurring discounts.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/booking" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book & Save</Link>
            <Link href="/house-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">House Cleaning</Link>
          </div>
        </div>
      </section>
    </main>
  );
}