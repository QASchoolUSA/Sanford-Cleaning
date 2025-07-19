import React from 'react';
import { Home, Building, Sparkles, Car, Wrench, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Cleaning',
      description: 'Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.',
      features: ['Weekly/Bi-weekly service', 'Deep cleaning', 'Move-in/out cleaning', 'Post-construction cleanup'],
      price: 'Starting at $80',
      link: '/residential-cleaning'
    },
    {
      icon: Building,
      title: 'Commercial Cleaning',
      description: 'Professional office and commercial space cleaning to maintain a pristine work environment.',
      features: ['Daily/weekly service', 'Floor maintenance', 'Restroom sanitization', 'Trash removal'],
      price: 'Custom pricing',
      link: '/commercial-cleaning'
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Comprehensive deep cleaning service for those hard-to-reach areas and seasonal maintenance.',
      features: ['Cabinet interiors', 'Baseboards & trim', 'Light fixtures', 'Appliance deep clean'],
      price: 'Starting at $150',
      link: '/deep-cleaning'
    },
    {
      icon: Car,
      title: 'Carpet Cleaning',
      description: 'Professional carpet and upholstery cleaning using advanced equipment and eco-friendly solutions.',
      features: ['Steam cleaning', 'Stain removal', 'Pet odor treatment', 'Fabric protection'],
      price: 'Starting at $100',
      link: '#contact'
    },
    {
      icon: Wrench,
      title: 'Post-Construction',
      description: 'Specialized cleaning for newly constructed or renovated spaces to remove construction debris.',
      features: ['Dust removal', 'Paint splatter cleanup', 'Fixture cleaning', 'Final inspection'],
      price: 'Custom pricing',
      link: '#contact'
    },
    {
      icon: Heart,
      title: 'Senior Care Cleaning',
      description: 'Gentle and thorough cleaning services designed specifically for senior living spaces.',
      features: ['Medication organization', 'Safety-focused cleaning', 'Compassionate service', 'Flexible scheduling'],
      price: 'Starting at $90',
      link: '#contact'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of professional cleaning services tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-lg font-bold text-blue-600">{service.price}</span>
                {service.link.startsWith('/') ? (
                  <Link 
                    to={service.link}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {service.title === 'Residential Cleaning' ? 'View Home Cleaning Services' :
                     service.title === 'Commercial Cleaning' ? 'View Office Cleaning Services' :
                     service.title === 'Deep Cleaning' ? 'View Deep Cleaning Services' :
                     'Learn More'}
                  </Link>
                ) : (
                  <button 
                    onClick={scrollToContact}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Need a custom cleaning solution?</p>
          <button 
            onClick={scrollToContact}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;