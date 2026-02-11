import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
  title: 'Apartment Deep Cleaning in Sanford FL (Get Your Deposit Back)',
  description:
    'Need a deep clean for your Sanford apartment? We specialize in move-out cleanings that pass landlord inspections. 100% Deposit Back Guarantee.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/apartment-deep-cleaning-sanford-fl' },
  openGraph: {
    title: 'Apartment Deep Cleaning in Sanford FL (Get Your Deposit Back)',
    description:
      'The ultimate checklist for apartment cleaning in Sanford. Don\'t lose your security deposit to dirt.',
    url: 'https://sanfordcleaning.com/guides/apartment-deep-cleaning-sanford-fl',
    siteName: 'Sanford Cleaning',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apartment Deep Cleaning in Sanford FL (Get Your Deposit Back)',
    description:
      'Need a deep clean for your Sanford apartment? We specialize in move-out cleanings that pass landlord inspections. 100% Deposit Back Guarantee.',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Apartment Deep Cleaning in Sanford FL (Get Your Deposit Back)',
    image: 'https://sanfordcleaning.com/sanford-cleaning-homepage.webp',
    author: {
      '@type': 'Person',
      name: 'Sanford Cleaning Team',
      url: 'https://sanfordcleaning.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sanford Cleaning',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sanfordcleaning.com/sanford-cleaning-logo.png',
      },
    },
    datePublished: '2026-02-10',
    dateModified: '2026-02-10',
    description: 'A guide to deep cleaning apartments in Sanford, FL, focused on getting your security deposit back.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://sanfordcleaning.com/guides/apartment-deep-cleaning-sanford-fl',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you clean inside the oven and fridge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Inside oven and fridge cleaning are popular add-ons for our apartment deep cleaning packages, ensuring you leave the appliance looking brand new.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does an apartment deep clean take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A typical 2-bedroom apartment deep clean takes between 3 to 5 hours, depending on the condition and if the unit is furnished or empty.',
        },
      },
    ],
  };

  return (
    <main className="pt-24 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="container mx-auto px-4 max-w-4xl">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/guides" className="hover:text-blue-600 transition-colors">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">Apartment Cleaning</span>
        </nav>

        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Apartment Deep Cleaning in Sanford FL
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Whether you're moving out or just doing a seasonal reset, our apartment deep cleaning gets into the corners you've ignored for months.
          </p>
        </header>

        {/* Hook + Answer */}
        <section className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-12 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900 mb-2 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-sm mr-2">✓</span>
            Quick Answer: The "Deposit Back" Standard
          </h2>
          <p className="text-slate-800 leading-relaxed">
            To pass a landlord inspection in Sanford, a standard vacuum isn't enough. You need a <strong>Deep Clean</strong> that includes
            <strong> baseboards, inside appliances, cabinets, and window sills</strong>. Sanford Cleaning specializes in this "inspection-ready" standard.
          </p>
          <div className="mt-4">
            <Link href="/booking" className="inline-flex items-center text-blue-700 font-semibold hover:underline">
              Get an inspection-grade clean quote &rarr;
            </Link>
          </div>
        </section>

        {/* Checklist Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Landlord Inspection Checklist</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 font-bold">
                <tr>
                  <th className="px-6 py-4">Area</th>
                  <th className="px-6 py-4">What Landlords Check</th>
                  <th className="px-6 py-4 text-blue-700">Sanford Cleaning Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Kitchen</td>
                  <td className="px-6 py-4">Grease on hood/cabinets</td>
                  <td className="px-6 py-4 text-blue-700 font-bold">✓ Heavy Degreasing</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Appliances</td>
                  <td className="px-6 py-4">Burnt food in oven</td>
                  <td className="px-6 py-4 text-blue-700 font-bold">✓ Oven/Fridge (Add-on)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Bathroom</td>
                  <td className="px-6 py-4">Grout stains & Mold</td>
                  <td className="px-6 py-4 text-blue-700 font-bold">✓ Scrubbed & Sanitized</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">General</td>
                  <td className="px-6 py-4">Dusty baseboards/fans</td>
                  <td className="px-6 py-4 text-blue-700 font-bold">✓ Hand-Wiped</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="prose prose-slate max-w-none mb-12">
          <h2 className="text-2xl font-bold text-slate-900">Why Choose Us for Apartments?</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Flexible Access:</strong> We can pick up keys from leasing offices or use lockboxes.</li>
            <li><strong>Small Space Experts:</strong> We know how to clean efficient layouts effectively without getting in the way.</li>
            <li><strong>Last Minute Booking:</strong> Moving happens fast. We often have same-week availability.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Secure Your Deposit</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Don't leave money on the table. Book a professional move-out clean today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-blue-600 bg-white rounded-lg hover:bg-slate-100 transition-colors">
              Book Now
            </Link>
            <Link href="/free-custom-quote" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors">
              Get Quote
            </Link>
          </div>
        </section>

        <AuthorBio />
      </article>
    </main>
  );
}