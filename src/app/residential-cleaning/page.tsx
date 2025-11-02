import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import Link from 'next/link';
import { Home as HomeIcon, Clock, Shield, Sparkles, CheckCircle, Star, ArrowRight } from 'lucide-react';

export const metadata = {
  title: '5-Star House Cleaning in Sanford, FL | Instant Online Booking',
  description:
    '5-star house cleaning services in Sanford, FL. From $80. Get your free instant quote and book online in 60 seconds.',
  alternates: { canonical: 'https://sanfordcleaning.com/residential-cleaning' },
  openGraph: {
    title: '5-Star House Cleaning in Sanford, FL | Instant Online Booking',
    description:
      'Tired of cleaning? Reclaim your weekend! Sanford Cleaning offers 5-star rated house cleaning from just $80. Get your free, instant quote & book online in 60 seconds!',
    type: 'website',
    url: 'https://sanfordcleaning.com/residential-cleaning',
    images: [{ url: 'https://sanfordcleaning.com/sanford-residential-cleaning.webp', width: 1200, height: 630 }],
  },
};

export default function ResidentialCleaningPage() {
  const jsonLdBreadcrumb = `{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sanfordcleaning.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Residential Cleaning",
        "item": "https://sanfordcleaning.com/residential-cleaning"
      }
    ]
  }`;
  const services = [
    {
      name: 'Regular House Cleaning',
      description: 'Weekly or bi-weekly cleaning to maintain your house',
      price: 'Starting at $80',
      duration: '2-4 hours',
      includes: [
        'Kitchen cleaning and sanitization',
        'Bathroom deep clean',
        'Dusting all surfaces',
        'Vacuuming and mopping',
        'Trash removal',
        'Bed making',
      ],
    },
    {
      name: 'One-Time Cleaning',
      description: 'Perfect for special occasions or seasonal cleaning',
      price: 'Starting at $120',
      duration: '3-5 hours',
      includes: [
        'Complete house cleaning',
        'Inside appliance cleaning',
        'Window sill cleaning',
        'Baseboards and trim',
        'Light fixture dusting',
        'Cabinet front cleaning',
      ],
    },
    {
      name: 'Move-In/Move-Out',
      description: 'Comprehensive cleaning for moving transitions',
      price: 'Starting at $200',
      duration: '4-6 hours',
      includes: [
        'Deep clean all rooms',
        'Inside cabinets and drawers',
        'Appliance interior cleaning',
        'Wall spot cleaning',
        'Floor deep cleaning',
        'Final inspection',
      ],
    },
  ];

  const addOns = [
    { name: 'Inside Oven Cleaning', price: '$25' },
    { name: 'Inside Refrigerator', price: '$20' },
    { name: 'Garage Cleaning', price: '$40' },
    { name: 'Basement Cleaning', price: '$35' },
    { name: 'Window Cleaning (Interior)', price: '$3 per window' },
    { name: 'Laundry Service', price: '$15 per load' },
  ];

  

  const jsonLdFaq = `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does your house cleaning service cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing is transparent and based on your house's size and needs. Standard cleaning services start at just $80, and you can get a free, no-obligation quote instantly on our website."
        }
      },
      {
        "@type": "Question",
        "name": "Are your cleaners insured and background-checked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. For your peace of mind, every member of our team is fully vetted, background-checked, bonded, and insured."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a cleaning service take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard cleaning for a medium-sized house typically takes 2-4 hours. We also offer more comprehensive deep cleaning services."
        }
      }
    ]
  }`;

  return (
    <div className="pt-20">
      <script id="residential-jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdBreadcrumb }} />
      <LocalBusinessSchema id="https://sanfordcleaning.com/residential-cleaning#localbusiness" name="Sanford Cleaning - Residential Services" url="https://sanfordcleaning.com/residential-cleaning" image="https://sanfordcleaning.com/sanford-residential-cleaning.webp" priceRange="$$" />
      <script id="residential-jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdFaq }} />

      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <HomeIcon className="w-8 h-8 text-blue-600" />
                <span className="text-blue-600 font-semibold">Residential Cleaning</span>
              </div>
  <h1 data-cy="residential-cleaning-title" className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">House Cleaning Services in Sanford, FL</h1>
              <p className="text-lg text-gray-600 leading-relaxed">Transform your house into a spotless sanctuary with our comprehensive residential cleaning services. From regular maintenance to deep cleaning, we handle it all so you can focus on what matters most.</p>
              <div className="flex justify-start">
                <Link href="/booking" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg inline-block">Get Free Quote and Book</Link>
              </div>
            </div>
            <div className="relative">
              <img src="/sanford-residential-cleaning.webp" alt="Sanford Cleaning - Residential Cleaning in Sanford, FL" className="w-full max-w-md mx-auto aspect-square object-cover rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 data-cy="residential-services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">House Cleaning Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose from our flexible cleaning packages designed to fit your lifestyle and budget.</p>
            <p className="text-md text-gray-600 max-w-3xl mx-auto mt-4">Looking for a professional house cleaning service near me? Our local Sanford team provides reliable, thorough cleaning services right in your neighborhood, ensuring your house stays pristine without the hassle.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const cardContent = (
                <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-blue-600 mb-1">{service.price}</div>
                    <div className="text-sm text-gray-500 flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Includes:</h4>
                    {service.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );

              return service.name === 'Move-In/Move-Out' ? (
                <Link href="/move-in-move-out-cleaning" className="block" key={index}>
                  {cardContent}
                </Link>
              ) : (
                <div key={index}>{cardContent}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 data-cy="additional-services-title" className="text-3xl font-bold text-gray-900 mb-4">Additional House Cleaning Services</h2>
            <p className="text-lg text-gray-600">Customize your cleaning with these popular add-on services.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{addon.name}</span>
                  <span className="text-blue-600">{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}