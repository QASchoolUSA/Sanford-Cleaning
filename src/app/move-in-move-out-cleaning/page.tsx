import Link from "next/link";
import { Home, CheckCircle, Users, Building, Clock, Shield, Star, ArrowRight, Sparkles, Key, Truck } from "lucide-react";

export const metadata = {
  title: "Move In & Move Out Cleaning Services Sanford FL | Sanford Cleaning",
  description:
    "Reliable move-in and move-out cleaning in Sanford, FL. Ideal for renters, owners, and property managers. Get a free quote today.",
  alternates: { canonical: "https://sanfordcleaning.com/move-in-move-out-cleaning" },
  openGraph: {
    title: "Move In & Move Out Cleaning Services Sanford FL | Sanford Cleaning",
    description:
      "Sanford Cleaning offers the most reliable move in & move out cleaning services in Sanford FL, and surrounding areas. Perfect for rental property owners and residents moving homes.",
    type: "website",
    url: "https://sanfordcleaning.com/move-in-move-out-cleaning",
    images: [{ url: "https://sanfordcleaning.com/sanford-residential-cleaning-2.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Move In & Move Out Cleaning Services Sanford FL | Sanford Cleaning",
    description:
      "Sanford Cleaning offers the most reliable move in & move out cleaning services in Sanford FL, and surrounding areas. Perfect for rental property owners and residents moving homes.",
  },
};

export default function MoveInMoveOutPage() {
  const moveInSteps = [
    {
      icon: Key,
      title: "Pre-Move Inspection",
      description:
        "We assess the property condition and create a customized cleaning checklist.",
      color: "text-blue-600",
    },
    {
      icon: Sparkles,
      title: "Deep Sanitization",
      description:
        "Complete disinfection of all surfaces, appliances, and high-touch areas.",
      color: "text-blue-600",
    },
    {
      icon: CheckCircle,
      title: "Final Walkthrough",
      description:
        "Quality inspection to ensure your new home is move-in ready.",
      color: "text-blue-600",
    },
  ];

  const moveOutSteps = [
    {
      icon: Home,
      title: "Comprehensive Cleaning",
      description:
        "Deep clean all rooms, appliances, fixtures, and hidden areas.",
      color: "text-blue-600",
    },
    {
      icon: Shield,
      title: "Damage Prevention",
      description:
        "Careful cleaning to avoid any damage that could affect your security deposit.",
      color: "text-blue-600",
    },
    {
      icon: Star,
      title: "Deposit Protection",
      description:
        "Professional cleaning that meets landlord standards for full deposit return.",
      color: "text-blue-600",
    },
  ];

  const propertyOwnerBenefits = [
    "Faster tenant turnover with move-in ready properties",
    "Consistent cleaning standards across all units",
    "Reduced vacancy time between tenants",
    "Professional documentation for property records",
    "Specialized Airbnb and VRBO cleaning protocols",
  ];

  const residentBenefits = [
    "Stress-free moving experience with professional cleaning",
    "Maximize security deposit return with thorough move-out cleaning",
    "Start fresh in a sanitized, spotless new home",
    "Save time and energy during your busy moving process",
    "Flexible scheduling to accommodate your moving timeline",
  ];

  const serviceAreas = [
    "Sanford, FL",
    "Lake Mary, FL",
    "Longwood, FL",
    "Altamonte Springs, FL",
    "Winter Springs, FL",
    "Casselberry, FL",
    "Oviedo, FL",
    "Winter Park, FL",
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Truck className="w-16 h-16 mx-auto mb-4" />
            <h1 data-cy="move-cleaning-title" className="text-4xl md:text-5xl font-bold mb-6">
              Professional Move In & Move Out Cleaning Services in Sanford, FL
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Stress-free moving with comprehensive cleaning solutions for property owners and residents in Sanford and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center">
                Get Free Quote
              </Link>
              <a href="tel:321-236-0618" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center">
                Call (321) 236-0618
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Fully Insured</h4>
                <p className="text-gray-600">Licensed and insured for your peace of mind</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">5-Star Rated</h4>
                <p className="text-gray-600">Consistently rated 5 stars by satisfied customers</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Satisfaction Guarantee</h4>
                <p className="text-gray-600">100% satisfaction guarantee on all services</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Truck className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Fast Booking</h4>
                <p className="text-gray-600">Quick and easy online booking in just minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 data-cy="comprehensive-solutions-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Cleaning Solutions for Rental Properties & Home Movers
            </h2>
            <p className="text-lg text-gray-600">
              Whether you're a property owner preparing units for new tenants or a resident moving to a new home, our professional move in cleaning Sanford FL and move out cleaning Sanford FL services ensure a spotless transition every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Move-In Cleaning */}
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="text-center mb-8">
                <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 data-cy="move-in-process-title" className="text-2xl font-bold text-gray-900 mb-4">
                  Our Move-In Cleaning Process
                </h3>
                <p className="text-gray-600">Start fresh in your new home with our comprehensive move-in cleaning services.</p>
              </div>
              <div className="space-y-6">
                {moveInSteps.map((step) => (
                  <div key={step.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Move-Out Cleaning */}
            <div className="bg-green-50 rounded-xl p-8">
              <div className="text-center mb-8">
                <Truck className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 data-cy="move-out-process-title" className="text-2xl font-bold text-gray-900 mb-4">
                  Our Move-Out Cleaning Process
                </h3>
                <p className="text-gray-600">Maximize your security deposit return with our thorough move-out cleaning.</p>
              </div>
              <div className="space-y-6">
                {moveOutSteps.map((step) => (
                  <div key={step.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Audiences */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl border p-8">
              <div className="flex items-center mb-4">
                <Building className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Benefits for Property Owners</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                {propertyOwnerBenefits.map((b) => (
                  <li key={b} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border p-8">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Benefits for Residents</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                {residentBenefits.map((b) => (
                  <li key={b} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Serving Sanford & Surrounding Areas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="px-4 py-2 bg-white border rounded-lg text-gray-700">
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/booking" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-flex items-center">
                Book Now <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/free-custom-quote" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 inline-flex items-center">
                Get a Free Quote <Sparkles className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}