import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, Shield, Clock, MapPin, Brush, SprayCan, Droplets, ArrowRight } from 'lucide-react';

const CarpetCleaning: React.FC = () => {
  const areas = [
    'Sanford, FL',
    'Lake Mary, FL',
    'Longwood, FL',
    'Altamonte Springs, FL',
    'Winter Springs, FL'
  ];

  const services = [
    { title: 'Whole-Home Carpet Cleaning', description: 'Hot water extraction (steam cleaning) for homes in Sanford, FL with thorough pre-treatment and rinse for long-lasting freshness.' },
    { title: 'High-Traffic Area Restoration', description: 'Targeted cleaning to lift embedded soil from hallways, living rooms, stairs, and entryways.' },
    { title: 'Pet Stain & Odor Treatment', description: 'Professional carpet cleaning solutions to neutralize odors and treat pet accidents.' },
    { title: 'Spot & Stain Removal', description: 'Removal of common stains including coffee, wine, and tracked-in residue where feasible.' },
    { title: 'Rug & Upholstery Care', description: 'Gentle cleaning for area rugs and selected upholstery with fiber-safe methods.' }
  ];

  const benefits = [
    'Deep steam extraction to remove dirt and allergens',
    'Eco-friendly pre-treatment and fiber-safe rinses',
    'Fast drying times with proper ventilation',
    'Licensed, insured, and local to Sanford, FL',
    'Friendly technicians with clear pricing'
  ];

  const faqs = [
    {
      q: 'How often should I schedule carpet cleaning in Sanford, FL?',
      a: 'Most homes benefit from professional carpet cleaning every 6–12 months, more frequently for high-traffic areas or homes with pets and children. Pair carpet cleaning with seasonal Deep Cleaning for a comprehensive refresh.'
    },
    {
      q: 'Do you offer pet stain and odor removal?',
      a: 'Yes. We use specialized pre-treatments and techniques for pet accidents and odors. For heavy issues, combining Carpet Cleaning with targeted odor treatments and Deep Cleaning produces the best results.'
    },
    {
      q: 'Is hot water extraction safe for my carpets?',
      a: 'Hot water extraction (often called steam cleaning) is a recommended method for many synthetic carpets. We match the process to fiber type and manufacturer guidelines to protect your carpet.'
    },
    {
      q: 'Do you clean rugs and stairs?',
      a: 'Yes, we clean many area rugs and carpeted stairs. We assess fiber type and construction to choose the safest effective method.'
    },
    {
      q: 'Can I bundle carpet cleaning with other services?',
      a: 'Absolutely. Many clients bundle Carpet Cleaning with Residential Cleaning, Move In/Move Out services, and Deep Cleaning for a whole-home reset.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <Helmet>
        <title>Carpet Cleaning in Sanford, FL | Sanford Cleaning</title>
        <meta name="description" content="Professional carpet cleaning in Sanford, FL. Steam cleaning, pet stain and odor removal, high-traffic restoration, and spot treatment for homes and businesses." />
        <meta name="keywords" content="carpet cleaning sanford, fl, carpet cleaning in sanford fl, sanford carpet cleaning, professional carpet cleaning, steam cleaning sanford fl, pet odor removal, carpet stain removal, residential carpet cleaning, commercial carpet cleaning" />
        <link rel="canonical" href="https://www.sanfordcleaning.com/carpet-cleaning" />
        <meta property="og:title" content="Carpet Cleaning in Sanford, FL | Sanford Cleaning" />
        <meta property="og:description" content="Professional carpet cleaning in Sanford, FL—steam extraction, pet stain and odor treatment, and spot removal for fresh, clean carpets." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sanfordcleaning.com/carpet-cleaning" />
        <meta property="og:image" content="/sanford-cleaning-homepage.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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
                Fresh, clean carpets improve your home’s comfort and air quality. We provide professional <strong>carpet cleaning in Sanford, FL</strong> using hot water extraction and fiber-safe treatments to remove dirt, allergens, and odors. From <strong>pet stain removal</strong> to <strong>high-traffic area restoration</strong>, we deliver reliable results for homes and businesses.
                For a full-home refresh, consider pairing carpet cleaning with <Link to="/deep-cleaning" className="text-blue-600 hover:underline">Deep Cleaning</Link> or routine <Link to="/residential-cleaning" className="text-blue-600 hover:underline">Residential Cleaning</Link>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/booking" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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

      {/* SEO Article */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Carpet Cleaning in Sanford, Florida: What to Expect</h2>
        <div className="prose max-w-none text-gray-800">
          <p>
            If you’re searching for <strong>carpet cleaning in Sanford FL</strong>, hot water extraction—often called steam cleaning—is a trusted method for deep soil removal and allergen reduction. Our team pre-vacuums, pre-treats stains, agitates fibers where needed, and performs thorough extraction for a fresher, cleaner feel underfoot. For households with pets, we tailor treatments to address accidents and odors safely.
          </p>
          <p>
            Professional carpet cleaning is an ideal complement to broader home care. Many clients coordinate <Link to="/deep-cleaning" className="text-blue-600 hover:underline">Deep Cleaning</Link> for kitchens and baths while scheduling carpets the same week for a true reset. If you’re moving, <Link to="/move-in-move-out-cleaning" className="text-blue-600 hover:underline">Move In/Move Out Cleaning</Link> plus carpet care can help you present a spotless property and protect deposits.
          </p>
          <p>
            Businesses in Sanford benefit from scheduled floor care to support a welcoming environment. Pair commercial carpet cleaning with <Link to="/commercial-cleaning" className="text-blue-600 hover:underline">Commercial Cleaning</Link> for lobbies, hallways, and conference rooms. After renovations, consider <Link to="/post-construction-cleaning" className="text-blue-600 hover:underline">Post-Construction Cleaning</Link> to remove fine dust before carpet service.
          </p>
          <p>
            For exterior refreshes, clients often book <Link to="/pressure-washing" className="text-blue-600 hover:underline">Pressure Washing</Link>. Indoors, maintain glass clarity with <Link to="/window-cleaning" className="text-blue-600 hover:underline">Window Cleaning</Link> to complete your property’s transformation.
          </p>
          <p>
            Need a tailored plan? Call <a href="tel:321-236-0618" className="text-blue-600 hover:underline">(321) 236-0618</a> or <Link to="/free-custom-quote" className="text-blue-600 hover:underline">request a custom quote</Link>. We’re happy to advise on frequency and bundling options to fit your home or office.
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/deep-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Deep Cleaning</Link>
            <Link to="/residential-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Residential Cleaning</Link>
            <Link to="/move-in-move-out-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Move In/Move Out</Link>
            <Link to="/commercial-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Commercial Cleaning</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Service Areas */}
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

      {/* CTA */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Professional Carpet Cleaning?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a fast estimate for carpet cleaning in Sanford, FL. Bundle services for extra value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/booking"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Book Carpet Cleaning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="tel:321-236-0618"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Call (321) 236-0618
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarpetCleaning;