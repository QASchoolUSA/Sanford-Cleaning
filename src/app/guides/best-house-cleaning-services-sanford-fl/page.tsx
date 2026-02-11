import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
  title: 'Best House Cleaning Services in Sanford FL (2026 Guide)',
  description:
    'Discover the top 3 house cleaning services in Sanford FL. We compare pricing, reliability, and checklists to help you choose the best cleaner for your home.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/best-house-cleaning-services-sanford-fl' },
  openGraph: {
    title: 'Best House Cleaning Services in Sanford FL (2026 Guide)',
    description:
      'A candid comparison of top house cleaning services in Sanford, Florida. See who ranks #1 for deep cleaning, recurring service, and move-outs.',
    url: 'https://sanfordcleaning.com/guides/best-house-cleaning-services-sanford-fl',
    siteName: 'Sanford Cleaning',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best House Cleaning Services in Sanford FL (2026 Guide)',
    description:
      'Compare top house cleaning services in Sanford FL. See packages, pricing, and why locals trust Sanford Cleaning.',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best House Cleaning Services in Sanford FL (2026 Guide)',
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
    description: 'A comprehensive guide to finding the best house cleaning services in Sanford, FL.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://sanfordcleaning.com/guides/best-house-cleaning-services-sanford-fl',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does house cleaning cost in Sanford, FL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard house cleaning in Sanford typically ranges from $120 to $200 for a 3-bedroom home. Deep cleaning services start higher, often between $250 and $450 depending on the condition of the home.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best cleaning service in Sanford?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best service depends on your needs. For consistent, high-quality residential cleaning with easy online booking, Sanford Cleaning is a top local choice. For budget-focused options, individual independent cleaners may offer lower rates but with less availability.',
        },
      },
    ],
  };

  return (
    <main className="pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumbs */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/guides" className="hover:text-blue-600 transition-colors">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">Best Cleaning Services</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Best House Cleaning Services in Sanford, FL (2026)
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Finding a reliable cleaner shouldn't be a gamble. We analyzed local providers on reliability, checklist depth, and pricing transparency to help you make the right choice.
          </p>
        </header>

        {/* Hook + Answer Section */}
        <section className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-12 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900 mb-2 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-sm mr-2">✓</span>
            Quick Answer: Who is the Best?
          </h2>
          <p className="text-slate-800 leading-relaxed">
            For most homeowners in Sanford, <strong>Sanford Cleaning</strong> is the best overall choice due to our
            <strong> instant online booking</strong>, <strong>100% satisfaction guarantee</strong>, and
            <strong> standardized 50-point checklist</strong>. Unlike independent cleaners who may have variable availability,
            we offer reliable scheduling for weekly, biweekly, and deep cleaning services.
          </p>
          <div className="mt-4">
            <Link href="/booking" className="inline-flex items-center text-blue-700 font-semibold hover:underline">
              Check availability & pricing &rarr;
            </Link>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Sanford Cleaning vs. Competitors</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 font-bold">
                <tr>
                  <th className="px-6 py-4">Feature</th>
                  <th className="px-6 py-4 text-blue-700 font-extrabold text-base bg-blue-50/50">Sanford Cleaning</th>
                  <th className="px-6 py-4">Franchise Giants</th>
                  <th className="px-6 py-4">Independent Cleaners</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Online Booking</td>
                  <td className="px-6 py-4 text-green-600 font-bold bg-blue-50/30">Instant (60 seconds)</td>
                  <td className="px-6 py-4">Call for Quote</td>
                  <td className="px-6 py-4">Text/Call</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Pricing</td>
                  <td className="px-6 py-4 text-green-600 font-bold bg-blue-50/30">Flat-Rate (Transparent)</td>
                  <td className="px-6 py-4">Hourly / Hidden Fees</td>
                  <td className="px-6 py-4">Variable</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Checklist</td>
                  <td className="px-6 py-4 text-green-600 font-bold bg-blue-50/30">Standardized 50-Point</td>
                  <td className="px-6 py-4">Varies by Franchise</td>
                  <td className="px-6 py-4">Inconsistent</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Reliability</td>
                  <td className="px-6 py-4 text-green-600 font-bold bg-blue-50/30">Guaranteed Backup Team</td>
                  <td className="px-6 py-4">High</td>
                  <td className="px-6 py-4">Low (Sick days = No clean)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Deep Dive Content */}
        <section className="prose prose-slate max-w-none mb-12">
          <h2 className="text-2xl font-bold text-slate-900">How to Choose the Right Service</h2>
          <p>
            When selecting a house cleaning service in Sanford, FL, consider what matters most to you: <strong>Reliability</strong>, <strong>Cost</strong>, or <strong>Flexibility</strong>.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6">1. Determine Your Cleaning Needs</h3>
          <p>
            Are you looking for a <Link href="/deep-cleaning" className="text-blue-600 hover:underline">one-time deep clean</Link> to reset your home, or
            regular maintenance? Deep cleanings are essential for homes that haven't been professionally cleaned in over 30 days.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6">2. Verify Insurance & vetting</h3>
          <p>
            Allowing someone into your home requires trust. Ensure the company you hire conducts background checks and carries liability insurance.
            At Sanford Cleaning, every cleaner is vetted and insured for your peace of mind.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6">3. Check the "Fine Print"</h3>
          <p>
            Avoid companies that charge by the hour without a cap. Flat-rate billing, which we use, ensures you know exactly what you'll pay before we arrive.
            There are no "surprise" overtime charges if a job takes a little longer than expected.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready for a Sparkling Home?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of happy Sanford neighbors. Book your top-rated cleaning service today in under 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-blue-600 bg-white rounded-lg hover:bg-slate-100 transition-colors">
              Book Now
            </Link>
            <Link href="/custom-quote" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors">
              Get Custom Quote
            </Link>
          </div>
        </section>

        <AuthorBio
          name="Sanford Cleaning Team"
          role="Local Cleaning Experts"
          description="We are a dedicated team of cleaning professionals based right here in Sanford, FL. Our goal is to provide reliable, top-tier cleaning services that give you back your free time."
        />
      </article>
    </main>
  );
}