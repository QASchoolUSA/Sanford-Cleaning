import type { Metadata } from 'next';
import Link from 'next/link';
import { Home as HomeIcon, CheckCircle, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Airbnb Cleaning in Sanford, FL | Short-Term Rental Turnover Service',
  description:
    'Professional Airbnb cleaning and short-term rental turnover in Sanford, FL. Fast same-day service, hotel-standard linen care, restocking, and guest-ready quality.',
  alternates: { canonical: 'https://sanfordcleaning.com/airbnb-cleaning' },
  openGraph: {
    title: 'Airbnb Cleaning in Sanford, FL | Short-Term Rental Turnover Service',
    description:
      'Reliable Airbnb turnover cleaning in Sanford, FL with hotel-standard linen care, restocking, and guest-ready presentation. Book fast same-day service.',
    type: 'website',
    url: 'https://sanfordcleaning.com/airbnb-cleaning',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airbnb Cleaning in Sanford, FL | Short-Term Rental Turnover Service',
    description:
      'Reliable Airbnb turnover cleaning in Sanford, FL with hotel-standard linen care, restocking, and guest-ready presentation. Book fast same-day service.',
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://sanfordcleaning.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Airbnb Cleaning',
      item: 'https://sanfordcleaning.com/airbnb-cleaning',
    },
  ],
};

