import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Moon, Sun, IndianRupee } from 'lucide-react';
import globalIcon from '../assets/global-icon.png';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isGlobal = location.pathname.includes('/global');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  const toggleRegion = () => {
    if (isGlobal) {
      navigate('/');
      window.scrollTo(0, 0);
    } else {
      navigate('/global');
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 px-4 bg-transparent border-b border-transparent">
      <div className="max-w-[70rem] mx-auto hidden md:flex items-center justify-between pointer-events-none">
        
        {/* Left Side: Logo via Link */}
        <div className="pointer-events-auto">
          <Link to={isGlobal ? "/global" : "/"} className="flex items-center space-x-3 text-3xl font-black tracking-tighter text-brand-900 dark:text-white group transition-colors hover:text-brand-600">
            <svg
              className="w-14 h-14 transform group-hover:scale-110 transition-transform duration-300 text-brand-600 dark:text-brand-400 relative overflow-visible"
              viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" />
              <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2" className="fill-brand-50/50 dark:fill-brand-900/50" />
              
              <g clipPath="url(#snow-clip)">
                <circle cx="35" cy="-10" r="1.5" fill="currentColor" className="opacity-0 group-hover:animate-snow-1" />
                <circle cx="55" cy="-15" r="2" fill="currentColor" className="opacity-0 group-hover:animate-snow-2" />
                <circle cx="70" cy="-5" r="1.5" fill="currentColor" className="opacity-0 group-hover:animate-snow-3" />
                <circle cx="45" cy="-20" r="1" fill="currentColor" className="opacity-0 group-hover:animate-snow-4" />
                <circle cx="50" cy="-25" r="2" fill="currentColor" className="opacity-0 group-hover:animate-snow-1" />
                <circle cx="30" cy="-12" r="1.5" fill="currentColor" className="opacity-0 group-hover:animate-snow-3" />
                <circle cx="80" cy="-18" r="1" fill="currentColor" className="opacity-0 group-hover:animate-snow-2" />
              </g>

              <path d="M15 65 L50 25 L85 65" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="none" className="group-hover:-translate-y-1 transition-transform duration-300" />
              <path d="M30 65 L50 40 L70 65" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" className="group-hover:-translate-y-0.5 transition-transform duration-300" />
              <path d="M22 55 Q35 45 50 60 T78 50" stroke="currentColor" strokeWidth="2" fill="none" />
              
              <defs>
                <clipPath id="snow-clip">
                  <circle cx="50" cy="50" r="38" />
                </clipPath>
              </defs>
            </svg>
            <span>Snowfall <span className="text-brand-600 dark:text-brand-400">Advisory</span></span>
          </Link>
        </div>

        {/* Middle: Floating Pill Navigation */}
        <nav className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-brand-400 rounded-full px-3 py-2 flex space-x-2 shadow-sm transition-all hover:shadow-md overflow-x-auto max-w-full no-scrollbar">
          <Link to={isGlobal ? "/global" : "/"} className="text-brand-900/90 whitespace-nowrap hover:text-brand-900 hover:bg-brand-50 rounded-full px-5 py-2.5 text-base font-semibold transition-all">Home</Link>
          <Link to={isGlobal ? "/global/about" : "/about"} className="text-brand-900/90 whitespace-nowrap hover:text-brand-900 hover:bg-brand-50 rounded-full px-5 py-2.5 text-base font-semibold transition-all hidden sm:block">About</Link>
          <Link to={isGlobal ? "/global/services" : "/services"} className="text-brand-900/90 whitespace-nowrap hover:text-brand-900 hover:bg-brand-50 rounded-full px-5 py-2.5 text-base font-semibold transition-all hidden sm:block">Services</Link>
          <Link to={isGlobal ? "/global/articles" : "/articles"} className="text-brand-900/90 whitespace-nowrap hover:text-brand-900 hover:bg-brand-50 rounded-full px-5 py-2.5 text-base font-semibold transition-all hidden sm:block">Articles</Link>
          <Link to={isGlobal ? "/global/contact" : "/contact"} className="text-brand-900/90 whitespace-nowrap hover:text-brand-900 hover:bg-brand-50 rounded-full px-5 py-2.5 text-base font-semibold transition-all hidden lg:block">Contact</Link>
        </nav>

        {/* Right Side: Theme Toggle & Actions */}
        <div className="flex items-center space-x-4 pointer-events-auto">
          {/* Region Switcher */}
          <button 
            onClick={toggleRegion} 
            title={isGlobal ? "Switch to Indian Vertical" : "Switch to Global Vertical"}
            className="p-3 rounded-full border border-brand-400 bg-white/80 backdrop-blur-md text-brand-900 hover:bg-brand-50 transition-colors shadow-sm flex items-center justify-center hover:scale-110"
            aria-label="Toggle Regional Vertical"
          >
            {isGlobal ? (
              <IndianRupee size={20} className="stroke-[2.5]" />
            ) : (
              <div 
                className="w-[20px] h-[20px] bg-current"
                style={{
                  WebkitMask: `url(${globalIcon}) center/contain no-repeat`,
                  mask: `url(${globalIcon}) center/contain no-repeat`
                }}
                aria-label="Global"
              />
            )}
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full border border-brand-400 bg-white/80 backdrop-blur-md text-brand-900 hover:bg-brand-50 transition-colors shadow-sm flex items-center justify-center hover:scale-110"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
          </button>

          <Link to={isGlobal ? "/global/contact" : "/contact"} className="px-8 py-3 rounded-full bg-brand-900 text-white font-bold text-base hover:scale-105 hover:bg-brand-600 hover:shadow-lg transition-all shadow-sm">
            Book Call
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
