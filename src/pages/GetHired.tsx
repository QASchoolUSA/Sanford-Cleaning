import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface FormData {
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
}

const GetHired: React.FC = () => {
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
    howDidYouHear: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'workDays' | 'timeOfDay' | 'otherLanguages') => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email sending functionality
    console.log('Form submitted:', formData);
    alert('Thank you for your application! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <Helmet>
        <title>Join Our Cleaning Team | Careers at Sanford Cleaning - Apply Now</title>
        <meta name="description" content="Join our professional cleaning team in Sanford, FL. Great pay ($20+ per hour), flexible hours, weekly pay. Apply now for cleaning jobs and start your career with us." />
        <meta name="keywords" content="cleaning jobs Sanford FL, house cleaner jobs, cleaning careers, flexible work, part-time cleaning jobs, full-time cleaning jobs" />
        <meta property="og:title" content="Join Our Cleaning Team | Careers at Sanford Cleaning" />
        <meta property="og:description" content="Join our professional cleaning team in Sanford, FL. Great pay, flexible hours, weekly pay. Apply now!" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sanfordcleaning.com/get-hired" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Join Our Cleaning Team</h1>
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-blue-500 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Great Pay</h3>
                  <p>Earn $20+ per hour plus tips</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Weekly Pay</h3>
                  <p>Get paid every week</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Flexible Hours</h3>
                  <p>Work when it suits you</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Do What You Love</h3>
                  <p>Make homes beautiful and clean</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Join Our Team of Cleaners</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Zipcode *</label>
                <input
                  type="text"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Work Eligibility */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Are you eligible to work in the USA? *</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="eligibleToWork"
                    value="yes"
                    checked={formData.eligibleToWork === 'yes'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="eligibleToWork"
                    value="no"
                    checked={formData.eligibleToWork === 'no'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            {/* Travel Distance */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How far are you willing to travel?</label>
              <select
                name="travelDistance"
                value={formData.travelDistance}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select distance</option>
                <option value="5-miles">Up to 5 miles</option>
                <option value="10-miles">Up to 10 miles</option>
                <option value="15-miles">Up to 15 miles</option>
                <option value="20-miles">Up to 20 miles</option>
                <option value="25-miles">Up to 25 miles</option>
                <option value="30-miles">Up to 30+ miles</option>
              </select>
            </div>

            {/* Hours per week */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How many hours do you want to work per week?</label>
              <select
                name="hoursPerWeek"
                value={formData.hoursPerWeek}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select hours</option>
                <option value="0-10">0-10 hours</option>
                <option value="10-20">10-20 hours</option>
                <option value="20-30">20-30 hours</option>
                <option value="30-40">30-40 hours</option>
                <option value="40+">40+ hours</option>
              </select>
            </div>

            {/* Work Days */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What days are you interested in working?</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                  <label key={day} className="flex items-center">
                    <input
                      type="checkbox"
                      value={day}
                      checked={formData.workDays.includes(day)}
                      onChange={(e) => handleCheckboxChange(e, 'workDays')}
                      className="mr-2"
                    />
                    {day}
                  </label>
                ))}
              </div>
            </div>

            {/* Time of Day */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What time of day are you available for working?</label>
              <div className="space-y-2">
                {['Mornings', 'Afternoons', 'Evenings'].map(time => (
                  <label key={time} className="flex items-center">
                    <input
                      type="checkbox"
                      value={time}
                      checked={formData.timeOfDay.includes(time)}
                      onChange={(e) => handleCheckboxChange(e, 'timeOfDay')}
                      className="mr-2"
                    />
                    {time}
                  </label>
                ))}
              </div>
            </div>

            {/* English Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Do you speak English?</label>
              <select
                name="englishLevel"
                value={formData.englishLevel}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select level</option>
                <option value="fluent">I speak English</option>
                <option value="good">Not perfect, but enough for communication</option>
                <option value="beginner">Beginner level, probably not enough for communication</option>
                <option value="none">I do NOT speak English</option>
              </select>
            </div>

            {/* Other Languages */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Other languages you speak?</label>
              <div className="space-y-2">
                {['Russian', 'Ukrainian', 'Spanish'].map(lang => (
                  <label key={lang} className="flex items-center">
                    <input
                      type="checkbox"
                      value={lang}
                      checked={formData.otherLanguages.includes(lang)}
                      onChange={(e) => handleCheckboxChange(e, 'otherLanguages')}
                      className="mr-2"
                    />
                    {lang}
                  </label>
                ))}
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="other"
                    checked={formData.otherLanguages.includes('other')}
                    onChange={(e) => handleCheckboxChange(e, 'otherLanguages')}
                    className="mr-2"
                  />
                  Other
                </label>
              </div>
              {formData.otherLanguages.includes('other') && (
                <input
                  type="text"
                  name="otherLanguageText"
                  value={formData.otherLanguageText}
                  onChange={handleInputChange}
                  placeholder="Please specify which language"
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>

            {/* Vehicle and License */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Do you have a reliable vehicle?</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasVehicle"
                      value="yes"
                      checked={formData.hasVehicle === 'yes'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    I have
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasVehicle"
                      value="no"
                      checked={formData.hasVehicle === 'no'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    I do not have
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Do you have a valid driver's license?</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasLicense"
                      value="yes"
                      checked={formData.hasLicense === 'yes'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    I have
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasLicense"
                      value="no"
                      checked={formData.hasLicense === 'no'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    I do NOT have
                  </label>
                </div>
              </div>
            </div>

            {/* Criminal Record */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Have you been convicted of a crime?</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="criminalRecord"
                    value="yes"
                    checked={formData.criminalRecord === 'yes'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  I have
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="criminalRecord"
                    value="no"
                    checked={formData.criminalRecord === 'no'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  I have NOT
                </label>
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Any prior experience working in cleaning industry? Please provide some text about your experience</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your cleaning experience..."
              />
            </div>

            {/* Tech Proficiency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How proficient are you with mobile and internet technology?</label>
              <select
                name="techProficiency"
                value={formData.techProficiency}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select proficiency level</option>
                <option value="expert">Expert - I'm very comfortable with technology</option>
                <option value="intermediate">Intermediate - I can handle most tasks</option>
                <option value="basic">Basic - I know the essentials</option>
                <option value="beginner">Beginner - I need help with technology</option>
              </select>
            </div>

            {/* How did you hear about us */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
              <select
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select option</option>
                <option value="facebook">Facebook</option>
                <option value="website">Website</option>
                <option value="friend">A Friend</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 font-semibold text-lg"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetHired;