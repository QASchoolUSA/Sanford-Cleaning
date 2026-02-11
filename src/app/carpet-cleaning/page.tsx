import Link from "next/link";
import Image from "next/image";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import AuthorBio from "@/components/AuthorBio";
import { Sparkles, CheckCircle, Shield, Clock, MapPin, Droplets, ArrowRight, Fan, PawPrint } from "lucide-react";

export const metadata = {
  title: "#1 Carpet & Rug Cleaning in Sanford FL | Sanford Cleaning",
  description:
    "Professional carpet cleaning in Sanford, FL: steam extraction, pet odor removal, and spot treatment for homes and businesses.",
  keywords:
    "carpet cleaning sanford fl, sanford carpet cleaning, professional carpet cleaning, steam cleaning sanford fl, pet odor removal, carpet stain removal, residential carpet cleaning, commercial carpet cleaning",
  alternates: { canonical: "https://sanfordcleaning.com/carpet-cleaning" },
  openGraph: {
    title: "#1 Carpet & Rug Cleaning in Sanford FL | Sanford Cleaning",
    description:
      "Professional carpet cleaning in Sanford, FL—steam extraction, pet stain and odor treatment, and spot removal for fresh, clean carpets.",
    type: "website",
    url: "https://sanfordcleaning.com/carpet-cleaning",
    images: ["https://sanfordcleaning.com/sanford-cleaning-homepage.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Carpet & Rug Cleaning in Sanford FL | Sanford Cleaning",
    description:
      "Professional carpet cleaning in Sanford, FL—steam extraction, pet stain and odor treatment, and spot removal for fresh, clean carpets.",
    images: ["https://sanfordcleaning.com/sanford-cleaning-homepage.webp"],
  },
};

export default function CarpetCleaningPage() {
  const jsonLdFaq = `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What carpet cleaning method do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We primarily use hot water extraction (steam cleaning) with fiber‑safe pre‑treatments and rinses to lift soil and allergens."
        }
      },
      {
        "@type": "Question",
        "name": "How long do carpets take to dry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typical dry times range from 4–8 hours depending on ventilation, carpet type, and soiling. We recommend good airflow to speed drying."
        }
      },
      {
        "@type": "Question",
        "name": "Do you treat pet stains and odors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer targeted treatments for pet accidents and odor neutralization. Effectiveness varies by severity and padding saturation."
        }
      },
      {
        "@type": "Question",
        "name": "How is pricing handled and how do I book?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing depends on rooms, square footage, and condition. Get a transparent quote and book online or call (321) 236‑0618."
        }
      }
    ]
  }`;
  const services = [
    { title: "Whole-Home Carpet Cleaning", description: "Hot water extraction (steam cleaning) for homes in Sanford, FL with thorough pre-treatment and rinse for long-lasting freshness." },
    { title: "High-Traffic Area Restoration", description: "Targeted cleaning to lift embedded soil from hallways, living rooms, stairs, and entryways." },
    { title: "Pet Stain & Odor Treatment", description: "Professional carpet cleaning solutions to neutralize odors and treat pet accidents." },
    { title: "Spot & Stain Removal", description: "Removal of common stains including coffee, wine, and tracked-in residue where feasible." },
    { title: "Rug & Upholstery Care", description: "Gentle cleaning for area rugs and selected upholstery with fiber-safe methods." },
  ];

  const benefits = [
    "Deep steam extraction to remove dirt and allergens",
    "Eco-friendly pre-treatment and fiber-safe rinses",
    "Fast drying times with proper ventilation",
    "Licensed, insured, and local to Sanford, FL",
    "Friendly technicians with clear pricing",
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <script id="carpet-cleaning-jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdFaq }} />
      <LocalBusinessSchema id="https://sanfordcleaning.com/carpet-cleaning#localbusiness" name="Sanford Cleaning - Carpet Cleaning" url="https://sanfordcleaning.com/carpet-cleaning" />
      {/* Hero */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <Sparkles className="w-6 h-6 text-blue-600" />
                <span className="text-blue-600 font-semibold">Carpet Cleaning</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Carpet & Rug Cleaning in Sanford, FL</h1>
              <p className="text-gray-700 mb-6">
                Fresh, clean carpets improve your home’s comfort and air quality. We provide professional <strong>carpet cleaning in Sanford, FL</strong> using hot water extraction and fiber-safe treatments to remove dirt, allergens, and odors. From <strong>pet stain removal</strong> to <strong>high-traffic area restoration</strong>, we deliver reliable results for homes and businesses. For a full-home refresh, consider pairing carpet cleaning with <Link href="/deep-cleaning" className="text-blue-600 hover:underline">Deep Cleaning</Link> or routine <Link href="/house-cleaning" className="text-blue-600 hover:underline">House Cleaning</Link>.
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
                <Shield className="w-4 h-4 mr-2" /> Fully insured • <Clock className="w-4 h-4 mx-2" /> Fast drying • <MapPin className="w-4 h-4 mx-2" /> Sanford, FL
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
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/sanford-cleaning-vacuuming-floor.png"
                  alt="Professional carpet vacuuming in Sanford FL"
                  width={800}
                  height={500}
                  className="w-full h-80 md:h-96 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIO 'Direct Answer' Section */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does carpet cleaning cost in Sanford, FL?</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Sanford Cleaning</strong> provides professional <strong>carpet cleaning in Sanford, FL</strong> starting at <strong>$50/room</strong> (min. applies). We use truck-mounted hot water extraction (steam cleaning) to remove embedded sand, pet dander, and allergens common in Florida homes. Our process includes enzymatic pet odor treatment and rapid-dry fans.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 list-none pl-0">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>Per Room:</strong> Starting at $50</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>Whole Home:</strong> Packages available</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>Tech:</strong> 230°F Steam Extraction</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" /> <strong>Drying:</strong> 4-6 Hours Typical</li>
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
              <h2 className="text-2xl font-bold text-gray-900">Expert Field Notes: Carpet Care</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Sandy Soil</h3>
                <p className="text-sm text-gray-600">Sanford soil is sandy and abrasive. It cuts carpet fibers like sandpaper if not extracted annually, shortening carpet life.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Humidity & Drying</h3>
                <p className="text-sm text-gray-600">We use extra dry passes and air movers to combat Florida humidity, ensuring carpets dry before mold can grow.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Pet Enzyme Science</h3>
                <p className="text-sm text-gray-600">For urine spots, we use bio-enzymatic digesters that break down uric acid crystals rather than just masking the smell.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Carpet Cleaning Services</h2>
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

      {/* Hyper-Local Neighborhood Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving Sanford Neighborhoods</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Historic & Established</h3>
                <p className="text-gray-600 mb-4">
                  Cleaning wool rugs in the <strong>Historic District</strong>? We have specialized low-moisture options for delicate fibers.
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-start"><MapPin className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Historic District</li>
                  <li className="flex items-start"><MapPin className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Mayfair</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Communities</h3>
                <p className="text-gray-600 mb-4">
                  We remove kid and pet stains daily in neighborhoods like <strong>Buckingham Estates</strong> and <strong>Lake Forest</strong>.
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-start"><MapPin className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Buckingham Estates</li>
                  <li className="flex items-start"><MapPin className="w-4 h-4 text-blue-500 mr-2 mt-1" /> Lake Forest</li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <AuthorBio />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}