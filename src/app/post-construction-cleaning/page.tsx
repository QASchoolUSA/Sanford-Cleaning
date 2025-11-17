import Link from "next/link";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { MapPin, CheckCircle, Clock, Shield, Star, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Post-Construction Cleaning in Sanford, FL",
  description:
    "Post-construction cleaning in Sanford, FL: debris and dust removal, windows, floors, fixtures, and sanitization to prepare your space.",
  keywords:
    "post construction cleaning sanford fl, renovation cleanup, construction dust removal, contractor cleanup, commercial post construction cleaning, residential post construction cleaning",
  alternates: { canonical: "https://sanfordcleaning.com/post-construction-cleaning" },
  openGraph: {
    title: "Post-Construction Cleaning in Sanford, FL",
    description:
      "Detailed post-construction cleanup: debris and dust removal, windows, floors, fixtures, and sanitization with insured professionals in Sanford, FL.",
    type: "website",
    url: "https://sanfordcleaning.com/post-construction-cleaning",
    images: ["https://sanfordcleaning.com/sanford-cleaning-homepage.webp"],
  },
  twitter: { card: "summary_large_image" },
};

export default function PostConstructionCleaningPage() {
  const jsonLdFaq = `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What’s included in post-construction cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Debris removal, fine dust capture, detailed cleaning of windows, floors, fixtures, cabinets, and full sanitization of kitchens and bathrooms."
        }
      },
      {
        "@type": "Question",
        "name": "Can you handle fine construction dust and residue?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We use methods and equipment designed to capture fine particulates from ceilings, walls, vents, and surfaces without damaging materials."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve residential and commercial projects and are you insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve both residential and commercial properties. Our team is licensed and insured, and we can provide documentation upon request."
        }
      },
      {
        "@type": "Question",
        "name": "How do quotes and scheduling work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing depends on scope, square footage, materials, and timeline. Request a transparent quote and schedule online or call (321) 236‑0618."
        }
      }
    ]
  }`;
  const services = [
    { title: "Debris & Dust Removal", description: "Safe removal of construction debris, sawdust, and fine particles from all surfaces." },
    { title: "Window & Glass Cleaning", description: "Streak-free cleaning of windows, glass doors, and mirrors to remove construction residue." },
    { title: "Floor Deep Cleaning", description: "Specialized care for hardwood, tile, carpet, and other flooring materials post-renovation." },
    { title: "Fixture & Appliance Cleaning", description: "Detailed cleaning of light fixtures, ceiling fans, appliances, switches, and outlets." },
    { title: "Cabinet & Countertop Cleaning", description: "Interior/exterior cabinet cleaning plus countertops and shelving wipe-downs." },
    { title: "Bathroom & Kitchen Sanitization", description: "Complete sanitization of bathrooms and kitchens, including plumbing fixtures." },
  ];

  const benefits = [
    "Professional-grade equipment and solutions",
    "Experienced team for post-construction challenges",
    "Safe removal of fine dust and residues",
    "Fully insured and bonded",
    "Detailed work that prepares your space for immediate use",
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
    {
      step: 1,
      title: "Initial Sweep & Dust Capture",
      text: "We remove visible debris and capture fine construction dust from ceilings, walls, and surfaces.",
    },
    {
      step: 2,
      title: "Detailing & Surfaces",
      text: "Detailed cleaning of fixtures, cabinets, windows, mirrors, baseboards, and vents to eliminate residue.",
    },
    {
      step: 3,
      title: "Deep Cleaning & Sanitization",
      text: "Floors are cleaned according to material, and kitchens/bathrooms are sanitized for immediate use.",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <script id="post-construction-cleaning-jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdFaq }} />
      <LocalBusinessSchema id="https://sanfordcleaning.com/post-construction-cleaning#localbusiness" name="Sanford Cleaning - Post-Construction Cleaning" url="https://sanfordcleaning.com/post-construction-cleaning" />
      {/* Hero */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <Star className="w-6 h-6 text-blue-600" />
                <span className="text-blue-600 font-semibold">Post-Construction Cleaning</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Detailed Post-Construction Cleaning in Sanford, FL</h1>
              <p className="text-gray-700 mb-6">
                Renovation complete? We’ll handle the cleanup. Our <strong>post-construction cleaning</strong> service removes debris, fine dust, and residue so your space is ready for move‑in. We clean windows, fixtures, floors, cabinets, and more using professional methods to ensure a spotless finish.
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
                <Shield className="w-4 h-4 mr-2" /> Fully insured • <Clock className="w-4 h-4 mx-2" /> Efficient turnaround • <MapPin className="w-4 h-4 mx-2" /> Sanford, FL
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
                <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Construction Cleaning Process</h2>
            <p className="text-gray-600">A systematic approach that delivers a move‑in ready finish.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((st) => (
              <div key={st.step} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold mr-3">{st.step}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{st.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{st.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Guide Content */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Post-Construction Cleaning Guide</h2>
            <p className="text-gray-700 mb-4">
              When a renovation or build wraps up, dust, debris, and residue can linger in every corner. Our professional <strong>post construction cleaning</strong> service prepares your space for move‑in with detailed attention to windows, fixtures, cabinets, floors, and high‑touch surfaces. Whether you need a comprehensive <strong>post construciton clean up service</strong> for a single room or an entire property, we tailor the checklist to the unique challenges of construction dust and contractor leftovers.
            </p>
            <p className="text-gray-700 mb-4">
              We provide end‑to‑end <strong>post construciton cleaning services</strong>, including debris removal, fine dust capture, glass detailing, baseboard and vent cleaning, and sanitation of kitchens and bathrooms. For new builds, our <strong>new construciton cleaning service</strong> follows a multi‑stage approach that ensures surfaces are safe, clean, and camera‑ready for turnover or listing photos.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How Much Does Post‑Construction Cleaning Cost?</h3>
              <p className="text-gray-700 mb-3">
                If you&apos;re wondering <strong>how much does post construciton cleaning cost</strong>, pricing depends on several factors: property size, number of rooms and windows, floor type and condition, the density of dust, paint or adhesive residue, and turnaround timeline. We offer transparent quotes and can accommodate phased cleaning for multi‑stage projects.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Scope and complexity (final clean vs. rough + final)</li>
                <li>Square footage and ceiling height</li>
                <li>Material sensitivity (stone, hardwood, specialty glass)</li>
                <li>Access and staging requirements</li>
              </ul>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Link href="/custom-quote" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/booking" className="inline-flex items-center px-5 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">
                  Book Post‑Construction Cleaning
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Popular Searches Near You</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>post construction cleaning near me</strong> – fast, thorough service for residential and commercial spaces.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>post construciton clean up service</strong> – debris removal, dust capture, and final detailing.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>post construciton cleaning services</strong> – tailored checklists for new builds and remodels.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>new construciton cleaning service</strong> – multi‑stage cleaning ideal for turnkey delivery.</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Choose Sanford Cleaning</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Specialized methods for construction dust and residue</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Insured, reliable team with flexible scheduling</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Final walkthrough to ensure a move‑in ready finish</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Transparent estimates and clear communication</li>
                </ul>
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