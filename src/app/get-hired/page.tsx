export const metadata = {
  title: "Join Our Cleaning Team | Careers at Sanford Cleaning - Apply Now",
  description:
    "Join our cleaning team in Sanford, FL. Great pay, flexible hours, weekly pay. Apply now to start your career.",
  alternates: { canonical: "https://sanfordcleaning.com/get-hired" },
  openGraph: {
    title: "Join Our Cleaning Team | Careers at Sanford Cleaning",
    description: "Join our professional cleaning team in Sanford, FL. Great pay, flexible hours, weekly pay. Apply now!",
    type: "website",
    url: "https://sanfordcleaning.com/get-hired",
    images: ["https://sanfordcleaning.com/sanford-cleaning-homepage.webp"],
  },
  twitter: {
    card: "summary",
    site: "@SanfordCleaning",
    title: "Join Our Cleaning Team | Careers at Sanford Cleaning",
    description: "Great pay ($20+), flexible hours, weekly pay. Apply today!",
  },
};

import GetHiredForm from '@/components/GetHiredForm';
import { DollarSign, Clock, Calendar, Heart, ArrowRight } from 'lucide-react';

export default function GetHiredPage() {
  return (
    <div className="bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Cleaning Team</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              We're looking for passionate, reliable, and detail-oriented individuals to provide top-quality cleaning services in Sanford, FL.
            </p>
            <a
              href="#application-form"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-lg text-gray-600">Enjoy competitive pay, flexible scheduling, and a supportive team environment.</p>
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
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 border">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What We’re Looking For</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="mr-2">•</span> Reliable, detail-oriented, and friendly professionals</li>
                  <li className="flex items-start"><span className="mr-2">•</span> Comfort working independently or with a team</li>
                  <li className="flex items-start"><span className="mr-2">•</span> Strong communication and customer service skills</li>
                  <li className="flex items-start"><span className="mr-2">•</span> Willingness to learn and follow our cleaning standards</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Perks & Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="mr-2">•</span> $20+ per hour plus tips (based on experience)</li>
                  <li className="flex items-start"><span className="mr-2">•</span> Weekly pay and flexible scheduling</li>
                  <li className="flex items-start"><span className="mr-2">•</span> Training provided and supportive management</li>
                  <li className="flex items-start"><span className="mr-2">•</span> Opportunities for growth and leadership</li>
                </ul>
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
            <GetHiredForm />
          </div>
        </div>
      </section>
    </div>
  );
}