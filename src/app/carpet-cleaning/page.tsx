import Link from "next/link";
import { Sparkles, CheckCircle, Shield, Clock, MapPin, Droplets, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Carpet Cleaning in Sanford, FL | Sanford Cleaning",
  description:
    "Professional carpet cleaning in Sanford, FL: steam extraction, pet odor removal, and spot treatment for homes and businesses.",
  keywords:
    "carpet cleaning sanford fl, sanford carpet cleaning, professional carpet cleaning, steam cleaning sanford fl, pet odor removal, carpet stain removal, residential carpet cleaning, commercial carpet cleaning",
  alternates: { canonical: "https://sanfordcleaning.com/carpet-cleaning" },
  openGraph: {
    title: "Carpet Cleaning in Sanford, FL | Sanford Cleaning",
    description:
      "Professional carpet cleaning in Sanford, FL—steam extraction, pet stain and odor treatment, and spot removal for fresh, clean carpets.",
    type: "website",
    url: "https://sanfordcleaning.com/carpet-cleaning",
    images: ["https://sanfordcleaning.com/sanford-cleaning-homepage.webp"],
  },
  twitter: { card: "summary_large_image" },
};

export default function CarpetCleaningPage() {
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
      {/* Hero */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <Sparkles className="w-6 h-6 text-blue-600" />
                <span className="text-blue-600 font-semibold">Carpet Cleaning</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Carpet Cleaning in Sanford, FL</h1>
              <p className="text-gray-700 mb-6">
                Fresh, clean carpets improve your home’s comfort and air quality. We provide professional <strong>carpet cleaning in Sanford, FL</strong> using hot water extraction and fiber-safe treatments to remove dirt, allergens, and odors. From <strong>pet stain removal</strong> to <strong>high-traffic area restoration</strong>, we deliver reliable results for homes and businesses. For a full-home refresh, consider pairing carpet cleaning with <Link href="/deep-cleaning" className="text-blue-600 hover:underline">Deep Cleaning</Link> or routine <Link href="/residential-cleaning" className="text-blue-600 hover:underline">Residential Cleaning</Link>.
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
    </div>
  );
}