import { Home, Building, Sparkles, Car, Wrench, Truck, Key, Calendar } from 'lucide-react';
import Link from 'next/link';
import { siteFacts } from '@/lib/siteFacts';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'House Cleaning',
      description: 'Kitchens, bathrooms, bedrooms, and living areas — weekly, biweekly, or one-time.',
      features: ['Weekly/Bi-weekly service', 'Deep cleaning', 'Move-in/out cleaning', 'Post-construction cleanup'],
      price: siteFacts.pricing.messages.entryAndTypical,
      link: '/house-cleaning'
    },
    {
      icon: Building,
      title: 'Commercial Cleaning',
      description: 'Offices and commercial spaces kept tidy on a schedule that fits your hours.',
      features: ['Daily/weekly service', 'Floor maintenance', 'Restroom sanitization', 'Trash removal'],
      price: 'Custom pricing',
      link: '/commercial-cleaning'
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Baseboards, appliances, and the corners that get skipped between regular cleans.',
      features: ['Cabinet interiors', 'Baseboards & trim', 'Light fixtures', 'Appliance deep clean'],
      price: `Typical ${siteFacts.pricing.typicalDeep}`,
      link: '/deep-cleaning'
    },
    {
      icon: Calendar,
      title: 'Maintenance Cleaning',
      description: 'Weekly, biweekly, or monthly visits so kitchens and baths do not pile up.',
      features: ['Flexible schedules', 'Same cleaner when possible', 'Custom checklists', 'Starting at $70'],
      price: 'Starting at $70',
      link: '/maintenance-cleaning'
    },
    {
      icon: Key,
      title: 'Airbnb Cleaning',
      description: 'Same-day turnovers for Sanford short-term rentals — linen refresh and restocking available.',
      features: ['Same-day turnovers', 'Linen refresh', 'Restocking options', 'Photo confirmation'],
      price: 'Custom pricing',
      link: '/airbnb-cleaning'
    },
    {
      icon: Car,
      title: 'Carpet Cleaning',
      description: 'Hot-water extraction for Sanford carpets, including pet stains and odors.',
      features: ['Hot water extraction', 'Pet stain treatment', 'Odor removal', 'Fast drying'],
      price: 'Custom pricing',
      link: '/carpet-cleaning'
    },
    {
      icon: Truck,
      title: 'Pressure Washing',
      description: 'Siding, driveways, patios, and other exterior surfaces around Sanford homes.',
      features: ['Soft-wash options', 'Concrete & paver cleaning', 'Gutters & soffits', 'Fences & decks'],
      price: 'Custom pricing',
      link: '/pressure-washing'
    },
    {
      icon: Sparkles,
      title: 'Window Cleaning',
      description: 'Interior and exterior glass, tracks, and screens for homes and businesses.',
      features: ['Exterior glass', 'Interior glass', 'Tracks & sills', 'Screens'],
      price: 'Custom pricing',
      link: '/window-cleaning'
    },
    {
      icon: Truck,
      title: 'Move In/Move Out',
      description: 'Empty-home cleans for move-ins, move-outs, and rental turnovers.',
      features: ['Deep sanitization', 'Deposit protection', 'Property turnover', 'Rental ready cleaning'],
      price: 'Starting at $120',
      link: '/move-in-move-out-cleaning'
    },
    {
      icon: Wrench,
      title: 'Post-Construction',
      description: 'Dust, paint residue, and fine debris after construction or renovation.',
      features: ['Dust removal', 'Paint splatter cleanup', 'Fixture cleaning', 'Final inspection'],
      price: 'Custom pricing',
      link: '/post-construction-cleaning'
    },

  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-cy="services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            House Cleaning Services in Sanford FL
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            House cleaning, deep cleans, move-outs, and commercial work across Sanford, Lake Mary, Longwood,
            and Seminole County. Licensed, bonded, and insured — get a quote online or call us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer block"
              data-cy={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}-card`}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 block">
                {service.description}
                {service.title === 'House Cleaning' && (
                  <> {' '}Explore <span className="text-blue-700 underline hover:text-blue-900 font-medium">Deep Cleaning</span>, <span className="text-blue-700 underline hover:text-blue-900 font-medium">Move In/Move Out</span>, or refresh fibers with <span className="text-blue-700 underline hover:text-blue-900 font-medium">Carpet Cleaning</span>.</>
                )}
                {service.title === 'Deep Cleaning' && (
                  <> {' '}Planning a move? See <span className="text-blue-700 underline hover:text-blue-900 font-medium">Move In/Move Out</span>. Want maintenance? Visit <span className="text-blue-700 underline hover:text-blue-900 font-medium">Maintenance Cleaning</span>. Stubborn fibers? Try <span className="text-blue-700 underline hover:text-blue-900 font-medium">Carpet Cleaning</span>.</>
                )}
                {service.title === 'Maintenance Cleaning' && (
                  <> {' '}Need a deeper reset first? Start with <span className="text-blue-700 underline hover:text-blue-900 font-medium">Deep Cleaning</span>.</>
                )}
                {service.title === 'Airbnb Cleaning' && (
                  <> {' '}Property managers also use our <span className="text-blue-700 underline hover:text-blue-900 font-medium">Move In/Move Out</span> service.</>
                )}
                {service.title === 'Pressure Washing' && (
                  <> {' '}Pair with <span className="text-blue-700 underline hover:text-blue-900 font-medium">Window Cleaning</span> for clearer glass.</>
                )}
                {service.title === 'Window Cleaning' && (
                  <> {' '}After exterior washes, consider <span className="text-blue-700 underline hover:text-blue-900 font-medium">Pressure Washing</span>.</>
                )}
                {service.title === 'Commercial Cleaning' && (
                  <> {' '}For smaller offices, see <span className="text-blue-700 underline hover:text-blue-900 font-medium">Office Cleaning</span>. Renovating? See <span className="text-blue-700 underline hover:text-blue-900 font-medium">Post-Construction</span>.</>
                )}
                {service.title === 'Post-Construction' && (
                  <> {' '}Set ongoing care with <span className="text-blue-700 underline hover:text-blue-900 font-medium">Commercial Cleaning</span> or <span className="text-blue-700 underline hover:text-blue-900 font-medium">House Cleaning</span>.</>
                )}
                {service.title === 'Move In/Move Out' && (
                  <> {' '}Add detailing with <span className="text-blue-700 underline hover:text-blue-900 font-medium">Deep Cleaning</span>, refresh fibers with <span className="text-blue-700 underline hover:text-blue-900 font-medium">Carpet Cleaning</span>, or set routine <span className="text-blue-700 underline hover:text-blue-900 font-medium">Maintenance Cleaning</span>.</>
                )}
                {service.title === 'Carpet Cleaning' && (
                  <> {' '}Bundle with <span className="text-blue-700 underline hover:text-blue-900 font-medium">Deep Cleaning</span> or maintain with <span className="text-blue-700 underline hover:text-blue-900 font-medium">House Cleaning</span>.</>
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
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Need a custom cleaning solution?</p>
          <Link
            href="/custom-quote"
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
