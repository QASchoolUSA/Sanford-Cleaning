import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';
import GuideHeroImage from '@/components/GuideHeroImage';

const CANONICAL = 'https://sanfordcleaning.com/guides/sanford-fl-house-cleaning-prices-packages';
const COST_GUIDE = '/guides/how-much-does-house-cleaning-cost-sanford-fl';
const HERO_IMAGE = 'https://sanfordcleaning.com/guide-house-cleaning-packages-sanford.webp';

export const metadata: Metadata = {
  title: 'House Cleaning Packages in Sanford, FL | Weekly & Biweekly Plans',
  description:
    'Compare Sanford house cleaning packages: weekly, biweekly, and monthly plans. See recurring discounts and when a package beats one-time cleaning.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'House Cleaning Packages in Sanford, FL | Weekly & Biweekly Plans',
    description:
      'Recurring house cleaning packages for Sanford homeowners—weekly and biweekly value, what’s included, and how packages differ from one-time pricing.',
    url: CANONICAL,
    siteName: 'Sanford Cleaning',
    type: 'article',
    images: [HERO_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Cleaning Packages in Sanford, FL | Weekly & Biweekly Plans',
    description:
      'Weekly and biweekly house cleaning packages in Sanford, FL—recurring discounts and plan comparisons.',
    images: [HERO_IMAGE],
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'House Cleaning Packages in Sanford, FL: Weekly & Biweekly Plans (2026)',
    image: HERO_IMAGE,
    author: {
      '@type': 'Organization',
      '@id': 'https://sanfordcleaning.com/#organization',
      name: 'Sanford Cleaning',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://sanfordcleaning.com/#organization',
      name: 'Sanford Cleaning',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sanfordcleaning.com/sanford-cleaning-logo.png',
      },
    },
    datePublished: '2026-02-10',
    dateModified: '2026-07-10',
    description:
      'Guide to recurring house cleaning packages in Sanford, FL—weekly, biweekly, and monthly plan value versus one-time cleans.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': CANONICAL,
    },
    about: [
      { '@type': 'Thing', name: 'House Cleaning Packages' },
      { '@type': 'Thing', name: 'Recurring Maid Service' },
      { '@type': 'City', name: 'Sanford', sameAs: 'https://en.wikipedia.org/wiki/Sanford,_Florida' },
    ],
    mentions: [
      { '@type': 'Service', name: 'House Cleaning' },
      { '@type': 'Service', name: 'Deep Cleaning' },
      { '@type': 'Service', name: 'Maintenance Cleaning' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you offer discounts for recurring house cleaning in Sanford?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Weekly plans typically save about 20% per visit and biweekly plans about 12–18% per visit versus one-time maintenance cleans, because soil load stays lighter between visits.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which cleaning package is best for Sanford homeowners?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most Sanford homeowners choose biweekly maintenance after an initial deep clean. Weekly suits busy households with pets or kids. Monthly works only when the home stays lightly used between visits.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where can I see exact house cleaning cost ranges for Sanford?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For dollar ranges by home size and deep vs maintenance scope, see the Sanford house cleaning cost guide at https://sanfordcleaning.com/guides/how-much-does-house-cleaning-cost-sanford-fl. This packages page focuses on recurring plan value.',
        },
      },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sanfordcleaning.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://sanfordcleaning.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Cleaning Packages', item: CANONICAL },
    ],
  };

  return (
    <main className="pt-24 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <article className="container mx-auto px-4 max-w-4xl">
        <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/guides" className="hover:text-blue-600 transition-colors">
            Guides
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">Cleaning Packages</span>
        </nav>

        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            House Cleaning Packages in Sanford, FL: Weekly &amp; Biweekly Plans (2026)
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Choose a recurring plan that fits your household—not a one-off scramble. This guide compares package
            cadence and value. For dollar ranges by home size, use the{' '}
            <Link href={COST_GUIDE} className="text-blue-700 font-semibold hover:underline">
              Sanford house cleaning cost guide
            </Link>
            .
          </p>
        </header>

        <GuideHeroImage
          src="/guide-house-cleaning-packages-sanford.webp"
          alt="Bright Sanford, FL living room and hallway with mopped floors after a recurring weekly or biweekly house cleaning package"
          caption="Recurring package results: consistently maintained floors and living areas between weekly or biweekly visits."
          priority
        />

        <section className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-12 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Quick Answer: Best Package for Most Homes</h2>
          <p className="text-slate-800 leading-relaxed">
            Most Sanford homeowners get the best results from an <strong>initial deep clean</strong> followed by a{' '}
            <strong>biweekly maintenance package</strong>. Weekly plans win for pets, kids, or high traffic. Recurring
            visits typically cost <strong>12–20% less per clean</strong> than equivalent one-time maintenance visits
            because soil load stays lighter.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Package Comparison: Weekly vs Biweekly vs Monthly</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 font-bold">
                <tr>
                  <th className="px-6 py-4">Package</th>
                  <th className="px-6 py-4">Best for</th>
                  <th className="px-6 py-4">Per-visit value</th>
                  <th className="px-6 py-4">Humidity fit (Sanford)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Weekly</td>
                  <td className="px-6 py-4">Pets, kids, busy households</td>
                  <td className="px-6 py-4">~20% below one-time rate</td>
                  <td className="px-6 py-4">Strongest bathroom/floor control</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Biweekly</td>
                  <td className="px-6 py-4">Most 2–4 bedroom homes</td>
                  <td className="px-6 py-4">~12–18% below one-time rate</td>
                  <td className="px-6 py-4">Best balance for May–October RH</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Monthly</td>
                  <td className="px-6 py-4">Lightly used homes / travel</td>
                  <td className="px-6 py-4">Closest to one-time pricing</td>
                  <td className="px-6 py-4">Often needs seasonal deep add-ons</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Every Recurring Package Includes</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Kitchen surfaces, sink, appliance exteriors, and floors</li>
            <li>Bathroom disinfection (toilets, showers, vanities, mirrors)</li>
            <li>Dusting of reachable surfaces, vacuuming, and mopping</li>
            <li>Trash removal and bed making when requested</li>
            <li>Consistent crew cadence once your calendar slot is locked</li>
          </ul>
          <p className="mt-4 text-slate-700">
            Deep-clean resets, move-outs, and Airbnb turnovers are scoped separately—see{' '}
            <Link href="/deep-cleaning" className="text-blue-700 font-medium hover:underline">
              deep cleaning
            </Link>
            ,{' '}
            <Link href="/move-in-move-out-cleaning" className="text-blue-700 font-medium hover:underline">
              move-out cleaning
            </Link>
            , and{' '}
            <Link href="/airbnb-cleaning" className="text-blue-700 font-medium hover:underline">
              Airbnb cleaning
            </Link>
            .
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How Packages Relate to Dollar Pricing</h2>
          <p className="text-slate-700 mb-4">
            Package discounts apply to your quoted maintenance rate. Example planning bands for a typical Sanford
            3-bedroom home (aligned with our cost guide):
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>
              <strong>One-time maintenance reference:</strong> about $170–$240
            </li>
            <li>
              <strong>Biweekly package visits:</strong> commonly land toward the lower end of that band after the
              discount
            </li>
            <li>
              <strong>Initial deep clean:</strong> about $320–$450 before recurring maintenance begins
            </li>
          </ul>
          <p className="mt-4 text-slate-700">
            Full size-by-size ranges, condition multipliers, and humidity cadence live in{' '}
            <Link href={COST_GUIDE} className="text-blue-700 font-semibold hover:underline">
              How Much Does House Cleaning Cost in Sanford, FL?
            </Link>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Hidden Fees to Watch When Comparing Packages</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Travel fees inside the Sanford service area (we do not add these for core coverage)</li>
            <li>Surprise supplies fees (standard professional supplies are included)</li>
            <li>Weekend surcharges that erase “discounted” package math</li>
          </ul>
        </section>

        <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Lock In a Recurring Package</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Start with a deep clean or jump into weekly/biweekly maintenance. Get a flat-rate quote for your home size.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-blue-600 bg-white rounded-lg hover:bg-slate-100 transition-colors"
            >
              Book a Package
            </Link>
            <Link
              href={COST_GUIDE}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors"
            >
              View Cost Ranges
            </Link>
          </div>
        </section>

        <AuthorBio description="The Sanford Cleaning team helps homeowners pick weekly or biweekly packages that match Central Florida humidity and household traffic—not just the cheapest one-time rate." />
      </article>
    </main>
  );
}
