import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
  title: 'Sanford FL House Cleaning Prices & Packages (2026 Guide)',
  description:
    'Current house cleaning prices in Sanford, FL for 2026. See standard rates, deep cleaning costs, and how to get the best value packages.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/sanford-fl-house-cleaning-prices-packages' },
  openGraph: {
    title: 'Sanford FL House Cleaning Prices & Packages (2026 Guide)',
    description:
      'A transparent look at house cleaning costs in Sanford. Learn what you should pay for standard, deep, and move-out cleaning services.',
    url: 'https://sanfordcleaning.com/guides/sanford-fl-house-cleaning-prices-packages',
    siteName: 'Sanford Cleaning',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanford FL House Cleaning Prices & Packages (2026 Guide)',
    description:
      'Current house cleaning prices in Sanford, FL for 2026. See standard rates, deep cleaning costs, and how to get the best value packages.',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sanford FL House Cleaning Prices & Packages (2026 Guide)',
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
    description: 'A comprehensive guide to house cleaning prices in Sanford, FL.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://sanfordcleaning.com/guides/sanford-fl-house-cleaning-prices-packages',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the average cost of house cleaning in Sanford?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The average cost for a standard cleaning of a 3-bedroom home in Sanford is between $140 and $200. First-time deep cleanings typically range from $250 to $450.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer discounts for recurring service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Scheduling weekly or bi-weekly services can save you up to 20% per visit compared to one-time cleanings.',
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
          <span className="text-slate-800 font-medium">Pricing & Packages</span>
        </nav>

        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Sanford FL House Cleaning Prices & Packages (2026)
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Don't overpay for cleaning. We break down the current market rates for 2026 so you can budget for a spotless home.
          </p>
        </header>

        {/* Hook + Answer */}
        <section className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-12 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900 mb-2 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-sm mr-2">✓</span>
            Quick Answer: 2026 Market Rates
          </h2>
          <p className="text-slate-800 leading-relaxed">
            In 2026, standard house cleaning in Sanford, FL typically costs between <strong>$120 and $200</strong> for a standard 3-bedroom home.
            Deep cleaning services, which are more intensive, generally start at <strong>$250</strong> and can go up to <strong>$450+</strong> depending on the home's condition.
          </p>
          <div className="mt-4">
            <Link href="/free-custom-quote" className="inline-flex items-center text-blue-700 font-semibold hover:underline">
              Get an instant quote for your home &rarr;
            </Link>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Estimated Pricing by Home Size</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 font-bold">
                <tr>
                  <th className="px-6 py-4">Home Size</th>
                  <th className="px-6 py-4">Standard Clean (Recurring)</th>
                  <th className="px-6 py-4">Deep Clean (One-Time)</th>
                  <th className="px-6 py-4">Move-Out Clean</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">1 Bedroom / 1 Bath</td>
                  <td className="px-6 py-4">$100 - $130</td>
                  <td className="px-6 py-4">$180 - $250</td>
                  <td className="px-6 py-4">$220 - $300</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">2 Bedroom / 2 Bath</td>
                  <td className="px-6 py-4">$120 - $160</td>
                  <td className="px-6 py-4">$220 - $320</td>
                  <td className="px-6 py-4">$280 - $380</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">3 Bedroom / 2 Bath</td>
                  <td className="px-6 py-4">$140 - $200</td>
                  <td className="px-6 py-4">$280 - $400</td>
                  <td className="px-6 py-4">$350 - $480</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">4+ Bedroom / 3+ Bath</td>
                  <td className="px-6 py-4">$180+</td>
                  <td className="px-6 py-4">$350+</td>
                  <td className="px-6 py-4">$450+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-500 text-center italic">
            *Prices are estimates based on local market averages. Actual costs depend on square footage and condition.
          </p>
        </section>

        <section className="prose prose-slate max-w-none mb-12">
          <h2 className="text-2xl font-bold text-slate-900">Factors That Affect Your Quote</h2>
          <p>
            When you request a quote, three main factors determine the final price:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Condition:</strong> A home that hasn't been cleaned in months requires more time and products than a well-maintained space.</li>
            <li><strong>Pets:</strong> Pet hair removal adds time to the cleaning process.</li>
            <li><strong>Frequency:</strong> We offer discounts for weekly (20% off) and bi-weekly (15% off) services because maintenance cleans are faster.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6">Hidden Costs to Watch For</h3>
          <p>
            Some competitors charge extra for "add-ons" that we include or transparently price. Be wary of upcharges for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Travel fees (We never charge this for Sanford area)</li>
            <li>Supplies fees (We bring our own premium supplies)</li>
            <li>weekend surcharges</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Get Your Exact Price</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Stop guessing. Fill out our simple form to get a custom, flat-rate quote for your home today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-custom-quote" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-blue-600 bg-white rounded-lg hover:bg-slate-100 transition-colors">
              Get Free Quote
            </Link>
            <Link href="/booking" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors">
              Book Now
            </Link>
          </div>
        </section>

        <AuthorBio />
      </article>
    </main>
  );
}