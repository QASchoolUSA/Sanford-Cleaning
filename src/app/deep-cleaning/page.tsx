import Link from "next/link";
import Image from "next/image";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ServiceAreas from "@/components/ServiceAreas";
import { Sparkles, Clock, Shield, CheckCircle, Star, ArrowRight, Zap, ListChecks } from "lucide-react";

export const metadata = {
  title: "Deep Cleaning Services Near Me | Sanford, FL Deep Cleaners",
  description:
    "Expert deep cleaning services near me in Sanford, FL. Thorough house and apartment deep cleaning for spring cleaning, move-outs, and more. Get a free quote!",
  alternates: { canonical: "https://sanfordcleaning.com/deep-cleaning" },
  openGraph: {
    title: "Deep Cleaning Services Near Me | Sanford, FL Deep Cleaners",
    description:
      "Need deep cleaning near me? Our top-rated team handles spring cleaning, move-outs, and detailed house cleaning in Sanford, FL. Book online!",
    type: "website",
    url: "https://sanfordcleaning.com/deep-cleaning",
    images: ["https://sanfordcleaning.com/sanford-cleaning-homepage.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Cleaning Services Near Me | Sanford, FL Deep Cleaners",
    description:
      "Need deep cleaning near me? Our top-rated team handles spring cleaning, move-outs, and detailed house cleaning in Sanford, FL. Book online!",
    images: ["https://sanfordcleaning.com/sanford-cleaning-homepage.webp"],
  },
};

export default function DeepCleaningPage() {
  const jsonLdBreadcrumb = `{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sanfordcleaning.com" },
      { "@type": "ListItem", "position": 2, "name": "Deep Cleaning", "item": "https://sanfordcleaning.com/deep-cleaning" }
    ]
  }`;
  const jsonLdFaq = `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What’s included in a deep cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deep cleaning targets kitchens, bathrooms, baseboards, light fixtures, cabinet fronts, and high‑touch areas with detailed scrubbing and sanitization beyond routine service."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer move‑in/move‑out and seasonal deep cleans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide deep cleans for move‑in/move‑out, spring cleaning, special events, and post‑illness recovery. Packages can be tailored to your needs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a deep cleaning take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Duration depends on home size, scope, and condition. Typical visits range from 4–8 hours. Larger or add‑on tasks may extend the timeframe."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get pricing and book?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Get an instant, transparent quote and book online, or call (321) 236‑0618. Pricing reflects square footage, room count, and requested extras."
        }
      }
    ]
  }`;
  const packages = [
    {
      name: "Standard Deep Clean",
      description: "Comprehensive deep cleaning for regular maintenance",
      price: "Starting at $150",
      duration: "4-6 hours",
      includes: [
        "All surfaces deep cleaned and disinfected",
        "Kitchen appliances inside and out",
        "Bathroom deep scrub and sanitization",
        "Baseboards and window sills",
        "Light fixtures and ceiling fans",
        "Cabinet fronts and hardware",
      ],
    },
    {
      name: "Premium Deep Clean",
      description: "Our most thorough cleaning service",
      price: "Starting at $250",
      duration: "6-8 hours",
      includes: [
        "Everything in Standard package",
        "Inside cabinets and drawers",
        "Oven and refrigerator deep clean",
        "Wall washing and spot cleaning",
        "Detailed bathroom tile and grout",
        "Carpet deep cleaning (up to 3 rooms)",
      ],
    },
    {
      name: "Seasonal Deep Clean",
      description: "Perfect for spring cleaning or special occasions",
      price: "Starting at $200",
      duration: "5-7 hours",
      includes: [
        "Complete home deep cleaning",
        "Window cleaning (interior)",
        "Garage and basement cleaning",
        "Patio and outdoor area cleaning",
        "Organizing and decluttering assistance",
        "Final walkthrough and inspection",
      ],
    },
  ];

  const deepCleanAreas = [
    {
      area: "Kitchen",
      tasks: [
        "Deep clean inside and outside of all appliances",
        "Scrub and sanitize countertops and backsplash",
        "Clean inside cabinets and drawers",
        "Degrease range hood and filters",
        "Deep clean sink and faucet",
        "Sanitize handles and switches",
      ],
    },
    {
      area: "Bathrooms",
      tasks: [
        "Deep scrub tile and grout",
        "Remove soap scum and mineral deposits",
        "Sanitize all surfaces and fixtures",
        "Clean exhaust fans and vents",
        "Polish mirrors and glass",
        "Deep clean behind toilet and fixtures",
      ],
    },
    {
      area: "Living Areas",
      tasks: [
        "Dust and clean all surfaces thoroughly",
        "Clean baseboards and trim",
        "Vacuum and clean under furniture",
        "Clean light fixtures and ceiling fans",
        "Wipe down walls and switch plates",
        "Deep clean carpets and upholstery",
      ],
    },
    {
      area: "Bedrooms",
      tasks: [
        "Deep dust all furniture and surfaces",
        "Clean inside and outside of closets",
        "Vacuum under beds and furniture",
        "Clean mirrors and glass surfaces",
        "Sanitize frequently touched areas",
        "Organize and tidy personal items",
      ],
    },
  ];

  const whenToBook = [
    { icon: Sparkles, title: "Spring Cleaning", description: "Annual deep clean to refresh your home after winter" },
    { icon: Zap, title: "Before Special Events", description: "Prepare your home for holidays, parties, or guests" },
    { icon: Shield, title: "Post-Illness Recovery", description: "Thorough sanitization after illness in the household" },
    { icon: Clock, title: "Moving In/Out", description: "Complete deep clean for moving transitions" },
  ];

  return (
    <div className="pt-20">
      <script id="deep-cleaning-jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdBreadcrumb }} />
      <script id="deep-cleaning-jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdFaq }} />
      <LocalBusinessSchema id="https://sanfordcleaning.com/deep-cleaning#localbusiness" name="Sanford Cleaning - Deep Cleaning" url="https://sanfordcleaning.com/deep-cleaning" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-8 h-8 text-blue-600" />
                <span className="text-blue-600 font-semibold">Deep Cleaning</span>
              </div>
              <h1 data-cy="deep-cleaning-title" className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Deep Cleaning Services in Sanford, FL
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Go beyond surface cleaning with our thorough deep cleaning services. Perfect for spring cleaning, special occasions, or when your home needs that extra level of care and attention.
              </p>
              <p className="text-md text-gray-600 leading-relaxed">
                Whether you need comprehensive spring cleaning to refresh your home after winter or thorough move-out deep cleaning to ensure your property is spotless for the next occupants, our experienced team delivers exceptional results every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center justify-center">
                  Get Free Quote and Book
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a href="tel:321-236-0618" className="bg-white text-blue-600 border border-blue-200 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
                  Call (321) 236-0618
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <Shield className="w-4 h-4" /> Fully Insured
                <Clock className="w-4 h-4" /> On-time
                <Star className="w-4 h-4" /> 5-Star Rated
              </div>
            </div>
            <div className="relative">
              <Image
                src="/sanford-cleaning-cleaning-fridge.png"
                alt="Deep cleaning inside a refrigerator in Sanford, FL"
                width={800}
                height={500}
                priority
                className="w-full h-80 md:h-96 object-cover object-top rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deep Cleaning Packages</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {packages.map((pkg) => (
                  <div key={pkg.name} className="bg-gray-50 rounded-lg p-5 border">
                    <h4 className="font-semibold text-gray-900">{pkg.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{pkg.description}</p>
                    <p className="text-blue-600 font-semibold text-sm">{pkg.price}</p>
                    <p className="text-gray-500 text-xs mb-3">{pkg.duration}</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">When Do You Need Deep Cleaning?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {whenToBook.map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-6 border text-center">
                    <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Spring Cleaning and Move-Out Deep Cleaning</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {deepCleanAreas.map((area) => (
                <div key={area.area} className="bg-gray-50 rounded-xl p-6 border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.area}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {area.tasks.map((task) => (
                      <li key={task} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Deep Cleaning Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border text-center">
                <ListChecks className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Assessment</h4>
                <p className="text-gray-600 text-sm">We walk through your home and identify areas needing extra attention.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border text-center">
                <Sparkles className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Detailed Cleaning</h4>
                <p className="text-gray-600 text-sm">We deep clean kitchens, bathrooms, living areas, and bedrooms with a thorough checklist.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border text-center">
                <CheckCircle className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Final Touches</h4>
                <p className="text-gray-600 text-sm">Final inspection and finishing touches to ensure everything looks brand new.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Guide Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Deep Cleaning Guide</h2>
            <p className="text-gray-700 mb-4">
              Looking for <strong>deep cleaning near me</strong>? Our professional team provides thorough <strong>deep cleaning</strong> for houses and apartments in Sanford and surrounding areas. We focus on high‑touch surfaces, kitchens, bathrooms, baseboards, vents, and under‑furniture areas to remove built‑up grime and hidden dust.
            </p>
            <p className="text-gray-700 mb-4">
              We offer flexible <strong>deep cleaning services near me</strong>—from routine refreshes to move‑out projects and seasonal resets. Whether it’s <strong>deep cleaning house</strong> or <strong>apartment deep cleaning</strong>, we tailor the checklist to your home’s materials and specific needs, ensuring a spotless, healthy environment.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep Cleaning in Sanford, FL</h3>
              <p className="text-gray-700 mb-3">
                Our <strong>deep cleaning sanford, fl</strong> program provides comprehensive detailing across kitchens, bathrooms, living spaces, and bedrooms. For local residents searching <strong>deep cleaning sanford</strong>, we deliver consistent results with clear checklists, reliable scheduling, and a final walkthrough.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/custom-quote" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/booking" className="inline-flex items-center px-5 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">
                  Book Deep Cleaning
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Popular Searches Near You</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>deep cleaning near me</strong> – thorough cleaning for houses and apartments.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>deep cleaning services near me</strong> – flexible scheduling and detailed checklists.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>deep cleaning house</strong> – kitchens, bathrooms, floors, and hard‑to‑reach areas.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>apartment deep cleaning</strong> – studio to multi‑bedroom units, tailored to your layout.</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Choose Sanford Cleaning</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Insured team and reliable scheduling</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Detailed checklists and final inspection</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Material‑appropriate methods for stone, tile, and wood</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Clear communication and transparent estimates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready for a Deep Clean?</h2>
            <p className="text-gray-600 mb-6">Get a free quote and book your deep cleaning in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 inline-flex items-center justify-center">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a href="tel:321-236-0618" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 inline-flex items-center justify-center">
                Call (321) 236-0618
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreas />
    </div>
  );
}
