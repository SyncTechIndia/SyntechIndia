import React, { useState } from 'react';
import Chiku from "../assets/images/Chirag.png";
import DS from "../assets/images/SD.jpg";
import Tushar from "../assets/images/BT.jpg";
import ABB from "../assets/images/AB.jpg";
import RMD from "../assets/images/RM.jpg";
import AD from "../assets/images/DA.jpg";

const MytTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Akshay Bomble",
      role: "CEO",
      image: ABB,
      bio: "Director/Business Head"
    },
    {
      id: 2,
      name: "Chirag Zaware",
      role: "CEO",
      image: Chiku,
      bio: "Technology Expert (Software Development)"
    },
    {
      id: 3,
      name: "Sujit Dhotre",
      role: "CTO",
      image: DS,
      bio: "Technology Expert (Software Development)"
    },
    {
      id: 4,
      name: "Tushar Bhambure",
      role: "MD",
      image: Tushar,
      bio: "Database and Data Management Expert"
    },
    {
      id: 5,
      name: "Rushikesh Mane",
      role: "CSO",
      image: RMD,
      bio: "Sales and Marketing"
    },
    {
      id: 6,
      name: "Akash Dhore",
      role: "SE",
      image: AD,
      bio: "Business Development"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-purple-400/10 to-blue-400/10 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              MANAGEMENT TEAM
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="relative group"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Card Container */}
              <div className="relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-4">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Main Card */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-500">
                  {/* Profile Image Container */}
                  <div className="relative mb-6 mx-auto w-32 h-32 md:w-40 md:h-40">
                    {/* Multi-layer Rotating Borders with Color Changes */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 via-pink-500 to-cyan-400 animate-spin-slow p-1">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-900 to-blue-600"></div>
                    </div>
                    
                    {/* Counter-rotating outer ring */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-l from-pink-400 via-purple-400 via-blue-400 via-cyan-400 to-pink-400 animate-spin-reverse opacity-70 p-0.5">
                      <div className="w-full h-full rounded-full bg-transparent"></div>
                    </div>
                    
                    {/* Main image container */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-900 to-purple-900 p-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                      {member.role}
                    </p>
                    
                    {/* Bio - appears on hover */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      hoveredMember === member.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Interactive Button */}
                  <div className={`mt-4 transition-all duration-500 ${
                    hoveredMember === member.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <button className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>

              {/* Role Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {member.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500"></div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes color-shift {
          0% {
            background: linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899);
          }
          25% {
            background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4);
          }
          50% {
            background: linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4, #3b82f6);
          }
          75% {
            background: linear-gradient(45deg, #ec4899, #06b6d4, #3b82f6, #8b5cf6);
          }
          100% {
            background: linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        
        .animate-color-shift {
          animation: color-shift 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MytTeam;