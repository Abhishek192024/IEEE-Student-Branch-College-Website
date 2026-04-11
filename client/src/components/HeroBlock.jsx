import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  const words = ["Innovation", "Research", "Collaboration", "Excellence"];

  // 1. Typing Effect Logic
  useEffect(() => {
    setIsVisible(true);
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      const currentWord = words[wordIndex];
      setDisplayText(currentWord.substring(0, charIndex));
      charIndex++;
      if (charIndex > currentWord.length + 5) {
        charIndex = 0;
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, 150);
    return () => clearInterval(typeInterval);
  }, [wordIndex]);

  // 2. Interactive Network Nodes (Canvas Logic with BOLD strings, NO Mouse Interaction)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.2; // Smooth speed
        this.vy = (Math.random() - 0.5) * 1.2;
        this.radius = 3.5; // Bold dots
      }

      update() {
        // Simple continuous movement
        this.x += this.vx;
        this.y += this.vy;

        // Screen borders se bounce
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.8)"; // Bright Blue dot
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 12), 150); 
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Connection Strings
          if (distance < 180) { 
            // Bold connection lines
            ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / 180})`; 
            ctx.lineWidth = 1.5; 
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const researchFields = [
    { name: "🤖 Artificial Intelligence", link: "https://spectrum.ieee.org/artificial-intelligence" },
    { name: "⚛️ Quantum Computing", link: "https://spectrum.ieee.org/quantum-computing" },
    { name: "🛡️ Cyber Security", link: "https://spectrum.ieee.org/cybersecurity" },
    { name: "🦾 Robotics & Automation", link: "https://spectrum.ieee.org/robotics" },
    { name: "🌐 Internet of Things", link: "https://iot.ieee.org/" },
    { name: "🚀 Aerospace Engineering", link: "https://spectrum.ieee.org/aerospace" },
    { name: "⚡ Renewable Energy", link: "https://spectrum.ieee.org/energy" },
    { name: "📡 5G & 6G Networks", link: "https://spectrum.ieee.org/telecom" },
  ];

  return (
    <div className="relative min-h-[92vh] flex flex-col items-center justify-between overflow-hidden bg-white dark:bg-[#020617] text-gray-900 dark:text-white transition-colors duration-500 pb-8">
      
      {/* 1. Canvas for Network Background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-70 dark:opacity-90" />

      {/* 2. Scrolling Animation Style */}
      <style>
        {`
          @keyframes infinite-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-infinite-scroll { animation: infinite-scroll 35s linear infinite; display: flex; width: max-content; }
          .animate-infinite-scroll:hover { animation-play-state: paused; }
        `}
      </style>

      {/* 3. Main Hero Content (Static position, no parallax) */}
      <div className={`relative z-10 text-center px-6 max-w-6xl mx-auto flex-grow flex flex-col justify-center mt-12 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        
        {/* Welcome Section */}
        <h2 className="mb-4 text-blue-700 dark:text-blue-400 text-xl md:text-3xl font-extrabold tracking-widest uppercase shadow-black drop-shadow-md">
          Welcome to the IEEE VGU Student Branch
        </h2>

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 leading-tight drop-shadow-xl">
          IEEE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">VGU</span>
        </h1>

        <div className="h-12 md:h-16 mb-8">
          <p className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
            Driven by <span className="text-orange-600 dark:text-orange-400">{displayText}</span>
            <span className="animate-pulse ml-1 text-blue-600 dark:text-blue-400">|</span>
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 font-medium bg-white/30 dark:bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/20 dark:border-white/10">
          Advancing Technology for Humanity. We are a community of innovators 
          at Vivekananda Global University.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => navigate('/events')}
            className="px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-95"
          >
            Explore Events
          </button>
          
          {/* 🔥 YAHAN UPDATE KIYA HAI: Direct official IEEE link laga diya */}
          <button
            onClick={() => window.open('https://www.ieee.org/membership/join/index.html', '_blank')}
            className="px-12 py-4 border-2 border-gray-400 dark:border-gray-600 bg-white/50 dark:bg-transparent text-gray-800 dark:text-white font-bold rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all active:scale-95 backdrop-blur-md"
          >
            Join IEEE
          </button>
        </div>
      </div>

      {/* 4. Infinite Scrolling Research Row */}
      <div className="relative z-20 w-full mb-6 mt-10">
        <div className="bg-blue-100/80 dark:bg-[#060D20]/80 backdrop-blur-md border-y border-blue-300 dark:border-blue-900/50 py-4 shadow-lg shadow-blue-500/10">
          <div className="animate-infinite-scroll flex items-center gap-12 px-6 cursor-pointer">
            {[...researchFields, ...researchFields].map((field, index) => (
              <div 
                key={index}
                onClick={() => window.open(field.link, "_blank")}
                className="flex items-center gap-3 whitespace-nowrap text-blue-900 dark:text-blue-200 font-bold cursor-pointer hover:text-orange-600 dark:hover:text-orange-400 transition-all text-base md:text-lg group"
              >
                <span className="group-hover:scale-110 transition-transform">{field.name}</span>
                <span className="w-2 h-2 rounded-full bg-blue-500/50"></span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}