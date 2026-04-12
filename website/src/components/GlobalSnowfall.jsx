import React, { useEffect, useState } from 'react';

const GlobalSnowfall = () => {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    // Generate 40 subtle white/blue snow particles scattered
    const items = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${(Math.random() * 100).toFixed(2)}%`,
      animationDuration: `${Math.random() * 5 + 4}s`, // Between 4s and 9s
      animationDelay: `${Math.random() * 4}s`,
      size: `${Math.random() * 4 + 2}px`, // tiny to small pixels
      opacity: (Math.random() * 0.4 + 0.2).toFixed(2)
    }));
    setFlakes(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-brand-400 dark:bg-white animate-global-snow-fall"
          style={{
            left: flake.left,
            top: '-5vh',
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            boxShadow: '0 0 4px rgba(255,255,255,0.4)',
          }}
        />
      ))}
    </div>
  );
};

export default GlobalSnowfall;