import Link from "next/link";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ServiceAreas from "@/components/ServiceAreas";
import AuthorBio from "@/components/AuthorBio";
import SpecialOffers from "@/components/SpecialOffers";
import { Sparkles, Droplets, CheckCircle, Phone, ArrowRight, Shield, Clock, MapPin, Eraser, Home } from "lucide-react";

export const metadata = {
  title: "#1 Pressure Washing in Sanford FL | Sanford Cleaning",
  description:
    "Professional pressure washing in Sanford, FL. House siding, driveways, patios, and gutters with safe soft-wash options.",
  keywords: [
    "pressure washing",
    "pressure washing near me",
    "pressure washing sanford fl",
    "house pressure washing",
    "exterior washing",
    "professional pressure washing",
    "house washing",
    "Sanford FL",
    "Sanford Florida",
  ],
  alternates: { canonical: "https://sanfordcleaning.com/pressure-washing" },
  openGraph: {
    title: "#1 Pressure Washing in Sanford FL | Sanford Cleaning",
    description:
      "Professional pressure washing and exterior washing in Sanford, Florida—siding, concrete, patios, and more. Full-service cleaning inside and out.",
    type: "website",
    url: "https://sanfordcleaning.com/pressure-washing",
    images: ["https://sanfordcleaning.com/sanford-cleaning-homepage.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Pressure Washing in Sanford FL | Sanford Cleaning",
    description:
      "Professional pressure washing and exterior washing in Sanford, Florida—siding, concrete, patios, and more. Full-service cleaning inside and out.",
    images: ["https://sanfordcleaning.com/sanford-cleaning-homepage.webp"],
  },
};

export default function PressureWashingPage() {
  const jsonLdBreadcrumb = `{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sanfordcleaning.com" },
      { "@type": "ListItem", "position": 2, "name": "Pressure Washing", "item": "https://sanfordcleaning.com/pressure-washing" }
    ]
  }`;
  const jsonLdFaq = `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which surfaces can you safely pressure wash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We clean siding (vinyl, stucco, brick, painted), concrete, pavers, patios, pool decks, fences, and gutters. For delicate materials we use soft‑wash methods."
        }
      },
      {
        "@type": "Question",
        "name": "Do you use eco‑friendly detergents and manage runoff?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We use surface‑appropriate, eco‑conscious solutions and follow proper runoff practices to protect landscaping and drainage."
        }
      },
      {
        "@type": "Question",
        "name": "How should I prepare before your visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Please move vehicles and furniture away from cleaning areas, secure pets, and close windows/doors. We’ll handle hoses and safety setup on arrival."
        }
      },
      {
        "@type": "Question",
        "name": "How do pricing and scheduling work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing depends on area size, material, and condition. Request a quote and book online or call (321) 236‑0618 for assistance."
        }
      }
    ]
  }`;
  const benefits = [
    "Professional pressure washing for homes and storefronts",
    "Exterior washing that removes mold, mildew, and grime",
    "Soft-wash options to protect delicate surfaces",
    "Licensed and insured, punctual and reliable service",
    "Eco-conscious detergents and proper runoff management",
  ];

  const services = [
    { title: "House Facade & Siding", description: "Gentle, professional pressure washing and soft-wash exterior cleaning for vinyl, stucco, brick, and painted surfaces." },
    { title: "Driveways & Walkways", description: "Lift stains, oil, algae, and discoloration from concrete and pavers for a brighter curb appeal." },
    { title: "Patios & Pool Decks", description: "Exterior washing that refreshes outdoor living spaces while helping prevent slippery buildup." },
    { title: "Fences & Decks", description: "Careful cleaning tailored to wood and composite materials to restore appearance." },
    { title: "Gutters & Soffits", description: "Clear stains and streaks on gutters, fascia, and soffits for a clean, polished look." },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <script id="pressure-washing-jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdBreadcrumb }} />
      <script id="pressure-washing-jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdFaq }} />
      <LocalBusinessSchema id="https://sanfordcleaning.com/pressure-washing#localbusiness" name="Sanford Cleaning - Pressure Washing" url="https://sanfordcleaning.com/pressure-washing" />
      {/* Hero */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Pressure Washing & Exterior Cleaning in Sanford, FL</h1>
              <p className="text-gray-700 mb-6">
                Restore curb appeal with exterior washing that’s safe, effective, and tailored to your home. Sanford Cleaning provides professional pressure washing in Sanford, Florida—removing mold, mildew, algae, and tough stains from siding, driveways, patios, gutters, and more.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/free-custom-quote" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" data-cy="pressure-quote-button">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get a Free Quote
                </Link>
                <Link href="/booking" className="inline-flex items-center px-5 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors" data-cy="pressure-booking-button">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Book Now
                </Link>
              </div>
              <div className="mt-4 text-sm text-gray-600 flex items-center">
                <Phone className="w-4 h-4 mr-2" /> Call Sanford Cleaning: <a href="tel:321-236-0618" className="ml-1 hover:text-blue-600 transition-colors" data-cy="pressure-phone-link">(321) 236-0618</a>
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
              <div className="mt-4 flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-2" /> Fully insured • <Clock className="w-4 h-4 mx-2" /> On-time • <MapPin className="w-4 h-4 mx-2" /> Sanford, FL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIO 'Direct Answer' Section */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does pressure washing cost in Sanford, FL?</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Sanford Cleaning</strong> delivers professional <strong>pressure washing in Sanford, FL</strong> starting at <strong>$100</strong> for driveways and <strong>$200</strong> for house washing. We use a &apos;Soft Wash&apos; technique for vinyl and stucco to kill mold without high-pressure damage, protecting your siding and landscaping. Most jobs are completed in 2-4 hours.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 list-none pl-0">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>Driveways:</strong> Starting at $100</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>House Wash:</strong> Starting at $200 (Soft Wash)</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>Technique:</strong> Low-Pressure Chemical Treat</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>Safety:</strong> Plant & Pet Friendly Rinses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SpecialOffers />

      {/* Expert Field Notes Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Expert Field Notes: Exterior Care</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Algae vs. Mold</h3>
                <p className="text-sm text-gray-600">Sanford&apos;s humidity breeds green algae on north-facing walls. We use a sodium hypochlorite blend to kill the spores, so it doesn&apos;t return in a month.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Soffit Protection</h3>
                <p className="text-sm text-gray-600">High pressure can force water into soffit vents (attics). We only use low-pressure soft washing on eaves to prevent water damage.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Surface Sealing</h3>
                <p className="text-sm text-gray-600">After cleaning pavers, we recommend sealing to lock out sand and prevent weeds—common issues in sandy Sanford soil.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Exterior Washing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-3">
                <Droplets className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Educational Article Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">A Homeowner’s Guide to Pressure Washing in Sanford, FL</h2>
        <div className="prose max-w-none text-gray-800">
          <p>
            In Sanford Florida, humidity and shade can create ideal conditions for algae, mold, and mildew. Over time, buildup dulls your home’s appearance and can even damage certain materials. Professional pressure washing and exterior washing tackles these contaminants safely. At Sanford Cleaning, we match water pressure, nozzles, and detergents to each surface to protect stucco, vinyl, brick, and painted siding.
          </p>
          <p className="mt-4">
            Driveways and walkways in shaded areas can also accumulate slippery growth. With proper treatment, we lift stains and improve traction. We also offer soft-wash for delicate materials, plus window cleaning follow-ups so everything shines.
          </p>
        </div>
      </section>

      {/* Popular Searches Near You */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Popular Searches Near You</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>pressure washing near me</strong> – house siding, driveways, patios.</span></li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>pressure washing sanford fl</strong> – local exterior washing with soft‑wash options.</span></li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>house pressure washing</strong> – safe methods for stucco, vinyl, brick, and paint.</span></li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>exterior washing near me</strong> – gutters, soffits, fences, and pool decks.</span></li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Choose Sanford Cleaning</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Licensed and insured exterior cleaning specialists</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Eco‑conscious detergents and managed runoff</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Soft‑wash options for delicate surfaces</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Transparent quotes and flexible scheduling</li>
            </ul>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/free-custom-quote" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/booking" className="inline-flex items-center px-5 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">
                Book Pressure Washing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hyper-Local Neighborhood Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving Sanford Neighborhoods & HOAs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">HOA Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Received an HOA letter in <strong>Lake Forest</strong> or <strong>Preserve at Lake Monroe</strong>? We offer priority scheduling to get you back in compliance quickly.
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-start"><MapPin className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Lake Forest</li>
                  <li className="flex items-start"><MapPin className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Preserve at Lake Monroe</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Historic Home Care</h3>
                <p className="text-gray-600 mb-4">
                  For homes in the <strong>Historic District</strong>, we use specialized ultra-low pressure to clean clapboard siding without damaging the paintwork.
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-start"><MapPin className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Historic District</li>
                  <li className="flex items-start"><MapPin className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Goldsboro</li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <AuthorBio />
            </div>
          </div>
        </div>
      </section>
      <ServiceAreas />
    </div >
  );
}
