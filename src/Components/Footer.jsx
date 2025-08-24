import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const links = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z" 
            fill="currentColor"
            className="text-blue-800 animate-pulse"
          />
        </svg>
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z" 
            fill="currentColor"
            className="text-blue-900 opacity-60"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
             SyncTech India
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Your compass for cutting-edge software and impactful digital marketing            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-blue-800/30 hover:bg-blue-700/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Icon size={18} className="text-blue-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-300 border-b border-blue-800/50 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-blue-300 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-300 border-b border-blue-800/50 pb-2">
              Services
            </h4>
            <ul className="space-y-2">
              {['Software Development','Web Development', 'Mobile Apps', 'Domain and Hosting', 'Branding and Media Production', 'Graphic Design','Digital Marketing'].map((service) => (
                <li key={service}>
                 
                    {service}
                 
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-300 border-b border-blue-800/50 pb-2">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm">info@synctechindia.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm">+91 7219630025</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm">Rajgurunagar , Pune - 410505</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter section
        <div className="border-t border-blue-800/30 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-blue-300 mb-4">
              Dive into our Newsletter
            </h4>
            <p className="text-slate-300 mb-6 max-w-md mx-auto">
              Stay updated with the latest waves in technology and innovation
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-blue-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom section */}
        <div className="border-t border-blue-800/30 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm text-center md:text-left">
            <p>&copy; 2025 SyncTech India. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
          
          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-4 py-2 bg-blue-800/30 hover:bg-blue-700/50 rounded-full transition-all duration-300 hover:scale-105"
          >
            <span className="text-sm text-blue-300">Back to Top</span>
            <ChevronUp size={16} className="text-blue-300 group-hover:animate-bounce" />
          </button>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;