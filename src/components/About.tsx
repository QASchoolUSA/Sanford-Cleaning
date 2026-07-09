import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
              <h2 data-cy="about-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Sanford Cleaning
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 10 years of experience in the cleaning industry, Sanford Cleaning — operated by Topaz West LLC — has built a reputation for excellence, reliability, and customer satisfaction across Sanford, Lake Mary, and Longwood. We&apos;re not just a cleaning company – we&apos;re your partners in creating healthier, more comfortable living and working spaces.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our team of bonded, insured house cleaners uses the latest cleaning techniques and eco-friendly products to deliver exceptional results. We understand that every space is unique, which is why we customize our maid service and commercial cleaning to meet your specific needs and budget.
              </p>
              <p className="text-lg">
                <Link href="/about" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Learn more about our story →
                </Link>
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/sanford-cleaning-about-us.webp"
              alt="Sanford Cleaning - Professional Cleaning Team"
              width={800}
              height={800}
              className="w-full max-w-md mx-auto aspect-square object-cover rounded-xl shadow-lg"
              priority
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