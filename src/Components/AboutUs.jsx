import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Target, Trophy, Crosshair, Heart } from 'lucide-react';


import MytTeam from './MyTeam';

const AboutUs = () => {

  return(
    <>
     <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-gray-800 pt-20">
      {/* Header */}
      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold text-blue-900 drop-shadow-lg animate-wave text-center">About Our Company</h1>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 space-y-16">
        
        {/* Who We Are Section */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-200">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-900 flex items-center justify-center gap-3">
            <Heart className="text-blue-600" />
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto">
           Synctech India is a dynamic and forward-thinking IT company dedicated to helping startups, 
           SMEs, and enterprises embrace technology. Our team of passionate developers, designers,
            strategists, and digital marketers work collaboratively to deliver customized solutions tailored to your business goals.
          </p>
        </section>

        {/* Our Mission & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Our Target */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-blue-200 hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <Target className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Our Vision</h3>
              <p className="text-gray-700 text-sm">
                To become a trusted and innovative leader in the IT and digital solutions industry,
                empowering businesses to thrive in a connected world through technology driven 
                creativity and customer focused services.
              </p>
            </div>
          </div>

          {/* Our Achievements */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-emerald-200 hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <Trophy className="text-4xl text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-emerald-900">Our Achievements</h3>
              <p className="text-gray-700 text-sm">
               Recognized for excellence in customer satisfaction and on-time delivery.
              </p>
            </div>
          </div>

          {/* Our Goals */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-purple-200 hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <Crosshair className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-purple-900">Our Goals</h3>
              <p className="text-gray-700 text-sm">
                To expand our reach globally, embrace emerging technologies, 
                and continue fostering innovation in every project we undertake.
              </p>
            </div>
          </div>

          {/* Our Motto */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-orange-200 hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <Heart className="text-4xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-orange-900">Our Mission</h3>
              <p className="text-gray-700 text-sm font-medium italic">
                To deliver high quality customized IT solutions that enhance business performance, 
                strengthen digital presence, and foster long term partnership with our clients through 
                integrity . Innovation, and excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-200">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900 flex items-center justify-center gap-3">
            <MapPin className="text-blue-600" />
            Our Address & Contact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Address</h3>
              <p className="text-gray-700">
                Rajgurunagar<br />
                Pune,410505<br />
                
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-900">Phone</h3>
              <p className="text-gray-700">
                +91 721 963 0025<br />
                +91 99702 76895
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-900">Email</h3>
              <p className="text-gray-700">
                synctechindiaitsolutions@gmail.com<br />
                
              </p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </div>
      <MytTeam/>
    </>
  )
};

export default AboutUs;
