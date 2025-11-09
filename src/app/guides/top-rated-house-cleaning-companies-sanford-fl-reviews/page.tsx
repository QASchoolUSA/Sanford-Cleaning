import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top-Rated House Cleaning Companies in Sanford FL with Reviews | Sanford Cleaning',
  description:
    'Explore how to evaluate top-rated house cleaning companies in Sanford FL. Learn review signals, quality checks, and why locals choose Sanford Cleaning.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/top-rated-house-cleaning-companies-sanford-fl-reviews' },
  openGraph: {
    title: 'Top-Rated House Cleaning Companies in Sanford FL',
    description:
      'A review-driven guide to selecting the best house cleaning companies in Sanford FL—what to look for and questions to ask.',
    url: 'https://sanfordcleaning.com/guides/top-rated-house-cleaning-companies-sanford-fl-reviews',
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
      { '@type': 'ListItem', position: 3, name: 'Top-Rated House Cleaning Companies in Sanford FL', item: 'https://sanfordcleaning.com/guides/top-rated-house-cleaning-companies-sanford-fl-reviews' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Top-Rated House Cleaning Companies in Sanford FL with Customer Reviews</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Reviews help identify reliable, consistent cleaning companies. Sanford Cleaning focuses on quality and
            communication—here’s how to read reviews, compare options, and select a provider that fits your schedule
            and budget.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/booking" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book Now</Link>
            <Link href="/house-cleaning" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">View House Cleaning</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">What Reviews Reveal</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Consistency: punctuality, checklist adherence, and repeat satisfaction</li>
          <li>Communication: clear scheduling, job notes, and service follow-up</li>
          <li>Value: fair pricing, transparent add-ons, and flexible plans</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Keywords to Search</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>top-rated house cleaning companies in Sanford FL</li>
          <li>best house cleaners Sanford reviews</li>
          <li>house cleaning services near me with customer reviews</li>
        </ul>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Why Local Homeowners Choose Sanford Cleaning</h3>
          <p className="mt-2 text-slate-700">
            We provide professional teams, eco-friendly options, and a detailed checklist every visit. If you value
            reliability and friendly communication, join Sanford homeowners who trust Sanford Cleaning.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/booking" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Schedule Today</Link>
            <Link href="/deep-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Deep Cleaning</Link>
          </div>
        </div>
      </section>
    </main>
  );
}