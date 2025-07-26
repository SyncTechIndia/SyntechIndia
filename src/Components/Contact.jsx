import React, { useState, useEffect } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [particles, setParticles] = useState([]);

  // Create particles on mount
  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 30; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 15 + Math.random() * 10
      });
    }
    setParticles(particleArray);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setShowSuccess(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);

    // Hide success message after 6 seconds
    setTimeout(() => setShowSuccess(false), 6000);
  };

  const contactInfo = [
    {
      icon: '🏢',
      title: 'Headquarters',
      details: ['Tech Innovation Hub, Block A', 'Rajiv Gandhi Infotech Park', 'Hinjawadi Phase I, Pune 411057', 'Maharashtra, India']
    },
    {
      icon: '📱',
      title: 'Call Us',
      details: ['+91 20 6789 1234', '+91 98765 43210', 'Toll Free: 1800 123 4567']
    },
    {
      icon: '💌',
      title: 'Email',
      details: ['hello@syntechindia.com', 'support@syntechindia.com', 'careers@syntechindia.com']
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 7:00 PM', 'Saturday: 10:00 AM - 4:00 PM', '24/7 Emergency Support Available']
    },
    {
      icon: '🌐',
      title: 'Digital Presence',
      details: ['www.syntechindia.com', 'LinkedIn: /company/syntechindia', 'Twitter: @syntechindia']
    }
  ];

  const subjectOptions = [
    { value: '', label: 'Select your inquiry type' },
    { value: 'general', label: '💼 General Business Inquiry' },
    { value: 'services', label: '🚀 Our Services & Solutions' },
    { value: 'support', label: '🛠️ Technical Support' },
    { value: 'partnership', label: '🤝 Partnership Opportunities' },
    { value: 'careers', label: '👥 Join Our Team' },
    { value: 'consultation', label: '💡 Free Consultation' },
    { value: 'other', label: '📋 Other' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 animate-pulse"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-60 animate-bounce"
            style={{
              left: `${particle.x}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-96 right-16 w-32 h-32 bg-cyan-200 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-blue-300 rounded-full opacity-25 animate-pulse"></div>

      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        {/* Hero Section */}
        <div className="text-center py-12 md:py-20 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-6">
            SyntechIndia
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 font-light mb-8 max-w-4xl mx-auto">
            Connect with Innovation • Transform Your Vision into Reality
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 mt-12 lg:mt-20">
          {/* Contact Info - 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 md:p-8 lg:p-12 border border-blue-100 shadow-2xl shadow-blue-100/50">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-6 md:mb-8 relative">
                Let's Connect
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
              </h2>

              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-start p-4 md:p-6 bg-white/60 rounded-2xl border border-blue-100/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100/50 hover:bg-blue-50/50 group cursor-pointer"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-lg shadow-blue-200/50 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 flex-shrink-0 mb-3 sm:mb-0">
                      {info.icon}
                    </div>
                    <div className="sm:ml-4 md:ml-6">
                      <h3 className="text-base md:text-lg font-semibold text-blue-600 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 md:p-8 lg:p-12 border border-blue-100 shadow-2xl shadow-blue-100/50">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-6 md:mb-8 relative">
                Start a Conversation
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
              </h2>

              {/* Success Message */}
              {showSuccess && (
                <div className="bg-green-50 border-2 border-green-200 text-green-700 p-4 rounded-xl mb-6 animate-pulse">
                  🎉 Message sent successfully! Our team will reach out within 24 hours.
                </div>
              )}

              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="w-full px-4 md:px-5 py-3 md:py-4 border-2 border-blue-200 rounded-xl bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:-translate-y-1 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      className="w-full px-4 md:px-5 py-3 md:py-4 border-2 border-blue-200 rounded-xl bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:-translate-y-1 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@example.com"
                      required
                      className="w-full px-4 md:px-5 py-3 md:py-4 border-2 border-blue-200 rounded-xl bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:-translate-y-1 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 md:px-5 py-3 md:py-4 border-2 border-blue-200 rounded-xl bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:-translate-y-1 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                    className="w-full px-4 md:px-5 py-3 md:py-4 border-2 border-blue-200 rounded-xl bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:-translate-y-1 focus:outline-none"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                    What can we help you with?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 md:px-5 py-3 md:py-4 border-2 border-blue-200 rounded-xl bg-white/80 backdrop-blur-sm text-slate-700 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:-translate-y-1 focus:outline-none cursor-pointer"
                  >
                    {subjectOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-white text-slate-700">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                    Tell us more
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share your project details, requirements, or any questions you have. We're here to help bring your ideas to life!"
                    rows={5}
                    required
                    className="w-full px-4 md:px-5 py-3 md:py-4 border-2 border-blue-200 rounded-xl bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:-translate-y-1 focus:outline-none resize-vertical min-h-32"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold py-4 md:py-5 px-8 md:px-12 rounded-full text-base md:text-lg uppercase tracking-widest transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/50 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;