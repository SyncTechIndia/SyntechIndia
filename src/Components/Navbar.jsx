import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // You can include this near your JSX return:
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log("Form submitted");
    setIsModalOpen(false); // close modal after submit
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to check if a route is active
  const isActiveRoute = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Get active link classes
  const getNavLinkClass = (path, isMobile = false) => {
    const baseClass = isMobile 
      ? "block px-3 py-2 transition-colors" 
      : "transition-colors";
    
    if (isActiveRoute(path)) {
      return `${baseClass} text-white font-semibold`;
    }
    
    return `${baseClass} ${
      path === '/' 
        ? 'text-blue-300 hover:text-white' 
        : 'text-white hover:text-blue-200'
    }`;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-950 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-white text-xl font-bold tracking-wider">SyncTech India</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={getNavLinkClass('/')}>
              Home
            </Link>
            <Link to="/about" className={getNavLinkClass('/about')}>
              About Us
            </Link>
            <Link to="/services" className={getNavLinkClass('/services')}>
              Services
            </Link>
            <Link to="/blogs" className={getNavLinkClass('/blogs')}>
              Blogs
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
           <button 
              onClick={() => setIsModalOpen(true)} 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-blue-900 bg-white hover:bg-blue-50 transition-colors"
            >
              Contact <ArrowUpRight className="ml-1 h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
    {isMenuOpen && (
  <div className="md:hidden bg-blue-900">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <Link 
        to="/" 
        className={getNavLinkClass('/', true)}
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className={getNavLinkClass('/about', true)}
        onClick={() => setIsMenuOpen(false)}
      >
        About Us
      </Link>
      <Link 
        to="/services" 
        className={getNavLinkClass('/services', true)} 
        onClick={() => setIsMenuOpen(false)}
      >
        Services
      </Link>
      <Link 
        to="/blogs" 
        className={getNavLinkClass('/blogs', true)}
        onClick={() => setIsMenuOpen(false)}
      >
        Blogs
      </Link>
      <Link 
        to="/case-studies" 
        className={getNavLinkClass('/case-studies', true)}
        onClick={() => setIsMenuOpen(false)}
      >
        Case Studies
      </Link>
      
      <div className="pt-2">
        <Link 
          to="/contact" 
          className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-blue-900 bg-white hover:bg-blue-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  </div>
)}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-100 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-semibold mb-4 text-blue-900">Contact Us</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" required className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows="4" required className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;