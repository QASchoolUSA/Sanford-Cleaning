"use client";
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
// Use public asset path for Next.js


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
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
    if (pathname !== '/') {
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

  // Removed unused handleContactClick to satisfy linter

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center" data-cy="header-logo-link">
            <Image
              src="/sanford-cleaning-logo.png"
              alt="Sanford Cleaning Logo"
              width={240}
              height={80}
              priority
              className="max-h-24 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors" data-cy="desktop-services-dropdown-button">Services</button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/house-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-house-cleaning-link">House Cleaning Services</Link>
                  <Link href="/residential-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-residential-cleaning-link">Residential Cleaning</Link>
                  <Link href="/commercial-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-commercial-cleaning-link">Office Cleaning Service</Link>
                  <Link href="/deep-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-deep-cleaning-link">Deep Cleaning Services</Link>
                  <Link href="/carpet-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-carpet-cleaning-link">Carpet Cleaning</Link>
                  <Link href="/pressure-washing" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-pressure-washing-link">Pressure Washing</Link>
                  <Link href="/window-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-window-cleaning-link">Window Cleaning</Link>
                  <Link href="/move-in-move-out-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-move-in-move-out-cleaning-link">Move In/Move Out Cleaning</Link>
                  <Link href="/post-construction-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-post-construction-cleaning-link">Post-Construction Cleaning</Link>
                </div>
              </div>
            </div>

            {/* Guides Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors" data-cy="desktop-guides-dropdown-button">Guides</button>
              <div className="absolute top-full left-0 mt-2 w-[28rem] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2 max-h-96 overflow-y-auto">
                  <Link href="/guides" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-index">All Guides</Link>
                  <Link href="/guides/best-house-cleaning-services-sanford-fl" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-best-house-cleaning-services-sanford-fl">Best House Cleaning Services in Sanford, FL</Link>
                  <Link href="/guides/affordable-deep-cleaning-companies-sanford-fl" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-affordable-deep-cleaning-companies-sanford-fl">Affordable Deep Cleaning Companies in Sanford, FL</Link>
                  <Link href="/guides/how-to-book-professional-house-cleaner-sanford-fl" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-how-to-book-professional-house-cleaner-sanford-fl">How to Book a Professional House Cleaner (Sanford, FL)</Link>
                  <Link href="/guides/top-rated-house-cleaning-companies-sanford-fl-reviews" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-top-rated-house-cleaning-companies-sanford-fl-reviews">Top-Rated House Cleaning Companies: Reviews</Link>
                  <Link href="/guides/sanford-fl-house-cleaning-prices-packages" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-sanford-fl-house-cleaning-prices-packages">House Cleaning Prices & Packages (Sanford, FL)</Link>
                  <Link href="/guides/eco-friendly-house-cleaning-options-sanford-fl" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-eco-friendly-house-cleaning-options-sanford-fl">Eco-Friendly House Cleaning Options (Sanford, FL)</Link>
                  <Link href="/guides/compare-house-cleaning-companies-sanford-fl-service-quality" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-compare-house-cleaning-companies-sanford-fl-service-quality">Compare House Cleaning Companies by Quality</Link>
                  <Link href="/guides/sanford-fl-move-out-cleaning-services-costs" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-sanford-fl-move-out-cleaning-services-costs">Move-Out Cleaning Services & Costs (Sanford, FL)</Link>
                  <Link href="/guides/sanford-fl-weekly-biweekly-house-cleaning-providers" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-sanford-fl-weekly-biweekly-house-cleaning-providers">Weekly & Biweekly House Cleaning Providers</Link>
                  <Link href="/guides/best-house-cleaning-deals-discounts-sanford-fl" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-best-house-cleaning-deals-discounts-sanford-fl">Best House Cleaning Deals & Discounts</Link>
                  <Link href="/guides/apartment-deep-cleaning-sanford-fl" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-apartment-deep-cleaning-sanford-fl">Apartment Deep Cleaning (Sanford, FL)</Link>
                  <Link href="/guides/how-to-book-professional-house-cleaner-sanford-fl-customer-reviews" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-how-to-book-professional-house-cleaner-sanford-fl-customer-reviews">Booking a House Cleaner Using Customer Reviews</Link>
                  <Link href="/guides/sanford-fl-house-cleaning-service-providers-quality" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-sanford-fl-house-cleaning-service-providers-quality">Compare House Cleaning Providers by Quality (Sanford, FL)</Link>
                  <Link href="/guides/how-to-book-house-cleaner-sanford-fl" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" data-cy="desktop-guides-link-how-to-book-house-cleaner-sanford-fl">How to Book a House Cleaner (Sanford, FL)</Link>
                </div>
              </div>
            </div>

            <Link href="/get-hired" className="text-gray-700 hover:text-blue-600 transition-colors" data-cy="desktop-get-hired-link">Get Hired</Link>
            <Link href="/custom-quote" className="text-gray-700 hover:text-blue-600 transition-colors" data-cy="desktop-custom-quote-link">Custom Quote</Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <a href="tel:321-236-0618" className="hover:text-blue-600 transition-colors" data-cy="desktop-phone-link">(321) 236-0618</a>
            </div>

            <Link
              href="/booking"
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
                  <Link href="/house-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-house-cleaning-link">House Cleaning Services</Link>
                  <Link href="/residential-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-residential-cleaning-link">Residential Cleaning</Link>
                  <Link href="/commercial-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-commercial-cleaning-link">Office Cleaning Service</Link>
                  <Link href="/deep-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-deep-cleaning-link">Deep Cleaning Services</Link>
                  <Link href="/carpet-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-carpet-cleaning-link">Carpet Cleaning</Link>
                  <Link href="/pressure-washing" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-pressure-washing-link">Pressure Washing</Link>
                  <Link href="/window-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-window-cleaning-link">Window Cleaning</Link>
                  <Link href="/move-in-move-out-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-move-in-move-out-cleaning-link">Move In/Move Out Cleaning</Link>
                  <Link href="/post-construction-cleaning" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-post-construction-cleaning-link">Post-Construction Cleaning</Link>
                </div>

                {/* Guides - Mobile */}
                <div className="space-y-2 pl-4">
                  <button
                    onClick={() => setIsGuidesOpen(!isGuidesOpen)}
                    className="flex items-center justify-between w-full text-sm font-semibold text-gray-500"
                    data-cy="mobile-guides-toggle"
                  >
                    <span>Guides:</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isGuidesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isGuidesOpen && (
                    <div className="space-y-2 pl-2 mt-2 border-l-2 border-gray-100">
                      <Link href="/guides" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-index">All Guides</Link>
                      <Link href="/guides/best-house-cleaning-services-sanford-fl" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-best-house-cleaning-services-sanford-fl">Best House Cleaning Services in Sanford, FL</Link>
                      <Link href="/guides/affordable-deep-cleaning-companies-sanford-fl" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-affordable-deep-cleaning-companies-sanford-fl">Affordable Deep Cleaning Companies in Sanford, FL</Link>
                      <Link href="/guides/how-to-book-professional-house-cleaner-sanford-fl" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-how-to-book-professional-house-cleaner-sanford-fl">How to Book a Professional House Cleaner (Sanford, FL)</Link>
                      <Link href="/guides/top-rated-house-cleaning-companies-sanford-fl-reviews" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-top-rated-house-cleaning-companies-sanford-fl-reviews">Top-Rated House Cleaning Companies: Reviews</Link>
                      <Link href="/guides/sanford-fl-house-cleaning-prices-packages" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-sanford-fl-house-cleaning-prices-packages">House Cleaning Prices & Packages (Sanford, FL)</Link>
                      <Link href="/guides/eco-friendly-house-cleaning-options-sanford-fl" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-eco-friendly-house-cleaning-options-sanford-fl">Eco-Friendly House Cleaning Options (Sanford, FL)</Link>
                      <Link href="/guides/compare-house-cleaning-companies-sanford-fl-service-quality" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-compare-house-cleaning-companies-sanford-fl-service-quality">Compare House Cleaning Companies by Quality</Link>
                      <Link href="/guides/sanford-fl-move-out-cleaning-services-costs" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-sanford-fl-move-out-cleaning-services-costs">Move-Out Cleaning Services & Costs (Sanford, FL)</Link>
                      <Link href="/guides/sanford-fl-weekly-biweekly-house-cleaning-providers" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-sanford-fl-weekly-biweekly-house-cleaning-providers">Weekly & Biweekly House Cleaning Providers</Link>
                      <Link href="/guides/best-house-cleaning-deals-discounts-sanford-fl" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-best-house-cleaning-deals-discounts-sanford-fl">Best House Cleaning Deals & Discounts</Link>
                      <Link href="/guides/apartment-deep-cleaning-sanford-fl" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-apartment-deep-cleaning-sanford-fl">Apartment Deep Cleaning (Sanford, FL)</Link>
                      <Link href="/guides/how-to-book-professional-house-cleaner-sanford-fl-customer-reviews" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-how-to-book-professional-house-cleaner-sanford-fl-customer-reviews">Booking a House Cleaner Using Customer Reviews</Link>
                      <Link href="/guides/sanford-fl-house-cleaning-service-providers-quality" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-sanford-fl-house-cleaning-service-providers-quality">Compare House Cleaning Providers by Quality (Sanford, FL)</Link>
                      <Link href="/guides/how-to-book-house-cleaner-sanford-fl" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 transition-colors" data-cy="mobile-guides-link-how-to-book-house-cleaner-sanford-fl">How to Book a House Cleaner (Sanford, FL)</Link>
                    </div>
                  )}
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
                  href="/get-hired"
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
                  href="/custom-quote"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  data-cy="mobile-custom-quote-button"
                >
                  Custom Quote
                </Link>

                {/* Book Now Button */}
                <Link
                  href="/booking"
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
        )
        }
      </div >
    </header >
  );
};

export default Header;