import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Users, FileText, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Helmet>
        <title>Privacy Policy | Sanford Cleaning - Your Privacy Matters</title>
        <meta name="description" content="Read Sanford Cleaning's privacy policy to understand how we collect, use, and protect your personal information. Your privacy and data security are our priority." />
        <meta name="keywords" content="privacy policy, data protection, Sanford cleaning privacy, personal information security" />
        <meta property="og:title" content="Privacy Policy | Sanford Cleaning" />
        <meta property="og:description" content="Learn how Sanford Cleaning protects your privacy and handles your personal information securely." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sanfordcleaning.com/privacy-policy" />
      </Helmet>
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. Learn how we protect and handle your personal information.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sanford Cleaning Services ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our cleaning services.
              </p>
            </div>

            {/* Information We Collect */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Service preferences and cleaning requirements</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Property details (size, number of rooms, special instructions)</li>
                <li>Communication history and service feedback</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>IP address and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Device information and operating system</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 mb-4">We use your information to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Provide and manage our cleaning services</li>
                <li>Schedule appointments and send service reminders</li>
                <li>Process payments and maintain billing records</li>
                <li>Communicate about services, updates, and promotions</li>
                <li>Improve our website and service quality</li>
                <li>Comply with legal obligations and resolve disputes</li>
                <li>Conduct background checks on our cleaning staff</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Information Sharing and Disclosure</h2>
              </div>
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, scheduling software, background check services)</li>
                <li><strong>Cleaning Staff:</strong> Our vetted employees who need access to your information to provide services</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of our business</li>
              </ul>
              <p className="text-gray-700">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Data Security</h2>
              </div>
              <p className="text-gray-700 mb-4">We implement appropriate security measures to protect your information:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
                and understand user preferences. You can control cookie settings through your browser preferences.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites or integrate with third-party services 
                (such as payment processors, scheduling tools, or social media platforms). We are not responsible 
                for the privacy practices of these third parties.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are not intended for children under 18 years of age. We do not knowingly collect 
                personal information from children under 18.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
              </div>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Sanford Cleaning Services</strong></p>
                <p className="text-gray-700 mb-2">Email: privacy@sanfordcleaning.com</p>
                <p className="text-gray-700 mb-2">Phone: (321) 236-0618</p>
                <p className="text-gray-700">Address: [Your Business Address]</p>
              </div>
            </section>

            {/* Back to Home */}
            <div className="text-center pt-8 border-t">
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;