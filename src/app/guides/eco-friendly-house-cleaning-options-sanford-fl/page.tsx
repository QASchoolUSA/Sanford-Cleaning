import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
  title: 'Eco-Friendly House Cleaning in Sanford FL (Safe for Pets & Kids)',
  description:
    'Looking for green cleaning in Sanford? We use safe, non-toxic products that are tough on dirt but safe for your pets and children.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/eco-friendly-house-cleaning-options-sanford-fl' },
  openGraph: {
    title: 'Eco-Friendly House Cleaning in Sanford FL (Safe for Pets & Kids)',
    description:
      'A guide to our non-toxic cleaning methods. Perfect for allergy sufferers, pet owners, and families in Sanford, FL.',
    url: 'https://sanfordcleaning.com/guides/eco-friendly-house-cleaning-options-sanford-fl',
    siteName: 'Sanford Cleaning',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eco-Friendly House Cleaning in Sanford FL (Safe for Pets & Kids)',
    description:
      'Looking for green cleaning in Sanford? We use safe, non-toxic products that are tough on dirt but safe for your pets and children.',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Eco-Friendly House Cleaning in Sanford FL (Safe for Pets & Kids)',
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
    description: 'A guide to eco-friendly, non-toxic house cleaning services in Sanford, FL.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://sanfordcleaning.com/guides/eco-friendly-house-cleaning-options-sanford-fl',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do green cleaning products actually work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We use professional-grade eco-friendly solutions that are just as effective as traditional chemicals, without the harsh fumes or residues.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is eco-friendly cleaning more expensive?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At Sanford Cleaning, we do not charge extra for green cleaning. We believe safety shouldn\u2019t come with a surcharge.',
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
          <span className="text-slate-800 font-medium">Eco-Friendly Cleaning</span>
        </nav>

        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Eco-Friendly House Cleaning in Sanford FL
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Clean shouldn't smell like chemicals. Experience a fresh home that is safe for your babies, pets, and the planet.
          </p>
        </header>

        {/* Hook + Answer */}
        <section className="bg-green-50 border border-green-100 rounded-xl p-6 mb-12 shadow-sm">
          <h2 className="text-xl font-bold text-green-900 mb-2 flex items-center">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-sm mr-2">✓</span>
            Quick Answer: Is it Safe?
          </h2>
          <p className="text-slate-800 leading-relaxed">
            <strong>Yes.</strong> Our eco-friendly cleaning service uses <strong>EPA Safer Choice certified products</strong>
            and HEPA filtration vacuums to remove allergens without introducing harsh toxins. It is the #1 choice for
            <strong> pet owners and families with young children</strong> in Sanford.
          </p>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Green Cleaning vs. Traditional Chemicals</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 font-bold">
                <tr>
                  <th className="px-6 py-4">Feature</th>
                  <th className="px-6 py-4 text-green-700 bg-green-50/50">Sanford Green Clean</th>
                  <th className="px-6 py-4">Traditional Cleaners</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Chemical Fumes</td>
                  <td className="px-6 py-4 text-green-700 font-bold">None (Fresh/Neutral)</td>
                  <td className="px-6 py-4">Strong (Bleach/Ammonia)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Pet Safety</td>
                  <td className="px-6 py-4 text-green-700 font-bold">100% Pet Safe</td>
                  <td className="px-6 py-4">Risk of paw irritation</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Residue</td>
                  <td className="px-6 py-4">No toxic residue</td>
                  <td className="px-6 py-4">Chemical film left behind</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Allergens</td>
                  <td className="px-6 py-4">Removed via HEPA</td>
                  <td className="px-6 py-4">Often stirred up</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="prose prose-slate max-w-none mb-12">
          <h2 className="text-2xl font-bold text-slate-900">Our Green Toolkit</h2>
          <p>
            We don't just use vinegar and hope for the best. We use professional, plant-based powerhouses:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Hydrogen Peroxide based cleaners:</strong> Kills 99.9% of germs without bleach.</li>
            <li><strong>Citrus Solvents:</strong> Cuts through grease using natural d-limonene.</li>
            <li><strong>Microfiber color-coding:</strong> Prevents cross-contamination between bathrooms and kitchens.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Go Green Today</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Get the same spotless shine without the chemical smell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-green-600 bg-white rounded-lg hover:bg-slate-100 transition-colors">
              Book Green Clean
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