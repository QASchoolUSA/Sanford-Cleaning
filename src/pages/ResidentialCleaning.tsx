import React from 'react';
import { Home, Clock, Shield, Sparkles, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResidentialCleaning = () => {
  const services = [
    {
      name: 'Regular House Cleaning',
      description: 'Weekly or bi-weekly cleaning to maintain your home',
      price: 'Starting at $80',
      duration: '2-4 hours',
      includes: [
        'Kitchen cleaning and sanitization',
        'Bathroom deep clean',
        'Dusting all surfaces',
        'Vacuuming and mopping',
        'Trash removal',
        'Bed making'
      ]
    },
    {
      name: 'One-Time Cleaning',
      description: 'Perfect for special occasions or seasonal cleaning',
      price: 'Starting at $120',
      duration: '3-5 hours',
      includes: [
        'Complete home cleaning',
        'Inside appliance cleaning',
        'Window sill cleaning',
        'Baseboards and trim',
        'Light fixture dusting',
        'Cabinet front cleaning'
      ]
    },
    {
      name: 'Move-In/Move-Out',
      description: 'Comprehensive cleaning for moving transitions',
      price: 'Starting at $200',
      duration: '4-6 hours',
      includes: [
        'Deep clean all rooms',
        'Inside cabinets and drawers',
        'Appliance interior cleaning',
        'Wall spot cleaning',
        'Floor deep cleaning',
        'Final inspection'
      ]
    }
  ];

  const addOns = [
    { name: 'Inside Oven Cleaning', price: '$25' },
    { name: 'Inside Refrigerator', price: '$20' },
    { name: 'Garage Cleaning', price: '$40' },
    { name: 'Basement Cleaning', price: '$35' },
    { name: 'Window Cleaning (Interior)', price: '$3 per window' },
    { name: 'Laundry Service', price: '$15 per load' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      rating: 5,
      text: 'Sanford Cleaning transformed my home! Their attention to detail is incredible and the team is so professional.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Mark Stevens',
      rating: 5,
      text: 'I\'ve been using their bi-weekly service for 6 months. My house has never been cleaner!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
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
                <Home className="w-8 h-8 text-blue-600" />
                <span className="text-blue-600 font-semibold">Residential Cleaning</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Professional Home Cleaning Services
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Transform your home into a spotless sanctuary with our comprehensive residential cleaning services. From regular maintenance to deep cleaning, we handle it all so you can focus on what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Book Now
                </button>
                <button 
                  onClick={scrollToContact}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Clean modern home interior"
                className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Residential Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our flexible cleaning packages designed to fit your lifestyle and budget.
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
                  Select This Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Customize your cleaning with these popular add-on services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{addon.name}</span>
                  <span className="text-blue-600 font-bold">{addon.price}</span>
                </div>
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
                Why Choose Our Residential Cleaning?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Trusted & Insured</h3>
                    <p className="text-gray-600">All our cleaners are background-checked, bonded, and insured for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Eco-Friendly Products</h3>
                    <p className="text-gray-600">We use safe, non-toxic cleaning products that are gentle on your family and pets.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">We work around your schedule with convenient time slots and easy rescheduling.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional cleaner at work"
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
              Happy Homeowners
            </h2>
            <p className="text-lg text-gray-600">
              See what our residential customers have to say about our services.
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
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
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
            Ready for a Spotless Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your residential cleaning service today and experience the difference professional cleaning makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Free Quote
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

export default ResidentialCleaning;