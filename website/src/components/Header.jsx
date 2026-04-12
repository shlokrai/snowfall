import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Moon, Sun, IndianRupee } from 'lucide-react';
import globalIcon from '../assets/global-icon.png';

const Header = ({ toggleSnowfall, isSnowingGlobally }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const location = useLocation();
  const navigate = useNavigate();

  const isGlobal = location.pathname.includes('/global');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
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
    <header className="absolute top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-[75rem] mx-auto hidden md:flex items-center justify-between pointer-events-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-brand-900 rounded-full px-4 py-2 shadow-sm transition-colors duration-300">

        {/* Left Side: Logo via Link */}
        <div className="flex-shrink-0">
          <Link to={isGlobal ? "/global" : "/"} onClick={toggleSnowfall} className="flex items-center space-x-2 text-2xl font-black tracking-tighter text-brand-900 dark:text-white group transition-colors hover:text-brand-600 pl-2">
            <svg
              className="w-10 h-10 transform group-hover:scale-110 transition-transform duration-300 text-brand-600 dark:text-brand-400 relative overflow-visible"
              viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" />
              <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2" className="fill-brand-50/50 dark:fill-brand-900/50" />
              
              <g clipPath="url(#snow-clip)">
                <circle cx="35" cy="-10" r="1.5" fill="currentColor" className={!isSnowingGlobally ? "animate-snow-1" : "opacity-0"} />
                <circle cx="55" cy="-15" r="2" fill="currentColor" className={!isSnowingGlobally ? "animate-snow-2" : "opacity-0"} />
                <circle cx="70" cy="-5" r="1.5" fill="currentColor" className={!isSnowingGlobally ? "animate-snow-3" : "opacity-0"} />
                <circle cx="45" cy="-20" r="1" fill="currentColor" className={!isSnowingGlobally ? "animate-snow-4" : "opacity-0"} />
                <circle cx="50" cy="-25" r="2" fill="currentColor" className={!isSnowingGlobally ? "animate-snow-1" : "opacity-0"} />
                <circle cx="30" cy="-12" r="1.5" fill="currentColor" className={!isSnowingGlobally ? "animate-snow-3" : "opacity-0"} />
                <circle cx="80" cy="-18" r="1" fill="currentColor" className={!isSnowingGlobally ? "animate-snow-2" : "opacity-0"} />
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

        {/* Middle: Text Navigation */}
        <nav className="flex space-x-1 lg:space-x-2 items-center">
          <Link to={isGlobal ? "/global" : "/"} className="text-gray-600 dark:text-gray-300 whitespace-nowrap hover:text-brand-600 dark:hover:text-white rounded-full px-5 py-2 text-sm font-semibold transition-all">Home</Link>
          <Link to={isGlobal ? "/global/about" : "/about"} className="text-gray-600 dark:text-gray-300 whitespace-nowrap hover:text-brand-600 dark:hover:text-white rounded-full px-5 py-2 text-sm font-semibold transition-all hidden sm:block">About</Link>
          <Link to={isGlobal ? "/global/services" : "/services"} className="text-gray-600 dark:text-gray-300 whitespace-nowrap hover:text-brand-600 dark:hover:text-white rounded-full px-5 py-2 text-sm font-semibold transition-all hidden sm:block">Services</Link>
          <Link to={isGlobal ? "/global/articles" : "/articles"} className="text-gray-600 dark:text-gray-300 whitespace-nowrap hover:text-brand-600 dark:hover:text-white rounded-full px-5 py-2 text-sm font-semibold transition-all hidden sm:block">Articles</Link>
          <Link to={isGlobal ? "/global/contact" : "/contact"} className="text-gray-600 dark:text-gray-300 whitespace-nowrap hover:text-brand-600 dark:hover:text-white rounded-full px-5 py-2 text-sm font-semibold transition-all hidden lg:block">Contact</Link>
        </nav>

        {/* Right Side: Theme Toggle & Actions */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          {/* Region Switcher */}
          <button
            onClick={toggleRegion}
            className="group relative p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-white transition-colors flex items-center justify-center hover:scale-110"
            aria-label="Toggle Regional Vertical"
          >
            {isGlobal ? (
              <IndianRupee size={18} className="stroke-[2.5]" />
            ) : (
              <svg
                className="w-[20px] h-[20px] group-hover:rotate-180 transition-transform duration-[800ms] ease-in-out"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Globe */}
                <circle cx="12" cy="12" r="5.5" />
                <path d="M12 6.5C10.5 6.5 9 8.5 9 12s1.5 5.5 3 5.5 3-2.5 3-5.5-1.5-5.5-3-5.5Z" />
                <path d="M6.5 12h11" />

                {/* Sync Arrows wrapping it */}
                <path d="M20.5 16A8.5 8.5 0 0 0 15 4V1" />
                <path d="M15 4h3" />

                <path d="M3.5 8A8.5 8.5 0 0 0 9 20v3" />
                <path d="M9 20H6" />
              </svg>
            )}
            
            {/* Custom Tooltip */}
            <span className="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-900 dark:bg-brand-950 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg pointer-events-none z-50">
              {isGlobal ? "Switch to Indian Vertical" : "Switch to Global Vertical"}
            </span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="group relative p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-white transition-colors flex items-center justify-center hover:scale-110"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}

            {/* Custom Tooltip */}
            <span className="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-900 dark:bg-brand-950 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg pointer-events-none z-50">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>          
          <Link to={isGlobal ? "/global/contact" : "/contact"} className="px-6 py-2.5 rounded-full bg-brand-900 dark:bg-brand-500 text-white font-semibold text-sm hover:scale-105 hover:bg-brand-600 dark:hover:bg-brand-400 hover:shadow-lg transition-all">
            Book Call
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
