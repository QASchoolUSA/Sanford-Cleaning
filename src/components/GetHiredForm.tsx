"use client";
import React, { useState } from 'react';
import { Send, Briefcase, Calendar } from 'lucide-react';

type FormData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  gender: string;
  zipcode: string;
  eligibleToWork: string;
  travelDistance: string;
  hoursPerWeek: string;
  workDays: string[];
  timeOfDay: string[];
  englishLevel: string;
  otherLanguages: string[];
  otherLanguageText: string;
  hasVehicle: string;
  hasLicense: string;
  criminalRecord: string;
  experience: string;
  techProficiency: string;
  howDidYouHear: string;
};

const GetHiredForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    gender: '',
    zipcode: '',
    eligibleToWork: '',
    travelDistance: '',
    hoursPerWeek: '',
    workDays: [],
    timeOfDay: [],
    englishLevel: '',
    otherLanguages: [],
    otherLanguageText: '',
    hasVehicle: '',
    hasLicense: '',
    criminalRecord: '',
    experience: '',
    techProficiency: '',
    howDidYouHear: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'workDays' | 'timeOfDay' | 'otherLanguages'
  ) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [field]: checked ? [...prev[field], value] : prev[field].filter((v) => v !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NODE_ENV === 'production'
        ? '/api/emails/hire-request'
        : 'http://localhost:3001/api/emails/hire-request';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('✅ Application submitted! We\'ll reach out shortly.');
        window.location.href = '/get-hired-success';
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Server error response:', errorData);
        alert(`❌ Error: ${errorData.error || 'Failed to submit application. Please try again or call us at (321) 236-0618.'}`);
      }
    } catch (error) {
      console.error('Network error submitting application:', error);
      alert('❌ Failed to submit application. Please try again or call us directly at (321) 236-0618.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Job Application</h3>
      <form onSubmit={handleSubmit} className="space-y-6" data-cy="get-hired-form">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your first name"
              data-cy="get-hired-first-name-input"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your last name"
              data-cy="get-hired-last-name-input"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="(321) 236-0618"
              data-cy="get-hired-phone-input"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
              data-cy="get-hired-email-input"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              data-cy="get-hired-gender-select"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
          <div>
            <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="32771"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="eligibleToWork" className="block text-sm font-medium text-gray-700 mb-2">Eligible to Work in US?</label>
            <select id="eligibleToWork" name="eligibleToWork" value={formData.eligibleToWork} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="travelDistance" className="block text-sm font-medium text-gray-700 mb-2">Willing to Travel (miles)</label>
            <select id="travelDistance" name="travelDistance" value={formData.travelDistance} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select</option>
              <option value="5">Up to 5</option>
              <option value="10">Up to 10</option>
              <option value="15">Up to 15</option>
              <option value="20+">20+</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="hoursPerWeek" className="block text-sm font-medium text-gray-700 mb-2">Desired Hours per Week</label>
            <select id="hoursPerWeek" name="hoursPerWeek" value={formData.hoursPerWeek} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select</option>
              <option value="10-20">10–20</option>
              <option value="20-30">20–30</option>
              <option value="30-40">30–40</option>
            </select>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700 mb-2">Days You Can Work</span>
            <div className="grid grid-cols-2 gap-2">
              {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (
                <label key={d} className="flex items-center space-x-2">
                  <input type="checkbox" value={d} checked={formData.workDays.includes(d)} onChange={(e) => handleCheckboxChange(e,'workDays')} />
                  <span className="text-sm text-gray-700">{d}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <span className="block text-sm font-medium text-gray-700 mb-2">Preferred Time of Day</span>
            <div className="grid grid-cols-2 gap-2">
              {['Morning','Afternoon','Evening'].map((t) => (
                <label key={t} className="flex items-center space-x-2">
                  <input type="checkbox" value={t} checked={formData.timeOfDay.includes(t)} onChange={(e) => handleCheckboxChange(e,'timeOfDay')} />
                  <span className="text-sm text-gray-700">{t}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="englishLevel" className="block text-sm font-medium text-gray-700 mb-2">English Level</label>
            <select id="englishLevel" name="englishLevel" value={formData.englishLevel} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select</option>
              <option value="Basic">Basic</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Fluent">Fluent</option>
            </select>
          </div>
        </div>

        <div>
          <span className="block text-sm font-medium text-gray-700 mb-2">Other Languages</span>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {['Spanish','Portuguese','French','Russian','Other'].map((lang) => (
              <label key={lang} className="flex items-center space-x-2">
                <input type="checkbox" value={lang} checked={formData.otherLanguages.includes(lang)} onChange={(e) => handleCheckboxChange(e,'otherLanguages')} />
                <span className="text-sm text-gray-700">{lang}</span>
              </label>
            ))}
          </div>
          {formData.otherLanguages.includes('Other') && (
            <input
              type="text"
              name="otherLanguageText"
              value={formData.otherLanguageText}
              onChange={handleInputChange}
              placeholder="Specify other language"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="hasVehicle" className="block text-sm font-medium text-gray-700 mb-2">Do you have a vehicle?</label>
            <select id="hasVehicle" name="hasVehicle" value={formData.hasVehicle} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="hasLicense" className="block text-sm font-medium text-gray-700 mb-2">Do you have a driver\'s license?</label>
            <select id="hasLicense" name="hasLicense" value={formData.hasLicense} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="criminalRecord" className="block text-sm font-medium text-gray-700 mb-2">Any criminal record?</label>
            <select id="criminalRecord" name="criminalRecord" value={formData.criminalRecord} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Cleaning Experience</label>
            <select id="experience" name="experience" value={formData.experience} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select experience</option>
              <option value="0-6 months">0–6 months</option>
              <option value="6-12 months">6–12 months</option>
              <option value="1-3 years">1–3 years</option>
              <option value="3+ years">3+ years</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="techProficiency" className="block text-sm font-medium text-gray-700 mb-2">Tech Proficiency</label>
            <select id="techProficiency" name="techProficiency" value={formData.techProficiency} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select</option>
              <option value="Basic">Basic</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
            <input
              type="text"
              id="howDidYouHear"
              name="howDidYouHear"
              value={formData.howDidYouHear}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Google, Friend, Facebook, etc."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
          data-cy="get-hired-form-submit-button"
        >
          <Send className="w-5 h-5" />
          <span>{isSubmitting ? 'Submitting...' : 'Submit Application'}</span>
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-600 flex items-center space-x-2">
        <Briefcase className="w-4 h-4" />
        <span>We provide training and flexible schedules.</span>
      </div>
      <div className="text-sm text-gray-600 flex items-center space-x-2">
        <Calendar className="w-4 h-4" />
        <span>Openings for weekdays and weekends.</span>
      </div>
    </div>
  );
};

export default GetHiredForm;