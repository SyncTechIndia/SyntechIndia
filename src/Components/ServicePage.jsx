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
  Lock,
  CheckCircle,
  Star,
  DollarSign,
  X,
  Eye
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

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: modalFadeIn 0.3s ease-out;
  }

  .modal-content {
    background: white;
    border-radius: 20px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    animation: modalSlideIn 0.4s ease-out;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  }

  @keyframes modalFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes modalSlideIn {
    from { 
      opacity: 0;
      transform: translateY(-50px) scale(0.95);
    }
    to { 
      opacity: 1;
      transform: translateY(0) scale(1);
    }
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
  const [selectedService, setSelectedService] = useState(null);
  
  useEffect(() => {
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

  const handleSeeMore = (service) => {
    setSelectedService(service);
    console.log('See more clicked for:', service.title); // Debug log
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };
  
  const services = [
    {
      id: 1,
      title: "Software Development",
      icon: <Code size={32} />,
      delay: 100,
      shortDesc: "We build powerful, scalable, and customized software solutions tailored to meet your business needs. From enterprise resource planning (ERP) systems to custom CRM platforms, we ensure seamless performance, security, and user-friendly interfaces.",
      features: ["Custom software design", "Desktop applications", "Enterprise software solutions","Software maintenance and support"],
      technologies: ["React", "Node.js", "Python", "Java"],
    },
    {
      id: 2,
      title: "Website Development",
      icon: <Globe size={32} />,
      delay: 300,
      shortDesc: "Your website is your digital identity. We design and develop visually engaging, mobile-responsive, and SEO-friendly websites that convert visitors into customers.",
      features: ["Static and dynamic websites", "E-commerce development", "CMS-based websites ","Website redesign and maintenance"],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress","TailWind","Bootstrap","MUI"],
    },
    {
      id: 3,
      title: "Web Application Development",
      icon: <Monitor size={32} />,
      delay: 500,
      shortDesc: "We specialize in creating interactive, secure, and high-performing web applications that streamline business processes and enhance user experience.",
      features: ["Business portals", "SaaS platforms", "CRM/HRM solutions","Online booking systems"],
      technologies: ["React", "Vue.js", "Angular", "Firebase"],
 
    },
    {
      id: 4,
      title: "Mobile Application Development",
      icon: <Smartphone size={32} />,
      delay: 700,
      shortDesc: "We create intuitive and engaging mobile apps for Android and iOS that deliver smooth performance and meet your business goals.",
      features: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Optimization"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      id: 5,
      title: "Domain and Hosting",
      icon: <Cloud size={32} />,
      delay: 900,
      shortDesc: "Get secure, fast, and reliable domain registration and hosting services that keep your business online 24/7.",
      features: ["Domain Registration", "SSL Certificates", "24/7 Server Monitoring"],
      technologies: ["AWS", "Google Cloud", "DigitalOcean", "Cloudflare"],
    },
    {
      id: 6,
      title: "Branding and Media Production",
      icon: <Briefcase size={32} />,
      delay: 1100,
      shortDesc: "We help build a strong brand identity with impactful visual and media assets. Our branding services ensure your business stands out in the market.",
      features: ["Brand Identity Design", "Video Production", "Content Strategy","Rebranding strategies"],
      technologies: ["Adobe Suite", "Final Cut Pro", "Figma", "Canva"],
    },
    {
      id: 7,
      title: "Graphic Design",
      icon: <Palette size={32} />,
      delay: 900,
      shortDesc: "Professional graphic design services tailored to meet your specific needs and requirements.",
      features: ["Logo Design", "Print Materials", "Digital Assets"],
      technologies: ["Photoshop", "Illustrator", "InDesign", "Sketch"],
    },
    {
      id: 8,
      title: "Social Media Management",
      icon: <Users size={32} />,
      delay: 900,
      shortDesc: "Professional social media management services tailored to meet your specific needs and requirements.",
      features: ["Content Creation", "Community Management", "Analytics & Reporting"],
      technologies: ["Hootsuite", "Buffer", "Canva", "Google Analytics"],
      
    },
    {
      id: 9,
      title: "Digital Marketing",
      icon: <Zap size={32} />,
      delay: 900,
      shortDesc: "We manage your brand's social media presence to increase engagement, build community, and generate leads.",
      features: ["SEO & SEM", "Social Media Advertising", "Email Marketing"],
      technologies: ["Google Ads", "Facebook Ads", "Mailchimp", "SEMrush"],
      
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
      title: "Client-Centric Approach",
      icon: <Award size={32} />,
      description:" We listen, we understand, and we deliver exactly what your business needs.",
      delay: 1200,
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-gray-800 py-16 px-4 pt-25 md:px-8">
      {/* Inject CSS */}
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* Why Choose Us Section */}
        <section>
          <h2 className="text-4xl font-bold mb-4 text-blue-900 drop-shadow-lg animate-wave text-center">Why Choose Us</h2>
          <p className="text-blue-700 text-center mb-12 max-w-2xl mx-auto">Discover what makes us the preferred choice for businesses worldwide</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.id}
                className={`
                  transform opacity-0 loading-card
                  ${isLoaded ? `opacity-100 animate-in` : ''}
                  bg-white/80 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden
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

        {/* Services Section */}
        <section>
          <h2 className="text-4xl font-bold mb-4 text-blue-900 drop-shadow-lg animate-wave text-center">Our Services</h2>
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
                  
                  {/* Header Section */}
                  <div className="flex justify-between items-start relative z-10 mb-4">
                    <div className="text-blue-600 transition-all duration-500 group-hover:text-white icon-spin">{service.icon}</div>
                    <ArrowUpRight className="text-gray-400 transition-all duration-500 arrow group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                  </div>
                  
                  {/* Title and Basic Description */}
                  <h3 className="text-xl font-semibold mb-3 transition-all duration-300 group-hover:text-white relative z-10 text-blue-900">{service.title}</h3>
                  
                  <p className="text-gray-700 text-sm transition-all duration-300 group-hover:text-blue-100 relative z-10 mb-4">
                    {service.shortDesc}
                  </p>

                  {/* See More Button */}
                  <div className="flex justify-center mt-4 relative z-20">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSeeMore(service);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 group-hover:bg-white group-hover:text-blue-700"
                    >
                      <Eye size={16} />
                      See More
                    </button>
                  </div>
                  
                  {/* Bottom border that expands on hover */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-300 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-20 relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-100">{selectedService.icon}</div>
                <h2 className="text-2xl font-bold">{selectedService.title}</h2>
              </div>
              
              <p className="text-blue-100 text-sm leading-relaxed">
                {selectedService.shortDesc}
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <CheckCircle size={20} className="mr-2 text-blue-600" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <Star size={16} className="mr-3 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Code size={20} className="mr-2 text-blue-600" />
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA */}
             

              {/* Additional Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">What's Included:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Free consultation and project planning</li>
                  <li>• Regular progress updates and communication</li>
                  <li>• Post-launch support and maintenance</li>
                  <li>• Source code and documentation delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

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