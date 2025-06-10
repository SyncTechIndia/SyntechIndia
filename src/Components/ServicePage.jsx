import { useState, useEffect } from 'react';
import { 
  Camera, 
  Video, 
  Music, 
  Palette, 
  Code, 
  Briefcase,
  ArrowUpRight,
  Shield,
  Clock,
  Users,
  Award,
  Zap,
  Heart,
  Monitor,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Lock
} from 'lucide-react';

// CSS Animation keyframes
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
  
  
  .service-card {
    transition: all 0.4s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  }
  
  .service-card:hover {
    box-shadow: 0 0 30px rgba(0, 119, 182, 0.8), 0 0 60px rgba(0, 119, 182, 0.4);
    animation: cardPulse 2s infinite ease-in-out;
  }
  
  @keyframes cardPulse {
    0% { box-shadow: 0 0 30px rgba(0, 119, 182, 0.8), 0 0 60px rgba(0, 119, 182, 0.4); }
    50% { box-shadow: 0 0 40px rgba(0, 119, 182, 0.9), 0 0 80px rgba(0, 119, 182, 0.5); }
    100% { box-shadow: 0 0 30px rgba(0, 119, 182, 0.8), 0 0 60px rgba(0, 119, 182, 0.4); }
  }
  
  .service-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0, 119, 182, 0.3) 0%, rgba(0, 0, 0, 0) 70%);
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.8s ease-out;
  }
  
  .service-card:hover::before {
    transform: scale(1);
    opacity: 0.2;
  }
`;

const ServicePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  
  useEffect(() => {
    // Add a small delay before starting the load animations
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(loadTimer);
  }, []);
  
  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };
  
  const handleMouseLeave = () => {
    setHoveredId(null);
  };
  
  const services = [
    {
      id: 1,
      title: "Video Production",
      icon: <Video size={32} />,
      delay: 100,
    },
    {
      id: 2,
      title: "Graphic Designing",
      icon: <Palette size={32} />,
      delay: 300,
    },
    {
      id: 3,
      title: "Website Development",
      icon: <Code size={32} />,
      delay: 500,
    },
    {
      id: 4,
      title: "Photography",
      icon: <Camera size={32} />,
      delay: 700,
    },
    {
      id: 5,
      title: "Music Production",
      icon: <Music size={32} />,
      delay: 900,
    },
    {
      id: 6,
      title: "Branding",
      icon: <Briefcase size={32} />,
      delay: 1100,
    }
  ];

  const whyChooseUs = [
    {
      id: 1,
      title: "Expert Team",
      icon: <Users size={32} />,
      description: "Our team consists of highly skilled professionals with years of experience in their respective fields.",
      delay: 200,
    },
    {
      id: 2,
      title: "Quality Assurance",
      icon: <Shield size={32} />,
      description: "We maintain the highest standards of quality in every project we deliver to our clients.",
      delay: 400,
    },
    {
      id: 3,
      title: "Timely Delivery",
      icon: <Clock size={32} />,
      description: "We understand the importance of deadlines and ensure all projects are completed on time.",
      delay: 600,
    },
    {
      id: 4,
      title: "Customer Support",
      icon: <Heart size={32} />,
      description: "24/7 customer support to assist you with any queries or concerns you might have.",
      delay: 800,
    },
    {
      id: 5,
      title: "Innovative Solutions",
      icon: <Zap size={32} />,
      description: "We leverage cutting-edge technology to provide innovative solutions for your business needs.",
      delay: 1000,
    },
    {
      id: 6,
      title: "Award Winning",
      icon: <Award size={32} />,
      description: "Recognized by industry leaders for our excellence and outstanding service delivery.",
      delay: 1200,
    }
  ];

  const products = [
    {
      id: 1,
      title: "Web Applications",
      icon: <Monitor size={32} />,
      description: "Custom web applications built with modern technologies for scalable business solutions.",
      delay: 100,
    },
    {
      id: 2,
      title: "Mobile Apps",
      icon: <Smartphone size={32} />,
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      delay: 300,
    },
    {
      id: 3,
      title: "E-Commerce Platforms",
      icon: <Globe size={32} />,
      description: "Complete e-commerce solutions with payment integration and inventory management.",
      delay: 500,
    },
    {
      id: 4,
      title: "Database Systems",
      icon: <Database size={32} />,
      description: "Robust database management systems designed for optimal performance and security.",
      delay: 700,
    },
    {
      id: 5,
      title: "Cloud Solutions",
      icon: <Cloud size={32} />,
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      delay: 900,
    },
    {
      id: 6,
      title: "Security Systems",
      icon: <Lock size={32} />,
      description: "Advanced cybersecurity solutions to protect your digital assets and data.",
      delay: 1100,
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-gray-800 py-16 px-4 pt-25 md:px-8">
      {/* Inject CSS */}
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* Services Section */}
           {/* Why Choose Us Section */}
        <section>
          <h2 className="text-4xl font-bold mb-4  text-blue-900 drop-shadow-lg animate-wave text-center">Why Choose Us</h2>
          <p className="text-blue-700 text-center mb-12 max-w-2xl mx-auto">Discover what makes us the preferred choice for businesses worldwide</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.id}
                className={`
                  transform opacity-0 loading-card
                  ${isLoaded ? `opacity-100 animate-in` : ''}
                  bg-white/80 backdrop-blur-sm rounded-xl p-6 service-card relative overflow-hidden
                  hover:bg-emerald-600 hover:-translate-y-2 hover:scale-105
                  cursor-pointer group border border-emerald-200 shadow-xl
                  transition-all duration-500
                `}
                style={{ 
                  animationDelay: `${item.delay}ms`,
                  transitionDelay: `${item.delay}ms`,
                }}
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                
                {/* Card content container with background */}
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-xl z-10 h-full w-full group-hover:bg-emerald-600 transition-colors duration-500">
                  {/* Glowing dot in top corner on hover */}
                  <div className="absolute top-0 right-0 h-12 w-12 rounded-full bg-emerald-400/0 blur-xl transform translate-x-6 -translate-y-6 group-hover:bg-emerald-400/40 group-hover:scale-150 transition-all duration-500"></div>
                  
                  {/* Background ripple effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-900/0 group-hover:to-emerald-900/20 transition-all duration-700 rounded-xl"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="text-emerald-600 transition-all duration-500 group-hover:text-white mb-4 flex justify-center">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 transition-all duration-300 group-hover:text-white text-emerald-900">{item.title}</h3>
                    <p className="text-gray-700 text-sm transition-all duration-300 group-hover:text-emerald-100">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Bottom border that expands on hover */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-300 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-bold mb-4  text-blue-900 drop-shadow-lg animate-wave text-center">Our Services</h2>
          <p className="text-blue-700 text-center mb-12 max-w-2xl mx-auto">Discover our comprehensive range of professional services designed to bring your vision to reality</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`
                  transform opacity-0 loading-card
                  ${isLoaded ? `opacity-100 animate-in` : ''}
                  bg-white/80 backdrop-blur-sm rounded-xl p-6 service-card relative overflow-hidden
                  hover:bg-blue-700 hover:-translate-y-2 hover:scale-105
                  cursor-pointer group border border-blue-200 shadow-xl
                  transition-all duration-500
                `}
                style={{ 
                  animationDelay: `${service.delay}ms`,
                  transitionDelay: `${service.delay}ms`,
                }}
                onMouseEnter={() => handleMouseEnter(service.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                
                {/* Card content container with background */}
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-xl z-10 h-full w-full group-hover:bg-blue-700 transition-colors duration-500">
                  {/* Glowing dot in top corner on hover */}
                  <div className="absolute top-0 right-0 h-12 w-12 rounded-full bg-blue-400/0 blur-xl transform translate-x-6 -translate-y-6 group-hover:bg-blue-400/40 group-hover:scale-150 transition-all duration-500"></div>
                  
                  {/* Background ripple effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/0 group-hover:to-blue-900/20 transition-all duration-700 rounded-xl"></div>
                  
                  <div className="flex justify-between items-start relative z-10">
                    <div className="text-blue-600 transition-all duration-500 group-hover:text-white icon-spin">{service.icon}</div>
                    <ArrowUpRight className="text-gray-400 transition-all duration-500 arrow group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-4 mb-3 transition-all duration-300 group-hover:text-white relative z-10 text-blue-900">{service.title}</h3>
                  
                  <p className="text-gray-700 text-sm transition-all duration-300 group-hover:text-blue-100 relative z-10">
                    Professional {service.title.toLowerCase()} services tailored to meet your specific needs and requirements.
                  </p>
                  
                  {/* Bottom border that expands on hover */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-300 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Our Products Section */}
        <section>
          <h2 className="text-4xl font-bold mb-4  text-blue-900 drop-shadow-lg animate-wave text-center">Our Products</h2>
          <p className="text-blue-700 text-center mb-12 max-w-2xl mx-auto">Explore our innovative products designed to transform your business operations</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className={`
                  transform opacity-0 loading-card
                  ${isLoaded ? `opacity-100 animate-in` : ''}
                  bg-white/80 backdrop-blur-sm rounded-xl p-6 service-card relative overflow-hidden
                  hover:bg-purple-600 hover:-translate-y-2 hover:scale-105
                  cursor-pointer group border border-purple-200 shadow-xl
                  transition-all duration-500
                `}
                style={{ 
                  animationDelay: `${product.delay}ms`,
                  transitionDelay: `${product.delay}ms`,
                }}
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                
                {/* Card content container with background */}
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-xl z-10 h-full w-full group-hover:bg-purple-600 transition-colors duration-500">
                  {/* Glowing dot in top corner on hover */}
                  <div className="absolute top-0 right-0 h-12 w-12 rounded-full bg-purple-400/0 blur-xl transform translate-x-6 -translate-y-6 group-hover:bg-purple-400/40 group-hover:scale-150 transition-all duration-500"></div>
                  
                  {/* Background ripple effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-900/0 group-hover:to-purple-900/20 transition-all duration-700 rounded-xl"></div>
                  
                  <div className="flex justify-between items-start relative z-10 mb-4">
                    <div className="text-purple-600 transition-all duration-500 group-hover:text-white">{product.icon}</div>
                    <ArrowUpRight className="text-gray-400 transition-all duration-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 transition-all duration-300 group-hover:text-white relative z-10 text-purple-900">{product.title}</h3>
                  
                  <p className="text-gray-700 text-sm transition-all duration-300 group-hover:text-purple-100 relative z-10">
                    {product.description}
                  </p>
                  
                  {/* Bottom border that expands on hover */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-purple-300 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                </div>
              </div>
            ))}
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
  );
};

export default ServicePage;