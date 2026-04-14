import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ComingSoonPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const isGlobal = location.pathname.includes('/global');

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-brand-950">
      
      <div 
        className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] bg-cover bg-center transition-transform duration-200 ease-out"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`
        }}
      >
        <div className="absolute inset-0 bg-brand-950/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center h-full">
        <h1 
          className="text-7xl md:text-9xl font-black text-white tracking-widest uppercase mb-6 drop-shadow-2xl opacity-90 transition-transform duration-200 ease-out"
          style={{ transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)` }}
        >
          Coming Soon
        </h1>
        <p 
          className="text-xl md:text-3xl text-brand-100 font-light tracking-wide max-w-2xl mx-auto drop-shadow-lg transition-transform duration-200 ease-out delay-75"
          style={{ transform: `translate(${mousePos.x * 18}px, ${mousePos.y * 18}px)` }}
        >
          Something extraordinary is gathering on the horizon.
        </p>
        
        <div className="mt-16 transition-transform duration-200 ease-out delay-100"
             style={{ transform: `translate(${mousePos.x * 6}px, ${mousePos.y * 6}px)` }}>
          <Link to={isGlobal ? "/global" : "/"} className="inline-block border border-white/40 text-white px-8 py-3 rounded-full hover:bg-white hover:text-brand-950 transition-all text-sm font-semibold tracking-widest uppercase backdrop-blur-sm shadow-xl">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
