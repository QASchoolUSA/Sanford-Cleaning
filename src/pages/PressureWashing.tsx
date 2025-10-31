import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sparkles, Droplets, Building2, CheckCircle, Phone, ArrowRight, Shield, Clock, MapPin } from 'lucide-react';

const PressureWashing: React.FC = () => {
  const areas = [
    'Sanford, FL',
    'Lake Mary, FL',
    'Longwood, FL',
    'Altamonte Springs, FL',
    'Winter Springs, FL'
  ];

  const benefits = [
    'Professional pressure washing for homes and storefronts',
    'Exterior washing that removes mold, mildew, and grime',
    'Soft-wash options to protect delicate surfaces',
    'Licensed and insured, punctual and reliable service',
    'Eco-conscious detergents and proper runoff management'
  ];

  const services = [
    { title: 'House Facade & Siding', description: 'Gentle, professional pressure washing and soft-wash exterior cleaning for vinyl, stucco, brick, and painted surfaces.' },
    { title: 'Driveways & Walkways', description: 'Lift stains, oil, algae, and discoloration from concrete and pavers for a brighter curb appeal.' },
    { title: 'Patios & Pool Decks', description: 'Exterior washing that refreshes outdoor living spaces while helping prevent slippery buildup.' },
    { title: 'Fences & Decks', description: 'Careful cleaning tailored to wood and composite materials to restore appearance.' },
    { title: 'Gutters & Soffits', description: 'Clear stains and streaks on gutters, fascia, and soffits for a clean, polished look.' }
  ];

  const faqs = [
    {
      q: 'Is pressure washing safe for my home?',
      a: 'Yes. We use professional pressure washing techniques, including soft-wash for delicate surfaces, and match the cleaning method to your material (vinyl, stucco, brick, wood, and more).'
    },
    {
      q: 'How often should I schedule exterior washing?',
      a: 'Most Sanford Florida homeowners schedule exterior washing annually or seasonally, depending on shade, moisture, and algae growth. We can recommend a tailored cadence.'
    },
    {
      q: 'Do you also clean windows after pressure washing?',
      a: 'Absolutely. Sanford Cleaning is a full-service cleaning company—after washing the facade, we can clean exterior and interior windows so everything shines. A call does it all.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <Helmet>
        <title>Pressure Washing in Sanford, FL | Sanford Cleaning</title>
        <meta name="description" content="Sanford Cleaning provides professional pressure washing and exterior washing services in Sanford, FL. House siding, driveways, patios, gutters—expert soft-wash options available." />
        <meta name="keywords" content="pressure washing, exterior washing, professional pressure washing, house washing, Sanford FL, Sanford Florida" />
        <link rel="canonical" href="https://sanfordcleaning.com/pressure-washing" />
        <meta property="og:title" content="Pressure Washing in Sanford, FL | Sanford Cleaning" />
        <meta property="og:description" content="Professional pressure washing and exterior washing in Sanford, Florida—siding, concrete, patios, and more. Full-service cleaning inside and out." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sanfordcleaning.com/pressure-washing" />
        <meta property="og:image" content="https://sanfordcleaning.com/sanford-cleaning-homepage.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Pressure Washing in Sanford, FL</h1>
              <p className="text-gray-700 mb-6">
                Restore curb appeal with exterior washing that’s safe, effective, and tailored to your home. Sanford Cleaning provides professional pressure washing in Sanford, Florida—removing mold, mildew, algae, and tough stains from siding, concrete, patios, gutters, and more.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/free-custom-quote" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" data-cy="pressure-quote-button">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get a Free Quote
                </Link>
                <Link to="/booking" className="inline-flex items-center px-5 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors" data-cy="pressure-booking-button">
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
          <p>
            Not all jobs require high pressure. Our soft-wash method combines low pressure with surface-appropriate cleaning solutions to lift organic growth without harming delicate finishes. Driveways, walkways, and patios benefit from targeted, higher-pressure cleaning to remove oil, rust, and hard stains. The result is brighter concrete and improved curb appeal.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">After the Wash: Complete Exterior Detailing</h3>
          <p>
            Customers appreciate working with us because we are a full-service cleaning company. Once the facade looks fresh, streaks and water spots can be more noticeable on windows. We offer outside and inside <Link to="/window-cleaning" className="text-blue-600 hover:underline">window cleaning</Link> so your entire exterior looks polished. A call does it all—schedule pressure washing and window cleaning together for a seamless experience.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">When to Schedule</h3>
          <p>
            Most Sanford FL homeowners book exterior washing annually, or seasonally if their property sees faster organic growth. If you notice green or black streaks, slippery concrete, or fading brightness on siding, it’s time to schedule service. Contact Sanford Cleaning at <a href="tel:321-236-0618" className="text-blue-600 hover:underline">(321) 236-0618</a> for a tailored recommendation.
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/window-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Window Cleaning</Link>
            <Link to="/residential-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Residential Cleaning</Link>
            <Link to="/commercial-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Commercial Cleaning</Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-t">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Sanford Cleaning?</h2>
          <p className="text-gray-700 mb-6">
            Customers appreciate working with Sanford Cleaning because we are a full-service cleaning company. We have the capabilities to keep your entire building clean—inside and out. After washing the facade with pressure, it is likely that your windows also need cleaning. Consider scheduling <Link to="/window-cleaning" className="text-blue-600 hover:underline">window cleaning</Link> together for a seamless finish.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/free-custom-quote" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" data-cy="pressure-cta-quote">
              <Building2 className="w-5 h-5 mr-2" /> Get Exterior & Windows Quote
            </Link>
            <Link to="/booking" className="inline-flex items-center px-5 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors" data-cy="pressure-cta-book">
              <ArrowRight className="w-5 h-5 mr-2" /> Book Pressure Washing
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
              <p className="text-gray-700 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Areas</h2>
          <p className="text-gray-700 mb-4">We provide pressure washing and exterior washing across Sanford Florida and nearby communities:</p>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <span key={area} className="px-3 py-2 bg-white border rounded-md text-sm text-gray-700">{area}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressureWashing;