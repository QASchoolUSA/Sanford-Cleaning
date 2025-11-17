import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sanford FL House Cleaning Service Prices and Packages',
  description:
    'Understand house cleaning prices and packages in Sanford FL. See factors, frequency discounts, and how to get transparent quotes from Sanford Cleaning.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/sanford-fl-house-cleaning-prices-packages' },
  openGraph: {
    title: 'Sanford FL House Cleaning Prices and Packages',
    description:
      'A pricing overview for Sanford house cleaning: factors, add-ons, and ways to save with recurring service from Sanford Cleaning.',
    url: 'https://sanfordcleaning.com/guides/sanford-fl-house-cleaning-prices-packages',
    siteName: 'Sanford Cleaning',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanford FL House Cleaning Service Prices and Packages',
    description:
      'Understand house cleaning prices and packages in Sanford FL. See factors, frequency discounts, and how to get transparent quotes from Sanford Cleaning.',
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
      { '@type': 'ListItem', position: 3, name: 'Sanford FL House Cleaning Prices and Packages', item: 'https://sanfordcleaning.com/guides/sanford-fl-house-cleaning-prices-packages' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Sanford FL House Cleaning Service Prices and Packages</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Pricing varies by home size, condition, and frequency. Sanford Cleaning offers transparent quotes, clear
            checklists, and discounted weekly or biweekly plans. Use this guide to estimate pricing and choose the
            right package.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/free-custom-quote" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Get a Custom Quote</Link>
            <Link href="/house-cleaning" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Explore Packages</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">What Affects Price</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Square footage and room count</li>
          <li>Home condition and level of buildup</li>
          <li>Add-ons: inside oven, fridge, windows, baseboards, and extras</li>
          <li>Frequency: one-time vs weekly/biweekly maintenance</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Ways to Save</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Move to recurring service after a deep clean baseline</li>
          <li>Declutter surfaces before the appointment</li>
          <li>Bundle add-ons for efficiency</li>
        </ul>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Transparent Quotes from Sanford Cleaning</h3>
          <p className="mt-2 text-slate-700">
            If you’re searching “house cleaning service prices Sanford FL,” we’ll provide a clear estimate based on
            your home and preferences—no surprises.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/free-custom-quote" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Request Pricing</Link>
            <Link href="/deep-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Deep Cleaning</Link>
          </div>
        </div>
      </section>
    </main>
  );
}