import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle, Clock, Shield, Star, ArrowRight } from 'lucide-react';

const PostConstructionCleaning = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Debris & Dust Removal',
      description: 'Complete removal of construction debris, sawdust, and fine particles from all surfaces'
    },
    {
      title: 'Window & Glass Cleaning',
      description: 'Professional cleaning of all windows, glass doors, and mirrors to remove construction residue'
    },
    {
      title: 'Floor Deep Cleaning',
      description: 'Specialized cleaning for hardwood, tile, carpet, and other flooring materials'
    },
    {
      title: 'Fixture & Appliance Cleaning',
      description: 'Thorough cleaning of light fixtures, ceiling fans, appliances, and electrical outlets'
    },
    {
      title: 'Cabinet & Countertop Cleaning',
      description: 'Interior and exterior cleaning of all cabinetry and countertop surfaces'
    },
    {
      title: 'Bathroom & Kitchen Sanitization',
      description: 'Complete sanitization of bathrooms and kitchens including plumbing fixtures'
    }
  ];

  const benefits = [
    'Save time and effort after your construction project',
    'Professional-grade equipment and cleaning solutions',
    'Experienced team familiar with post-construction challenges',
    'Safe removal of potentially hazardous construction materials',
    'Detailed cleaning that prepares your space for immediate use',
    'Fully insured and bonded for your protection'
  ];

  const areas = [
    'Sanford, FL',
    'Lake Mary, FL',
    'Longwood, FL',
    'Altamonte Springs, FL',
    'Winter Springs, FL',
    'Casselberry, FL',
    'Oviedo, FL',
    'Winter Park, FL'
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Post-Construction Cleaning Services in Sanford, FL | Sanford Cleaning</title>
        <meta name="description" content="Professional post-construction cleaning services in Sanford, FL. Expert construction cleanup, debris removal, and deep cleaning." />
        <meta property="og:title" content="Post-Construction Cleaning Services in Sanford, FL | Professional Construction Cleanup" />
        <meta property="og:description" content="Professional post-construction cleaning services in Sanford, FL. Expert construction cleanup and debris removal for residential and commercial properties." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sanfordcleaning.com/post-construction-cleaning" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 data-cy="post-construction-title" className="text-4xl md:text-5xl font-bold mb-6">
              Post-Construction Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional construction cleanup and debris removal for residential and commercial properties in Sanford, Florida and surrounding areas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13212360618"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (321) 236-0618
              </a>
              <Link
                to="/booking"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Expert Post-Construction Cleaning in Sanford, FL
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  After completing your construction or renovation project in Sanford, Florida, the last thing you want to worry about is the extensive cleanup required. Our professional post-construction cleaning services in Sanford, FL, take care of all the debris, dust, and construction residue, leaving your space spotless and ready for immediate use.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Serving Sanford and the greater Seminole County area, our experienced cleaning team understands the unique challenges that come with post-construction cleanup. From fine drywall dust to construction adhesives, we have the specialized equipment and expertise to handle it all safely and efficiently.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  <span className="text-gray-600">4.9/5 Customer Rating</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/commercial-cleaning-sanford.webp"
                  alt="Post-construction cleaning services in Sanford, FL"
                  className="w-full rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 left-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 data-cy="post-construction-services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Post-Construction Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our post-construction cleaning services in Sanford, FL, cover every aspect of construction cleanup, ensuring your newly built or renovated space is pristine and ready for occupancy.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 data-cy="construction-phases-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Construction Cleaning Phases
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                When it comes to post-construction cleaning in Sanford, FL, experience and attention to detail matter. Here's why property owners throughout Seminole County trust us with their construction cleanup needs.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Shield className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Fully Licensed & Insured</h3>
                  </div>
                  <p className="text-gray-600">
                    Our post-construction cleaning services in Sanford, FL, are fully licensed, bonded, and insured for your complete peace of mind.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Local Sanford Experts</h3>
                  <p className="text-blue-100">
                    As a locally-owned business serving Sanford, FL, and surrounding areas, we understand the specific needs of construction projects in Central Florida.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Same-Day Service Available</h3>
                  <p className="text-green-100">
                    Need immediate post-construction cleaning in Sanford? We offer flexible scheduling and same-day service for urgent cleanup needs.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-purple-100">
                    We stand behind our work with a 100% satisfaction guarantee on all post-construction cleaning services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 data-cy="construction-service-areas-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Post-Construction Cleaning Service Areas
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We proudly provide professional post-construction cleaning services throughout Sanford, FL, and the greater Central Florida region.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-gray-700 font-medium">{area}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6">
              Don't see your area listed? Contact us at <a href="tel:+13212360618" className="text-blue-600 hover:underline">(321) 236-0618</a> to inquire about service availability in your location.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 data-cy="construction-process-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Construction Cleaning Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our systematic approach ensures thorough and efficient post-construction cleanup for your Sanford, FL property.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Initial Assessment</h3>
                <p className="text-gray-600">
                  We conduct a thorough walkthrough of your Sanford property to assess the scope of post-construction cleaning required and provide an accurate quote.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Debris Removal</h3>
                <p className="text-gray-600">
                  Our team safely removes all construction debris, including nails, screws, wood pieces, and other materials, preparing the space for deep cleaning.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Deep Cleaning</h3>
                <p className="text-gray-600">
                  We perform comprehensive cleaning of all surfaces, fixtures, and areas using specialized equipment and eco-friendly cleaning solutions.
                </p>
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
            <Link to="/commercial-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Commercial Cleaning</Link>
            <Link to="/residential-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Residential Cleaning</Link>
            <Link to="/window-cleaning" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-blue-300 hover:text-blue-700 transition-colors">Window Cleaning</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 data-cy="construction-cta-title" className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Construction Site?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't let construction cleanup delay your project completion. Contact Sanford Cleaning today for fast, professional post-construction cleaning services.
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              Provide your home details and get an instant estimate. No waiting required!
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">Call Now</div>
                  <a href="tel:+13212360618" className="text-blue-200 hover:text-white">(321) 236-0618</a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <a href="mailto:info@sanfordcleaning.com" className="text-blue-200 hover:text-white">info@sanfordcleaning.com</a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">Quick Response</div>
                  <div className="text-blue-200">Same-day quotes</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get a Free Quote
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 data-cy="construction-testimonials-title" className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              What Our Construction Clients Say
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How much does post-construction cleaning cost in Sanford, FL?
                </h3>
                <p className="text-gray-600">
                  The cost of post-construction cleaning in Sanford varies based on the size of your property, the extent of construction work, and specific cleaning requirements. We provide free, detailed quotes for all projects. Contact us at (321) 236-0618 for a personalized estimate.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How long does post-construction cleaning take?
                </h3>
                <p className="text-gray-600">
                  The duration depends on the size and condition of your Sanford property. Most residential post-construction cleaning projects take 4-8 hours, while larger commercial spaces may require 1-2 days. We'll provide a time estimate during our initial assessment.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do you provide same-day post-construction cleaning in Sanford?
                </h3>
                <p className="text-gray-600">
                  Yes! We understand that construction projects often have tight deadlines. We offer same-day and emergency post-construction cleaning services in Sanford, FL, subject to availability. Call us at (321) 236-0618 to check our availability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What areas around Sanford do you serve for post-construction cleaning?
                </h3>
                <p className="text-gray-600">
                  We provide post-construction cleaning services throughout Sanford, FL, and surrounding areas including Lake Mary, Longwood, Altamonte Springs, Winter Springs, Casselberry, Oviedo, and Winter Park. Contact us to confirm service availability in your specific location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostConstructionCleaning;