import { Helmet } from 'react-helmet-async';
import { Home, Clock, Shield, Sparkles, CheckCircle, Star, ArrowRight, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const SeniorCareCleaning = () => {
  const services = [
    {
      name: 'Safety-First Cleaning',
      description: 'Focus on decluttering and creating a safe environment.',
      price: 'Starting at $90',
      duration: '2-4 hours',
      includes: [
        'Clear pathways and remove tripping hazards',
        'Kitchen cleaning and sanitization',
        'Bathroom safety-focused deep clean',
        'Dusting and allergen reduction',
        'Vacuuming and mopping',
        'Trash removal'
      ]
    },
    {
      name: 'Healthy Home Cleaning',
      description: 'Using gentle, non-toxic products for a healthy living space.',
      price: 'Starting at $130',
      duration: '3-5 hours',
      includes: [
        'Complete home cleaning with eco-friendly products',
        'Sanitizing high-touch surfaces (doorknobs, light switches)',
        'Air-purifying cleaning techniques',
        'Baseboards and trim',
        'Light fixture dusting',
        'Cabinet front cleaning'
      ]
    },
    {
      name: 'Companion Cleaning',
      description: 'Light cleaning combined with friendly companionship.',
      price: 'Starting at $100',
      duration: '2-3 hours',
      includes: [
        'Light housekeeping tasks',
        'Laundry and bed making',
        'Meal prep area cleaning',
        'Watering plants',
        'Friendly conversation and check-in',
        'Organizing mail and newspapers'
      ]
    }
  ];

  const addOns = [
    { name: 'Inside Oven Cleaning', price: '$25' },
    { name: 'Inside Refrigerator', price: '$20' },
    { name: 'Window Cleaning (Interior)', price: '$3 per window' },
    { name: 'Laundry Service (full load)', price: '$15 per load' },
    { name: 'Grocery Shopping Assistance', price: '$30' },
    { name: 'Medication Reminder Setup', price: '$15' },
  ];

  const testimonials = [
    {
      name: 'Doris M. (resident at a 55+ community)',
      rating: 5,
      text: 'The team is so kind and patient. They not only clean my home beautifully but also take the time to ensure everything is safe for me. It\'s a huge relief.',
      image: '/sanford-residential-cleaning.webp'
    },
    {
      name: 'Frank P.',
      rating: 5,
      text: 'I hired Sanford Cleaning for my father. Their companion cleaning service has been a blessing. The house is tidy, and my dad enjoys the company. Highly recommend.',
      image: '/sanford-residential-cleaning-2.webp'
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
        <title>Senior Care Cleaning Services in Sanford, FL | 55+ Communities</title>
        <meta name="description" content="Specialized residential cleaning services for seniors and 55+ communities in Sanford, FL. We provide safe, compassionate, and reliable cleaning for a healthy home." />
        <meta name="keywords" content="senior care cleaning sanford, 55+ community cleaning, elderly home cleaning, safe cleaning for seniors, residential cleaning for seniors" />
        <meta property="og:title" content="Senior Care Cleaning Services in Sanford, FL" />
        <meta property="og:description" content="Specialized cleaning services for seniors and 55+ communities in Sanford, FL." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sanfordcleaning.com/senior-care-cleaning" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <HeartHandshake className="w-8 h-8 text-blue-600" />
                <span className="text-blue-600 font-semibold">Senior Care Cleaning</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Compassionate Cleaning for Seniors
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide specialized cleaning services for seniors and residents of 55+ communities in Sanford, FL. Our team is trained to create a safe, clean, and comfortable environment for those who need a helping hand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Book a Consultation
                </button>
                <button
                  onClick={scrollToContact}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Get a Free Quote
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/sanford-residential-cleaning-2.webp"
                alt="Compassionate cleaner helping a senior in a clean home"
                className="w-full max-w-md mx-auto aspect-square object-cover rounded-2xl shadow-2xl"
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
              Our Senior Care Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a service package that meets your needs, focusing on safety, health, and well-being.
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
              Additional Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Customize your service with these helpful add-ons.
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
                Why Choose Us for Senior Care Cleaning?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Trusted, Insured & Background-Checked</h3>
                    <p className="text-gray-600">Your safety is our priority. All our staff are thoroughly vetted for your peace of mind.</p>
                  </div>
                </div>
                 <div className="flex items-start space-x-4">
                  <HeartHandshake className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Compassionate & Patient Staff</h3>
                    <p className="text-gray-600">Our team is trained to work with seniors with the utmost respect, patience, and understanding.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Gentle & Effective Products</h3>
                    <p className="text-gray-600">We use safe, non-toxic, and eco-friendly cleaning products that are gentle on sensitivities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/sanford-residential-cleaning.webp"
                alt="Friendly cleaner working in a senior's home"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Senior Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              We are proud to serve the seniors in our community.
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
            A Clean & Safe Home is a Phone Call Away
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you or your loved ones maintain a clean, safe, and independent lifestyle. Contact us today for a free, no-obligation consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Book Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:(321)236-0618"
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

export default SeniorCareCleaning;
