import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { DollarSign, Clock, Calendar, Heart, ArrowRight } from 'lucide-react';

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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/emails/hire-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate('/get-hired-success');
      } else {
        alert('There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 pt-20">
      <Helmet>
        <title>Join Our Cleaning Team | Careers at Sanford Cleaning - Apply Now</title>
        <meta name="description" content="Join our professional cleaning team in Sanford, FL. Great pay ($20+ per hour), flexible hours, weekly pay. Apply now for cleaning jobs and start your career with us." />
        <meta name="keywords" content="cleaning jobs Sanford FL, house cleaner jobs, cleaning careers, flexible work, part-time cleaning jobs, full-time cleaning jobs" />
        <meta property="og:title" content="Join Our Cleaning Team | Careers at Sanford Cleaning" />
        <meta property="og:description" content="Join our professional cleaning team in Sanford, FL. Great pay, flexible hours, weekly pay. Apply now!" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sanfordcleaning.com/get-hired" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Professional Cleaning Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              We're looking for passionate, reliable, and detail-oriented individuals to provide top-quality cleaning services in Sanford, FL.
            </p>
            <button
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              data-cy="get-hired-apply-now-button"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-600">
                Enjoy competitive pay, flexible scheduling, and a supportive team environment.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Great Pay</h3>
                <p className="text-gray-600">Earn $20+ per hour plus tips</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Weekly Pay</h3>
                <p className="text-gray-600">Get paid every week</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Hours</h3>
                <p className="text-gray-600">Work when it suits you</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do What You Love</h3>
                <p className="text-gray-600">Make homes beautiful and clean</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Application Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6" data-cy="get-hired-application-form">
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
                    data-cy="get-hired-first-name-input"
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
                    data-cy="get-hired-last-name-input"
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
                    data-cy="get-hired-phone-input"
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
                    data-cy="get-hired-email-input"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Zipcode *</label>
                  <input
                    type="text"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    data-cy="get-hired-zipcode-input"
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
                      data-cy="get-hired-eligible-work-yes"
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
                      data-cy="get-hired-eligible-work-no"
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
                  data-cy="get-hired-travel-distance-select"
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
                  data-cy="get-hired-hours-per-week-select"
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
                        data-cy={`get-hired-work-day-${day.toLowerCase()}`}
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
                        data-cy={`get-hired-time-of-day-${time.toLowerCase()}`}
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
                  data-cy="get-hired-english-level-select"
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
                        data-cy={`get-hired-other-language-${lang.toLowerCase()}`}
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
                      data-cy="get-hired-other-language-other"
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
                    data-cy="get-hired-other-language-text-input"
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
                        data-cy="get-hired-has-vehicle-yes"
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
                        data-cy="get-hired-has-vehicle-no"
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
                        data-cy="get-hired-has-license-yes"
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
                        data-cy="get-hired-has-license-no"
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
                      data-cy="get-hired-criminal-record-yes"
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
                      data-cy="get-hired-criminal-record-no"
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
                  data-cy="get-hired-experience-textarea"
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
                  data-cy="get-hired-tech-proficiency-select"
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
                  data-cy="get-hired-how-did-you-hear-select"
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
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 font-semibold text-lg disabled:bg-blue-400"
                  data-cy="get-hired-submit-button"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mx-auto"></div>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetHired;