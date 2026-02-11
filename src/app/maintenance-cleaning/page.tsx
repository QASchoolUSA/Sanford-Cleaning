import Link from "next/link";
import Image from "next/image";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ServiceAreas from "@/components/ServiceAreas";
import AuthorBio from "@/components/AuthorBio";
import SpecialOffers from "@/components/SpecialOffers";
import { Home, CheckCircle, Calendar, Shield, Sparkles, ArrowRight, RotateCw, PenTool } from "lucide-react";

export const metadata = {
    title: "Recurring Maintenance Cleaning Sanford FL | Weekly & Bi-Weekly",
    description:
        "Keep your home pristine with maintenance cleaning in Sanford, FL. Weekly, bi-weekly, and monthly plans starting at $70. Save time & money!",
    alternates: { canonical: "https://sanfordcleaning.com/maintenance-cleaning" },
    openGraph: {
        title: "Recurring Maintenance Cleaning Sanford FL | Weekly & Bi-Weekly",
        description:
            "Automate your chores! Maintenance cleaning plans in Sanford starting at $70. Weekly, bi-weekly, or monthly. No contracts. Book online.",
        type: "website",
        url: "https://sanfordcleaning.com/maintenance-cleaning",
        images: [{ url: "https://sanfordcleaning.com/sanford-residential-cleaning.webp", width: 1200, height: 630 }],
    },
};

export default function MaintenanceCleaningPage() {
    const jsonLdFaq = `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should I schedule maintenance cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most busy families in Sanford choose bi-weekly service (every 2 weeks) to maintain a baseline of cleanliness. Weekly is best for homes with pets or allergies."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to sign a contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We offer flexible service agreements. You can pause, skip, or cancel your recurring service at any time with 24-hour notice."
        }
      },
      {
        "@type": "Question",
        "name": "Is maintenance cleaning cheaper than one-time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our recurring clients save up to 20% compared to one-time bookings because maintaining a clean home takes less time than deep cleaning."
        }
      }
    ]
  }`;

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <script id="maint-jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdFaq }} />
            <LocalBusinessSchema id="https://sanfordcleaning.com/maintenance-cleaning#localbusiness" name="Sanford Cleaning - Maintenance Services" url="https://sanfordcleaning.com/maintenance-cleaning" />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <RotateCw className="w-8 h-8 text-blue-600" />
                                <span className="text-blue-600 font-semibold">Recurring Maintenance Cleaning</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Consistent Cleanliness on Your Schedule
                            </h1>
                            <p className="text-lg text-gray-600">
                                Forget about spending weekends cleaning. Our maintenance plans (weekly, bi-weekly, or monthly) keep your Sanford home spotless year-round at our best value rates.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/booking" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center justify-center">
                                    Start Service
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
                                alt="Recurring cleaning service Sanford"
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
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does maintenance house cleaning cost in Sanford, FL?</h2>
                        <div className="prose max-w-none text-gray-700">
                            <p className="text-lg leading-relaxed mb-4">
                                <strong>Sanford Cleaning</strong> offers discounted <strong>maintenance cleaning in Sanford, FL</strong> starting at <strong>$70/visit</strong> for weekly clients. Our recurring service is designed for busy homeowners who want a "hotel-ready" home. It includes a standard checklist plus a <strong>rotating deep clean</strong> task (like baseboards or blinds) each visit at no extra cost.
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-2 list-none pl-0">
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>Weekly:</strong> Starting at $70 (~20% Off)</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>Bi-Weekly:</strong> Most Popular (15% Off)</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>Monthly:</strong> Maintenance Refresh</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>Perk:</strong> Rotating Deep Clean Tasks</li>
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
                            <h2 className="text-2xl font-bold text-gray-900">Expert Field Notes: The Value of Routine</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2">Preventing Buildup</h3>
                                <p className="text-sm text-gray-600">Weekly dusting prevents sticky "dust cement" on ceiling fan blades and blinds, which is much harder to clean once formed.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2">Hard Water maintenance</h3>
                                <p className="text-sm text-gray-600">Frequent cleaning of shower glass prevents the permanent etching common with Sanford's mineral-heavy water.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2">The "Rotation" System</h3>
                                <p className="text-sm text-gray-600">We deep clean one extra zone (e.g., baseboards or door frames) each visit, ensuring your whole home stays deep-clean quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Flexible Frequencies</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="font-bold text-xl mb-2">Weekly Service</h3>
                            <p className="text-blue-600 font-bold text-2xl mb-4">Save 20%</p>
                            <p className="text-gray-600 text-sm">Best for busy families, pets, and homes that need to stay "guest-ready" at all times.</p>
                        </div>
                        <div className="bg-blue-600 p-8 rounded-xl shadow-lg border border-blue-600 text-center text-white transform md:-translate-y-4">
                            <div className="inline-block bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-3">MOST POPULAR</div>
                            <RotateCw className="w-12 h-12 text-white mx-auto mb-4" />
                            <h3 className="font-bold text-xl mb-2">Bi-Weekly Service</h3>
                            <p className="text-white font-bold text-2xl mb-4">Save 15%</p>
                            <p className="text-blue-100 text-sm">The perfect balance. We come every two weeks to reset your bathrooms, kitchen, and floors.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                            <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="font-bold text-xl mb-2">Monthly Service</h3>
                            <p className="text-blue-600 font-bold text-2xl mb-4">Save 10%</p>
                            <p className="text-gray-600 text-sm">A thorough monthly refresh to handle the heavy lifting while you maintain the basics in between.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hyper-Local Neighborhood Section */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Where We Work Weekly</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Neighborhoods</h3>
                                <p className="text-gray-600 mb-4">
                                    We have regular routes through <strong>Buckingham Estates</strong> and <strong>Sylvan Lake Reserve</strong>. Our teams are efficient and know the gate codes and community rules.
                                </p>
                                <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Buckingham Estates</li>
                                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Sylvan Lake</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Retirement Communities</h3>
                                <p className="text-gray-600 mb-4">
                                    We offer specialized maintenance plans for residents in 55+ communities, assisting with hard-to-reach dusting and floor care.
                                </p>
                                <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Senior Living Friendly</li>
                                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Gentle Cleaning Products</li>
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
