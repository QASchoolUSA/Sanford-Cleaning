import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
  title: 'How to Book a Professional House Cleaner in Sanford FL (2026)',
  description:
    'Step-by-step guide to safe and easy house cleaning booking in Sanford, FL. Compare online providers vs. independent cleaners.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/how-to-book-professional-house-cleaner-sanford-fl' },
  openGraph: {
    title: 'How to Book a Professional House Cleaner in Sanford FL (2026)',
    description:
      'Learn the safest and fastest way to book a professional cleaner in Sanford. We compare booking methods and offer tips for a smooth experience.',
    url: 'https://sanfordcleaning.com/guides/how-to-book-professional-house-cleaner-sanford-fl',
    siteName: 'Sanford Cleaning',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Book a Professional House Cleaner in Sanford FL (2026)',
    description:
      'Step-by-step guide to safe and easy house cleaning booking in Sanford, FL. Compare online providers vs. independent cleaners.',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Book a Professional House Cleaner in Sanford FL',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Your Service Level',
        text: 'Decide between Standard Maintenance (recurring) or a Deep Clean (one-time reset).',
      },
      {
        '@type': 'HowToStep',
        name: 'Check Availability',
        text: 'Use an online booking calendar to find a slot that fits your schedule.',
      },
      {
        '@type': 'HowToStep',
        name: 'Confirm Pricing',
        text: 'Ensure you are getting a flat-rate price, not an open-ended hourly estimate.',
      },
    ],
    image: 'https://sanfordcleaning.com/sanford-cleaning-homepage.webp',
    author: {
      '@type': 'Person',
      name: 'Sanford Cleaning Team',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How far in advance should I book?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For the best availability in Sanford, we recommend booking 3-5 days in advance. However, we often have last-minute openings for same-week service.',
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
          <span className="text-slate-800 font-medium">Booking Guide</span>
        </nav>

        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            How to Book a Professional House Cleaner in Sanford FL
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Booking a cleaner shouldn't be a hassle. Follow this simple guide to secure a trusted professional for your home.
          </p>
        </header>

        {/* Hook + Answer */}
        <section className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-12 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900 mb-2 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-sm mr-2">✓</span>
            Quick Answer: The Fastest Way
          </h2>
          <p className="text-slate-800 leading-relaxed">
            The safest and fastest way to book a cleaner in Sanford is via a **verified local service with online booking**.
            Avoid the "back-and-forth" of texting independent cleaners. Services like <strong>Sanford Cleaning</strong> allow you to
            <strong> select a time, see the price, and pay securely</strong> in under 60 seconds.
          </p>
          <div className="mt-4">
            <Link href="/booking" className="inline-flex items-center text-blue-700 font-semibold hover:underline">
              Try our 60-second booking form &rarr;
            </Link>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Booking Methods Compared</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 font-bold">
                <tr>
                  <th className="px-6 py-4">Method</th>
                  <th className="px-6 py-4">Speed</th>
                  <th className="px-6 py-4">Security</th>
                  <th className="px-6 py-4">Price Transparency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Online Booking (Sanford Cleaning)</td>
                  <td className="px-6 py-4 text-green-600 font-bold">Instant</td>
                  <td className="px-6 py-4 text-green-600 font-bold">Encrypted (Stripe)</td>
                  <td className="px-6 py-4 text-green-600 font-bold">100% Upfront</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Phone Call</td>
                  <td className="px-6 py-4">Slow (Voicemail tag)</td>
                  <td className="px-6 py-4">Medium</td>
                  <td className="px-6 py-4">"Estimates" only</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Craigslist / Facebook Marketplace</td>
                  <td className="px-6 py-4">Variable</td>
                  <td className="px-6 py-4 text-red-600 font-bold">Risk of Scam</td>
                  <td className="px-6 py-4 text-red-600 font-bold">Bait & Switch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="prose prose-slate max-w-none mb-12">
          <h2 className="text-2xl font-bold text-slate-900">3 Steps to a Perfect Appointment</h2>
          <ol className="list-decimal pl-6 space-y-4 text-slate-700">
            <li>
              <strong>Choose the Right Service Level:</strong> Don't book a "Standard Clean" if your home hasn't been cleaned in 6 months.
              Start with a <Link href="/deep-cleaning" className="text-blue-600 hover:underline">Deep Clean</Link> to get the best results.
            </li>
            <li>
              <strong>Select a Frequency:</strong> One-time cleans are great, but recurring services (Weekly/Bi-Weekly) often come with
              <strong> 15-20% discounts</strong>.
            </li>
            <li>
              <strong>Verify Insurance:</strong> Never let an uninsured person work in your home. If they slip or break something, you could be liable.
              Sanford Cleaning is fully insured.
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Book Safely Today</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Skip the hassle of vetting strangers. Book a background-checked, insured professional online now.
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