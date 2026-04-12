import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ transitionState }) => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 2 + 1.5}s`,
      animationDelay: `${Math.random() * 1}s`,
      opacity: Math.random() * 0.6 + 0.4,
      size: `${Math.random() * 5 + 3}px`
    }));
    setSnowflakes(flakes);
  }, []);

  const isToGlobal = transitionState === 'to-global';

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-colors duration-[2500ms] ease-in-out ${isToGlobal ? 'bg-[#212a3e] text-[#f1f6f9]' : 'bg-[#def5e5] text-[#233F35]'}`}>
      
      {/* Background Snow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute rounded-full animate-snow-1"
            style={{
              backgroundColor: isToGlobal ? 'rgba(241, 246, 249, 0.8)' : 'rgba(142, 195, 176, 0.8)',
              left: flake.left,
              top: '-20px',
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

      {/* Centered Large Logo Transition */}
      <div className="relative z-10 flex flex-col items-center animate-[logoEnlarge_2.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        <svg
          className="w-48 h-48 relative overflow-visible mb-8"
          viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" className="transition-colors duration-[2500ms]" />
          <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2" className={`transition-colors duration-[2500ms] ${isToGlobal ? 'fill-[#394867]/50' : 'fill-[#8EC3B0]/50'}`} />
          
          <g clipPath="url(#snow-clip-loading)">
            <circle cx="35" cy="-10" r="1.5" fill="currentColor" className="opacity-0 animate-snow-1 transition-colors duration-[2500ms]" />
            <circle cx="55" cy="-15" r="2" fill="currentColor" className="opacity-0 animate-snow-2 transition-colors duration-[2500ms]" />
            <circle cx="70" cy="-5" r="1.5" fill="currentColor" className="opacity-0 animate-snow-3 transition-colors duration-[2500ms]" />
            <circle cx="45" cy="-20" r="1" fill="currentColor" className="opacity-0 animate-snow-4 transition-colors duration-[2500ms]" />
            <circle cx="50" cy="-25" r="2" fill="currentColor" className="opacity-0 animate-snow-1 transition-colors duration-[2500ms]" />
            <circle cx="30" cy="-12" r="1.5" fill="currentColor" className="opacity-0 animate-snow-3 transition-colors duration-[2500ms]" />
            <circle cx="80" cy="-18" r="1" fill="currentColor" className="opacity-0 animate-snow-2 transition-colors duration-[2500ms]" />
          </g>

          <path d="M15 65 L50 25 L85 65" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="none" className="transition-colors duration-[2500ms]" />
          <path d="M30 65 L50 40 L70 65" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" className="transition-colors duration-[2500ms]" />
          <path d="M22 55 Q35 45 50 60 T78 50" stroke="currentColor" strokeWidth="2" fill="none" className="transition-colors duration-[2500ms]" />
          
          <defs>
            <clipPath id="snow-clip-loading">
              <circle cx="50" cy="50" r="38" />
            </clipPath>
          </defs>
        </svg>
        <span className="text-5xl font-black tracking-tighter">
          Snowfall <span className={`transition-colors duration-[2500ms] ${isToGlobal ? 'text-[#9ba4b5]' : 'text-[#8EC3B0]'}`}>Advisory</span>
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;