import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


const Hero = () => {
    const navigate = useNavigate();

  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };


    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      mouseRef.current = {
        x: null,
        y: null
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.directionX = (Math.random() - 0.5) * 0.5;
        this.directionY = (Math.random() - 0.5) * 0.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }

      update() {
        // Boundary check
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.directionY = -this.directionY;
        }

        // Move particles
        this.x += this.directionX;
        this.y += this.directionY;

        // Draw particle
        this.draw();
      }
    }

    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(window.innerWidth / 10, 100);
      particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
      
      particlesRef.current = particles;
    };

    // Draw connecting lines
    const connect = () => {
      const mouse = mouseRef.current;
      const maxDistance = 120;
      const opacityIncrement = 1;

      // Connect particles to each other
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Calculate line opacity based on distance
            const opacity = opacityIncrement * (1 - distance / maxDistance);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Connect particles to mouse
      if (mouse.x !== null && mouse.y !== null) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance * 2) {
            const opacity = opacityIncrement * (1 - distance / (maxDistance * 2));
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

    const navigateContact = () => {
    navigate("/contact"); // navigates to About page
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800"></div>
      
      {/* Particles canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />
      <div className="absolute top-1/3 w-full">
        <svg className="w-full" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,100 C300,30 900,170 1200,100"
            stroke="rgba(255,255,255,0.2)"
            fill="none"
            strokeWidth="1"
          />
          <circle cx="600" cy="100" r="8" fill="rgba(255,255,255,0.5)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white pb-24">
        <h1 className="text-6xl font-bold text-center mb-4">
          Creative Branding and Media
Production Agency
        </h1>
        <p className="text-lg text-center max-w-3xl mb-8">
          50+ clients across the globe are happy recipients of Synctech India impeccable branding services!
          <br />
          We provide services such as video, design, website, e-modules, content strategy, brand analysis and many more.
        </p>
        <button className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full cursor-pointer" onClick={navigateContact}>
          <span>Get in touch</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;