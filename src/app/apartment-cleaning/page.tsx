import Link from "next/link";
import Image from "next/image";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ServiceAreas from "@/components/ServiceAreas";
import AuthorBio from "@/components/AuthorBio";
import { Home, CheckCircle, Clock, Shield, Star, ArrowRight, Building, Key, Layout } from "lucide-react";

export const metadata = {
    title: "Apartment Cleaning Services in Sanford FL | Studio to 3BR",
    description:
        "Top-rated apartment and condo cleaning in Sanford, FL. Specialized service for small spaces, walk-ups, and complexes. Get a free quote starting at $80.",
    alternates: { canonical: "https://sanfordcleaning.com/apartment-cleaning" },
    openGraph: {
        title: "Apartment Cleaning Services in Sanford FL | Studio to 3BR",
        description:
            "Reliable apartment cleaning near me in Sanford. We handle move-ins, move-outs, and recurring cleaning for condos and flats. Book online!",
        type: "website",
        url: "https://sanfordcleaning.com/apartment-cleaning",
        images: [{ url: "https://sanfordcleaning.com/sanford-residential-cleaning.webp", width: 1200, height: 630 }],
    },
};

export default function ApartmentCleaningPage() {
    const jsonLdFaq = `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does apartment cleaning cost in Sanford?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apartment cleaning starts at $80 for studio/1-bedroom units. Pricing increases slightly for 2-3 bedroom condos or deep cleaning requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you bring your own supplies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we bring all professional supplies and equipment, including vacuums and mops suitable for apartment floor plans."
        }
      },
      {
        "@type": "Question",
        "name": "Can you clean while I'm at work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We can arrange key pickup or lockbox access. All our cleaners are background-checked and insured for your peace of mind."
        }
      }
    ]
  }`;

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <script id="apt-jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdFaq }} />
            <LocalBusinessSchema id="https://sanfordcleaning.com/apartment-cleaning#localbusiness" name="Sanford Cleaning - Apartment Services" url="https://sanfordcleaning.com/apartment-cleaning" />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <Building className="w-8 h-8 text-blue-600" />
                                <span className="text-blue-600 font-semibold">Apartment & Condo Cleaning</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Reliable Apartment Cleaning in Sanford, FL
                            </h1>
                            <p className="text-lg text-gray-600">
                                From studio apartments to luxury condos, our local team specializes in small-space cleaning. We handle the unique needs of apartment living, including elevator access and move-in/out checklists.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/booking" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center justify-center">
                                    Get Free Quote
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                                <a href="tel:321-236-0618" className="bg-white text-blue-600 border border-blue-200 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
                                    Call (321) 236-0618
                                </a>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/sanford-residential-cleaning.webp"
                                alt="Apartment cleaning in Sanford"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* AIO 'Direct Answer' Section */}
            <section className="bg-white py-8 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does apartment cleaning cost in Sanford, FL?</h2>
                        <div className="prose max-w-none text-gray-700">
                            <p className="text-lg leading-relaxed mb-4">
                                <strong>Sanford Cleaning</strong> offers specialized <strong>apartment cleaning in Sanford, FL</strong> starting at <strong>$80/visit</strong> for studios and 1-bedrooms. Our compact teams are equipped for elevator buildings and walk-ups, servicing major complexes like <strong>Gateway at Riverwalk</strong>. We handle move-outs, pet hair removal, and balcony cleaning.
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-2 list-none pl-0">
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>Studio / 1BR:</strong> Starting at $80</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>2 Bedroom:</strong> Starting at $100</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>Move-Out:</strong> Deposit Guarantee</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>Pets:</strong> Hair Removal Included</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert Field Notes Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-6">
                            <Shield className="w-8 h-8 text-blue-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Expert Field Notes: Apartment Living</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2">Trash Valet Rules</h3>
                                <p className="text-sm text-gray-600">We know the strict trash chute and valet hours for Sanford complexes and ensure all waste is handled correctly to avoid fines.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2">Compact Dusting</h3>
                                <p className="text-sm text-gray-600">Apartments accumulate dust faster due to HVAC density. We focus on vent covers and ceiling fan blades in tight spaces.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2">Elevator Logistics</h3>
                                <p className="text-sm text-gray-600">Our teams travel light with compact equipment, making us efficient for third-floor walk-ups or elevator buildings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Apartment Cleaning Checklist</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <Layout className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="font-bold text-lg mb-2">Living Areas</h3>
                            <p className="text-gray-600 text-sm">Dusting blinds, ceiling fans, baseboards, and vacuuming upholstery.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <Clock className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="font-bold text-lg mb-2">Efficient Service</h3>
                            <p className="text-gray-600 text-sm">Typical 1-2 hour cleanings for smaller units to respect your schedule.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <Key className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="font-bold text-lg mb-2">Secure Access</h3>
                            <p className="text-gray-600 text-sm">We can coordinate with your leasing office for key release if you are at work.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hyper-Local Neighborhood Section */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving Sanford Complexes</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Downtown & Waterfront</h3>
                                <p className="text-gray-600 mb-4">
                                    We service many residents at <strong>Gateway at Riverwalk</strong> and <strong>The Lofts at 1st Street</strong>. We understand downtown parking and access codes.
                                </p>
                                <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Gateway at Riverwalk</li>
                                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Downtown Lofts</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lake Mary & Suburban</h3>
                                <p className="text-gray-600 mb-4">
                                    From <strong>Vintage Lake Mary</strong> to garden-style apartments off <strong>Airport Blvd</strong>, we provide regular service for busy professionals and families.
                                </p>
                                <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Vintage Lake Mary</li>
                                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Ballantrae</li>
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
        </div>
    );
}
