import React from 'react';
import { Shield, TrendingUp, Users, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="bg-brand-50 dark:bg-brand-950 min-h-screen pt-32 pb-24 transition-colors duration-500 font-sans text-brand-950 dark:text-brand-50">
      
      <section className="px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto text-center mb-20 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-800 dark:text-brand-200">The Magic Weapons</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-brand-950 dark:text-white tracking-tighter mb-8 bg-clip-text">
          Our Core <span className="text-brand-600 dark:text-brand-400">Pillars</span>
        </h1>
        <p className="text-xl lg:text-2xl text-brand-800/80 dark:text-brand-200/80 max-w-3xl mx-auto font-light leading-relaxed">
          We don't just offer services; we provide an exclusive B2B growth ecosystem combining elite compliance, capital raising, and active network synergies.
        </p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto mb-20 space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        
        {/* Pillar 1: Advisory & Compliance */}
        <div className="bg-white dark:bg-brand-900 rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row gap-12 group hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-brand-200 dark:hover:border-brand-800">
           <div className="lg:w-1/3 flex items-start">
             <div className="w-24 h-24 bg-brand-50 dark:bg-brand-800 rounded-3xl flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-brand-50 transition-all duration-500">
                <Shield size={48} />
             </div>
           </div>
           <div className="lg:w-2/3">
             <h2 className="text-4xl font-black mb-4 text-brand-950 dark:text-white tracking-tighter group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">The Shield: Advisory & Compliance</h2>
             <p className="text-xl text-brand-800/80 dark:text-brand-200/80 font-light leading-relaxed mb-8">
               Bulletproof your business. Don't let ROC filings, unpredictable bookkeeping, and tax compliance steal hours from your revenue growth. Our elite network of CAs, CSs, CMAs, and Advocates keeps your foundation rock solid.
             </p>
             <ul className="grid sm:grid-cols-2 gap-4 text-brand-950 dark:text-brand-200 font-medium">
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Complex Tax Structuring</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Flawless Monthly Bookkeeping</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Strict ROC & Legal Compliance</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> 100% Audit-Ready Books Guarantee</li>
             </ul>
           </div>
        </div>

        {/* Pillar 2: Funding Raise */}
        <div className="bg-brand-950 dark:bg-brand-800 text-white rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row-reverse gap-12 group hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"></div>
           <div className="lg:w-1/3 flex items-start justify-end relative z-10">
             <div className="w-24 h-24 bg-brand-800 dark:bg-brand-900 border border-brand-600/30 rounded-3xl flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white transition-all duration-500">
                <TrendingUp size={48} />
             </div>
           </div>
           <div className="lg:w-2/3 relative z-10">
             <h2 className="text-4xl font-black mb-4 text-white tracking-tighter">The Fuel: Strategic Funding Raise</h2>
             <p className="text-xl text-brand-200/80 font-light leading-relaxed mb-8">
               Don't navigate the investment landscape blind. The exhausting hunt for capital requires precision. We prep your financials, build your data room, and connect you with the right capital required to scale exponentially.
             </p>
             <ul className="grid sm:grid-cols-2 gap-4 text-brand-50 font-medium">
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-400" size={20}/> Financial Modeling & Projections</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-400" size={20}/> Comprehensive Data Room Creation</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-400" size={20}/> Pitch Deck Financial Vetting</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-400" size={20}/> Direct Capital Connections</li>
             </ul>
           </div>
        </div>

        {/* Pillar 3: B2B Network */}
        <div className="bg-brand-200 dark:bg-brand-900 rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row gap-12 group hover:shadow-2xl transition-all duration-500">
           <div className="lg:w-1/3 flex items-start">
             <div className="w-24 h-24 bg-white dark:bg-brand-800 shadow-sm rounded-3xl flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-brand-950 group-hover:text-white transition-all duration-500">
                <Users size={48} />
             </div>
           </div>
           <div className="lg:w-2/3">
             <h2 className="text-4xl font-black mb-4 text-brand-950 dark:text-white tracking-tighter">The Catalyst: Snowfall B2B Network</h2>
             <p className="text-xl text-brand-800 dark:text-brand-200/80 font-light leading-relaxed mb-8">
               Grow with our clients. Gain exclusive access to our inner circle of partnered businesses. We actively facilitate synergistic partnerships to help your business unlock massive new native revenue streams.
             </p>
             <ul className="grid sm:grid-cols-2 gap-4 text-brand-950 dark:text-brand-200 font-medium tracking-tight">
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Highly Vetted Member Base</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Synergistic Strategic Partnerships</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Closed-Door Networking Events</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Exclusive Founder Access</li>
             </ul>
           </div>
        </div>
      </section>

      {/* CTA section inside Services */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto text-center py-12">
        <h2 className="text-3xl lg:text-4xl font-black text-brand-950 dark:text-white tracking-tight mb-8">
          Ready to equip your business with the right weapons?
        </h2>
        <Link to="/contact" className="inline-flex items-center justify-center space-x-3 px-8 py-5 rounded-full text-lg font-bold text-white bg-brand-950 dark:bg-brand-600 hover:bg-brand-600 dark:hover:bg-brand-400 dark:hover:text-brand-950 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
          <span>Apply for a Strategic Growth Session</span>
          <ArrowUpRight size={20} />
        </Link>
      </section>

    </div>
  );
};

export default Services;
