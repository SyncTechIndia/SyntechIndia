import { Star } from "lucide-react"; 
import { useState, useEffect, useRef } from "react";

export default function StatsDashboard() {
  const [rating] = useState(4.8);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    satisfaction: 0,
    clients: 0,
    industries: 0,
    years: 0
  });
  
  const dashboardRef = useRef(null);
  
  // Animation targets
  const targetCounts = {
    satisfaction: 97,
    clients: 100,
    industries: 10,
    years: 7
  };
  
  // Handle scroll observation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    
    if (dashboardRef.current) {
      observer.observe(dashboardRef.current);
    }
    
    return () => {
      if (dashboardRef.current) {
        observer.unobserve(dashboardRef.current);
      }
    };
  }, []);
  
  // Handle counting animation
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000; // 2 seconds for the animation
    const framesPerSecond = 60;
    const totalFrames = duration / 1000 * framesPerSecond;
    
    let frame = 0;
    
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      if (progress >= 1) {
        setCounts({
          satisfaction: targetCounts.satisfaction,
          clients: targetCounts.clients,
          industries: targetCounts.industries,
          years: targetCounts.years
        });
        clearInterval(interval);
        return;
      }
      
      // Easing function for smoother animation (ease-out)
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      
      setCounts({
        satisfaction: Math.floor(easeOutProgress * targetCounts.satisfaction),
        clients: Math.floor(easeOutProgress * targetCounts.clients),
        industries: Math.floor(easeOutProgress * targetCounts.industries),
        years: Math.floor(easeOutProgress * targetCounts.years)
      });
    }, 1000 / framesPerSecond);
    
    return () => clearInterval(interval);
  }, [isVisible]);
  
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} fill="#0078D7" color="#0078D7" size={24} />);
      } else if (i === fullStars && rating % 1 > 0) {
        // This would be a half star, but since we're using Lucide icons, we'll just use a full star
        stars.push(<Star key={i} fill="#0078D7" color="#0078D7" size={24} />);
      } else {
        stars.push(<Star key={i} fill="none" color="#0078D7" size={24} />);
      }
    }
    return stars;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-8">
      <div className="max-w-5xl mx-auto" ref={dashboardRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Rating Card */}
          <div className={`bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl font-bold text-gray-800">{rating}/5</h1>
            <div className="flex mt-2 mb-2">
              {renderStars()}
            </div>
            <p className="text-gray-600 font-medium">Customer Rating</p>
          </div>
          
          {/* Stats Grid */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {/* Client Satisfaction */}
            <div className={`bg-gradient-to-br from-blue-800 to-blue-500 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-white transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-5xl md:text-6xl font-bold">
                {counts.satisfaction}%
              </h2>
              <p className="text-sm md:text-base mt-2 font-medium">Client Satisfaction</p>
            </div>
            
            {/* Happy Clients */}
            <div className={`bg-gradient-to-br from-blue-700 to-blue-400 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-white transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-5xl md:text-6xl font-bold">
                {counts.clients}+
              </h2>
              <p className="text-sm md:text-base mt-2 font-medium">Happy Clients</p>
            </div>
            
            {/* Industries Served */}
            <div className={`bg-gradient-to-br from-blue-600 to-blue-300 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-white transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-5xl md:text-6xl font-bold">
                {counts.industries}+
              </h2>
              <p className="text-sm md:text-base mt-2 font-medium">Industries Served</p>
            </div>
            
            {/* Years Experience */}
            <div className={`bg-gradient-to-br from-blue-500 to-blue-200 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-white transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-5xl md:text-6xl font-bold">
                {counts.years}+
              </h2>
              <p className="text-sm md:text-base mt-2 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}