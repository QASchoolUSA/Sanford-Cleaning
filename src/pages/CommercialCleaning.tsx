import { Helmet } from 'react-helmet-async';
import { Building, Clock, Shield, Users, CheckCircle, Star, ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommercialCleaning = () => {
  const services = [
    {
      name: 'Professional Office Cleaning Sanford',
      description: 'Complete office cleaning services with flexible scheduling options',
      price: 'Request Quote',
      duration: '2-6 hours',
      includes: [
        'Desk and workstation cleaning',
        'Restroom sanitization',
        'Kitchen/break room cleaning',
        'Trash removal and recycling',
        'Floor vacuuming and mopping',
        'Window and glass cleaning'
      ]
    },
    {
      name: 'Medical Facility Cleaning Services',
      description: 'HIPAA-compliant medical cleaning with specialized disinfection protocols',
      price: 'Custom pricing',
      duration: 'Varies',
      includes: [
        'Medical-grade disinfection',
        'Biohazard waste handling',
        'HIPAA compliant service',
        'Specialized equipment cleaning',
        'Air quality maintenance',
        'Compliance documentation'
      ]
    },
    {
      name: 'Retail Commercial Cleaning Sanford',
      description: 'Customer-focused retail cleaning to enhance shopping experience',
      price: 'Custom Pricing',
      duration: '3-8 hours',
      includes: [
        'Sales floor maintenance',
        'Fitting room sanitization',
        'Display case cleaning',
        'Customer restroom upkeep',
        'Entrance and storefront cleaning',
        'Inventory area organization'
      ]
    }
  ];

  const industries = [
    {
      icon: Briefcase,
      name: 'Corporate Offices',
      description: 'Expert office cleaning services in Sanford for professional business environments'
    },
    {
      icon: Users,
      name: 'Medical Facilities',
      description: 'Medical-grade commercial cleaning service Sanford with HIPAA compliance'
    },
    {
      icon: Building,
      name: 'Retail Stores',
      description: 'Professional retail cleaning services to enhance customer experience'
    },
    {
      icon: Shield,
      name: 'Educational Facilities',
      description: 'Comprehensive school and educational facility cleaning in Sanford'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      company: 'TechStart Solutions',
      rating: 5,
      text: 'Sanford Cleaning has been maintaining our office for 2 years. Professional, reliable, and always exceeds expectations.',
      image: '/commercial-cleaning-sanford.webp'
    },
    {
      name: 'Dr. Sarah Williams',
      company: 'Central Medical Clinic',
      rating: 5,
      text: 'Their medical facility cleaning is exceptional. They understand our strict hygiene requirements perfectly.',
      image: '/commercial-cleaning-sanford-florida.webp'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>#1 Office Cleaning Service in Sanford, FL | Free Quote</title>
        <meta name="description" content="Sanford's top-rated commercial cleaning for offices, medical, & retail. We keep your business pristine & professional. Get a free, no-obligation quote today!" />
        <meta property="og:title" content="#1 Office Cleaning Service in Sanford, FL | Free Quote" />
        <meta property="og:description" content="Sanford's top-rated commercial cleaning for offices, medical, & retail. We keep your business pristine & professional. Get a free, no-obligation quote today!" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sanfordcleaning.com/commercial-cleaning" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sanford Cleaning - Commercial Services",
              "image": "https://sanfordcleaning.com/sanford-cleaning-logo.png",
              "@id": "https://sanfordcleaning.com/commercial-cleaning",
              "url": "https://sanfordcleaning.com/commercial-cleaning",
              "telephone": "(321) 236-0618",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sanford",
                "addressLocality": "Sanford",
                "addressRegion": "FL",
                "postalCode": "32771",
                "addressCountry": "US"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "87"
              }
            }
          `}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Building className="w-8 h-8 text-blue-600" />
                <span className="text-blue-600 font-semibold">Commercial Cleaning</span>
              </div>
              <h1 data-cy="commercial-cleaning-title" className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Professional Commercial Cleaning Services
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sanford's premier commercial cleaning service providing exceptional business cleaning solutions. Our professional commercial cleaning service in Sanford ensures your workplace maintains the highest standards of cleanliness and hygiene. From small offices to large commercial facilities, we deliver reliable, comprehensive cleaning services that enhance your business image and create healthier work environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/free-custom-quote"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg inline-block text-center"
                >
                  Get Custom Quote
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/commercial-cleaning-sanford-florida.webp"
                alt="Sanford Cleaning - Office Cleaning in Sanford, FL"
                className="w-full max-w-md mx-auto aspect-square object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 data-cy="industries-served-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commercial cleaning service Sanford specializes in industry-specific cleaning solutions. We understand that different businesses have unique cleaning requirements, and our experienced team delivers customized commercial cleaning services tailored to your industry's standards and regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <industry.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 data-cy="commercial-services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Commercial Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commercial cleaning service in Sanford offers complete business cleaning solutions. From daily office maintenance to specialized facility cleaning, we provide reliable, professional services that keep your business running smoothly and looking its best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{service.price}</div>
                  <div className="text-sm text-gray-500 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Includes:</h4>
                  {service.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={scrollToContact}
                  className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Request Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 data-cy="why-choose-commercial-title" className="text-3xl font-bold text-gray-900 mb-8">
                Why Choose Our Commercial Cleaning?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Licensed Commercial Cleaning Service Sanford</h3>
                    <p className="text-gray-600">Fully licensed and insured commercial cleaning service in Sanford with comprehensive liability coverage and bonding for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Flexible Commercial Cleaning Schedules</h3>
                    <p className="text-gray-600">Our commercial cleaning service Sanford offers 24/7 availability with after-hours, weekend, and holiday cleaning to fit your business schedule without disruption.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Certified Commercial Cleaning Professionals</h3>
                    <p className="text-gray-600">Our Sanford commercial cleaning team consists of background-checked, trained professionals certified in advanced cleaning protocols and safety standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Briefcase className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Sanford Commercial Cleaning Expertise</h3>
                    <p className="text-gray-600">Years of experience providing commercial cleaning service in Sanford with deep understanding of local business needs and industry-specific requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/commercial-cleaning-sanford.webp"
                alt="Professional commercial cleaning in Sanford, FL"
                className="w-full max-w-md mx-auto aspect-square object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 data-cy="commercial-testimonials-title" className="text-3xl font-bold text-gray-900 mb-4">
              What Our Business Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              See why Sanford businesses consistently choose our commercial cleaning service for their facility maintenance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 data-cy="commercial-process-title" className="text-3xl font-bold text-gray-900 mb-8">
                Our Commercial Cleaning Process
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our commercial cleaning service Sanford extends throughout the greater Sanford area, providing reliable business cleaning solutions to companies of all sizes. We serve office buildings, medical facilities, retail stores, educational institutions, and industrial facilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Downtown Sanford commercial districts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Sanford business parks and office complexes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Medical facilities and healthcare centers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Retail shopping centers and stores</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Educational facilities and schools</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Benefits of Professional Commercial Cleaning in Sanford
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Enhanced Professional Image</h4>
                  <p className="text-gray-600">A clean business environment creates positive first impressions and reflects your company's attention to detail and professionalism.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Healthier Work Environment</h4>
                  <p className="text-gray-600">Regular commercial cleaning reduces germs, allergens, and contaminants, leading to fewer sick days and increased productivity.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cost-Effective Solution</h4>
                  <p className="text-gray-600">Professional commercial cleaning service in Sanford is more cost-effective than hiring in-house cleaning staff, with no employee benefits or equipment costs.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Compliance & Safety</h4>
                  <p className="text-gray-600">We ensure your facility meets health and safety regulations specific to your industry, reducing liability and compliance risks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/window-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Window Cleaning</Link>
            <Link to="/post-construction-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Post-Construction Cleaning</Link>
            <Link to="/pressure-washing" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Pressure Washing</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 data-cy="commercial-ready-title" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Professional Commercial Cleaning?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to experience the best commercial cleaning service Sanford has to offer? Contact our team for a free, customized quote and discover why local businesses trust us for their commercial cleaning needs.
          </p>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Need sparkling glass maintenance? Visit our <Link to="/window-cleaning" className="text-white underline decoration-white/60 hover:decoration-white">Window Cleaning</Link> page. Planning renovations? See <Link to="/post-construction-cleaning" className="text-white underline decoration-white/60 hover:decoration-white">Post-Construction Cleaning</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/free-custom-quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Custom Quote
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

export default CommercialCleaning;