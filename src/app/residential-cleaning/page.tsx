import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import Link from 'next/link';
import Image from 'next/image';
import { Home as HomeIcon, Clock, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Residential Cleaning in Sanford, FL | Apartments & Townhouses',
  description:
    'Top-rated residential cleaning services in Sanford, FL. Specialized in apartments, townhouses, and condos. Maintenance, deep cleaning, and move-in/out services. Book online!',
  alternates: { canonical: 'https://sanfordcleaning.com/residential-cleaning' },
  openGraph: {
    title: 'Residential Cleaning in Sanford, FL | Apartments & Townhouses',
    description:
      'Looking for reliable residential cleaning in Sanford? We specialize in apartments and townhouses. Deep cleaning, odor elimination, and more. Get a free quote!',
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
      name: 'Maintenance Cleaning',
      description: 'Regular cleaning to keep your apartment or townhouse sparkling.',
      price: 'Starting at $80',
      duration: '2-3 hours',
      includes: [
        'Dusting all surfaces',
        'Vacuuming and mopping floors',
        'Bathroom sanitization',
        'Kitchen counter & appliance wipe-down',
        'Trash removal',
        'Bed making',
      ],
      link: '/house-cleaning'
    },
    {
      name: 'Deep Cleaning',
      description: 'Thorough top-to-bottom cleaning for neglected spaces.',
      price: 'Starting at $150',
      duration: '3-5 hours',
      includes: [
        'Baseboards and door frames',
        'Ceiling fans and light fixtures',
        'Behind furniture (if accessible)',
        'Scrubbing tile and grout',
        'Detailed kitchen & bath clean',
        'Outlet and switch plates',
      ],
      link: '/deep-cleaning'
    },
    {
      name: 'Move-In/Move-Out',
      description: 'Empty home cleaning for a fresh start or deposit return.',
      price: 'Starting at $200',
      duration: '4-6 hours',
      includes: [
        'Inside cabinets and drawers',
        'Inside appliances (Fridge/Oven)',
        'Window sills and tracks',
        'Closet shelves',
        'Spot cleaning walls',
        'Final walkthrough checklist',
      ],
      link: '/move-in-move-out-cleaning'
    },
  ];

  const extras = [
    {
      name: 'Inside Refrigerator',
      price: '$20',
      description: 'Deep clean of shelves and drawers to remove spills and food residue.'
    },
    {
      name: 'Odor Elimination',
      price: 'Custom Quote',
      description: 'Specialized treatment to neutralize tough odors from pets, smoke, or cooking.'
    },
    {
      name: 'Carpet Cleaning',
      price: 'Custom Quote',
      description: 'Hot water extraction for pet stains, urine odor, and deep-seated dirt.',
      link: '/carpet-cleaning'
    },
    {
      name: 'Inside Oven',
      price: '$25',
      description: 'Scrubbing and degreasing to remove burnt-on food and grease.'
    },
    {
      name: 'Interior Windows',
      price: '$3 per window',
      description: 'Streak-free cleaning for glass surfaces and wiping down sills.'
    },
  ];

  const jsonLdFaq = `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you clean apartments and townhouses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We specialize in residential cleaning for apartments, townhouses, and condos in Sanford, FL."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in odor elimination?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our odor elimination service targets the source of smells, using specialized enzymes and treatments for pet odors, smoke, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Can you remove pet stains from carpets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our carpet cleaning service is effective at removing pet stains and neutralizing urine odors."
        }
      }
    ]
  }`;

  return (
    <div className="pt-20">
      <script id="residential-jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdBreadcrumb }} />
      <LocalBusinessSchema id="https://sanfordcleaning.com/residential-cleaning#localbusiness" name="Sanford Cleaning - Residential Services" url="https://sanfordcleaning.com/residential-cleaning" image="https://sanfordcleaning.com/sanford-residential-cleaning.webp" priceRange="$$" />
      <script id="residential-jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdFaq }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <HomeIcon className="w-8 h-8 text-indigo-600" />
                <span className="text-indigo-600 font-semibold">Apartment & Townhouse Cleaning</span>
              </div>
              <h1 data-cy="residential-cleaning-title" className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Residential Cleaning Services in Sanford, FL
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Living in an apartment, townhouse, or condo? We offer specialized <strong>residential cleaning</strong> tailored to your space. From routine maintenance to deep cleaning and move-outs, we ensure your home is fresh, healthy, and welcoming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking" className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-center">
                  Book Online Now
                </Link>
                <Link href="/custom-quote" className="bg-white text-indigo-600 border-2 border-indigo-100 px-8 py-4 rounded-lg text-lg font-semibold hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-200 text-center">
                  Get a Free Quote
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/sanford-cleaning-mopping-floors.png"
                alt="Mopping hardwood floors in a Sanford apartment"
                width={800}
                height={800}
                priority
                className="w-full max-w-md mx-auto aspect-square object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 data-cy="residential-services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Residential Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need a quick refresh or a deep overhaul, we have the perfect plan for your home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4 h-12">{service.description}</p>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">{service.price}</div>
                  <div className="text-sm text-gray-500 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
                <div className="space-y-3 mb-8 flex-grow">
                  <h4 className="font-semibold text-gray-900">Includes:</h4>
                  {service.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                {service.link && (
                  <Link href={service.link} className="text-indigo-600 font-semibold hover:underline flex items-center justify-center mt-auto">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 data-cy="residential-extras-title" className="text-3xl font-bold text-gray-900 mb-4">
              Premium Add-Ons & Extras
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Customize your cleaning with these specialized services. Perfect for pet owners or those needing a deeper clean.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {extras.map((extra, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-transparent hover:border-indigo-100">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900">{extra.name}</h3>
                  <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ml-2">
                    {extra.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{extra.description}</p>
                {extra.link && (
                  <Link href={extra.link} className="text-sm text-indigo-600 font-medium hover:underline flex items-center">
                    View Details <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border-l-4 border-indigo-500">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-indigo-100 p-4 rounded-full">
                <Sparkles className="w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pet Owners? We&apos;ve Got You Covered!</h3>
                <p className="text-gray-600">
                  We understand that pets are family, but they can leave behind messes. Our <strong>odor elimination</strong> and <strong>carpet cleaning</strong> services are specifically designed to tackle pet stains, urine odors, and dander, leaving your home fresh and clean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-indigo">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us for Residential Cleaning in Sanford?</h2>
            <p className="text-gray-700 mb-4">
              Finding reliable <strong>residential cleaning near me</strong> shouldn&apos;t be a hassle. At Sanford Cleaning, we pride ourselves on delivering consistent, high-quality service to residents in Sanford, FL, and surrounding areas. Whether you live in a cozy apartment, a spacious townhouse, or a condo, our team is trained to respect your space and provide a superior clean.
            </p>
            <p className="text-gray-700 mb-4">
              Our <strong>residential cleaning sanford, fl</strong> services are flexible to meet your needs. We offer:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
              <li><strong>Customized Checklists:</strong> We focus on what matters most to you.</li>
              <li><strong>Trusted Professionals:</strong> Background-checked and insured for your peace of mind.</li>
              <li><strong>Satisfaction Guarantee:</strong> If you&apos;re not happy, we&apos;ll make it right.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              For those searching for <strong>residential cleaning in sanford</strong>, look no further. We combine professional expertise with a personal touch. From scrubbing bathrooms to deep cleaning carpets with pet stains, we handle the dirty work so you can enjoy your free time.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to book your cleaning?</h3>
              <p className="text-gray-700 mb-4">
                Don&apos;t wait! Experience the best <strong>residential cleaning sanford</strong> has to offer.
              </p>
              <div className="flex gap-4">
                <Link href="/booking" className="text-indigo-600 font-bold hover:underline">Book Online</Link>
                <span className="text-gray-300">|</span>
                <Link href="/contact" className="text-indigo-600 font-bold hover:underline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
