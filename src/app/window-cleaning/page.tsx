import Link from "next/link";
import Image from "next/image";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Sparkles, ScanLine, CheckCircle, Phone, ArrowRight, Shield, Clock, MapPin } from "lucide-react";

export const metadata = {
  title: "#1 Window Cleaning in Sanford FL | Sanford Cleaning",
  description:
    "Inside and outside window cleaning in Sanford, FL for homes and businesses. Streak-free glass, tracks, sills, and screens.",
  keywords:
    "window cleaning near me, sanford window cleaning, window cleaning sanford fl, window cleaning in sanford florida, outside and inside window cleaning, residential window cleaning, commercial window cleaning",
  alternates: { canonical: "https://sanfordcleaning.com/window-cleaning" },
  openGraph: {
    title: "#1 Window Cleaning in Sanford FL | Sanford Cleaning",
    description:
      "Professional window cleaning in Sanford, FL—outside and inside service for residential and commercial. Tracks, sills, screens, and stain removal.",
    type: "website",
    url: "https://sanfordcleaning.com/window-cleaning",
    images: ["https://sanfordcleaning.com/sanford-cleaning-homepage.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Window Cleaning in Sanford FL | Sanford Cleaning",
    description:
      "Professional window cleaning in Sanford, FL—outside and inside service for residential and commercial. Tracks, sills, screens, and stain removal.",
    images: ["https://sanfordcleaning.com/sanford-cleaning-homepage.webp"],
  },
};

export default function WindowCleaningPage() {
  const jsonLdBreadcrumb = `{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sanfordcleaning.com" },
      { "@type": "ListItem", "position": 2, "name": "Window Cleaning", "item": "https://sanfordcleaning.com/window-cleaning" }
    ]
  }`;

  const jsonLdFaq = `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What’s included in your window cleaning service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We clean exterior and interior glass, and upon request we detail frames, sills, tracks, and screens. Hard-water spot treatment is available where feasible."
        }
      },
      {
        "@type": "Question",
        "name": "Do you clean screens and window tracks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We can remove, wash, and reinstall screens and clean tracks/sills to lift dust and buildup for smoother operation."
        }
      },
      {
        "@type": "Question",
        "name": "Is outside and inside window cleaning available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We offer outside and inside service for residential and commercial properties with streak‑free methods and pure‑water options."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take and how is pricing handled?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timing depends on window count, access, and add‑ons like tracks/screens. Get transparent pricing via our online quote or by calling (321) 236‑0618."
        }
      }
    ]
  }`;

  const areas = ["Sanford, FL", "Lake Mary, FL", "Longwood, FL", "Altamonte Springs, FL", "Winter Springs, FL"];

  const benefits = [
    "Outside and inside window cleaning for spotless results",
    "Residential and commercial service with flexible scheduling",
    "Frame, sill, track, and screen cleaning available",
    "Streak-free techniques and water-fed pole options",
    "Licensed and insured technicians based near Sanford, FL",
  ];

  const services = [
    {
      title: "Exterior Glass",
      description:
        "Windows cleaning in Sanford Florida with streak-free methods and pure-water options to remove dust, pollen, and spots.",
    },
    { title: "Interior Glass", description: "Careful inside window cleaning to brighten rooms and improve clarity without residue." },
    { title: "Tracks & Sills", description: "Detail cleaning of tracks, sills, and frames to remove dirt buildup and improve operation." },
    { title: "Screens", description: "Remove, wash, and reinstall screens to restore airflow and reduce dust." },
    { title: "Hard-Water Stain Removal", description: "Targeted treatments for mineral deposits and water spots where feasible." },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <script id="window-cleaning-jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdBreadcrumb }} />
      <script id="window-cleaning-jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdFaq }} />
      <LocalBusinessSchema id="https://sanfordcleaning.com/window-cleaning#localbusiness" name="Sanford Cleaning - Window Cleaning" url="https://sanfordcleaning.com/window-cleaning" />
      {/* Hero */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Outside & Inside Window Cleaning in Sanford, FL</h1>
              <p className="text-gray-700 mb-6">
                Crystal-clear windows brighten your space and improve curb appeal. Sanford Cleaning offers professional window cleaning in Sanford FL—outside and inside service for
                <Link href="/house-cleaning" className="text-blue-600 hover:underline"> residential</Link> and
                <Link href="/commercial-cleaning" className="text-blue-600 hover:underline"> commercial</Link> properties. We detail tracks, sills, frames, and screens for a complete finish.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/custom-quote" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" data-cy="windows-quote-button">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get a Free Quote
                </Link>
                <Link href="/booking" className="inline-flex items-center px-5 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors" data-cy="windows-booking-button">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Book Now
                </Link>
              </div>
              <div className="mt-4 text-sm text-gray-600 flex items-center">
                <Phone className="w-4 h-4 mr-2" /> Call Sanford Cleaning:
                <a href="tel:321-236-0618" className="ml-1 hover:text-blue-600 transition-colors" data-cy="windows-phone-link">
                  (321) 236-0618
                </a>
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
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/sanford-cleaning-windows-cleaning.png"
                  alt="Professional window cleaning in Sanford FL"
                  width={800}
                  height={500}
                  className="w-full h-80 md:h-96 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Window Cleaning Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-3">
                <ScanLine className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Article Section for SEO */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Window Cleaning in Sanford FL: What to Expect</h2>
        <div className="prose max-w-none text-gray-800">
          <p>
            For homeowners and businesses seeking window cleaning in Sanford FL, the goal is more than spotless glass. Proper outside and inside window cleaning removes pollen, construction dust, and water spots, while detailing tracks and sills to prevent sticking and grime buildup. Sanford Cleaning uses streak-free methods and surface-safe tools that respect your materials.
          </p>
          <p>
            Residential and commercial properties have different needs. Storefronts benefit from routine exterior glass cleaning to maintain visibility and brand image, while homes often pair window service with seasonal
            <Link href="/pressure-washing" className="text-blue-600 hover:underline"> pressure washing</Link> and interior detailing. If you’ve recently completed
            <Link href="/pressure-washing" className="text-blue-600 hover:underline"> pressure washing</Link>, we recommend scheduling windows cleaning right after to eliminate residue and ensure a consistent shine throughout the property.
          </p>
          <p>
            Our team provides flexible scheduling and clear pricing. Call <a href="tel:321-236-0618" className="text-blue-600 hover:underline">(321) 236-0618</a> to discuss your Sanford FL property, or
            <Link href="/custom-quote" className="text-blue-600 hover:underline"> request a custom quote</Link>. We can bundle pressure washing and window cleaning for a seamless, full-service experience.
          </p>
        </div>
      </section>

      {/* Popular Searches Near You */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Popular Searches Near You</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>window cleaning near me</strong> – local residential and commercial service.</span></li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>sanford window cleaning</strong> – streak‑free outside and inside cleaning.</span></li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>window screen cleaning</strong> – remove, wash, and reinstall screens.</span></li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>window track cleaning</strong> – detail tracks and sills to prevent sticking.</span></li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Choose Sanford Cleaning</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Licensed and insured window technicians</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Pure‑water and surface‑safe methods</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Flexible scheduling for homes and storefronts</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Transparent pricing and clear communication</li>
            </ul>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/custom-quote" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/booking" className="inline-flex items-center px-5 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">
                Book Window Cleaning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/pressure-washing" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">
              Pressure Washing
            </Link>
            <Link href="/house-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">
              Residential Cleaning
            </Link>
            <Link href="/commercial-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">
              Commercial Cleaning
            </Link>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-white border-t">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Areas We Serve</h2>
          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <span key={area} className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
