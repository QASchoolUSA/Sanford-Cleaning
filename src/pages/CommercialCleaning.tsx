import React from 'react';
import { Building, Clock, Shield, Users, CheckCircle, Star, ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommercialCleaning = () => {
  const services = [
    {
      name: 'Office Cleaning',
      description: 'Daily, weekly, or monthly office maintenance',
      price: 'Starting at $150/visit',
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
      name: 'Medical Facility Cleaning',
      description: 'Specialized cleaning for healthcare environments',
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
      name: 'Retail Space Cleaning',
      description: 'Keep your retail environment pristine for customers',
      price: 'Starting at $200/visit',
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
      description: 'Professional cleaning for business environments'
    },
    {
      icon: Users,
      name: 'Medical Facilities',
      description: 'Specialized healthcare cleaning services'
    },
    {
      icon: Building,
      name: 'Retail Stores',
      description: 'Customer-focused retail space maintenance'
    },
    {
      icon: Shield,
      name: 'Educational Facilities',
      description: 'Safe and clean learning environments'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      company: 'TechStart Solutions',
      rating: 5,
      text: 'Sanford Cleaning has been maintaining our office for 2 years. Professional, reliable, and always exceeds expectations.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Dr. Sarah Williams',
      company: 'Central Medical Clinic',
      rating: 5,
      text: 'Their medical facility cleaning is exceptional. They understand our strict hygiene requirements perfectly.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Building className="w-8 h-8 text-blue-600" />
                <span className="text-blue-600 font-semibold">Commercial Cleaning</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Professional Commercial Cleaning Services
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Maintain a professional, healthy work environment with our comprehensive commercial cleaning services. From offices to medical facilities, we ensure your business space reflects your commitment to excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Get Custom Quote
                </button>
                <button 
                  onClick={scrollToContact}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Clean modern office space"
                className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide specialized cleaning services tailored to the unique needs of various industries.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Commercial Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions designed for business environments.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why Businesses Choose Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fully Licensed & Insured</h3>
                    <p className="text-gray-600">Complete business insurance coverage and all required licenses for commercial cleaning.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">After-hours, weekend, and holiday cleaning available to minimize business disruption.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Trained Professionals</h3>
                    <p className="text-gray-600">Background-checked staff trained in commercial cleaning protocols and safety procedures.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Briefcase className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Industry Expertise</h3>
                    <p className="text-gray-600">Specialized knowledge of industry-specific cleaning requirements and regulations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional commercial cleaning"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Business Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by businesses across Sanford and surrounding areas.
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

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Business Environment?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a custom commercial cleaning solution tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="tel:(555)123-4567"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialCleaning;