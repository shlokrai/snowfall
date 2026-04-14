import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Moon, Sun, IndianRupee, Menu, X } from 'lucide-react';
import globalIcon from '../assets/global-icon.png';

const Header = ({ toggleSnowfall, isSnowingGlobally }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isGlobal = location.pathname.includes('/global');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 md:py-6 px-4 transition-all duration-500 bg-transparent ${isScrolled ? (isHovered ? "opacity-100 backdrop-blur-sm" : "opacity-30") : "opacity-100"} pointer-events-none`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[70rem] mx-auto flex items-center justify-between pointer-events-none">
        
        {/* Left Side: Logo via Link */}
        <div className="pointer-events-auto">
          <Link to={isGlobal ? "/global" : "/"} onClick={toggleSnowfall} className="flex items-center space-x-2 md:space-x-3 text-2xl md:text-3xl font-black tracking-tighter text-brand-900 dark:text-white group transition-colors hover:text-brand-600">
            <svg
              className="w-10 h-10 md:w-14 md:h-14 transform group-hover:scale-110 transition-transform duration-300 text-brand-600 dark:text-brand-400 relative overflow-visible"
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

        {/* Middle: Floating Pill Navigation (Desktop Only) */}
        <nav className="hidden md:flex pointer-events-auto bg-white/80 backdrop-blur-xl border border-brand-400 rounded-full px-3 py-2 space-x-2 shadow-sm transition-all hover:shadow-md">
          <Link to={isGlobal ? "/global" : "/"} className="text-brand-900/90 whitespace-nowrap hover:text-brand-900 hover:bg-brand-50 rounded-full px-5 py-2.5 text-base font-semibold transition-all">Home</Link>
          <Link to={isGlobal ? "/global/about" : "/about"} className="text-brand-900/90 whitespace-nowrap hover:text-brand-900 hover:bg-brand-50 rounded-full px-5 py-2.5 text-base font-semibold transition-all">About</Link>
          <Link to={isGlobal ? "/global/services" : "/services"} className="text-brand-900/90 whitespace-nowrap hover:text-brand-900 hover:bg-brand-50 rounded-full px-5 py-2.5 text-base font-semibold transition-all">Services</Link>
          <Link to={isGlobal ? "/global/articles" : "/articles"} className="text-brand-900/90 whitespace-nowrap hover:text-brand-900 hover:bg-brand-50 rounded-full px-5 py-2.5 text-base font-semibold transition-all">Articles</Link>
          <Link to={isGlobal ? "/global/contact" : "/contact"} className="text-brand-900/90 whitespace-nowrap hover:text-brand-900 hover:bg-brand-50 rounded-full px-5 py-2.5 text-base font-semibold transition-all">Contact</Link>
        </nav>

        {/* Right Side: Theme Toggle & Actions (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-4 pointer-events-auto">
          {/* Region Switcher */}
          <button
            onClick={toggleRegion}
            className="group relative p-3 rounded-full border border-brand-400 bg-white/80 backdrop-blur-md text-brand-900 hover:bg-brand-50 transition-colors shadow-sm flex items-center justify-center hover:scale-110"
            aria-label="Toggle Regional Vertical"
          >
            {isGlobal ? (
              <IndianRupee size={20} className="stroke-[2.5]" />
            ) : (
              <svg
                className="w-[22px] h-[22px] group-hover:rotate-180 transition-transform duration-[800ms] ease-in-out"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5.5" />
                <path d="M12 6.5C10.5 6.5 9 8.5 9 12s1.5 5.5 3 5.5 3-2.5 3-5.5-1.5-5.5-3-5.5Z" />
                <path d="M6.5 12h11" />
                <path d="M20.5 16A8.5 8.5 0 0 0 15 4V1" />
                <path d="M15 4h3" />
                <path d="M3.5 8A8.5 8.5 0 0 0 9 20v3" />
                <path d="M9 20H6" />
              </svg>
            )}
            <span className="absolute top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-900 dark:bg-brand-950 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg pointer-events-none z-50">
              {isGlobal ? "Switch to Indian Vertical" : "Switch to Global Vertical"}
            </span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="group relative p-3 rounded-full border border-brand-400 bg-white/80 backdrop-blur-md text-brand-900 dark:text-brand-50 hover:bg-brand-50 dark:hover:bg-brand-800 transition-colors shadow-sm flex items-center justify-center hover:scale-110 overflow-hidden"
            aria-label="Toggle dark mode"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Sun 
                size={20} strokeWidth={2.5} 
                className={`absolute transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isDarkMode 
                    ? 'rotate-0 scale-100 opacity-100 text-yellow-400' 
                    : '-rotate-90 scale-50 opacity-0 text-transparent'
                }`} 
              />
              <Moon 
                size={20} strokeWidth={2.5} 
                className={`absolute transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isDarkMode 
                    ? 'rotate-90 scale-50 opacity-0 text-transparent' 
                    : 'rotate-0 scale-100 opacity-100'
                }`} 
              />
            </div>
            <span className="absolute top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-900 dark:bg-brand-950 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg pointer-events-none z-50">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
          
          <Link to={isGlobal ? "/global/contact" : "/contact"} className="px-8 py-3 rounded-full bg-brand-900 text-white font-bold text-base hover:scale-105 hover:bg-brand-600 hover:shadow-lg transition-all shadow-sm">
            Book Call
          </Link>
        </div>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <div className="md:hidden pointer-events-auto flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-white/80 dark:bg-brand-900/80 backdrop-blur-md border border-brand-400 text-brand-900 dark:text-brand-50 shadow-sm"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white/95 dark:bg-brand-900/95 backdrop-blur-xl border border-brand-400 rounded-2xl p-4 shadow-xl pointer-events-auto flex flex-col gap-4">
          <nav className="flex flex-col gap-2">
            <Link onClick={() => setIsMobileMenuOpen(false)} to={isGlobal ? "/global" : "/"} className="text-brand-900 dark:text-brand-50 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-xl px-4 py-3 text-lg font-semibold transition-all">Home</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to={isGlobal ? "/global/about" : "/about"} className="text-brand-900 dark:text-brand-50 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-xl px-4 py-3 text-lg font-semibold transition-all">About</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to={isGlobal ? "/global/services" : "/services"} className="text-brand-900 dark:text-brand-50 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-xl px-4 py-3 text-lg font-semibold transition-all">Services</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to={isGlobal ? "/global/articles" : "/articles"} className="text-brand-900 dark:text-brand-50 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-xl px-4 py-3 text-lg font-semibold transition-all">Articles</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to={isGlobal ? "/global/contact" : "/contact"} className="text-brand-900 dark:text-brand-50 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-xl px-4 py-3 text-lg font-semibold transition-all">Contact</Link>
          </nav>
          <div className="flex items-center justify-between pt-4 border-t border-brand-100 dark:border-brand-800 gap-4">
            <div className="flex gap-2">
              <button onClick={toggleRegion} className="p-3 rounded-xl bg-brand-50 dark:bg-brand-800 text-brand-900 dark:text-white border border-brand-200 dark:border-brand-700">
                {isGlobal ? <IndianRupee size={20} className="stroke-[2.5]" /> : <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5.5" /><path d="M12 6.5C10.5 6.5 9 8.5 9 12s1.5 5.5 3 5.5 3-2.5 3-5.5-1.5-5.5-3-5.5Z" /><path d="M6.5 12h11" /><path d="M20.5 16A8.5 8.5 0 0 0 15 4V1" /><path d="M15 4h3" /><path d="M3.5 8A8.5 8.5 0 0 0 9 20v3" /><path d="M9 20H6" /></svg>}
              </button>
              <button onClick={toggleTheme} className="p-3 rounded-xl bg-brand-50 dark:bg-brand-800 text-brand-900 dark:text-white border border-brand-200 dark:border-brand-700">
                {isDarkMode ? <Sun size={20} strokeWidth={2.5} className="text-yellow-400" /> : <Moon size={20} strokeWidth={2.5} />}
              </button>
            </div>
            <Link onClick={() => setIsMobileMenuOpen(false)} to={isGlobal ? "/global/contact" : "/contact"} className="flex-1 text-center py-3 rounded-xl bg-brand-900 text-white font-bold text-base hover:bg-brand-600 transition-all shadow-md mt-0">
              Book Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
