import React from 'react';
import { ArrowUpRight, CheckCircle2, LayoutDashboard, Shuffle, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="bg-brand-50 dark:bg-brand-950 min-h-screen pt-32 pb-24 transition-colors duration-500 font-sans text-brand-950 dark:text-brand-50">
      
      <section className="px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto text-center mb-20 animate-fade-in-up">
        <h1 className="text-5xl lg:text-7xl font-black text-brand-950 dark:text-white tracking-tighter mb-8 bg-clip-text">
          What We <span className="text-brand-600 dark:text-brand-400">Do</span>
        </h1>
        <p className="text-xl lg:text-2xl text-brand-800/80 dark:text-brand-200/80 max-w-3xl mx-auto font-light leading-relaxed">
          We offer a comprehensive suite of services designed to tackle your biggest challenges. We analyze, strategize, and execute with precision.
        </p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto mb-20 space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        
        {/* Service 1 */}
        <div className="bg-white dark:bg-brand-900 rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row gap-12 group hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-brand-200 dark:hover:border-brand-800">
           <div className="lg:w-1/3 flex items-start">
             <div className="w-24 h-24 bg-brand-50 dark:bg-brand-800 rounded-3xl flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-brand-50 transition-all duration-500">
                <Presentation size={48} />
             </div>
           </div>
           <div className="lg:w-2/3">
             <h2 className="text-4xl font-black mb-6 text-brand-950 dark:text-white tracking-tighter group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">Strategic Consulting</h2>
             <p className="text-xl text-brand-800/80 dark:text-brand-200/80 font-light leading-relaxed mb-8">
               Tailored business strategies that align with your long-term goals. We analyze your market standing, identify bottlenecks, and build actionable roadmaps that yield quantifiable results.
             </p>
             <ul className="grid sm:grid-cols-2 gap-4 text-brand-950 dark:text-brand-200 font-medium">
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Goal Alignment Workshops</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Market Competitor Analysis</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Operational Auditing</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Leadership Training</li>
             </ul>
           </div>
        </div>

        {/* Service 2 */}
        <div className="bg-brand-950 dark:bg-brand-800 text-white rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row-reverse gap-12 group hover:shadow-2xl transition-all duration-500">
           <div className="lg:w-1/3 flex items-start justify-end">
             <div className="w-24 h-24 bg-brand-800 dark:bg-brand-900 border border-brand-600/30 rounded-3xl flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500">
                <Shuffle size={48} />
             </div>
           </div>
           <div className="lg:w-2/3">
             <h2 className="text-4xl font-black mb-6 text-white tracking-tighter">Digital Transformation</h2>
             <p className="text-xl text-brand-200/80 font-light leading-relaxed mb-8">
               Modernize your infrastructure and workflows. We integrate the latest technologies to make your operations seamless, reducing manual overhead and minimizing human error.
             </p>
             <ul className="grid sm:grid-cols-2 gap-4 text-brand-50 font-medium">
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-400" size={20}/> Legacy System Upgrades</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-400" size={20}/> Custom Software Solutions</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-400" size={20}/> Automation Implementation</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-400" size={20}/> Cloud Migration</li>
             </ul>
           </div>
        </div>

        {/* Service 3 */}
        <div className="bg-brand-200 dark:bg-brand-900 rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row gap-12 group hover:shadow-2xl transition-all duration-500">
           <div className="lg:w-1/3 flex items-start">
             <div className="w-24 h-24 bg-white dark:bg-brand-800 shadow-sm rounded-3xl flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-brand-950 group-hover:text-white transition-all duration-500">
                <LayoutDashboard size={48} />
             </div>
           </div>
           <div className="lg:w-2/3">
             <h2 className="text-4xl font-black mb-6 text-brand-950 dark:text-white tracking-tighter">Growth Marketing</h2>
             <p className="text-xl text-brand-800 dark:text-brand-200/80 font-light leading-relaxed mb-8">
               Data-driven marketing campaigns designed to maximize ROI, generate high-quality leads, and increase conversion rates. Move away from vanity metrics and focus on bottom-line numbers.
             </p>
             <ul className="grid sm:grid-cols-2 gap-4 text-brand-950 dark:text-brand-200 font-medium tracking-tight">
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Lead Generation Engines</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Performance Analytics</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Brand Positioning</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-600 dark:text-brand-400" size={20}/> Omnichannel Campaigns</li>
             </ul>
           </div>
        </div>
      </section>

      {/* CTA section inside Services */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto text-center py-12">
        <h2 className="text-3xl lg:text-4xl font-black text-brand-950 dark:text-white tracking-tight mb-8">
          Not sure which service fits your needs?
        </h2>
        <Link to="/contact" className="inline-flex items-center justify-center space-x-3 px-8 py-5 rounded-full text-lg font-bold text-white bg-brand-950 dark:bg-brand-600 hover:bg-brand-600 dark:hover:bg-brand-400 dark:hover:text-brand-950 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
          <span>Get a Custom Assessment</span>
          <ArrowUpRight size={20} />
        </Link>
      </section>

    </div>
  );
};

export default Services;