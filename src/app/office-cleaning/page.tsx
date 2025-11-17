import Link from "next/link";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Building2, Sparkles, CheckCircle, MapPin, Shield, Clock, ArrowRight, ListChecks } from "lucide-react";

export const metadata = {
  title: "Office Cleaning in Sanford, FL",
  description:
    "Professional office cleaning in Sanford, FL. Daily, weekly, and deep cleaning with office furniture cleaning, restrooms, breakrooms, floors, windows, and disinfection.",
  keywords:
    "office cleaning service near me, office cleaning service, sanford office cleaning, office furniture cleaning sanford, fl, office cleaning sanford, fl",
  alternates: { canonical: "https://sanfordcleaning.com/office-cleaning" },
  openGraph: {
    title: "Office Cleaning in Sanford, FL",
    description:
      "Reliable office cleaning service in Sanford, FL: routine maintenance, deep cleaning, and disinfection for professional workplaces.",
    type: "website",
    url: "https://sanfordcleaning.com/office-cleaning",
    images: ["https://sanfordcleaning.com/sanford-cleaning-homepage.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Cleaning in Sanford, FL",
    description:
      "Reliable office cleaning service in Sanford, FL: routine maintenance, deep cleaning, and disinfection for professional workplaces.",
    images: ["https://sanfordcleaning.com/sanford-cleaning-homepage.webp"],
  },
};

export default function OfficeCleaningPage() {
  const services = [
    { title: "Lobby & Common Areas", description: "Dusting, surface wipe‑downs, glass cleaning, and tidy presentation for reception and shared spaces." },
    { title: "Workstations & Offices", description: "Detailed cleaning for desks, chairs, shelves, and fixtures. Light organization upon request." },
    { title: "Office Furniture Cleaning", description: "Targeted care for chairs, desks, conference tables, and cubicle partitions to remove dust and smudges." },
    { title: "Breakroom & Kitchen", description: "Appliance exteriors, counters, cabinets, sinks, and floors cleaned and sanitized." },
    { title: "Restrooms & Sanitization", description: "High‑touch disinfection, fixture cleaning, trash removal, mirror/glass polishing, and supplies restock." },
    { title: "Floors & Finishes", description: "Vacuuming, mopping, and material‑appropriate care for hard surfaces and carpet." },
    { title: "Windows & Glass", description: "Interior glass and touch‑point detailing for a spotless look in meeting rooms and lobby areas." },
  ];

  const benefits = [
    "Insured team with consistent quality",
    "Flexible schedules: daily, weekly, or custom",
    "Disinfection of high‑touch areas",
    "Green cleaning options",
    "Reliable communication and checklists",
  ];

  const areas = [
    "Sanford, FL",
    "Lake Mary, FL",
    "Longwood, FL",
    "Altamonte Springs, FL",
    "Winter Springs, FL",
    "Casselberry, FL",
    "Oviedo, FL",
    "Winter Park, FL",
  ];

  const steps = [
    { step: 1, title: "Assessment & Plan", text: "We walk the space and document scope: common areas, workstations, restrooms, and floors." },
    { step: 2, title: "Routine Maintenance", text: "Scheduled cleaning service with dusting, trash removal, restroom sanitization, and floors." },
    { step: 3, title: "Deep Cleaning & Detailing", text: "Periodic detailing for office furniture, kitchen appliances, interior glass, and hard‑to‑reach areas." },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <LocalBusinessSchema id="https://sanfordcleaning.com/office-cleaning#localbusiness" name="Sanford Cleaning - Office Cleaning" url="https://sanfordcleaning.com/office-cleaning" />
      <script
        id="office-jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What does an office cleaning service include?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Routine office cleaning covers lobbies, workstations, conference rooms, restrooms, and breakrooms: dusting, trash removal, surface wipe-downs, glass cleaning, floors, and high-touch disinfection. Deep cleaning is available.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you accommodate daily, weekly, or custom schedules?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Yes. We offer flexible schedules—daily, weekly, biweekly, or custom—plus after-hours options to minimize disruption.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are your cleaners insured and background-checked?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Our team is insured and background-checked. Documentation can be provided upon request.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I get pricing or book service?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Get a free quote at sanfordcleaning.com/custom-quote, book online at sanfordcleaning.com/booking, or call (321) 236-0618 to discuss your office needs.',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <Building2 className="w-6 h-6 text-blue-600" />
                <span className="text-blue-600 font-semibold">Office Cleaning</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Office Cleaning Services in Sanford, FL</h1>
              <p className="text-gray-700 mb-6">
                Keep your workplace spotless, healthy, and client‑ready with our professional <strong>office cleaning service</strong>. We provide reliable daily, weekly, and custom schedules for businesses of all sizes—covering lobbies, workstations, conference rooms, restrooms, and breakrooms. Our team delivers consistent quality, detailed checklists, and high‑touch disinfection.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/booking" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Get Free Quote & Book
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a href="tel:321-236-0618" className="inline-flex items-center px-5 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">
                  Call (321) 236-0618
                </a>
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-2" /> Fully insured • <Clock className="w-4 h-4 mx-2" /> Flexible schedules • <MapPin className="w-4 h-4 mx-2" /> Sanford, FL
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 border">
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-2" />
                    <p className="text-gray-700 text-sm">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">What’s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-3">
                <Sparkles className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="bg-white border-t">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {areas.map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6">
            Don’t see your area listed? Call <a href="tel:+13212360618" className="text-blue-600 hover:underline">(321) 236-0618</a> to confirm availability.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Office Cleaning Process</h2>
            <p className="text-gray-600">A structured workflow that keeps your workplace consistently clean.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((st) => (
              <div key={st.step} className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <ListChecks className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900">{st.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{st.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Guide Content */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Office Cleaning Guide</h2>
            <p className="text-gray-700 mb-4">
              Searching for a trustworthy <strong>office cleaning service near me</strong>? We provide a comprehensive <strong>office cleaning service</strong> for professional spaces in Seminole County. From reception areas to conference rooms and restrooms, we maintain a consistent standard so your team and clients always arrive to a clean environment.
            </p>
            <p className="text-gray-700 mb-4">
              Our <strong>sanford office cleaning</strong> includes scheduled maintenance and periodic deep cleaning tailored to your building and traffic levels. We also offer <strong>office furniture cleaning sanford, fl</strong> for chairs, desks, tables, and partitions—removing dust, fingerprints, and smudges to keep everything looking polished.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Businesses Choose Us</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Consistent results with checklists and inspections</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Flexible scheduling—daytime or after hours</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> High‑touch disinfection and supply restocking</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Clear communication and reliable service</li>
              </ul>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Link href="/custom-quote" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/booking" className="inline-flex items-center px-5 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">
                  Book Office Cleaning
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Popular Searches Near You</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>office cleaning service near me</strong> – routine maintenance and deep cleaning for offices.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>office cleaning service</strong> – tailored schedules, reliable checklists, and disinfection.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>sanford office cleaning</strong> – local, insured professionals serving Sanford and nearby areas.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>office cleaning sanford, fl</strong> – trusted cleaning programs for small offices and large buildings.</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Additional Services</h3>
                <div className="flex flex-wrap gap-3">
                  <Link href="/commercial-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Commercial Cleaning</Link>
                  <Link href="/window-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Window Cleaning</Link>
                  <Link href="/carpet-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Carpet Cleaning</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/commercial-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Commercial Cleaning</Link>
            <Link href="/house-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Residential Cleaning</Link>
            <Link href="/window-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Window Cleaning</Link>
          </div>
        </div>
      </section>
    </div>
  );
}