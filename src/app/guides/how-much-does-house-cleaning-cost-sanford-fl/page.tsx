import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

const CANONICAL =
  'https://sanfordcleaning.com/guides/how-much-does-house-cleaning-cost-sanford-fl';

export const metadata: Metadata = {
  title: 'How Much Does House Cleaning Cost in Sanford, FL? (2026)',
  description:
    'Local 2026 house cleaning prices in Sanford, FL: apartments from $140–$190, 3-bedroom homes $170–$240 maintenance or $320–$450 deep clean. See what affects cost.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'How Much Does House Cleaning Cost in Sanford, FL? (2026 Local Pricing Guide)',
    description:
      'Transparent Sanford house cleaning cost ranges by home size, deep vs maintenance scope, humidity cadence, and quote factors.',
    url: CANONICAL,
    siteName: 'Sanford Cleaning',
    type: 'article',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does House Cleaning Cost in Sanford, FL? (2026)',
    description:
      'Sanford Cleaning prices house cleaning from $140 to $350+ per visit. See local ranges by home size and scope.',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
};

/** AI Overview Target Block — 40–60 words, active voice, absolute nouns, zero fluff */
const AI_OVERVIEW_BLOCK =
  'Sanford Cleaning prices house cleaning in Sanford, FL from $140 to $350+ per visit. Apartment maintenance cleans start near $140–$190. A standard 3-bedroom home averages $170–$240 for maintenance and $320–$450 for deep cleaning. Final price depends on square footage, soil level, pets, and cleaning frequency.';

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${CANONICAL}#article`,
    headline: 'How Much Does House Cleaning Cost in Sanford, FL? (2026 Local Pricing Guide)',
    description:
      'First-party pricing guide for house cleaning costs in Sanford, FL, including maintenance vs deep clean ranges and humidity-aware scheduling.',
    image: 'https://sanfordcleaning.com/sanford-cleaning-homepage.webp',
    datePublished: '2026-07-10',
    dateModified: '2026-07-10',
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': CANONICAL,
    },
    about: [
      { '@type': 'Thing', name: 'House Cleaning Cost' },
      { '@type': 'Thing', name: 'Professional Cleaning Services in Sanford, FL' },
      { '@type': 'City', name: 'Sanford', sameAs: 'https://en.wikipedia.org/wiki/Sanford,_Florida' },
      { '@type': 'Service', name: 'House Cleaning' },
      { '@type': 'Service', name: 'Deep Cleaning' },
    ],
    mentions: [
      { '@type': 'Service', name: 'Apartment Cleaning' },
      { '@type': 'Service', name: 'Move-Out Cleaning' },
      { '@type': 'Service', name: 'Airbnb Cleaning' },
      { '@type': 'Service', name: 'Commercial Cleaning' },
      { '@type': 'Service', name: 'Post-Construction Cleaning' },
      { '@type': 'Audience', audienceType: 'Homeowners' },
      { '@type': 'Audience', audienceType: 'Property Managers' },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.ai-overview-target'],
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
          text: AI_OVERVIEW_BLOCK,
        },
      },
      {
        '@type': 'Question',
        name: 'Is deep cleaning more expensive than regular house cleaning in Sanford?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. In Sanford, a deep clean for a typical 3-bedroom home usually runs $320–$450, while a maintenance clean for the same home averages $170–$240 because deep cleans include baseboards, detailed kitchens, and inside appliances when scoped.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should Sanford homeowners book professional cleaning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most Sanford homeowners get the best results with biweekly maintenance cleaning plus two deep cleans per year. High-humidity waterfront homes near Lake Monroe often need tighter bathroom and floor attention during May–October.',
        },
      },
      {
        '@type': 'Question',
        name: 'What factors raise house cleaning prices in Sanford?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Square footage, heavy pet hair, 60+ days since the last clean, inside-oven or inside-fridge add-ons, and post-renovation dust all raise price. Sanford Cleaning applies condition multipliers of roughly 15–30% for neglected or high-soil homes.',
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
      {
        '@type': 'ListItem',
        position: 3,
        name: 'House Cleaning Cost Sanford FL',
        item: CANONICAL,
      },
    ],
  };

  return (
    <main className="pt-24 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
          <span className="text-slate-800 font-medium">House Cleaning Cost</span>
        </nav>

        {/* H1 — entity discovery */}
        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            How Much Does House Cleaning Cost in Sanford, FL? (2026 Local Pricing Guide)
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            First-party pricing ranges from Sanford Cleaning for homeowners, apartment owners, and property managers
            across Sanford and Seminole County—not recycled national averages.
          </p>
        </header>

        {/* H2 — question + AI Overview Target Block */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            How Much Does House Cleaning Cost in Sanford, FL?
          </h2>
          <p className="ai-overview-target text-lg text-slate-800 leading-relaxed bg-slate-50 border border-slate-200 rounded-lg p-5">
            {AI_OVERVIEW_BLOCK}
          </p>
        </section>

        {/* H3: Price ranges */}
        <section className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            Sanford House Cleaning Price Ranges by Home Size
          </h3>
          <p className="text-slate-700 mb-6">
            Sanford Cleaning builds quotes from square footage, bathroom count, and soil level. The bands below reflect
            typical 2026 jobs in Sanford, Lake Mary, Longwood, and nearby communities.
          </p>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 font-bold">
                <tr>
                  <th className="px-6 py-4">Home profile</th>
                  <th className="px-6 py-4">Maintenance clean</th>
                  <th className="px-6 py-4">Deep clean</th>
                  <th className="px-6 py-4">Typical crew hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Apartment / condo ≤ 900 sq ft</td>
                  <td className="px-6 py-4">$140 – $190</td>
                  <td className="px-6 py-4">$220 – $300</td>
                  <td className="px-6 py-4">2–4 hrs</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">3 bed / 2 bath (~1,600–2,000 sq ft)</td>
                  <td className="px-6 py-4">$170 – $240</td>
                  <td className="px-6 py-4">$320 – $450</td>
                  <td className="px-6 py-4">3–6 hrs</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Large / waterfront (2,500+ sq ft)</td>
                  <td className="px-6 py-4">$240 – $350+</td>
                  <td className="px-6 py-4">$450 – $700+</td>
                  <td className="px-6 py-4">5–9 hrs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Ranges are estimates for planning. Final quotes depend on access, add-ons, and condition. Book a custom quote
            for multi-unit or post-construction scopes.
          </p>
        </section>

        {/* H3: Maintenance vs deep */}
        <section className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            Maintenance Clean vs Deep Clean Cost Differences
          </h3>
          <p className="text-slate-700 mb-4">
            A maintenance clean keeps kitchens, bathrooms, floors, and surfaces guest-ready between visits. A deep clean
            resets neglected zones: baseboards, detailed tile, inside microwave, and often inside oven or fridge when
            scoped.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>
              <strong>Maintenance:</strong> Best for weekly or biweekly cadence after an initial deep clean.
            </li>
            <li>
              <strong>Deep:</strong> Best for first visits, seasonal resets, or homes idle 60+ days.
            </li>
            <li>
              <strong>Price efficiency:</strong> Biweekly maintenance visits typically cost 12–18% less per visit than
              monthly visits because soil load stays lighter.
            </li>
          </ul>
          <p className="mt-4 text-slate-700">
            Compare scopes on our{' '}
            <Link href="/house-cleaning" className="text-blue-700 font-medium hover:underline">
              house cleaning
            </Link>{' '}
            and{' '}
            <Link href="/deep-cleaning" className="text-blue-700 font-medium hover:underline">
              deep cleaning
            </Link>{' '}
            pages.
          </p>
        </section>

        {/* H3: Humidity */}
        <section className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            Why Florida Humidity Changes Cleaning Frequency (and Price Efficiency)
          </h3>
          <p className="text-slate-700 mb-4">
            Sanford’s humid season (roughly May–October) accelerates bathroom film, musty carpet edges, and hard-water
            residue—especially in homes near Lake Monroe and the St. Johns River corridor. National “clean monthly”
            advice under-serves these homes.
          </p>
          <p className="text-slate-700">
            Sanford Cleaning’s humidity dwell-time protocol prioritizes shower tracks, grout lines, and AC closet floors
            every visit, then sequences floor drying with AC/fans running. Most local homeowners get better odor control
            with <strong>biweekly maintenance + two deep cleans per year</strong> than with monthly-only service. Read
            more in our{' '}
            <Link
              href="/guides/florida-humidity-deep-cleaning-sanford-waterfront-homes"
              className="text-blue-700 font-medium hover:underline"
            >
              Florida humidity deep cleaning guide
            </Link>
            .
          </p>
        </section>

        {/* H3: Price raisers */}
        <section className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            What Raises the Price: Pets, Neglect Windows, and Add-Ons
          </h3>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 font-bold">
                <tr>
                  <th className="px-6 py-4">Factor</th>
                  <th className="px-6 py-4">Typical impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Heavy pet hair / multiple pets</td>
                  <td className="px-6 py-4">+10–25% time and price</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">60+ days since last professional clean</td>
                  <td className="px-6 py-4">Route to deep clean; +15–30% vs maintenance</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Inside oven / fridge / cabinets</td>
                  <td className="px-6 py-4">Add-on line items (quoted per appliance/zone)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Post-renovation dust film</td>
                  <td className="px-6 py-4">
                    Separate{' '}
                    <Link href="/post-construction-cleaning" className="text-blue-700 hover:underline">
                      post-construction
                    </Link>{' '}
                    scope
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* H3: Quote workflow */}
        <section className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            How Sanford Cleaning Builds a Transparent Quote
          </h3>
          <ol className="list-decimal pl-6 space-y-3 text-slate-700">
            <li>
              <strong>Intake:</strong> Rooms, pets, last clean date, and access code or lockbox details.
            </li>
            <li>
              <strong>Scope classifier:</strong> Maintenance, deep, move-out, Airbnb turnover, or post-construction.
            </li>
            <li>
              <strong>Crew sizing:</strong> One to three technicians matched to square footage and deadline.
            </li>
            <li>
              <strong>On-site checklist:</strong> Room-level completion with optional photo QA for owners and property
              managers.
            </li>
            <li>
              <strong>Recurring lock:</strong> Weekly or biweekly calendar holds to keep per-visit pricing efficient.
            </li>
          </ol>
        </section>

        {/* H3: FAQs */}
        <section className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
            FAQs Property Managers and Homeowners Ask Before Booking
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-slate-900">Do I need to be home during the clean?</h4>
              <p className="mt-2 text-slate-700">
                No. Most Sanford Cleaning clients leave a code or lockbox. Crews lock up after the checklist is complete.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Are supplies included in the price?</h4>
              <p className="mt-2 text-slate-700">
                Standard professional supplies are included. Specialty products or client-provided green-only kits can be
                arranged in the quote notes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">How do apartment and move-out prices compare?</h4>
              <p className="mt-2 text-slate-700">
                Empty move-out cleans follow landlord inspection checklists and usually cost more than furnished
                maintenance cleans. See our{' '}
                <Link
                  href="/guides/sanford-fl-move-out-cleaning-services-costs"
                  className="text-blue-700 font-medium hover:underline"
                >
                  move-out cost guide
                </Link>{' '}
                and{' '}
                <Link href="/apartment-cleaning" className="text-blue-700 font-medium hover:underline">
                  apartment cleaning
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Get Your Sanford House Cleaning Quote</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Lock in transparent pricing for your home size and schedule. Book online in about 60 seconds or request a
            custom quote for multi-unit and commercial scopes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-blue-600 bg-white rounded-lg hover:bg-slate-100 transition-colors"
            >
              Book Online
            </Link>
            <Link
              href="/free-custom-quote"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Custom Quote
            </Link>
          </div>
          <p className="mt-6 text-slate-400 text-sm">Or call (321) 236-0618</p>
        </section>

        <AuthorBio
          description="The Sanford Cleaning team publishes local pricing and humidity-aware cleaning guidance based on residential and commercial jobs across Sanford, Lake Mary, Longwood, and Seminole County."
        />
      </article>
    </main>
  );
}
