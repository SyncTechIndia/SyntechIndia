import React, { useEffect, useRef } from "react";

const Hero = () => {
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

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800"></div>
      
      {/* Particles canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />

      {/* Navigation removed as requested */}

      {/* Curved line */}
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
          Creative Branding and Media<br />Production Agency
        </h1>
        <p className="text-lg text-center max-w-3xl mb-8">
          50+ clients across the globe are happy recipients of Synctech India impeccable branding services!
          <br />
          We provide services such as video, design, website, e-modules, content strategy, brand analysis and many more.
        </p>
        <button className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full">
          <span>Get in touch</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Action buttons */}
      <div className="absolute right-8 bottom-24 flex flex-col gap-4">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 15L12 8L19 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;