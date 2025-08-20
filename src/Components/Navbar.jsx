import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveRoute = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const getNavLinkClass = (path, isMobile = false) => {
    const baseClass = isMobile 
      ? "block px-3 py-2 transition-colors" 
      : "transition-colors";
    
    const isActive = isActiveRoute(path);
    
    if (isActive) {
      return `${baseClass} text-blue-300 font-semibold`;
    }
    
    return `${baseClass} text-white hover:text-white`;
  };

  // Special function for contact button styling (since it's styled differently)
  const getContactButtonClass = (isMobile = false) => {
    const isActive = isActiveRoute('/contact');
    const baseClass = isMobile 
      ? "flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-full transition-colors"
      : "flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full transition-colors";
    
    if (isActive) {
      return `${baseClass} text-white bg-blue-800 hover:bg-blue-700`;
    }
    
    return `${baseClass} text-blue-900 bg-white hover:bg-blue-50`;
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
          </div>

          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className={getContactButtonClass()}
            >
              Contact <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

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
            
            <div className="pt-2">
              <Link 
                to="/contact" 
                className={getContactButtonClass(true)}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;