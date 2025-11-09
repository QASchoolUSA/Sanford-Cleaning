import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sanford FL Move-Out Cleaning Services and Costs | Sanford Cleaning',
  description:
    'Plan your Sanford FL move-out cleaning. See costs, checklists, and how Sanford Cleaning helps renters and homeowners get spaces ready.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/sanford-fl-move-out-cleaning-services-costs' },
  openGraph: {
    title: 'Sanford FL Move-Out Cleaning Services and Costs',
    description:
      'A complete move-out cleaning guide for Sanford: pricing, what’s included, and scheduling tips from Sanford Cleaning.',
    url: 'https://sanfordcleaning.com/guides/sanford-fl-move-out-cleaning-services-costs',
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
      { '@type': 'ListItem', position: 3, name: 'Sanford FL Move-Out Cleaning Services and Costs', item: 'https://sanfordcleaning.com/guides/sanford-fl-move-out-cleaning-services-costs' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Sanford FL Move-Out Cleaning Services and Costs</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Moving out? Sanford Cleaning helps renters, property managers, and homeowners get spaces ready for the next
            occupant. Learn what’s included, typical costs, and how to schedule an efficient turnover.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/move-in-move-out-cleaning" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Move-Out Cleaning</Link>
            <Link href="/free-custom-quote" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">What’s Covered</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Kitchen and bathrooms detail: fixtures, appliances exterior, heavy degreasing and descaling</li>
          <li>Baseboards, door frames, and high-touch areas</li>
          <li>Inside oven, fridge, and window cleaning by request</li>
          <li>Final walk-through and notes for property managers</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Costs and Timing</h2>
        <p className="mt-3 text-slate-700">
          Pricing depends on size and condition; add-ons are available for appliances and windows. For apartments,
          “apartment deep cleaning” pairs well with move-out service to meet inspection standards.
        </p>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Turnover with Sanford Cleaning</h3>
          <p className="mt-2 text-slate-700">
            We coordinate with your schedule and provide reliable arrival windows—ideal for renters on deadlines and
            hosts who need fast turnover.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/booking" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Schedule Move-Out</Link>
            <Link href="/airbnb-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Airbnb Cleaning</Link>
          </div>
        </div>
      </section>
    </main>
  );
}