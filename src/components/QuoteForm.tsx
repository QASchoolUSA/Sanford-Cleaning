"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const apiUrl = '/api/emails/quote-request';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        // Reset form
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        alert('✅ Thank you for your message! We\'ll get back to you within 24 hours with a custom quote.');
      } else {
        const errorData = await response.json();
        console.error('Server error response:', errorData);
        alert(`❌ Error: ${errorData.error || 'Failed to send message. Please try again or call us at (321) 236-0618.'}`);
      }
    } catch (error) {
      console.error('Network error submitting form:', error);
      if (error instanceof Error && error.name === 'TypeError' && error.message.includes('fetch')) {
        alert('❌ Connection error. Please check your internet connection and try again, or call us at (321) 236-0618.');
      } else {
        alert('❌ Failed to send message. Please try again or call us directly at (321) 236-0618.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-6" data-cy="quote-form">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
              data-cy="quote-form-name-input"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
              data-cy="quote-form-email-input"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="(321) 236-0618"
              data-cy="quote-form-phone-input"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Type
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              data-cy="quote-form-service-select"
            >
              <option value="">Select a service</option>
              <option value="residential">Residential Cleaning</option>
              <option value="commercial">Commercial Cleaning</option>
              <option value="deep">Deep Cleaning</option>
              <option value="carpet">Carpet Cleaning</option>
              <option value="construction">Post-Construction</option>
              <option value="senior">Senior Care Cleaning</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about your cleaning needs..."
            data-cy="quote-form-message-textarea"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
          data-cy="quote-form-submit-button"
        >
          <Send className="w-5 h-5" />
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;