import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/sanford-cleaning-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-blue-50 text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Link to="/" className="flex items-center" data-cy="footer-logo-link">
              <img src={logo} alt="Sanford Cleaning Logo" className="max-h-32 object-contain" />
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Professional cleaning services you can trust. We're committed to providing exceptional cleaning solutions for your home and business. Explore our <Link to="/residential-cleaning" className="text-blue-600 hover:underline">Residential Cleaning</Link> and <Link to="/window-cleaning" className="text-blue-600 hover:underline">Window Cleaning</Link> services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61579618588193" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors" data-cy="footer-facebook-link">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/sanfordcleaning" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors" data-cy="footer-instagram-link">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/residential-cleaning" className="text-gray-600 hover:text-blue-600 transition-colors" data-cy="footer-residential-cleaning-link">Residential Cleaning</Link></li>
              <li><Link to="/commercial-cleaning" className="text-gray-600 hover:text-blue-600 transition-colors" data-cy="footer-commercial-cleaning-link">Commercial Cleaning</Link></li>
              <li><Link to="/deep-cleaning" className="text-gray-600 hover:text-blue-600 transition-colors" data-cy="footer-deep-cleaning-link">Deep Cleaning</Link></li>
              
              <li><Link to="/post-construction-cleaning" className="text-gray-600 hover:text-blue-600 transition-colors" data-cy="footer-post-construction-cleaning-link">Post-Construction Cleaning</Link></li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors" data-cy="footer-home-link">Home</Link></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors" data-cy="footer-about-button">About Us</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition-colors" data-cy="footer-services-button">Services</button></li>

              <li><button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors" data-cy="footer-contact-button">Contact</button></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-blue-600 transition-colors" data-cy="footer-faq-link">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors" data-cy="footer-privacy-policy-link">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="tel:321-236-0618" className="text-gray-600 hover:text-blue-600 transition-colors" data-cy="footer-phone-link">(321) 236-0618</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:info@sanfordcleaning.com" className="text-gray-600 hover:text-blue-600 transition-colors" data-cy="footer-email-link">info@sanfordcleaning.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-gray-600">Sanford, FL and surrounding areas</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2 text-gray-800">Business Hours</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Mon-Fri: 8:00 AM - 6:00 PM</div>
                <div>Saturday: 9:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} Sanford Cleaning. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors" data-cy="footer-bottom-privacy-policy-link">Privacy Policy</Link>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" data-cy="footer-terms-of-service-link">Terms of Service</a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;