export default function AirbnbCleaningPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script
        id="airbnb-jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is included in an Airbnb turnover cleaning?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Full turnover cleaning for kitchen, bathrooms, bedrooms, and living areas; high-touch disinfection; bed making and linen refresh; trash removal; light staging; and optional restocking per host request.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer same-day or next-day turnovers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Yes. We provide same-day and next-day Airbnb turnovers in Sanford, FL subject to availability. Flexible windows between checkout and check-in are supported.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you handle linens and restocking?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'We can make beds and refresh linens. Laundry and restocking are available as add-ons or by host-supplied inventory. We can also provide photo confirmation on request.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I book or get pricing?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Book online at sanfordcleaning.com/booking, text or call (321) 236-0618, or request a custom host quote at sanfordcleaning.com/custom-quote for multi-unit or frequent turnovers.',
                },
              },
            ],
          }),
        }}
      />

      <script
        id="airbnb-jsonld-howto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to book Airbnb cleaning in Sanford, FL',
            description: 'Simple steps to schedule an Airbnb turnover cleaning with Sanford Cleaning.',
            totalTime: 'PT5M',
            supply: [
              { '@type': 'HowToSupply', name: 'Property address' },
              { '@type': 'HowToSupply', name: 'Access instructions (lockbox/code)' },
              { '@type': 'HowToSupply', name: 'Turnover window (checkout/check-in times)' },
            ],
            tool: [
              { '@type': 'HowToTool', name: 'Online booking form' },
              { '@type': 'HowToTool', name: 'Phone or text' },
            ],
            step: [
              {
                '@type': 'HowToStep',
                name: 'Choose Airbnb/STR cleaning',
                url: 'https://sanfordcleaning.com/booking',
                text: 'Open the booking page and select Airbnb or short-term rental cleaning.',
              },
              {
                '@type': 'HowToStep',
                name: 'Pick a turnover window',
                text: 'Choose same-day or next-day service and set the time window between checkout and check-in.',
              },
              {
                '@type': 'HowToStep',
                name: 'Provide property details',
                text: 'Add bed count, linens handling, restocking preferences, and any access instructions.',
              },
              {
                '@type': 'HowToStep',
                name: 'Confirm booking',
                text: 'Submit your request to receive confirmation and updates by text or email.',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <HomeIcon className="w-8 h-8 text-blue-600" />
                <span className="text-blue-600 font-semibold">Airbnb Cleaning</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Airbnb Cleaning in Sanford, FL
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                Fast, reliable short‑term rental cleaning for hosts and property managers. Guest‑ready turnovers with hotel‑standard care—fresh linens, restocking essentials, and spotless presentation to protect your ratings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center justify-center">
                  Book Airbnb Cleaning
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/custom-quote" className="bg-white text-blue-600 border border-blue-200 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
                  Get a Custom Host Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Optional image placeholder for consistency. Provide an image in /public if desired. */}
              <div className="w-full max-w-md mx-auto aspect-square rounded-2xl shadow-2xl bg-gray-100 flex items-center justify-center text-gray-400">
                <span className="text-sm">Airbnb Cleaning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border p-6">
              <div className="flex items-center gap-2 text-blue-700">
                <CheckCircle className="h-5 w-5" aria-hidden />
                <h2 className="font-semibold">What’s Included</h2>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Full turnover clean: kitchen, bathrooms, bedrooms, living areas</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> High‑touch disinfection and surface sanitizing</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Dusting, vacuuming, mopping, trash removal</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Bed making and linen refresh (host‑provided or add‑on laundry)</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Restocking essentials when requested</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Spot‑check appliances and amenities for guest readiness</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Staging and presentation in line with listing photos</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Inventory notes and photo confirmation available</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <div className="flex items-center gap-2 text-blue-700">
                <Clock className="h-5 w-5" aria-hidden />
                <h2 className="font-semibold">Turnover Timing</h2>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Same‑day and next‑day turnovers</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Flexible windows between checkout and check‑in</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Mid‑stay refresh and extended‑stay options</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Emergency last‑minute cleanings (subject to availability)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <div className="flex items-center gap-2 text-blue-700">
                <CheckCircle className="h-5 w-5" aria-hidden />
                <h2 className="font-semibold">Why Hosts Choose Us</h2>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Consistent, guest‑ready results—protect ratings and reviews</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Local Sanford team with short‑term rental experience</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Clear communication, photos upon request, checklist compliance</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Professional supplies, reliable scheduling, transparent pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Airbnb Cleaning Guide: Sanford, FL</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Looking for <strong>airbnb cleaning</strong> that protects your listings and delights guests? Our team provides reliable
                <strong> airbnb cleaning in Sanford, FL</strong> for hosts, co‑hosts, and property managers. We specialize in fast,
                detailed turnover cleanings so your place is spotless before the next check‑in. If you’re searching for <strong>airbnb cleaning near me</strong>, we
                cover Sanford and nearby areas including Lake Mary, Heathrow, Longwood, Winter Springs, DeBary, and Deltona.
              </p>
              <p>
                Short‑term rental cleaning requires precision. We follow a host‑approved checklist to clean kitchens and bathrooms thoroughly,
                sanitize high‑touch areas, make beds with fresh linens, and restock essentials when requested. We can stage spaces in line with your
                listing photos, tidy decor, and quickly report maintenance or inventory issues. The result is a guest‑ready space that helps reduce
                complaints, avoid re‑cleans, and maintain 5‑star reviews.
              </p>
              <p>
                Popular searches we serve include <strong>airbnb cleaning sanford fl</strong>, <strong>short‑term rental turnover cleaning</strong>,
                <strong> vacation rental cleaning</strong>, <strong>STR cleaning</strong>, <strong>Vrbo cleaning</strong>, and <strong>rental property cleaning</strong>.
                We offer same‑day turnover windows, mid‑stay refresh service, and extended‑stay cleanings for long bookings. Hosts choose us for
                dependable scheduling, clear communication, and consistent results.
              </p>
              <p>
                Want predictable pricing? Book online or request a custom quote for multi‑unit buildings, frequent turnovers, linen service,
                and restocking. We can tailor the checklist to your property: pet‑friendly stays, family bookings, corporate travel, or weekend events.
                Our goal is simple—fast turnover, a fresh look, and a welcoming presentation that keeps guests happy.
              </p>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-blue-700">Popular Searches Near You</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>airbnb cleaning</li>
                  <li>airbnb cleaning near me</li>
                  <li>airbnb cleaning sanford fl</li>
                  <li>airbnb cleaning in sanford, fl</li>
                  <li>vacation rental cleaning</li>
                  <li>short‑term rental turnover cleaning</li>
                  <li>host cleaning service</li>
                  <li>superhost cleaning sanford</li>
                  <li>same‑day turnover cleaning</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-blue-700">Ways to Book</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>
                    Book online: <Link href="/booking" className="text-blue-700 underline">sanfordcleaning.com/booking</Link>
                  </li>
                  <li>Call or text: <span className="font-medium">(321) 236-0618</span></li>
                  <li>
                    Email: <a href="mailto:info@sanfordcleaning.com" className="text-blue-700 underline">info@sanfordcleaning.com</a>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link href="/custom-quote" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
                    Request Host Pricing
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}