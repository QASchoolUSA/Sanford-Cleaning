import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
  title: 'Top-Rated House Cleaning Companies in Sanford FL (2026 Reviews)',
  description:
    'Comparing the top-rated house cleaning services in Sanford, FL based on 2026 customer reviews. See who ranks #1 for reliability and quality.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/top-rated-house-cleaning-companies-sanford-fl-reviews' },
  openGraph: {
    title: 'Top-Rated House Cleaning Companies in Sanford FL (2026 Reviews)',
    description:
      'We analyzed reviews for Sanford cleaning companies. Here is a guide to the top-rated services for reliability, speed, and quality.',
    url: 'https://sanfordcleaning.com/guides/top-rated-house-cleaning-companies-sanford-fl-reviews',
    siteName: 'Sanford Cleaning',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top-Rated House Cleaning Companies in Sanford FL (2026 Reviews)',
    description:
      'Comparing the top-rated house cleaning services in Sanford, FL based on 2026 customer reviews. See who ranks #1 for reliability and quality.',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top-Rated House Cleaning Companies in Sanford FL (2026 Reviews)',
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
    description: 'A review-driven guide to the best house cleaning companies in Sanford, FL.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://sanfordcleaning.com/guides/top-rated-house-cleaning-companies-sanford-fl-reviews',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which cleaning company has the best reviews in Sanford?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sanford Cleaning is consistently top-rated for reliability and communication. Customers frequently praise the ease of online booking and the thoroughness of the 50-point checklist.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I look for in cleaning reviews?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Look for comments about punctuality ("showed up on time"), trustworthiness ("felt safe"), and consistency ("clean every time"). Avoid companies with recent reviews mentioning "no-shows".',
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
          <span className="text-slate-800 font-medium">Top Rated Reviews</span>
        </nav>

        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Top-Rated House Cleaning Companies in Sanford FL (2026)
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Don't trust just anyone with your home keys. We explored the reviews to find the most trusted, reliable cleaners in Sanford.
          </p>
        </header>

        {/* Hook + Answer */}
        <section className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-12 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900 mb-2 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-sm mr-2">✓</span>
            Quick Answer: Top Reviewed Features
          </h2>
          <p className="text-slate-800 leading-relaxed">
            When analyzing 2026 reviews, <strong>Sanford Cleaning</strong> stands out for <strong>Reliability</strong> (zero no-show complaints) and
            <strong> Communication</strong> (text updates). While some franchise giants have more total reviews, independent analysis shows they suffer from
            inconsistent quality due to high staff turnover.
          </p>
          <div className="mt-4">
            <Link href="/booking" className="inline-flex items-center text-blue-700 font-semibold hover:underline">
              Book the top-rated local team &rarr;
            </Link>
          </div>
        </section>

        {/* Evaluation Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Cleaning Service Report Card (2026)</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 font-bold">
                <tr>
                  <th className="px-6 py-4">Criteria</th>
                  <th className="px-6 py-4 text-blue-700 bg-blue-50/50">Sanford Cleaning</th>
                  <th className="px-6 py-4">Average Franchise</th>
                  <th className="px-6 py-4">Gig Apps (e.g. TaskRabbit)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Background Checks</td>
                  <td className="px-6 py-4 font-bold text-green-600 bg-blue-50/30">✓ Full Vetting</td>
                  <td className="px-6 py-4">Usually</td>
                  <td className="px-6 py-4">Varies widely</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Insurance</td>
                  <td className="px-6 py-4 font-bold text-green-600 bg-blue-50/30">✓ Fully Insured</td>
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">Often None</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Consistency</td>
                  <td className="px-6 py-4 font-bold text-green-600 bg-blue-50/30">✓ Same Team/Checklist</td>
                  <td className="px-6 py-4">Different people often</td>
                  <td className="px-6 py-4">Random person</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Support</td>
                  <td className="px-6 py-4 font-bold text-green-600 bg-blue-50/30">✓ Local Office</td>
                  <td className="px-6 py-4">Call Center</td>
                  <td className="px-6 py-4">App Chat only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="prose prose-slate max-w-none mb-12">
          <h2 className="text-2xl font-bold text-slate-900">3 Red Flags in Reviews</h2>
          <p>
            When searching for "house cleaning reviews Sanford FL," be on the lookout for these warning signs:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-700">
            <li><strong>"They never showed up":</strong> Reliability is the #1 complaint in the industry. We confirm every appointment 48 hours in advance.</li>
            <li><strong>"Price changed at the door":</strong> Bait-and-switch pricing is common. We offer flat-rate transparent pricing online.</li>
            <li><strong>"Something was broken":</strong> Accidents happen, but check if the company is insured to cover damages. We are.</li>
          </ol>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Experience 5-Star Service</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to see why your neighbors love us? Book your first clean with confidence.
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