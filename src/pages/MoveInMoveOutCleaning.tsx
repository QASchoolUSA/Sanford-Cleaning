import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Home, 
  CheckCircle, 
  Users, 
  Building, 
  Clock, 
  Shield, 
  Star,
  ArrowRight,
  Sparkles,
  Key,
  Truck
} from 'lucide-react';

const MoveInMoveOutCleaning: React.FC = () => {
  const moveInSteps = [
    {
      icon: <Key className="w-8 h-8 text-blue-600" />,
      title: "Pre-Move Inspection",
      description: "We assess the property condition and create a customized cleaning checklist."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "Deep Sanitization",
      description: "Complete disinfection of all surfaces, appliances, and high-touch areas."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Final Walkthrough",
      description: "Quality inspection to ensure your new home is move-in ready."
    }
  ];

  const moveOutSteps = [
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Comprehensive Cleaning",
      description: "Deep clean all rooms, appliances, fixtures, and hidden areas."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Damage Prevention",
      description: "Careful cleaning to avoid any damage that could affect your security deposit."
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Deposit Protection",
      description: "Professional cleaning that meets landlord standards for full deposit return."
    }
  ];

  const propertyOwnerBenefits = [
    "Faster tenant turnover with move-in ready properties",
    "Consistent cleaning standards across all units",
    "Reduced vacancy time between tenants",
    "Professional documentation for property records",
    "Specialized Airbnb and VRBO cleaning protocols"
  ];

  const residentBenefits = [
    "Stress-free moving experience with professional cleaning",
    "Maximize security deposit return with thorough move-out cleaning",
    "Start fresh in a sanitized, spotless new home",
    "Save time and energy during your busy moving process",
    "Flexible scheduling to accommodate your moving timeline"
  ];

  const serviceAreas = [
    "Sanford, FL",
    "Lake Mary, FL",
    "Longwood, FL",
    "Altamonte Springs, FL",
    "Winter Springs, FL",
    "Casselberry, FL",
    "Oviedo, FL",
    "Winter Park, FL"
  ];

  return (
    <>
      <Helmet>
        <title>Move In & Move Out Cleaning Services Sanford FL | Sanford Cleaning</title>
        <meta 
          name="description" 
          content="Sanford Cleaning offers the most reliable move in & move out cleaning services in Sanford FL, and surrounding areas. Perfect for rental property owners and residents moving homes." 
        />
        <link rel="canonical" href="https://sanfordcleaning.com/move-in-move-out-cleaning" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Truck className="w-16 h-16 mx-auto mb-4" />
            <h1 data-cy="move-cleaning-title" className="text-4xl md:text-5xl font-bold mb-6">
              Professional Move In & Move Out Cleaning Services in Sanford FL
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Stress-free moving with comprehensive cleaning solutions for property owners and residents in Sanford and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center">
                Get Free Quote
              </Link>
              <a href="tel:321-236-0618" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center">
                Call (321) 236-0618
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Fully Insured</h4>
                <p className="text-gray-600">Licensed and insured for your peace of mind</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">5-Star Rated</h4>
                <p className="text-gray-600">Consistently rated 5 stars by satisfied customers</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Satisfaction Guarantee</h4>
                <p className="text-gray-600">100% satisfaction guarantee on all services</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Truck className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Fast Booking</h4>
                <p className="text-gray-600">Quick and easy online booking in just minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 data-cy="comprehensive-solutions-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Cleaning Solutions for Rental Properties & Home Movers
            </h2>
            <p className="text-lg text-gray-600">
              Whether you're a property owner preparing units for new tenants or a resident moving to a new home, 
              our professional move in cleaning Sanford FL and move out cleaning Sanford FL services ensure a 
              spotless transition every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Move-In Cleaning */}
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="text-center mb-8">
                <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 data-cy="move-in-process-title" className="text-2xl font-bold text-gray-900 mb-4">
                  Our Move-In Cleaning Process
                </h3>
                <p className="text-gray-600">
                  Start fresh in your new home with our comprehensive move-in cleaning services.
                </p>
              </div>
              <div className="space-y-6">
                {moveInSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Move-Out Cleaning */}
            <div className="bg-green-50 rounded-xl p-8">
              <div className="text-center mb-8">
                <Truck className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 data-cy="move-out-process-title" className="text-2xl font-bold text-gray-900 mb-4">
                  Our Move-Out Cleaning Process
                </h3>
                <p className="text-gray-600">
                  Maximize your security deposit return with our thorough move-out cleaning.
                </p>
              </div>
              <div className="space-y-6">
                {moveOutSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 data-cy="why-choose-move-services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Move Cleaning Services?
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by property owners and residents throughout Sanford FL for reliable, professional cleaning services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Property Owners & Managers */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 data-cy="property-owners-title" className="text-2xl font-bold text-gray-900 mb-4">
                  For Property Owners & Managers
                </h3>
                <p className="text-gray-600">
                  Specialized cleaning services for rental properties, Airbnb, VRBO, and property management companies.
                </p>
              </div>
              <ul className="space-y-3">
                {propertyOwnerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Residents Moving Homes */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 data-cy="residents-moving-title" className="text-2xl font-bold text-gray-900 mb-4">
                  For Residents Moving Homes
                </h3>
                <p className="text-gray-600">
                  Comprehensive cleaning solutions for individuals and families relocating in Sanford FL.
                </p>
              </div>
              <ul className="space-y-3">
                {residentBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 data-cy="service-areas-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Service Areas: Sanford & Surrounding Communities
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              We proudly serve Sanford FL and surrounding areas with professional move in and move out cleaning services.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 text-center">
                  <span className="font-semibold text-gray-900">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Schedule Your Move Cleaning?</h3>
              <p className="text-blue-100 mb-6">
                Contact us today for a free quote on our professional move in and move out cleaning services in Sanford FL.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                  Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a href="tel:321-236-0618" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center">
                  Call (321) 236-0618
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoveInMoveOutCleaning;