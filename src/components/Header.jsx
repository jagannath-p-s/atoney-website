// components/Header.jsx
import React, { useState, useEffect, useCallback, memo } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Mail, 
  Phone,
  Globe 
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

// Constants
const SOCIAL_LINKS = [
  { icon: Facebook, link: 'https://www.facebook.com/servyxcertification', name: 'Facebook' },
  { icon: Linkedin, link: 'https://www.linkedin.com/company/servyx-certification/', name: 'LinkedIn' },
  { icon: Instagram, link: 'https://www.instagram.com/servyxcertification/', name: 'Instagram' }
];

const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' }
];

const SERVICES_DATA = {
  name: 'Services',
  dropdown: [
    {
      title: 'KSA',
      links: [
        { name: 'SABER Certification', href: '/services#saber' },
        { name: 'FASEH/SFDA Approval', href: '/services#faseh' },
      ],
    },
    {
      title: 'UAE',
      links: [
        { name: 'Inspection', href: '/services#inspection' },
        { name: 'Laboratory Testing (ISO 17025)', href: '/services#laboratory' },
        { name: 'Dubai Municipality', href: '/services#municipality' },
        { name: 'MOIAT', href: '/services#moiat' },
        { name: 'TRDA (Telecommunication Devices)', href: '/services#trda' },
      ],
    },
  ],
};

// Newsletter Dialog Component
const NewsletterDialog = memo(({ isOpen, onClose, onSubmit, email, setEmail }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-dialog-title"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 
            id="newsletter-dialog-title"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            Join Our Newsletter
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close Newsletter Dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Email Address"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-xl hover:opacity-90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            Subscribe Now
          </button>
          <p className="text-xs text-gray-500 text-center mt-4">
            By subscribing, you agree to our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> and <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
          </p>
        </form>
      </div>
    </div>
  );
});

// Dropdown Component
const Dropdown = memo(({ title, items, isOpen, toggleOpen, closeDropdown, isMobile = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = useCallback((href) => {
    closeDropdown();
    // If already on the /services page, scroll to the section
    if (location.pathname === '/services') {
      const sectionId = href.split('#')[1];
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to /services with hash
      navigate(href);
    }
  }, [closeDropdown, navigate, location]);

  return (
    <div className={`relative ${isMobile ? 'w-full' : ''}`}>
      <button
        type="button"
        className={`inline-flex items-center text-base font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none ${
          isMobile ? 'w-full justify-between' : ''
        }`}
        onClick={toggleOpen}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown 
          className={`ml-1 h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          aria-hidden="true" 
        />
      </button>

      {isOpen && (
        <div
          className={`${
            isMobile 
              ? 'relative w-full mt-2'
              : 'absolute left-0 mt-2 w-80'
          } rounded-2xl shadow-xl bg-white ring-1 ring-black/5 transform transition-all duration-200 z-50`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={`${title}-dropdown`}
        >
          <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
            {items?.map((section, index) => (
              <div key={index} className="space-y-3">
                {section.title && (
                  <div className="text-sm font-bold text-gray-900 mb-2">
                    {section.title}
                  </div>
                )}
                {section.links?.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLinkClick(link.href)}
                    className="w-full flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                    role="menuitem"
                  >
                    <Globe className="h-7 w-7 mr-2 opacity-75" />
                    {link.name}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

// Top Header Component
const TopHeader = memo(() => (
  <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-2">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a href="mailto:info@servyxcertification.com" className="flex items-center text-sm text-white/90 hover:text-white transition-colors space-x-2">
          <Mail className="h-7 w-7" />
          <span className="hidden sm:inline">info@servyxcertification.com</span>
        </a>
        <a href="tel:+971527451896" className="flex items-center text-sm text-white/90 hover:text-white transition-colors space-x-2">
          <Phone className="h-7 w-7" />
          <span className="hidden sm:inline">+971 527451896</span>
        </a>
      </div>

      <div className="flex space-x-2">
        {SOCIAL_LINKS.map(({ icon: Icon, link, name }) => (
          <a
            key={name}
            href={link}
            className="text-white/90 hover:text-white transition-colors p-1"
            aria-label={`Visit our ${name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="h-7 w-7" />
          </a>
        ))}
      </div>
    </div>
  </div>
));

// Main Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterDialogOpen, setNewsletterDialogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle Dropdown
  const handleDropdownToggle = useCallback((dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  }, []);

  // Close Dropdown
  const handleDropdownClose = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // Handle Newsletter Submission
  const handleNewsletterSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      // TODO: Implement actual newsletter subscription logic (e.g., API call)
      console.log('Subscribed with email:', newsletterEmail);
      setNewsletterEmail('');
      setNewsletterDialogOpen(false);
      // Optionally, display a success message to the user
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      // Optionally, display an error message to the user
    }
  }, [newsletterEmail]);

  // Close Mobile Menu
  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <div className={`sticky top-0 w-full z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <TopHeader />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className="sr-only">Servyx Certification Logo</span>
              <img className="h-9 w-auto" src={logo} alt="Servyx Certification" />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAVIGATION_LINKS.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {name}
                </Link>
              ))}
              <Dropdown
                title={SERVICES_DATA.name}
                items={SERVICES_DATA.dropdown}
                isOpen={activeDropdown === SERVICES_DATA.name}
                toggleOpen={() => handleDropdownToggle(SERVICES_DATA.name)}
                closeDropdown={handleDropdownClose}
              />
              <button
                onClick={() => setNewsletterDialogOpen(true)}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:opacity-90 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden">
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <Link to="/" onClick={closeMobileMenu}>
                  <span className="sr-only">Servyx Certification Logo</span>
                  <img className="h-8 w-auto" src={logo} alt="Servyx Certification" />
                </Link>
                <button
                  type="button"
                  className="p-2 rounded-lg text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={closeMobileMenu}
                  aria-label="Close Mobile Menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-2">
                {NAVIGATION_LINKS.map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    className="block px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    {name}
                  </Link>
                ))}
                <div className="px-4 py-3">
                  <Dropdown
                    title={SERVICES_DATA.name}
                    items={SERVICES_DATA.dropdown}
                    isOpen={activeDropdown === SERVICES_DATA.name}
                    toggleOpen={() => handleDropdownToggle(SERVICES_DATA.name)}
                    closeDropdown={() => {
                      handleDropdownClose();
                      closeMobileMenu();
                    }}
                    isMobile={true}
                  />
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setNewsletterDialogOpen(true);
                      closeMobileMenu();
                    }}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:opacity-90 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Newsletter Dialog */}
      <NewsletterDialog
        isOpen={newsletterDialogOpen}
        onClose={() => setNewsletterDialogOpen(false)}
        onSubmit={handleNewsletterSubmit}
        email={newsletterEmail}
        setEmail={setNewsletterEmail}
      />
    </div>
  );
};

export default Header;
