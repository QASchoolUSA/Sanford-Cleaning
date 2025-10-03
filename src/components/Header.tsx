import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/sanford-cleaning-logo.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center" data-cy="header-logo-link">
            <img src={logo} alt="Sanford Cleaning Logo" className="max-h-24 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors" data-cy="desktop-services-dropdown-button">Services</button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link to="/residential-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-residential-cleaning-link">Residential Cleaning</Link>
                  <Link to="/commercial-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-commercial-cleaning-link">Commercial Cleaning</Link>
                  <Link to="/deep-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-deep-cleaning-link">Deep Cleaning</Link>
                  <Link to="/post-construction-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-post-construction-cleaning-link">Post-Construction Cleaning</Link>
                </div>
              </div>
            </div>

            <Link to="/get-hired" className="text-gray-700 hover:text-blue-600 transition-colors" data-cy="desktop-get-hired-link">Get Hired</Link>
            <Link to="/free-custom-quote" className="text-gray-700 hover:text-blue-600 transition-colors" data-cy="desktop-custom-quote-link">Custom Quote</Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <a href="tel:321-236-0618" className="hover:text-blue-600 transition-colors" data-cy="desktop-phone-link">(321) 236-0618</a>
            </div>

            <Link 
              to="/booking"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              data-cy="desktop-book-now-button"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-cy="mobile-menu-toggle-button"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div ref={menuRef} className="md:hidden bg-white">
            <nav className="flex flex-col p-4">
              {/* Navigation Links */}
              <div className="space-y-6 mb-6">
                <div className="space-y-2 pl-4">
                  <div className="text-sm font-semibold text-gray-500">Services:</div>
                  <Link to="/residential-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-residential-cleaning-link">Residential Cleaning</Link>
                  <Link to="/commercial-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-commercial-cleaning-link">Commercial Cleaning</Link>
                  <Link to="/deep-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-deep-cleaning-link">Deep Cleaning</Link>
                  <Link to="/post-construction-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-post-construction-cleaning-link">Post-Construction Cleaning</Link>
                </div>

                <div className="flex flex-row gap-6">
                  <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600 transition-colors py-3" data-cy="mobile-about-button">About</button>
                  <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-600 transition-colors py-3" data-cy="mobile-contact-button">Contact</button>
                </div>
              </div>

              {/* Action Buttons Section */}
              <div className="space-y-3">
                {/* Get Hired Button */}
                <Link 
                  to="/get-hired" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  data-cy="mobile-get-hired-button"
                >
                  Get Hired
                </Link>
                {/* Call Now */}
                <a 
                  href="tel:321-236-0618" 
                  className="flex items-center justify-center space-x-2 w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
                  data-cy="mobile-call-now-button"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Call Now</span>
                </a>

                {/* Free Quote Button */}
                <Link 
                  to="/free-custom-quote"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  data-cy="mobile-custom-quote-button"
                >
                  Custom Quote
                </Link>

                {/* Book Now Button */}
                <Link 
                  to="/booking"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  data-cy="mobile-book-now-button"
                >
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Book Now</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;