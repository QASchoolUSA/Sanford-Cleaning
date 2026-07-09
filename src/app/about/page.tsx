import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { Shield, Leaf, Clock, Award, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Licensed House Cleaners in Sanford, FL',
  description:
    'Meet Sanford Cleaning — bonded, insured house cleaners serving Sanford, Lake Mary, Longwood & Seminole County. 10+ years of trusted maid service and commercial cleaning.',
  alternates: { canonical: 'https://sanfordcleaning.com/about' },
  openGraph: {
    title: 'About Sanford Cleaning | Licensed House Cleaners in Sanford, FL',
    description:
      'Local cleaning company in Sanford, FL. Insured professionals delivering house cleaning, maid service, and office cleaning across Central Florida.',
    type: 'website',
    url: 'https://sanfordcleaning.com/about',
    siteName: 'Sanford Cleaning',
    images: ['https://sanfordcleaning.com/sanford-cleaning-about-us.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sanford Cleaning | Licensed House Cleaners in Sanford, FL',
    description:
      'Bonded, insured house cleaners in Sanford, FL. Trusted maid service and commercial cleaning for Seminole County.',
    images: ['https://sanfordcleaning.com/sanford-cleaning-about-us.webp'],
  },
};

const values = [
  {
    icon: Shield,
    title: 'Trusted & Insured',
    description: 'Fully licensed, bonded, and insured for your peace of mind.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'We use environmentally safe cleaning products and methods.',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'Consistent, punctual service you can count on every time.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: '100% satisfaction guarantee on all our cleaning services.',
  },
];

export default function AboutPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://sanfordcleaning.com/#organization',
    name: 'Sanford Cleaning',
    alternateName: 'Topaz West LLC',
    url: 'https://sanfordcleaning.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://sanfordcleaning.com/sanford-cleaning-logo.png',
      width: 300,
      height: 300,
    },
    description:
      'Professional house cleaning, maid service, and commercial cleaning company serving Sanford, FL and surrounding communities.',
    telephone: '(321) 236-0618',
    email: 'info@sanfordcleaning.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sanford',
      addressRegion: 'FL',
      postalCode: '32771',
      addressCountry: 'US',
    },
    sameAs: [
      'https://sanfordcleaning.com',
      'https://www.facebook.com/profile.php?id=61579618588193',
      'https://www.instagram.com/sanfordcleaning',
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sanfordcleaning.com/' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://sanfordcleaning.com/about' },
    ],
  };

  return (
    <main className="pt-20">
      <LocalBusinessSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="bg-gradient-to-br from-blue-50 to-white py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Sanford Cleaning — Trusted House &amp; Office Cleaners in Sanford, FL
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your local cleaning company for house cleaning, maid service, and commercial cleaning across Sanford,
              Lake Mary, Longwood, and Seminole County.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Sanford Cleaning is a professional cleaning company operated by <strong>Topaz West LLC</strong>, serving
                homeowners, renters, property managers, and businesses throughout Sanford, FL and the greater Central
                Florida area. With more than 10 years of combined experience in the cleaning industry, our team has built
                a reputation for reliability, attention to detail, and honest communication.
              </p>
              <p>
                We are not a faceless national franchise. We are local house cleaners who understand Seminole County —
                from historic homes near the Sanford Riverwalk to newer builds in Lake Mary and Longwood. Whether you
                need recurring maid service, a one-time deep clean, move-out cleaning before a lease ends, or dependable
                office cleaning for your business, we tailor every visit to your space, schedule, and budget.
              </p>
              <p>
                Every member of our team is trained in professional cleaning techniques and uses eco-friendly products
                that are tough on grime but safe for families, pets, and employees. We are fully bonded and insured, so
                you can welcome us into your home or workplace with confidence.
              </p>
              <p>
                Our service philosophy is simple: show up on time, follow a detailed checklist, communicate clearly, and
                leave your space noticeably cleaner than you expected. That is how we have earned repeat clients across
                Sanford, Heathrow, Altamonte Springs, Winter Springs, Casselberry, Oviedo, DeBary, Deltona, and Winter
                Park.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/sanford-cleaning-about-us.webp"
                alt="Sanford Cleaning professional house cleaning team in Sanford FL"
                width={800}
                height={800}
                className="w-full max-w-md mx-auto aspect-square object-cover rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Sanford Families Choose Us</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Searching for &quot;house cleaning Sanford FL&quot; or &quot;maid service near me&quot; brings up dozens of
              options. Here is what sets Sanford Cleaning apart from other cleaning companies in the area:
            </p>
            <ul>
              <li>
                <strong>Transparent pricing</strong> — get an instant quote online or request a custom quote for larger
                jobs. No surprise fees after the job is done.
              </li>
              <li>
                <strong>Flexible scheduling</strong> — book one-time, weekly, bi-weekly, or monthly cleaning. Same-day
                and next-day appointments may be available depending on our calendar.
              </li>
              <li>
                <strong>Full-service options</strong> — from{' '}
                <Link href="/house-cleaning" className="text-blue-600 hover:text-blue-800">
                  house cleaning
                </Link>{' '}
                and{' '}
                <Link href="/deep-cleaning" className="text-blue-600 hover:text-blue-800">
                  deep cleaning
                </Link>{' '}
                to{' '}
                <Link href="/move-in-move-out-cleaning" className="text-blue-600 hover:text-blue-800">
                  move-out cleaning
                </Link>
                ,{' '}
                <Link href="/airbnb-cleaning" className="text-blue-600 hover:text-blue-800">
                  Airbnb turnover
                </Link>
                , and{' '}
                <Link href="/commercial-cleaning" className="text-blue-600 hover:text-blue-800">
                  commercial cleaning
                </Link>
                .
              </li>
              <li>
                <strong>Local commitment</strong> — we live and work in this community. When you call (321) 236-0618,
                you reach a real team — not a call center across the country.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Book your house cleaning or maid service online in under 60 seconds, or request a free custom quote for
            commercial and specialty jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Book Online <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/custom-quote"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get a Custom Quote
            </Link>
            <a
              href="tel:321-236-0618"
              className="inline-flex items-center justify-center gap-2 border-2 border-blue-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-5 h-5" /> (321) 236-0618
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
