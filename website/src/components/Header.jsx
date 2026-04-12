import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-4 bg-transparent border-b border-transparent">
      <div className="max-w-[70rem] mx-auto hidden md:flex items-center justify-between pointer-events-none">
        
        {/* Left Side: Logo via Link */}
        <div className="pointer-events-auto">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-black tracking-tighter text-brand-900 dark:text-white group transition-colors hover:text-brand-600">
            <svg
              className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-300 text-brand-600 dark:text-brand-400"
              viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" />
              <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2" className="fill-brand-50/50 dark:fill-brand-900/50" />
              <path d="M15 65 L50 25 L85 65" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="none" className="group-hover:-translate-y-1 transition-transform duration-300" />
              <path d="M30 65 L50 40 L70 65" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" className="group-hover:-translate-y-0.5 transition-transform duration-300" />
              <path d="M22 55 Q35 45 50 60 T78 50" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            <span>Snowfall <span className="text-brand-600 dark:text-brand-400">Advisory</span></span>
          </Link>
        </div>

        {/* Middle: Floating Pill Navigation */}
        <nav className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-brand-400 rounded-full px-2 py-1.5 flex space-x-1 shadow-sm transition-all hover:shadow-md">
          <Link to="/" className="text-brand-900/90 hover:text-brand-900 hover:bg-brand-50 rounded-full px-5 py-2 text-sm font-semibold transition-all">Home</Link>
          <a href="#growth" className="text-brand-900/90 hover:text-brand-900 hover:bg-brand-50 rounded-full px-5 py-2 text-sm font-semibold transition-all">Pillars</a>
          <a href="#network" className="text-brand-900/90 hover:text-brand-900 hover:bg-brand-50 rounded-full px-5 py-2 text-sm font-semibold transition-all">Network</a>
          <Link to="/contact" className="text-brand-900/90 hover:text-brand-900 hover:bg-brand-50 rounded-full px-5 py-2 text-sm font-semibold transition-all hidden lg:block">Contact</Link>
        </nav>

        {/* Right Side: Theme Toggle & Actions */}
        <div className="flex items-center space-x-3 pointer-events-auto">
          {/* Theme Switcher */}
          <button 
            onClick={toggleTheme} 
            className="p-2.5 rounded-full border border-brand-400 bg-white/80 backdrop-blur-md text-brand-900 hover:bg-brand-50 transition-colors shadow-sm flex items-center justify-center hover:scale-110"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
          </button>
          
          <Link to="/contact" className="px-6 py-2.5 rounded-full bg-brand-900 text-white font-bold text-sm hover:scale-105 hover:bg-brand-600 hover:shadow-lg transition-all shadow-sm">
            Book Call
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
