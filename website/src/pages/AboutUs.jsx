import React from 'react';
import { Target, Users, BookOpen, CheckCircle2, Shield, Zap } from 'lucide-react';

const AboutUs = ({ isGlobal }) => {
  return (
    <div className="bg-gradient-to-b from-brand-50 via-white to-brand-50 dark:from-brand-950 dark:via-brand-900/40 dark:to-brand-950 min-h-screen pt-32 pb-24 transition-colors duration-500 font-sans text-brand-950 dark:text-brand-50">

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto text-center mb-24 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl lg:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-950 to-brand-800 dark:from-white dark:to-brand-200 tracking-tighter pb-1 mb-8 bg-clip-text">
          The <span className="text-brand-600 dark:text-brand-400">Snowfall</span> Difference
        </h1>
        <p className="text-xl lg:text-2xl text-brand-800/80 dark:text-brand-200/80 max-w-3xl mx-auto font-light leading-relaxed">
          {isGlobal
            ? "We are not just an advisory firm. We are the architects of an exclusive cross-border expansion ecosystem designed specifically for visionary international businesses. We handle the friction of entering the Indian market, so you can focus on the global momentum."
            : "We are not just an advisory firm. We are the architects of an exclusive B2B growth ecosystem designed specifically for visionary Indian founders. We handle the friction, so you can focus on the momentum."}
        </p>
      </section>      {/* Core Philosophy Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gradient-to-tr from-brand-900 to-brand-800 border shadow-lg border-transparent p-8 md:p-12 rounded-[2.5rem] hover:border-brand-400 hover:shadow-xl transition-all duration-500 group">
            <div className="w-16 h-16 bg-brand-50 dark:bg-brand-800 rounded-2xl flex flex-col justify-center items-center mb-8 group-hover:bg-gradient-to-r from-brand-600 to-brand-400 shadow-md transition-colors">
              <Target size={32} className="text-brand-950 dark:text-brand-50 group-hover:text-white" />
            </div>
            <h2 className="text-3xl font-black mb-4 text-brand-950 dark:text-white">Our Mission</h2>
            <p className="text-lg text-brand-800 dark:text-brand-200 leading-relaxed font-light">
              {isGlobal
                ? 'To be the ultimate "Guide" to the international enterprise. We strip away the villainous red tape, compliance headaches, and cross-border complexities by providing magic weapons: elite local professionals, network access, and market entry clarity.'
                : 'To be the ultimate "Guide" to the Indian founder. We strip away the villainous red tape, compliance headaches, and isolation by providing magic weapons: elite professionals, network access, and capital connections.'}
            </p>
          </div>
          <div className="bg-brand-950 dark:bg-brand-800 border-2 border-transparent p-8 md:p-12 rounded-[2.5rem] hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-brand-600 to-brand-400 shadow-md rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 group-hover:opacity-40 transition-all duration-1000"></div>
            <div className="w-16 h-16 bg-brand-800 dark:bg-brand-900 rounded-2xl flex flex-col justify-center items-center mb-8 border border-brand-600/30 relative z-10">
              <Shield size={32} className="text-brand-400" />
            </div>
            <h2 className="text-3xl font-black mb-4 text-white relative z-10">
              {isGlobal ? "The Expansion Guarantees" : "The Founder's Commitments"}
            </h2>
            <ul className="text-brand-200/90 space-y-6 font-light text-lg relative z-10">
              <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <div className="flex items-start gap-3 sm:w-48 shrink-0">
                  <CheckCircle2 className="text-brand-400 shrink-0 mt-1" size={20}/>
                  <strong className="text-white font-semibold leading-tight mt-0.5">
                    {isGlobal ? "Worry-Free Setup:" : "Audit-Ready Books:"}
                  </strong>
                </div>
                <span className="flex-1">
                  {isGlobal 
                    ? "Seamless legal entity incorporation and localized banking structure setup from day one."
                    : "Flawless investor-ready books, maintained with absolute precision."}
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <div className="flex items-start gap-3 sm:w-48 shrink-0">
                  <CheckCircle2 className="text-brand-400 shrink-0 mt-1" size={20}/>
                  <strong className="text-white font-semibold leading-tight mt-0.5">
                    {isGlobal ? "Cross-Border Clarity:" : "Definitive Clarity:"}
                  </strong>
                </div>
                <span className="flex-1">
                  {isGlobal
                    ? "Actionable, legally sound pathways for international tax, repatriation, and FEMA compliance."
                    : "Clear, actionable legal and tax answers without the ambiguity."}
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <div className="flex items-start gap-3 sm:w-48 shrink-0">
                  <CheckCircle2 className="text-brand-400 shrink-0 mt-1" size={20}/>
                  <strong className="text-white font-semibold leading-tight mt-0.5">Exclusivity:</strong>
                </div>
                <span className="flex-1">
                  {isGlobal
                    ? "Instant access to a vetted, high-quality network of reliable local partners and enterprise clients."
                    : "A vetted, high-quality network built on trust and synergistic growth."}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership Placeholder */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto text-center">
         <h2 className="text-4xl lg:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-950 to-brand-800 dark:from-white dark:to-brand-200 tracking-tighter pb-1 mb-12">
          Your <span className="text-brand-600 dark:text-brand-400">Guides</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-100 dark:bg-brand-900/50 p-6 md:p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform">
             <div className="w-32 h-32 mx-auto bg-brand-200 dark:bg-brand-800 rounded-full mb-6 border-4 border-white dark:border-brand-950 flex items-center justify-center">
                <Users size={40} className="text-brand-400/50" />
             </div>
             <h3 className="text-2xl font-black text-brand-950 dark:text-white mb-1">Founder / Partner 1</h3>
             <p className="text-brand-600 dark:text-brand-400 font-bold mb-4 uppercase tracking-wider text-sm">Managing Partner</p>
             <p className="text-brand-800 dark:text-brand-200/80 font-light">With deep roots in the {isGlobal ? 'Indian corporate and regulatory ecosystem' : 'Indian startup ecosystem'}, orchestrating multi-crore capital raises.</p>
          </div>
          <div className="bg-brand-100 dark:bg-brand-900/50 p-6 md:p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform">
             <div className="w-32 h-32 mx-auto bg-brand-200 dark:bg-brand-800 rounded-full mb-6 border-4 border-white dark:border-brand-950 flex items-center justify-center">
                <Users size={40} className="text-brand-400/50" />
             </div>
             <h3 className="text-2xl font-black text-brand-950 dark:text-white mb-1">Founder / Partner 2</h3>
             <p className="text-brand-600 dark:text-brand-400 font-bold mb-4 uppercase tracking-wider text-sm">Head of Compliance & Network</p>
             <p className="text-brand-800 dark:text-brand-200/80 font-light">The backbone of our "Shield" pillar, ensuring risk mitigation and facilitating B2B pipelines.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
