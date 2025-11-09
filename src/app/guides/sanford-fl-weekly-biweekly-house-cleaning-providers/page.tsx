import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sanford FL Weekly and Biweekly House Cleaning Service Providers | Sanford Cleaning',
  description:
    'Find weekly and biweekly house cleaning in Sanford FL. Learn benefits, scheduling, and how Sanford Cleaning maintains a consistently clean home.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/sanford-fl-weekly-biweekly-house-cleaning-providers' },
  openGraph: {
    title: 'Weekly and Biweekly House Cleaning in Sanford FL',
    description:
      'A maintenance cleaning guide for Sanford homeowners—how recurring service works and keeps your home fresh.',
    url: 'https://sanfordcleaning.com/guides/sanford-fl-weekly-biweekly-house-cleaning-providers',
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
      { '@type': 'ListItem', position: 3, name: 'Sanford Weekly and Biweekly House Cleaning Providers', item: 'https://sanfordcleaning.com/guides/sanford-fl-weekly-biweekly-house-cleaning-providers' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Sanford FL Weekly and Biweekly House Cleaning Service Providers</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Recurring cleaning keeps your home consistently clean with predictable scheduling. Sanford Cleaning offers
            weekly and biweekly plans that fit busy families and professionals in Sanford and nearby areas.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/booking" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Start Recurring Service</Link>
            <Link href="/house-cleaning" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">Benefits of Recurring Cleaning</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Lower per-visit rates compared to one-time service</li>
          <li>Consistent cleanliness and fewer deep cleaning needs</li>
          <li>Predictable scheduling windows</li>
          <li>Tailored checklists for your household</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Keywords and Searches</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>weekly house cleaning Sanford FL</li>
          <li>biweekly house cleaning near me</li>
          <li>recurring house cleaning services Sanford</li>
        </ul>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Sanford Cleaning: Set It and Forget It</h3>
          <p className="mt-2 text-slate-700">
            We establish a cadence that fits your schedule, with friendly communication and flexible adjustments.
            Keep your home fresh without the hassle.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/booking" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book Weekly/Biweekly</Link>
            <Link href="/deep-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">First-Time Deep Clean</Link>
          </div>
        </div>
      </section>
    </main>
  );
}