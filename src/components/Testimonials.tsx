import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Sanford Cleaning has been taking care of our home for over 2 years. Their attention to detail is incredible, and the team is always professional and reliable. I highly recommend their services!',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      role: 'Office Manager',
      content: 'Our office has never looked better since we started using Sanford Cleaning. They work around our schedule and ensure our workspace is always spotless. Great service and competitive pricing.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Busy Mom',
      content: 'As a working mother of three, Sanford Cleaning has been a lifesaver. They use eco-friendly products which is important for my family, and they always do an amazing job. Worth every penny!',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Thompson',
      role: 'Restaurant Owner',
      content: 'We rely on Sanford Cleaning for our restaurant\'s deep cleaning needs. They understand the importance of maintaining health standards and always exceed our expectations. Truly professional service.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lisa Martinez',
      role: 'Senior Citizen',
      content: 'The senior care cleaning service is wonderful. The staff is patient, gentle, and thorough. They help me maintain my independence while ensuring my home stays clean and safe.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Robert Wilson',
      role: 'Property Manager',
      content: 'I manage several rental properties and Sanford Cleaning handles all our move-out cleanings. They\'re thorough, reliable, and help us get properties ready for new tenants quickly.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our cleaning services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-600 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Happy Customers?</h3>
            <p className="mb-6">Experience the Sanford Cleaning difference today.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;