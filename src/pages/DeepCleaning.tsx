import { Helmet } from 'react-helmet-async';
import { Sparkles, Clock, Shield, CheckCircle, Star, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeepCleaning = () => {
  const packages = [
    {
      name: 'Standard Deep Clean',
      description: 'Comprehensive deep cleaning for regular maintenance',
      price: 'Starting at $150',
      duration: '4-6 hours',
      includes: [
        'All surfaces deep cleaned and disinfected',
        'Kitchen appliances inside and out',
        'Bathroom deep scrub and sanitization',
        'Baseboards and window sills',
        'Light fixtures and ceiling fans',
        'Cabinet fronts and hardware'
      ]
    },
    {
      name: 'Premium Deep Clean',
      description: 'Our most thorough cleaning service',
      price: 'Starting at $250',
      duration: '6-8 hours',
      includes: [
        'Everything in Standard package',
        'Inside cabinets and drawers',
        'Oven and refrigerator deep clean',
        'Wall washing and spot cleaning',
        'Detailed bathroom tile and grout',
        'Carpet deep cleaning (up to 3 rooms)'
      ]
    },
    {
      name: 'Seasonal Deep Clean',
      description: 'Perfect for spring cleaning or special occasions',
      price: 'Starting at $200',
      duration: '5-7 hours',
      includes: [
        'Complete home deep cleaning',
        'Window cleaning (interior)',
        'Garage and basement cleaning',
        'Patio and outdoor area cleaning',
        'Organizing and decluttering assistance',
        'Final walkthrough and inspection'
      ]
    }
  ];

  const deepCleanAreas = [
    {
      area: 'Kitchen',
      tasks: [
        'Deep clean inside and outside of all appliances',
        'Scrub and sanitize countertops and backsplash',
        'Clean inside cabinets and drawers',
        'Degrease range hood and filters',
        'Deep clean sink and faucet',
        'Sanitize handles and switches'
      ]
    },
    {
      area: 'Bathrooms',
      tasks: [
        'Deep scrub tile and grout',
        'Remove soap scum and mineral deposits',
        'Sanitize all surfaces and fixtures',
        'Clean exhaust fans and vents',
        'Polish mirrors and glass',
        'Deep clean behind toilet and fixtures'
      ]
    },
    {
      area: 'Living Areas',
      tasks: [
        'Dust and clean all surfaces thoroughly',
        'Clean baseboards and trim',
        'Vacuum and clean under furniture',
        'Clean light fixtures and ceiling fans',
        'Wipe down walls and switch plates',
        'Deep clean carpets and upholstery'
      ]
    },
    {
      area: 'Bedrooms',
      tasks: [
        'Deep dust all furniture and surfaces',
        'Clean inside and outside of closets',
        'Vacuum under beds and furniture',
        'Clean mirrors and glass surfaces',
        'Sanitize frequently touched areas',
        'Organize and tidy personal items'
      ]
    }
  ];

  const whenToBook = [
    {
      icon: Sparkles,
      title: 'Spring Cleaning',
      description: 'Annual deep clean to refresh your home after winter'
    },
    {
      icon: Zap,
      title: 'Before Special Events',
      description: 'Prepare your home for holidays, parties, or guests'
    },
    {
      icon: Shield,
      title: 'Post-Illness Recovery',
      description: 'Thorough sanitization after illness in the household'
    },
    {
      icon: Clock,
      title: 'Moving In/Out',
      description: 'Complete deep clean for moving transitions'
    }
  ];

  const testimonials = [
    {
      name: 'Amanda Foster',
      rating: 5,
      text: 'The deep cleaning service was incredible! They cleaned areas I never even thought of. My home feels brand new.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Robert Kim',
      rating: 5,
      text: 'Booked the premium deep clean before hosting family for the holidays. Every detail was perfect!',
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
      <Helmet>
        <title>Deep Cleaning Services Sanford FL | Comprehensive House Deep Cleaning</title>
        <meta name="description" content="Professional deep cleaning services in Sanford. Comprehensive deep house cleaning for spring cleaning, special events, and thorough home sanitization. Get a free estimate." />
        <meta name="keywords" content="deep cleaning sanford, house deep cleaning, spring cleaning, comprehensive cleaning, thorough cleaning, deep house cleaning service" />
        <meta property="og:title" content="Deep Cleaning Services Sanford FL | Comprehensive House Deep Cleaning" />
        <meta property="og:description" content="Professional deep cleaning services in Sanford, FL. Comprehensive deep house cleaning for spring cleaning and special events." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sanfordcleaning.com/deep-cleaning" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-8 h-8 text-blue-600" />
                <span className="text-blue-600 font-semibold">Deep Cleaning</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Comprehensive Deep Cleaning Services
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Go beyond surface cleaning with our thorough deep cleaning services. Perfect for spring cleaning, special occasions, or when your home needs that extra level of care and attention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Book Deep Clean
                </button>
                <button 
                  onClick={scrollToContact}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Get Free Estimate
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4239088/pexels-photo-4239088.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Deep cleaning in progress"
                className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* When to Book Deep Cleaning */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              When to Book Deep Cleaning
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep cleaning is perfect for various situations when your home needs extra attention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whenToBook.map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Cleaning Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Deep Cleaning Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the deep cleaning package that best fits your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{pkg.price}</div>
                  <div className="text-sm text-gray-500 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {pkg.duration}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Includes:</h4>
                  {pkg.includes.map((item, itemIndex) => (
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
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deep Clean */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Deep Clean
            </h2>
            <p className="text-lg text-gray-600">
              Our deep cleaning service covers every area of your home with meticulous attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {deepCleanAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{area.area}</h3>
                <div className="space-y-3">
                  {area.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Deep Cleaning Process
            </h2>
            <p className="text-lg text-gray-600">
              We follow a systematic approach to ensure every detail is covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">We evaluate your home and create a customized deep cleaning plan.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Clean</h3>
              <p className="text-gray-600">Our team systematically deep cleans every area using professional techniques.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inspection</h3>
              <p className="text-gray-600">Final walkthrough to ensure every detail meets our high standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Deep Clean Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See what our customers say about our deep cleaning services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
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
            Ready for a Deep Clean?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your home with our comprehensive deep cleaning service. Book today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Book Deep Clean
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

export default DeepCleaning;