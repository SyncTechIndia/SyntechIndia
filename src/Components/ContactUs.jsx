import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate email sending (replace with actual emailjs implementation)
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);

    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to send email, please try again later.');
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
     <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-cyan-100/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Get In <span className="text-blue-800">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div className="grid lg:grid-cols-3 gap-12">
      {/* Contact Form */}
      <div className="lg:col-span-2">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 shadow-xl">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Send us a Message</h3>
          
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h4>
                <p className="text-green-700">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            </div>
          ) : (
            <div ref={formRef} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <div className="text-center pt-4">
                <button
                  type="submit"
                  onClick={sendEmail}
                  disabled={isLoading}
                  className={`bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-8 rounded-lg flex items-center space-x-2 mx-auto ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Send className="h-5 w-5" />
                  <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="lg:col-span-1 space-y-6 md:space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="bg-blue-500 p-2 sm:p-3 rounded-lg group-hover:bg-blue-600 transition-colors flex-shrink-0">
                    <Phone className="h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-slate-500 text-xs sm:text-sm mb-1">Phone</p>
                    <p className="text-slate-800 font-medium text-sm sm:text-base break-all">
                      +91 7058052789<br/>+91 7219630025
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="bg-blue-500 p-2 sm:p-3 rounded-lg group-hover:bg-blue-600 transition-colors flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-slate-500 text-xs sm:text-sm mb-1">Email</p>
                    <p className="text-slate-800 font-medium text-sm sm:text-base break-all">
                      info@synctechindia.com<br/>synctechindiaitsolutions@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="bg-blue-500 p-2 sm:p-3 rounded-lg group-hover:bg-blue-600 transition-colors flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-slate-500 text-xs sm:text-sm mb-1">Address</p>
                    <p className="text-slate-800 font-medium text-sm sm:text-base leading-relaxed">
                      Sayali Home, Behind the Market Yard, Rajgurunagar, Khed, Pune, 410505
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="bg-blue-500 p-2 sm:p-3 rounded-lg group-hover:bg-blue-600 transition-colors flex-shrink-0">
                    <Clock className="h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-slate-500 text-xs sm:text-sm mb-1">Business Hours</p>
                    <p className="text-slate-800 font-medium text-sm sm:text-base">
                      Mon - Fri: 9AM - 6PM<br />Weekend: 10AM - 4PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-blue-200/50 shadow-lg">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600 flex-shrink-0" />
                <h4 className="text-base sm:text-lg font-semibold text-slate-800">Quick Response</h4>
              </div>
              <p className="text-slate-600 text-sm sm:text-base">We typically respond to all inquiries within 24 hours during business days.</p>
            </div>
          </div>
    </div>
    </div>
    </div>
  );
}