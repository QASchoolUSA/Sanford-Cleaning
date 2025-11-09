import { Shield, Lock, Eye, Users, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Sanford Cleaning",
  description:
    "Learn how we collect, use, and protect your personal information. Your privacy and data security are our priority.",
  alternates: { canonical: "https://sanfordcleaning.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Sanford Cleaning",
    description:
      "Learn how Sanford Cleaning protects your privacy and handles your personal information securely.",
    type: "website",
    url: "https://sanfordcleaning.com/privacy-policy",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Sanford Cleaning",
    description:
      "Learn how Sanford Cleaning protects your privacy and handles your personal information securely.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
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
                Topaz West LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our residential, commercial, maintenance, deep, and post-construction cleaning services.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Company Information</h3>
                <p className="text-gray-700 mb-1">
                  <strong>Official Name:</strong> Topaz West LLC
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Contact Email:</strong> <a href="mailto:info@sanfordcleaning.com" className="text-blue-200 hover:underline">info@sanfordcleaning.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Physical Address:</strong> 3298 Eastgrove Terrace, Sanford, FL 32771
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Essential Client Information</h3>
              <p className="text-gray-700 mb-4">We collect only the essential information necessary to provide our cleaning services:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Name:</strong> To identify and communicate with our clients
                </li>
                <li>
                  <strong>Email address:</strong> For service confirmations, scheduling, and important communications
                </li>
                <li>
                  <strong>Phone number:</strong> For appointment coordination and urgent communications
                </li>
                <li>
                  <strong>Property address:</strong> To provide cleaning services at the correct location
                </li>
              </ul>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-2">Important: Payment Data Protection</h4>
                <p className="text-green-700">
                  <strong>We do not store or retain any payment information.</strong> All payment processing is handled securely through third-party payment processors who maintain PCI DSS compliance. Credit card numbers, banking information, and other payment details are never stored on our systems.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-yellow-800 mb-2">Data Minimization Policy</h4>
                <p className="text-yellow-700">
                  We adhere to a strict data minimization policy. <strong>No additional user data is collected beyond what is necessary for service provision.</strong> We do not collect social media profiles, browsing history, personal preferences unrelated to cleaning services, or any other non-essential information.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Information (Limited)</h3>
              <p className="text-gray-700 mb-4">For website functionality and security purposes only, we may collect:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Basic browser information (for compatibility)</li>
                <li>IP address (for security and fraud prevention)</li>
                <li>Website usage analytics (anonymized)</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 mb-4">We use your essential client information exclusively for the following purposes:</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Service Delivery</h4>
                  <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
                    <li>Provide residential, commercial, maintenance, deep, and post-construction cleaning services</li>
                    <li>Schedule and coordinate cleaning appointments</li>
                    <li>Access your property for authorized cleaning services</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Communication</h4>
                  <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                    <li>Send appointment confirmations and reminders</li>
                    <li>Provide service updates and completion notifications</li>
                    <li>Address service-related questions or concerns</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Business Operations</h4>
                  <ul className="list-disc list-inside text-purple-700 text-sm space-y-1">
                    <li>Maintain accurate service records</li>
                    <li>Ensure quality control and service improvement</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Safety & Security</h4>
                  <ul className="list-disc list-inside text-yellow-700 text-sm space-y-1">
                    <li>Verify client identity for security purposes</li>
                    <li>Ensure staff safety during service visits</li>
                    <li>Maintain emergency contact information</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">What We DON&apos;T Use Your Information For</h4>
                <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                  <li>Marketing to third parties or selling your information</li>
                  <li>Unsolicited promotional communications (unless you opt-in)</li>
                  <li>Any purpose unrelated to our cleaning services</li>
                  <li>Creating detailed personal profiles beyond service needs</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Information Sharing and Disclosure</h2>
              </div>
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, scheduling software, background check services)
                </li>
                <li>
                  <strong>Cleaning Staff:</strong> Our vetted employees who need access to your information to provide services
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or government request
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of our business
                </li>
              </ul>
              <p className="text-gray-700">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Data Protection Measures</h2>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Security Protocols</h3>
              <p className="text-gray-700 mb-4">We implement comprehensive security measures to protect your information:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>
                  <strong>Encryption:</strong> All data transmission is protected with SSL/TLS encryption
                </li>
                <li>
                  <strong>Secure Storage:</strong> Client information is stored on secure, password-protected servers
                </li>
                <li>
                  <strong>Access Controls:</strong> Strict employee access controls with role-based permissions
                </li>
                <li>
                  <strong>Regular Updates:</strong> Security systems are regularly updated and patched
                </li>
                <li>
                  <strong>Staff Training:</strong> All employees receive data protection and privacy training
                </li>
                <li>
                  <strong>Physical Security:</strong> Secure facilities with restricted access to data storage areas
                </li>
                <li>
                  <strong>Incident Response:</strong> Established procedures for handling any security incidents
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Retention Policies</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Active Clients:</strong> Information is retained while you remain an active client
                  </li>
                  <li>
                    <strong>Inactive Accounts:</strong> Data is automatically deleted after 24 months of inactivity
                  </li>
                  <li>
                    <strong>Service Records:</strong> Basic service history may be retained for up to 3 years for business purposes
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> Some information may be retained longer if required by law
                  </li>
                  <li>
                    <strong>Immediate Deletion:</strong> Upon request, we will delete your information within 30 days
                  </li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Data Rights</h3>
              <p className="text-gray-700 mb-4">As our client, you have the following rights regarding your personal data:</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Access & Review</h4>
                  <p className="text-green-700 text-sm">Request a copy of all personal information we have about you</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Correction</h4>
                  <p className="text-blue-700 text-sm">Request corrections to any inaccurate or incomplete information</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Deletion</h4>
                  <p className="text-red-700 text-sm">Request complete deletion of your personal information</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Portability</h4>
                  <p className="text-purple-700 text-sm">Request your data in a portable, machine-readable format</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>To exercise any of these rights,</strong> please contact us at
                  <a href="mailto:info@sanfordcleaning.com" className="text-blue-600 hover:underline"> info@sanfordcleaning.com</a> or call us at
                  <a href="tel:321-236-0618" className="text-blue-600 hover:underline"> (321) 236-0618</a>. We will respond to your request within 30 days.
                </p>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Website Analytics and Tracking Technologies</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Microsoft Clarity Analytics</h3>
                <p className="text-gray-700 mb-4">
                  We use Microsoft Clarity analytics to understand how visitors interact with our website. This service may use cookies and similar technologies to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Track page views and user interactions</li>
                  <li>Generate heatmaps of user behavior</li>
                  <li>Analyze website performance and user experience</li>
                  <li>Help us improve our cleaning service website</li>
                </ul>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-medium mb-2">Privacy Protection:</p>
                  <p className="text-green-700 text-sm">
                    We do not collect or store sensitive personal information through analytics tools. Data collected is anonymized and used solely to enhance website usability and service quality.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}