import React from 'react';
import { Home, Building, Sparkles, Car, Wrench, Heart, Truck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

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
      description: 'Professional carpet cleaning in Sanford, FL including pet stain and odor treatment.',
      features: ['Hot water extraction', 'Pet stain treatment', 'Odor removal', 'Fast drying'],
      price: 'Custom pricing',
      link: '/carpet-cleaning'
    },
    {
      icon: Truck,
      title: 'Pressure Washing',
      description: 'Professional exterior washing for siding, driveways, patios, and more in Sanford, FL.',
      features: ['Soft-wash options', 'Concrete & paver cleaning', 'Gutters & soffits', 'Fences & decks'],
      price: 'Custom pricing',
      link: '/pressure-washing'
    },
    {
      icon: Sparkles,
      title: 'Window Cleaning',
      description: 'Outside and inside window cleaning for residential and commercial in Sanford, FL.',
      features: ['Exterior glass', 'Interior glass', 'Tracks & sills', 'Screens'],
      price: 'Custom pricing',
      link: '/window-cleaning'
    },
    {
      icon: Truck,
      title: 'Move In/Move Out',
      description: 'Comprehensive cleaning services for moving transitions, perfect for tenants and property owners.',
      features: ['Deep sanitization', 'Deposit protection', 'Property turnover', 'Rental ready cleaning'],
      price: 'Starting at $120',
      link: '/move-in-move-out-cleaning'
    },
    {
      icon: Wrench,
      title: 'Post-Construction',
      description: 'Specialized cleaning for newly constructed or renovated spaces to remove construction debris.',
      features: ['Dust removal', 'Paint splatter cleanup', 'Fixture cleaning', 'Final inspection'],
      price: 'Custom pricing',
      link: '/post-construction-cleaning'
    },
    
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-cy="services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of professional cleaning services tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              role="link"
              tabIndex={0}
              onClick={() => navigate(service.link)}
              onKeyDown={(e) => { if (e.key === 'Enter') navigate(service.link); }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              data-cy={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}-card`}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">
                {service.description}
                {service.title === 'Residential Cleaning' && (
                  <> {' '}Explore <Link to="/deep-cleaning" className="text-blue-600 hover:underline">Deep Cleaning</Link>, <Link to="/move-in-move-out-cleaning" className="text-blue-600 hover:underline">Move In/Move Out</Link>, or refresh fibers with <Link to="/carpet-cleaning" className="text-blue-600 hover:underline">Carpet Cleaning</Link>.</>
                )}
                {service.title === 'Deep Cleaning' && (
                  <> {' '}Planning a move? See <Link to="/move-in-move-out-cleaning" className="text-blue-600 hover:underline">Move In/Move Out</Link>. Want maintenance? Visit <Link to="/residential-cleaning" className="text-blue-600 hover:underline">Residential Cleaning</Link>. Stubborn fibers? Try <Link to="/carpet-cleaning" className="text-blue-600 hover:underline">Carpet Cleaning</Link>.</>
                )}
                {service.title === 'Pressure Washing' && (
                  <> {' '}Pair with <Link to="/window-cleaning" className="text-blue-600 hover:underline">Window Cleaning</Link> for spotless glass.</>
                )}
                {service.title === 'Window Cleaning' && (
                  <> {' '}After exterior washes, consider <Link to="/pressure-washing" className="text-blue-600 hover:underline">Pressure Washing</Link>.</>
                )}
                {service.title === 'Commercial Cleaning' && (
                  <> {' '}Renovating? See <Link to="/post-construction-cleaning" className="text-blue-600 hover:underline">Post-Construction</Link>. Need glass care? Try <Link to="/window-cleaning" className="text-blue-600 hover:underline">Window Cleaning</Link>. Have carpeted areas? Check <Link to="/carpet-cleaning" className="text-blue-600 hover:underline">Carpet Cleaning</Link>.</>
                )}
                {service.title === 'Post-Construction' && (
                  <> {' '}Set ongoing care with <Link to="/commercial-cleaning" className="text-blue-600 hover:underline">Commercial Cleaning</Link> or <Link to="/residential-cleaning" className="text-blue-600 hover:underline">Residential Cleaning</Link>.</>
                )}
                {service.title === 'Move In/Move Out' && (
                  <> {' '}Add detailing with <Link to="/deep-cleaning" className="text-blue-600 hover:underline">Deep Cleaning</Link>, refresh fibers with <Link to="/carpet-cleaning" className="text-blue-600 hover:underline">Carpet Cleaning</Link>, or set routine <Link to="/residential-cleaning" className="text-blue-600 hover:underline">Residential Cleaning</Link>.</>
                )}
                {service.title === 'Carpet Cleaning' && (
                  <> {' '}Bundle with <Link to="/deep-cleaning" className="text-blue-600 hover:underline">Deep Cleaning</Link> or maintain with <Link to="/residential-cleaning" className="text-blue-600 hover:underline">Residential Cleaning</Link>.</>
                )}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-gray-100">
                <span className="text-lg font-bold text-blue-600">{service.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Need a custom cleaning solution?</p>
          <Link 
            to="/free-custom-quote"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            data-cy="services-custom-quote-button"
          >
            Request Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;