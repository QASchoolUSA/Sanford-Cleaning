import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/sanford-cleaning-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Sanford Cleaning Logo" className="max-h-24 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link to="/residential-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Residential Cleaning</Link>
                  <Link to="/commercial-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Commercial Cleaning</Link>
                  <Link to="/deep-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Deep Cleaning</Link>
                </div>
              </div>
            </div>

            <Link to="/get-hired" className="text-gray-700 hover:text-blue-600 transition-colors">Get Hired</Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>(321) 236-0618</span>
            </div>
            <Link 
              to="/booking"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 p-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <div className="space-y-2 pl-4">
                <div className="text-sm font-semibold text-gray-500">Services:</div>
                <Link to="/residential-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors">Residential Cleaning</Link>
                <Link to="/commercial-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors">Commercial Cleaning</Link>
                <Link to="/deep-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors">Deep Cleaning</Link>
              </div>

              <Link to="/get-hired" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Get Hired</Link>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-2 border-t">
                <Phone className="w-4 h-4" />
                <span>(321) 236-0618</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;