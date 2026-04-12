import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Generate random snowflakes for the background
    const flakes = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      animationDelay: `${Math.random() * 2}s`,
      opacity: Math.random() * 0.5 + 0.3,
      size: `${Math.random() * 4 + 2}px`
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-50 dark:bg-brand-950 transition-colors duration-300">
      
      {/* Background Snow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute rounded-full bg-brand-600 dark:bg-brand-400 animate-snow-1"
            style={{
              left: flake.left,
              top: '-10px',
              width: flake.size,
              height: flake.size,
              opacity: flake.opacity,
              animationDuration: flake.animationDuration,
              animationDelay: flake.animationDelay,
              animationIterationCount: 'infinite'
            }}
          />
        ))}
      </div>

      {/* Centered Logo */}
      <div className="relative z-10 flex flex-col items-center animate-fade-in-up">
        <svg
          className="w-32 h-32 text-brand-600 dark:text-brand-400 relative overflow-visible mb-6"
          viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" />
          <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2" className="fill-brand-50/50 dark:fill-brand-900/50" />
          
          <g clipPath="url(#snow-clip-loading)">
            <circle cx="35" cy="-10" r="1.5" fill="currentColor" className="opacity-0 animate-snow-1" />
            <circle cx="55" cy="-15" r="2" fill="currentColor" className="opacity-0 animate-snow-2" />
            <circle cx="70" cy="-5" r="1.5" fill="currentColor" className="opacity-0 animate-snow-3" />
            <circle cx="45" cy="-20" r="1" fill="currentColor" className="opacity-0 animate-snow-4" />
            <circle cx="50" cy="-25" r="2" fill="currentColor" className="opacity-0 animate-snow-1" />
            <circle cx="30" cy="-12" r="1.5" fill="currentColor" className="opacity-0 animate-snow-3" />
            <circle cx="80" cy="-18" r="1" fill="currentColor" className="opacity-0 animate-snow-2" />
          </g>

          <path d="M15 65 L50 25 L85 65" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="none" />
          <path d="M30 65 L50 40 L70 65" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
          <path d="M22 55 Q35 45 50 60 T78 50" stroke="currentColor" strokeWidth="2" fill="none" />
          
          <defs>
            <clipPath id="snow-clip-loading">
              <circle cx="50" cy="50" r="38" />
            </clipPath>
          </defs>
        </svg>
        <span className="text-3xl font-black tracking-tighter text-brand-900 dark:text-white">
          Snowfall <span className="text-brand-600 dark:text-brand-400">Advisory</span>
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;