import React, { useEffect, useState } from 'react';

const currencies = ['$', '€', '£', '₹', '¥', '₽', '₩'];

const LoadingScreen = ({ transitionState }) => {
  const [fallingItems, setFallingItems] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      symbol: currencies[Math.floor(Math.random() * currencies.length)],
      left: `${(Math.random() * 100).toFixed(2)}%`,
      animationDuration: `${Math.random() * 4 + 3.5}s`,
      animationDelay: `${Math.random() * 2}s`,
      opacity: (Math.random() * 0.15 + 0.05).toFixed(2),
      size: `${(Math.random() * 1.5 + 1).toFixed(2)}rem`,
      blur: Math.random() > 0.5 ? 'blur(2px)' : 'none'
    }));
    setFallingItems(items);
  }, []);

  const isToGlobal = transitionState === 'to-global';

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-colors duration-[2500ms] ease-in-out ${isToGlobal ? 'bg-[#212a3e] text-[#f1f6f9]' : 'bg-[#def5e5] text-[#233F35]'}`}>
      
      {/* Background Falling Currencies */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fallingItems.map((item) => (
          <div
            key={item.id}
            className="absolute animate-currency-fall font-light flex items-center justify-center select-none"
            style={{
              color: isToGlobal ? 'rgba(241, 246, 249, 0.8)' : 'rgba(142, 195, 176, 0.8)',
              left: item.left,
              top: '-10vh',
              fontSize: item.size,
              opacity: item.opacity,
              filter: item.blur,
              animationDuration: item.animationDuration,
              animationDelay: item.animationDelay,
              animationIterationCount: 'infinite'
            }}
          >
            {item.symbol}
          </div>
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

          <path d="M15 65 L50 25 L85 65" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="none" className="transition-colors duration-[2500ms]" />
          <path d="M30 65 L50 40 L70 65" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" className="transition-colors duration-[2500ms]" />
          <path d="M22 55 Q35 45 50 60 T78 50" stroke="currentColor" strokeWidth="2" fill="none" className="transition-colors duration-[2500ms]" />
        </svg>
        <span className="text-5xl font-black tracking-tighter">
          Snowfall <span className={`transition-colors duration-[2500ms] ${isToGlobal ? 'text-[#9ba4b5]' : 'text-[#8EC3B0]'}`}>Advisory</span>
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;