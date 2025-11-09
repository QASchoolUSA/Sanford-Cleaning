import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best House Cleaning Services in Sanford FL | Sanford Cleaning',
  description:
    'Discover the best house cleaning services in Sanford FL. See packages, pricing, scheduling tips, and why Sanford Cleaning is trusted by local homeowners.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/best-house-cleaning-services-sanford-fl' },
  openGraph: {
    title: 'Best House Cleaning Services in Sanford FL',
    description:
      'A comprehensive guide to finding top house cleaning services in Sanford, Florida, including pricing, schedules, and quality checks from Sanford Cleaning.',
    url: 'https://sanfordcleaning.com/guides/best-house-cleaning-services-sanford-fl',
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
      { '@type': 'ListItem', position: 3, name: 'Best House Cleaning Services in Sanford FL', item: 'https://sanfordcleaning.com/guides/best-house-cleaning-services-sanford-fl' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Best House Cleaning Services in Sanford FL</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Looking for the best house cleaning services in Sanford, FL? Sanford Cleaning
            delivers reliable, high-quality home cleaning with transparent pricing, simple online booking,
            and flexible schedules. This guide explains how to choose a top-rated cleaner, what to expect
            from recurring and deep services, and how local homeowners keep their homes fresh week after week.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/booking" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book House Cleaning</Link>
            <Link href="/house-cleaning" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">View Services</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">What “Best” Looks Like</h2>
        <p className="mt-3 text-slate-700">
          The best house cleaning in Sanford, FL combines dependable arrival times, well-trained staff,
          consistent checklists, eco-friendly options, and clear communication. Sanford Cleaning uses
          standard room-by-room checklists for kitchens, bathrooms, bedrooms, and living spaces, and
          provides add-ons like inside fridge, oven, and windows so you only pay for what you need.
        </p>
        <ul className="mt-4 list-disc pl-6 text-slate-700">
          <li>Keywords: house cleaning Sanford FL, best house cleaners Sanford, house cleaning services near me</li>
          <li>Service types: standard recurring, deep cleaning, move-in/move-out cleaning</li>
          <li>Coverage: Sanford, Lake Mary, Heathrow, Winter Springs, and nearby areas</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Pricing and Packages</h2>
        <p className="mt-3 text-slate-700">
          Pricing depends on home size, condition, and frequency. Weekly and biweekly plans reduce the per-visit
          rate while maintaining a consistently clean home. For first-time service or homes needing extra attention,
          a deep cleaning sets a fresh baseline before switching to maintenance visits.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">How to Choose a Top Cleaner</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Read customer reviews for top-rated house cleaning companies in Sanford FL</li>
          <li>Confirm checklist coverage for kitchens, bathrooms, bedrooms, and high-touch areas</li>
          <li>Ask about eco-friendly supplies and pet-safe products</li>
          <li>Verify scheduling flexibility for weekly, biweekly, or one-time cleanings</li>
        </ul>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Why Sanford Cleaning</h3>
          <p className="mt-2 text-slate-700">
            We are a local Sanford company focused on responsiveness, quality, and simple online booking.
            Whether you search “house cleaning services near me” or “house cleaning Sanford FL,” our team shows
            up prepared and follows a detailed checklist tailored to your home.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/booking" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Schedule Now</Link>
            <Link href="/deep-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Deep Cleaning</Link>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-semibold">Popular Searches Near You</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>best house cleaning services in Sanford FL</li>
          <li>house cleaning services near me</li>
          <li>Sanford FL weekly and biweekly house cleaning providers</li>
          <li>top-rated house cleaning companies in Sanford FL with reviews</li>
        </ul>

        <p className="mt-8 text-slate-700">
          Ready to get started? Book online in minutes or request a custom quote.
          Sanford Cleaning serves Sanford and surrounding communities with flexible scheduling and transparent pricing.
        </p>
      </section>
    </main>
  );
}