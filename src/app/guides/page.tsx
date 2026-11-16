import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sanford FL Cleaning Guides | House Cleaning Tips & Local Pricing',
  description:
    'Local cleaning guides for Sanford, FL homeowners and renters. Learn house cleaning prices, how to book a maid service, deep cleaning tips, and move-out costs.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides' },
  openGraph: {
    title: 'Sanford FL Cleaning Guides | House Cleaning Tips & Local Pricing',
    description:
      'Practical cleaning guides for Sanford, FL. Pricing, booking, deep cleaning, move-out costs, and how to choose a local cleaning company.',
    url: 'https://sanfordcleaning.com/guides',
    siteName: 'Sanford Cleaning',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanford FL Cleaning Guides | House Cleaning Tips & Local Pricing',
    description:
      'Practical cleaning guides for Sanford, FL homeowners and renters.',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
};

const guides = [
  { href: '/guides/how-much-does-house-cleaning-cost-sanford-fl', title: 'How Much Does House Cleaning Cost in Sanford, FL? (2026)', blurb: 'Local price ranges by home size, frequency, and deep-clean scope.' },
  { href: '/guides/sanford-fl-house-cleaning-prices-packages', title: 'House Cleaning Packages in Sanford, FL (Weekly & Biweekly)', blurb: 'What weekly and biweekly packages usually include—and what is add-on only.' },
  { href: '/guides/airbnb-turnover-sla-sanford-fl', title: 'Airbnb Turnover SLA in Sanford, FL', blurb: 'Checkout-to-check-in timing, linen resets, and host QA for Seminole County STRs.' },
  { href: '/guides/rough-vs-final-post-construction-cleaning-sanford-fl', title: 'Rough vs Final Post-Construction Cleaning in Sanford, FL', blurb: 'When rough, soft, and final cleans belong on a remodel or new-build schedule.' },
  { href: '/guides/best-house-cleaning-services-sanford-fl', title: 'Best House Cleaning Services in Sanford FL', blurb: 'How to compare local cleaners beyond star ratings and coupon headlines.' },
  { href: '/guides/affordable-deep-cleaning-companies-sanford-fl', title: 'Affordable Deep Cleaning Companies Near Sanford FL', blurb: 'What “affordable” should still include on a first deep clean.' },
  { href: '/guides/how-to-book-professional-house-cleaner-sanford-fl', title: 'How to Book a Professional House Cleaner in Sanford FL', blurb: 'A practical booking checklist: access, pets, parking, and scope notes.' },
  { href: '/guides/how-to-book-house-cleaner-sanford-fl', title: 'How to Book a House Cleaner in Sanford FL', blurb: 'Simple steps from quote to first visit for Sanford homeowners.' },
  { href: '/guides/how-to-book-professional-house-cleaner-sanford-fl-customer-reviews', title: 'How to Book a House Cleaner Using Customer Reviews', blurb: 'Which review details predict real service quality.' },
  { href: '/guides/top-rated-house-cleaning-companies-sanford-fl-reviews', title: 'Top-Rated House Cleaning Companies in Sanford FL with Customer Reviews', blurb: 'Reading patterns in local reviews without chasing fake perfection.' },
  { href: '/guides/eco-friendly-house-cleaning-options-sanford-fl', title: 'Eco-Friendly House Cleaning Options Available in Sanford FL', blurb: 'When green products matter for kids, pets, and indoor air.' },
  { href: '/guides/compare-house-cleaning-companies-sanford-fl-service-quality', title: 'Compare House Cleaning Companies in Sanford FL by Service Quality', blurb: 'Insurance, checklists, corrections, and consistency—beyond the lowest bid.' },
  { href: '/guides/sanford-fl-house-cleaning-service-providers-quality', title: 'Sanford FL House Cleaning Service Providers by Quality', blurb: 'Quality signals that hold up for recurring Sanford routes.' },
  { href: '/guides/sanford-fl-move-out-cleaning-services-costs', title: 'Sanford FL Move-Out Cleaning Services and Costs', blurb: 'Deposit-focused vacancy cleans and what landlords usually check.' },
  { href: '/guides/sanford-fl-weekly-biweekly-house-cleaning-providers', title: 'Weekly & Biweekly House Cleaning in Sanford FL', blurb: 'Choosing a cadence that matches Florida humidity and household traffic.' },
  { href: '/guides/best-house-cleaning-deals-discounts-sanford-fl', title: 'Best House Cleaning Deals and Discounts in Sanford FL', blurb: 'How to evaluate promotions without sacrificing checklist quality.' },
  { href: '/guides/apartment-deep-cleaning-sanford-fl', title: 'Apartment Deep Cleaning in Sanford FL', blurb: 'Building access, quieter shared-wall work, and compact-kitchen detail.' },
  { href: '/guides/florida-humidity-deep-cleaning-sanford-waterfront-homes', title: 'Florida Humidity & Deep Cleaning for Sanford Waterfront Homes', blurb: 'Moisture, hard water, and deep-clean priorities near Lake Monroe.' },
];

const featured = [
  { href: '/guides/how-much-does-house-cleaning-cost-sanford-fl', label: 'Cost guide' },
  { href: '/guides/sanford-fl-house-cleaning-prices-packages', label: 'Packages' },
  { href: '/guides/airbnb-turnover-sla-sanford-fl', label: 'Airbnb SLA' },
  { href: '/guides/sanford-fl-move-out-cleaning-services-costs', label: 'Move-out costs' },
];

export default function Page() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sanfordcleaning.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://sanfordcleaning.com/guides' },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Sanford FL Cleaning Guides',
    itemListElement: guides.map((g, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: g.title,
      url: `https://sanfordcleaning.com${g.href}`,
    })),
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Cleaning Guides for Sanford FL</h1>
          <p className="mt-4 text-slate-700 max-w-3xl leading-relaxed">
            Sanford Cleaning is a local, insured house-cleaning company based around Sanford, Florida. We publish
            these guides for homeowners, renters, landlords, and Airbnb hosts who want clear answers before they
            book—pricing logic, package scope, humidity-aware deep cleans, and how professional cleaning actually
            works across Seminole County.
          </p>
          <p className="mt-4 text-slate-700 max-w-3xl leading-relaxed">
            Start with the guides people ask for most:{' '}
            {featured.map((item, index) => (
              <span key={item.href}>
                {index > 0 && (index === featured.length - 1 ? ', and ' : ', ')}
                <Link href={item.href} className="font-semibold text-blue-700 hover:underline">
                  {item.label}
                </Link>
              </span>
            ))}
            . Each article is written from first-hand Sanford-area work—not generic national advice pasted over a
            Florida city name.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900">Who these guides are for</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Most readers land here with one of four jobs: estimate a fair price for a Sanford home, decide between
            weekly and biweekly service, prepare a rental for move-out or guest turnover, or compare cleaners without
            getting lost in coupons. The hub links below are grouped by those decisions. If you already know you want
            a quote, you can{' '}
            <Link href="/booking" className="font-semibold text-blue-700 hover:underline">
              book online
            </Link>{' '}
            or browse{' '}
            <Link href="/house-cleaning" className="font-semibold text-blue-700 hover:underline">
              house cleaning
            </Link>
            ,{' '}
            <Link href="/airbnb-cleaning" className="font-semibold text-blue-700 hover:underline">
              Airbnb cleaning
            </Link>
            , and{' '}
            <Link href="/move-in-move-out-cleaning" className="font-semibold text-blue-700 hover:underline">
              move-in / move-out cleaning
            </Link>
            .
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">What we cover in Sanford and nearby cities</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Sanford sits on Lake Monroe with a mix of historic downtown housing, suburban family homes, townhomes,
            and newer builds toward the Lake Mary corridor. Humidity, hard water, pollen, and screened lanais show up
            in almost every recurring checklist. Our guides call out those local realities—bathroom film that returns
            faster than northern climates expect, entry floors that collect Florida grit, and waterfront homes that
            need deeper attention to moisture-prone corners.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Service routes commonly include Sanford proper, Heathrow, Lake Mary, Longwood, Altamonte Springs, Winter
            Springs, Casselberry, Oviedo, DeBary, Deltona, and Winter Park when scheduling allows. Neighborhoods and
            corridors you will see referenced across the guides include the Sanford Riverwalk area, Lake Forest,
            Buckingham Estates, Vintage Lake Mary, and homes along Lake Mary Blvd and near Seminole Towne Center.
            Apartment and condo readers will find building-access notes that matter for complexes near Seminole State
            College and Airport Blvd.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">How to use this hub</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Pricing first? Open the{' '}
            <Link
              href="/guides/how-much-does-house-cleaning-cost-sanford-fl"
              className="font-semibold text-blue-700 hover:underline"
            >
              Sanford house cleaning cost guide
            </Link>{' '}
            and the{' '}
            <Link
              href="/guides/sanford-fl-house-cleaning-prices-packages"
              className="font-semibold text-blue-700 hover:underline"
            >
              packages overview
            </Link>
            . Hosting short-term rentals? Use the{' '}
            <Link
              href="/guides/airbnb-turnover-sla-sanford-fl"
              className="font-semibold text-blue-700 hover:underline"
            >
              Airbnb turnover SLA guide
            </Link>
            . Leaving a rental or flipping a vacancy? Read{' '}
            <Link
              href="/guides/sanford-fl-move-out-cleaning-services-costs"
              className="font-semibold text-blue-700 hover:underline"
            >
              move-out cleaning costs
            </Link>
            . Comparing companies? Use the quality and review guides before you lock a recurring slot—scope,
            insurance, and correction policies matter more than a one-time discount.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We update these articles as local pricing bands and booking patterns shift. When a guide mentions a dollar
            range, treat it as a Sanford-area planning band—not a locked invoice. Your exact quote still depends on
            bedrooms, bathrooms, square footage, condition, pets, and whether you want a standard maintenance visit or
            a first-time deep clean.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">All Sanford cleaning guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <Link key={g.href} href={g.href} className="rounded-lg border p-5 hover:bg-slate-50">
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <p className="mt-2 text-slate-700">{g.blurb}</p>
              <p className="mt-3 text-sm font-medium text-blue-700">Read the full guide →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
