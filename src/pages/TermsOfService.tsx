import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileText, Scale, Shield, AlertTriangle, Clock, DollarSign } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Helmet>
        <title>Terms of Service | Topaz West LLC - Cleaning Service Agreement</title>
        <meta name="description" content="Read Topaz West LLC's terms of service for our residential, commercial, maintenance, deep, and post-construction cleaning services. Understand our policies and your rights." />
        <meta name="keywords" content="terms of service, cleaning service agreement, Topaz West LLC terms, cleaning contract, service policies" />
        <meta property="og:title" content="Terms of Service | Topaz West LLC" />
        <meta property="og:description" content="Comprehensive terms of service for Topaz West LLC's professional cleaning services in Sanford, Florida." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sanfordcleaning.com/terms-of-service" />
      </Helmet>

      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="w-16 h-16 mx-auto mb-4" />
            <h1 data-cy="terms-of-service-title" className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100">
              Professional cleaning service agreement and policies for Topaz West LLC
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
                These Terms of Service ("Terms") govern your use of cleaning services provided by 
                Topaz West LLC ("Company," "we," "our," or "us"). By booking our services, you 
                ("Client," "you," or "your") agree to be bound by these Terms.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Company Information</h3>
                <p className="text-gray-700 mb-1"><strong>Official Name:</strong> Topaz West LLC</p>
                <p className="text-gray-700 mb-1"><strong>Contact Email:</strong> <a href="mailto:info@sanfordcleaning.com" className="text-blue-600 hover:underline">info@sanfordcleaning.com</a></p>
                <p className="text-gray-700 mb-1"><strong>Phone:</strong> <a href="tel:321-236-0618" className="text-blue-600 hover:underline">(321) 236-0618</a></p>
                <p className="text-gray-700"><strong>Address:</strong> 3298 Eastgrove Terrace, Sanford, FL 32771</p>
              </div>
            </div>

            {/* Service Descriptions */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Service Descriptions</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Residential Cleaning</h4>
                  <p className="text-blue-700 text-sm">
                    Regular house cleaning, deep cleaning, move-in/move-out cleaning for homes, 
                    apartments, and condominiums.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Commercial Cleaning</h4>
                  <p className="text-green-700 text-sm">
                    Office cleaning, retail space maintenance, and commercial facility cleaning 
                    services for businesses.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Maintenance Cleaning</h4>
                  <p className="text-purple-700 text-sm">
                    Ongoing scheduled cleaning services to maintain cleanliness and hygiene 
                    standards for properties.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Post-Construction Cleaning</h4>
                  <p className="text-yellow-700 text-sm">
                    Specialized cleaning services for newly constructed or renovated properties, 
                    including debris removal and detailed cleaning.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Service Standards</h4>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>All services are performed by trained and insured cleaning professionals</li>
                  <li>We use professional-grade cleaning supplies and equipment</li>
                  <li>Services are customized based on client needs and property requirements</li>
                  <li>Quality assurance inspections are conducted for all completed services</li>
                </ul>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <DollarSign className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Payment Terms</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Payment Methods</h4>
                  <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                    <li>Credit cards (Visa, MasterCard, American Express, Discover)</li>
                    <li>Debit cards</li>
                    <li>Bank transfers (for commercial accounts)</li>
                    <li>Cash payments (for one-time services only)</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Payment Schedule</h4>
                  <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
                    <li><strong>One-time services:</strong> Payment due upon completion of service</li>
                    <li><strong>Recurring services:</strong> Payment processed automatically after each service</li>
                    <li><strong>Commercial contracts:</strong> Net 15 payment terms (payment due within 15 days)</li>
                    <li><strong>Large projects:</strong> 50% deposit required, balance due upon completion</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Late Payment Policy</h4>
                  <p className="text-yellow-700 text-sm mb-2">
                    Late payments may result in service suspension and additional fees:
                  </p>
                  <ul className="list-disc list-inside text-yellow-700 text-sm space-y-1">
                    <li>1.5% monthly service charge on overdue balances</li>
                    <li>Service suspension after 30 days past due</li>
                    <li>Account termination after 60 days past due</li>
                    <li>Collection costs and legal fees may be added to outstanding balances</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cancellation Policies */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Cancellation Policies</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Client Cancellation</h4>
                  <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                    <li><strong>Flexible Cancellation:</strong> Since we do not charge clients upfront, you may cancel your service at any time without penalty</li>
                    <li><strong>Advance Notice Appreciated:</strong> While not required, we greatly appreciate advance notice if you plan to cancel your scheduled service</li>
                    <li><strong>How to Cancel:</strong> You can cancel by calling us, sending an email, or using our live chat feature on our website</li>
                    <li><strong>No Cancellation Fees:</strong> We do not charge any cancellation fees regardless of timing</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Recurring Service Cancellation</h4>
                  <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
                    <li>For recurring services, please provide notice as early as possible to help us adjust our scheduling</li>
                    <li>No penalty for cancellation at any time</li>
                    <li>Services can be rescheduled at no additional charge</li>
                    <li>Permanent service termination can be done at any time through call, email, or live chat</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Company Cancellation</h4>
                  <p className="text-yellow-700 text-sm">
                    We reserve the right to cancel services due to unsafe working conditions, 
                    inclement weather, or other circumstances beyond our control. 
                    Since payment is collected after service completion, no refunds are necessary for cancelled services.
                  </p>
                </div>
              </div>
            </section>

            {/* Liability Limitations */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Liability and Insurance</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Our Insurance Coverage</h4>
                  <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                    <li>General liability insurance up to $1,000,000</li>
                    <li>Bonded employees for theft protection</li>
                    <li>Workers' compensation insurance for all employees</li>
                    <li>Professional liability coverage for service-related issues</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Damage and Claims</h4>
                  <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
                    <li>All damage claims must be reported within 24 hours of service completion</li>
                    <li>We will investigate and resolve legitimate claims promptly</li>
                    <li>Liability is limited to the cost of repair or replacement of damaged items</li>
                    <li>Maximum liability per incident is $500 unless covered by insurance</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Liability Limitations</h4>
                  <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                    <li>Not liable for pre-existing damage or wear and tear</li>
                    <li>Not responsible for items left unsecured or in cleaning areas</li>
                    <li>Excluded: antiques, artwork, electronics, jewelry, or items over $500 in value</li>
                    <li>Client must secure or remove valuable/fragile items before service</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Client Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Client Responsibilities</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Property Access</h4>
                  <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
                    <li>Provide safe and legal access to property</li>
                    <li>Ensure all areas to be cleaned are accessible</li>
                    <li>Provide working utilities (water, electricity)</li>
                    <li>Notify us of any security systems or special access requirements</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Property Preparation</h4>
                  <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                    <li>Remove personal items and clutter from cleaning areas</li>
                    <li>Secure valuable, fragile, or irreplaceable items</li>
                    <li>Inform us of any hazardous materials or conditions</li>
                    <li>Ensure pets are secured or removed from cleaning areas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Privacy Practices */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Privacy and Confidentiality</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm mb-4">
                  We respect your privacy and maintain strict confidentiality regarding your property 
                  and personal information. Our privacy practices include:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>All employees sign confidentiality agreements</li>
                  <li>Personal information is collected and used only for service provision</li>
                  <li>No sharing of client information with third parties without consent</li>
                  <li>Secure handling and storage of all client data</li>
                  <li>Full privacy policy available at <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
                </ul>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Dispute Resolution</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Resolution Process</h4>
                  <ol className="list-decimal list-inside text-blue-700 text-sm space-y-1">
                    <li><strong>Direct Communication:</strong> Contact us immediately to discuss concerns</li>
                    <li><strong>Formal Complaint:</strong> Submit written complaint within 30 days</li>
                    <li><strong>Investigation:</strong> We will investigate and respond within 10 business days</li>
                    <li><strong>Mediation:</strong> If unresolved, we agree to binding mediation</li>
                  </ol>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Governing Law</h4>
                  <p className="text-yellow-700 text-sm">
                    These Terms are governed by the laws of the State of Florida. Any legal proceedings 
                    must be conducted in Seminole County, Florida. Both parties agree to binding arbitration 
                    for disputes exceeding $1,000.
                  </p>
                </div>
              </div>
            </section>

            {/* Additional Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Terms</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Service Modifications</h4>
                  <p className="text-gray-700 text-sm">
                    We reserve the right to modify our services, pricing, and terms with 30 days notice 
                    to existing clients. Continued use of services constitutes acceptance of modified terms.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Severability</h4>
                  <p className="text-gray-700 text-sm">
                    If any provision of these Terms is found to be unenforceable, the remaining provisions 
                    will continue in full force and effect.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Entire Agreement</h4>
                  <p className="text-gray-700 text-sm">
                    These Terms constitute the entire agreement between Topaz West LLC and the client, 
                    superseding all prior agreements and understandings.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions and Contact</h2>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-700 text-sm mb-4">
                  If you have questions about these Terms of Service or need clarification on any policies, 
                  please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-blue-700 text-sm"><strong>Email:</strong> <a href="mailto:info@sanfordcleaning.com" className="text-blue-600 hover:underline">info@sanfordcleaning.com</a></p>
                  <p className="text-blue-700 text-sm"><strong>Phone:</strong> <a href="tel:321-236-0618" className="text-blue-600 hover:underline">(321) 236-0618</a></p>
                  <p className="text-blue-700 text-sm"><strong>Address:</strong> 3298 Eastgrove Terrace, Sanford, FL 32771</p>
                  <p className="text-blue-700 text-sm"><strong>Business Hours:</strong> Monday - Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </section>

            {/* Back to Home */}
            <div className="text-center pt-8 border-t">
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-4"
                data-cy="terms-back-to-home-button"
              >
                Back to Home
              </Link>
              <Link 
                to="/privacy-policy" 
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                data-cy="terms-privacy-policy-button"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;