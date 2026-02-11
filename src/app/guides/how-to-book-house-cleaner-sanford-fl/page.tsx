import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
  title: 'How to Prepare for a House Cleaner in Sanford FL',
  description:
    'Getting ready for your cleaning appointment? Here is a simple checklist to help your cleaner be more efficient and thorough.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/how-to-book-house-cleaner-sanford-fl' },
  openGraph: {
    title: 'How to Prepare for a House Cleaner in Sanford FL',
    description:
      'Maximize your cleaning service value with these simple preparation tips from Sanford Cleaning.',
    url: 'https://sanfordcleaning.com/guides/how-to-book-house-cleaner-sanford-fl',
    siteName: 'Sanford Cleaning',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Prepare for a House Cleaner in Sanford FL',
    description:
      'Getting ready for your cleaning appointment? Here is a simple checklist to help your cleaner be more efficient and thorough.',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Prepare for a House Cleaner in Sanford FL',
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
    description: 'A guide to preparing your home for professional cleaning services.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://sanfordcleaning.com/guides/how-to-book-house-cleaner-sanford-fl',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need to be home during the cleaning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, most of our clients in Sanford provide us with a key or door code. You can carry on with your day while we work.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I clean before the cleaners come?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No need to scrub! However, we recommend "tidying up"—picking up toys, clothes, and dishes—so our team can focus on deep cleaning surfaces rather than organizing clutter.',
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
          <span className="text-slate-800 font-medium">Prep Guide</span>
        </nav>

        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            How to Prepare for a House Cleaner (Sanford, FL)
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            You've booked the appointment. Now, here's how to get the most bang for your buck by preparing your home.
          </p>
        </header>

        {/* Hook + Answer */}
        <section className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-12 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900 mb-2 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-sm mr-2">✓</span>
            Quick Answer: Do I have to clean?
          </h2>
          <p className="text-slate-800 leading-relaxed">
            <strong>Don't clean!</strong> That's our job. However, we do ask that you <strong>declutter</strong>.
            Clearing floors and countertops of personal items allows our team to spend 100% of their time scrubbing and sanitizing,
            giving you a deeper, longer-lasting clean.
          </p>
        </section>

        {/* Checklist Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Pre-Appointment Checklist</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 font-bold">
                <tr>
                  <th className="px-6 py-4">Action Item</th>
                  <th className="px-6 py-4">Why it helps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Secure Pets</td>
                  <td className="px-6 py-4">Ensures safety for your furry friends and our team.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Clear Sink of Dishes</td>
                  <td className="px-6 py-4">Allows us to scrub the sink basin thoroughly.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Pick up Laundry/Toys</td>
                  <td className="px-6 py-4">Gives us clear access to vacuum and mop floors.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Set Alarm/Gate Code</td>
                  <td className="px-6 py-4">Ensures seamless entry if you aren't home.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="prose prose-slate max-w-none mb-12">
          <h2 className="text-2xl font-bold text-slate-900">A Note on Temperature</h2>
          <p>
            In Sanford, FL, it gets hot! For the health and safety of our cleaners, we kindly ask that you keep the air conditioning on at a reasonable temperature (74°F or lower) while we work.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Book Your Appointment</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to schedule? Our team is prepped and ready to serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-blue-600 bg-white rounded-lg hover:bg-slate-100 transition-colors">
              Book Now
            </Link>
          </div>
        </section>

        <AuthorBio />
      </article>
    </main>
  );
}