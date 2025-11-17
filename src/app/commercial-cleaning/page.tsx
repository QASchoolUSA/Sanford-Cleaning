import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { Building, Clock, Shield, Users, CheckCircle, Briefcase } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: '#1 Office Cleaning Service in Sanford, FL | Free Quote',
  description:
    "Commercial cleaning in Sanford, FL for offices, medical, and retail. Professional service with custom pricing and flexible scheduling. Get a free quote today.",
  alternates: { canonical: 'https://sanfordcleaning.com/commercial-cleaning' },
  openGraph: {
    title: '#1 Office Cleaning Service in Sanford, FL | Free Quote',
    description:
      "Sanford&apos;s top-rated commercial cleaning for offices, medical, & retail. We keep your business pristine & professional. Get a free, no-obligation quote today!",
    type: 'website',
    url: 'https://sanfordcleaning.com/commercial-cleaning',
    images: [{ url: 'https://sanfordcleaning.com/commercial-cleaning-sanford-florida.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Office Cleaning Service in Sanford, FL | Free Quote',
    description:
      "Sanford's top-rated commercial cleaning for offices, medical, & retail. We keep your business pristine & professional. Get a free, no-obligation quote today!",
    images: ['https://sanfordcleaning.com/commercial-cleaning-sanford-florida.webp'],
  },
};

export default function CommercialCleaningPage() {
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
        "name": "Commercial Cleaning",
        "item": "https://sanfordcleaning.com/commercial-cleaning"
      }
    ]
  }`;
  const services = [
    {
      name: 'Professional Office Cleaning Sanford',
      description: 'Complete office cleaning services with flexible scheduling options',
      price: 'Request Quote',
      duration: '2-6 hours',
      includes: [
        'Desk and workstation cleaning',
        'Restroom sanitization',
        'Kitchen/break room cleaning',
        'Trash removal and recycling',
        'Floor vacuuming and mopping',
        'Window and glass cleaning',
      ],
    },
    {
      name: 'Medical Facility Cleaning Services',
      description: 'HIPAA-compliant medical cleaning with specialized disinfection protocols',
      price: 'Custom pricing',
      duration: 'Varies',
      includes: [
        'Medical-grade disinfection',
        'Biohazard waste handling',
        'HIPAA compliant service',
        'Specialized equipment cleaning',
        'Air quality maintenance',
        'Compliance documentation',
      ],
    },
    {
      name: 'Retail Commercial Cleaning Sanford',
      description: 'Customer-focused retail cleaning to enhance shopping experience',
      price: 'Custom Pricing',
      duration: '3-8 hours',
      includes: [
        'Sales floor maintenance',
        'Fitting room sanitization',
        'Display case cleaning',
        'Customer restroom upkeep',
        'Entrance and storefront cleaning',
        'Inventory area organization',
      ],
    },
  ];

  const industries = [
    { icon: Briefcase, name: 'Corporate Offices', description: 'Expert office cleaning services in Sanford for professional business environments' },
    { icon: Users, name: 'Medical Facilities', description: 'Medical-grade commercial cleaning service Sanford with HIPAA compliance' },
    { icon: Building, name: 'Retail Stores', description: 'Professional retail cleaning services to enhance customer experience' },
    { icon: Shield, name: 'Educational Facilities', description: 'Comprehensive school and educational facility cleaning in Sanford' },
  ];

  

  return (
    <div className="pt-20">
      <script id="commercial-jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdBreadcrumb }} />
      <script
        id="commercial-jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What services are included in office and commercial cleaning?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Typical service includes workstations and desk cleaning, restroom sanitization, breakroom/kitchen cleaning, trash removal, dusting, vacuuming and mopping, and glass/interior window care. Deep cleaning and disinfection are available.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer after-hours or weekend cleaning?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Yes. We provide flexible schedules including daytime, after-hours, and weekend cleaning to minimize disruption to your business.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are you insured and can you provide documentation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Our team is insured and background-checked. We can provide COI and compliance documentation upon request for office, medical, and retail facilities.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I get a quote for my facility?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Request a free custom quote at sanfordcleaning.com/free-custom-quote or call (321) 236-0618. We tailor pricing to your space size, traffic, and schedule.',
                },
              },
            ],
          }),
        }}
      />
      <LocalBusinessSchema id="https://sanfordcleaning.com/commercial-cleaning#localbusiness" name="Sanford Cleaning - Commercial Services" url="https://sanfordcleaning.com/commercial-cleaning" image="https://sanfordcleaning.com/commercial-cleaning-sanford-florida.webp" priceRange="$$$" />

      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Building className="w-8 h-8 text-blue-600" />
                <span className="text-blue-600 font-semibold">Commercial Cleaning</span>
              </div>
              <h1 data-cy="commercial-cleaning-title" className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Commercial Cleaning Services in Sanford, FL</h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed md:leading-loose">Sanford&apos;s premier commercial cleaning service providing exceptional business cleaning solutions. Our professional commercial cleaning service in Sanford ensures your workplace maintains the highest standards of cleanliness and hygiene. From small offices to large commercial facilities, we deliver reliable, comprehensive cleaning services that enhance your business image and create healthier work environments.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/free-custom-quote" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg inline-block text-center">Get Custom Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/commercial-cleaning-sanford-florida.webp"
                alt="Sanford Cleaning - Office Cleaning in Sanford, FL"
                width={800}
                height={800}
                className="w-full max-w-md mx-auto aspect-square object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 data-cy="industries-served-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed md:leading-loose max-w-2xl mx-auto">Our commercial cleaning service Sanford specializes in industry-specific cleaning solutions. We understand that different businesses have unique cleaning requirements, and our experienced team delivers customized commercial cleaning services tailored to your industry&apos;s standards and regulations.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <industry.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-700 leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 data-cy="commercial-services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Office Cleaning Service & Janitorial Services</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed md:leading-loose max-w-2xl mx-auto">Our commercial cleaning service in Sanford offers complete business cleaning solutions. From daily office maintenance to specialized facility cleaning, we provide reliable, professional services that keep your business running smoothly and looking its best.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-10 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{service.price}</div>
                  <div className="text-sm text-gray-500 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Includes:</h4>
                  {service.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-gray-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <a href="#contact" className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center block">Request Quote</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What&apos;s the difference between office cleaning and janitorial services in Sanford, FL?</h3>
              <p className="text-gray-600">Our comprehensive janitorial services in Sanford, FL go beyond basic office cleaning to include facility maintenance, supply management, and specialized cleaning protocols. While office cleaning focuses on daily tasks like dusting and vacuuming, our full janitorial services encompass everything from deep sanitization to maintenance coordination, ensuring your Sanford business operates in a pristine, professional environment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}