import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-900 dark:bg-brand-950 text-white py-16 border-t border-brand-800 transition-colors duration-500">
      <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-3xl font-black tracking-tighter text-white">
              Snowfall <span className="text-brand-400">Advisory</span>
            </span>
            <p className="mt-6 text-brand-200/80 text-base max-w-md font-light leading-relaxed">
              We handle your compliance, bookkeeping, and legalities while plugging you into our private network for funding and explosive B2B growth.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-brand-400 tracking-wider uppercase mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#compliance" className="text-brand-50 hover:text-brand-400 transition-colors font-medium">Compliance & Advisory</a></li>
              <li><a href="#growth" className="text-brand-50 hover:text-brand-400 transition-colors font-medium">Growth & Funding</a></li>
              <li><a href="#network" className="text-brand-50 hover:text-brand-400 transition-colors font-medium">The Snowfall Network</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-brand-400 tracking-wider uppercase mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-brand-50 hover:text-brand-400 transition-colors font-medium">About Us</a></li>
              <li><Link to="/contact" className="text-brand-400 hover:text-brand-200 font-bold transition-colors">Contact Us</Link></li>
            </ul>
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