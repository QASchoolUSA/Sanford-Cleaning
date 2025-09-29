import React from 'react';
import { Shield, Leaf, Clock, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trusted & Insured',
      description: 'Fully licensed, bonded, and insured for your peace of mind.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'We use environmentally safe cleaning products and methods.'
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'Consistent, punctual service you can count on every time.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: '100% satisfaction guarantee on all our cleaning services.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Sanford Cleaning
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 10 years of experience in the cleaning industry, Sanford Cleaning has built a reputation for excellence, reliability, and customer satisfaction. We're not just a cleaning company – we're your partners in creating healthier, more comfortable living and working spaces.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of trained professionals uses the latest cleaning techniques and eco-friendly products to deliver exceptional results. We understand that every space is unique, which is why we customize our services to meet your specific needs and budget.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/sanford-cleaning-about-us.webp"
              alt="Professional cleaning team"
              className="w-full max-w-md mx-auto aspect-square object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;