import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cleaning Guides',
  description: 'SEO-friendly cleaning guides for Sanford, FL homeowners and renters. Learn pricing, booking, deep cleaning, and more.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides' },
  openGraph: {
    title: 'Cleaning Guides',
    description: 'SEO-friendly cleaning guides for Sanford, FL homeowners and renters. Learn pricing, booking, deep cleaning, and more.',
    url: 'https://sanfordcleaning.com/guides',
    siteName: 'Sanford Cleaning',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning Guides',
    description: 'SEO-friendly cleaning guides for Sanford, FL homeowners and renters. Learn pricing, booking, deep cleaning, and more.',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
};

const guides = [
  { href: '/guides/best-house-cleaning-services-sanford-fl', title: 'Best House Cleaning Services in Sanford FL' },
  { href: '/guides/affordable-deep-cleaning-companies-sanford-fl', title: 'Affordable Deep Cleaning Companies Near Sanford FL' },
  { href: '/guides/how-to-book-professional-house-cleaner-sanford-fl', title: 'How to Book a Professional House Cleaner in Sanford FL' },
  { href: '/guides/top-rated-house-cleaning-companies-sanford-fl-reviews', title: 'Top-Rated House Cleaning Companies in Sanford FL with Customer Reviews' },
  { href: '/guides/sanford-fl-house-cleaning-prices-packages', title: 'Sanford FL House Cleaning Service Prices and Packages' },
  { href: '/guides/eco-friendly-house-cleaning-options-sanford-fl', title: 'Eco-Friendly House Cleaning Options Available in Sanford FL' },
  { href: '/guides/compare-house-cleaning-companies-sanford-fl-service-quality', title: 'Compare House Cleaning Companies in Sanford FL by Service Quality' },
  { href: '/guides/sanford-fl-move-out-cleaning-services-costs', title: 'Sanford FL Move-Out Cleaning Services and Costs' },
  { href: '/guides/sanford-fl-weekly-biweekly-house-cleaning-providers', title: 'Sanford FL Weekly and Biweekly House Cleaning Service Providers' },
  { href: '/guides/best-house-cleaning-deals-discounts-sanford-fl', title: 'Best House Cleaning Deals and Discounts in Sanford FL' },
  { href: '/guides/apartment-deep-cleaning-sanford-fl', title: 'Apartment Deep Cleaning in Sanford FL' },
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

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Cleaning Guides for Sanford FL</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Explore practical, local guides from Sanford Cleaning. Learn how to book, compare services, estimate pricing,
            and keep your home fresh with weekly or biweekly care.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <Link key={g.href} href={g.href} className="rounded-lg border p-5 hover:bg-slate-50">
              <h2 className="text-lg font-semibold">{g.title}</h2>
              <p className="mt-2 text-slate-700">Read the full guide →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}