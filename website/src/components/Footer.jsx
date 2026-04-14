import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isGlobal = location.pathname.includes('/global');

  return (
    <footer className="bg-brand-900 dark:bg-brand-950 text-white py-8 md:py-16 border-t border-brand-800 transition-colors duration-500">
      <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 md:p-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group cursor-default">
               <svg
                  className="w-14 h-14 transform group-hover:scale-110 transition-transform duration-300 text-brand-400 relative overflow-visible"
                  viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" />
                  <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2" className="fill-brand-900/50" />

                  <g clipPath="url(#snow-clip-footer)">
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
                    <clipPath id="snow-clip-footer">
                      <circle cx="50" cy="50" r="38" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-4xl font-black tracking-tighter text-white">
                  Snowfall <span className="text-brand-400">Advisory</span>
                </span>
            </div>
            <p className="text-brand-200/80 text-base max-w-md font-light leading-relaxed">
              We handle your compliance, bookkeeping, and legalities while plugging you into our private network for funding and explosive B2B growth.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-brand-400 tracking-wider uppercase mb-6">Solutions</h3> 
            <ul className="space-y-4">
              <li><Link to={isGlobal ? "/global/services/compliance" : "/services/compliance"} className="text-brand-50 hover:text-brand-400 transition-colors font-medium">Compliance & Advisory</Link></li>
              <li><Link to={isGlobal ? "/global/services/growth" : "/services/growth"} className="text-brand-50 hover:text-brand-400 transition-colors font-medium">Growth & Funding</Link></li>
              <li><Link to={isGlobal ? "/global/services/network" : "/services/network"} className="text-brand-50 hover:text-brand-400 transition-colors font-medium">The Snowfall Network</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-brand-400 tracking-wider uppercase mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-brand-50 hover:text-brand-400 transition-colors font-medium">About Us</a></li>
              <li><Link to={isGlobal ? "/global/coming-soon" : "/coming-soon"} className="text-brand-50 hover:text-brand-400 transition-colors font-medium relative group/link"><span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-400 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"></span>Coming Soon</Link></li>
              <li><Link to={isGlobal ? "/global/contact" : "/contact"} className="text-brand-400 hover:text-brand-200 font-bold transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold text-brand-400 tracking-wider uppercase mb-6">Contact</h3>   
            <div className="flex flex-col space-y-4 text-brand-50 font-medium">
              <span className="text-base group-hover:text-brand-200 transition-colors">
                33 C.R. Avenue, 9th Floor, <br/>Suite No. 912<br/>
                <span className="text-sm text-brand-400/80 font-normal mt-1 block">Kolkata, West Bengal, India - 700012</span>
              </span>
              <a href="mailto:support@snowfalladvisory.com" className="hover:text-brand-400 transition-colors">support@snowfalladvisory.com</a>
              <a href="tel:+916291649174" className="hover:text-brand-400 transition-colors">+91 6291649174</a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-200/60 font-medium">
          <p>&copy; {new Date().getFullYear()} Snowfall Advisory Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
