import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-cyan-100/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 animate-fade-in">
              Get In <span className="text-blue-800">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

      </div>

      {/* Main Content */}
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
                <div className="space-y-6">
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
                        className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
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
                        className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
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
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
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
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <div className="text-center pt-4">
                    <button
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-300/50 flex items-center space-x-2 mx-auto"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-blue-500 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Phone</p>
                    <p className="text-slate-800 font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="bg-blue-500 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Email</p>
                    <p className="text-slate-800 font-medium">hello@company.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="bg-blue-500 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Address</p>
                    <p className="text-slate-800 font-medium">123 Ocean Drive<br />Blue City, BC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="bg-blue-500 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Business Hours</p>
                    <p className="text-slate-800 font-medium">Mon - Fri: 9AM - 6PM<br />Weekend: 10AM - 4PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-lg">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="h-8 w-8 text-blue-600" />
                <h4 className="text-lg font-semibold text-slate-800">Quick Response</h4>
              </div>
              <p className="text-slate-600">We typically respond to all inquiries within 24 hours during business days.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Wave */}
      <div className="mt-16">
        <svg viewBox="0 0 1200 120" className="w-full h-24">
          <path d="M0,60 C150,10 350,110 600,60 C850,10 1050,110 1200,60 V0 H0 V60 Z" 
                className="fill-blue-200/60"></path>
        </svg>
      </div>
    </div>
  );
}