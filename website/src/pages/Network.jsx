import React from 'react';
import { Users, Globe2, Handshake, Target } from 'lucide-react';

const Network = ({ isGlobal }) => {
  return (
    <div className="bg-gradient-to-b from-brand-50 via-white to-brand-50 dark:from-brand-950 dark:via-brand-900/40 dark:to-brand-950 min-h-screen pt-32 pb-24 transition-colors duration-500 font-sans text-brand-950 dark:text-brand-50">
      <section className="px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto text-center mb-20 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gradient-to-tr from-brand-900 to-brand-800 border shadow-lg border-brand-200 dark:border-brand-800 shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 shadow-md animate-pulse"></span>
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-800 dark:text-brand-200">Exclusive Ecosystem</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-950 to-brand-700 dark:from-white dark:to-brand-200 tracking-tighter pb-1 mb-6">
          The Snowfall <span className="text-brand-600 dark:text-brand-400">Network</span>
        </h1>
        <p className="text-xl lg:text-2xl text-brand-800/80 dark:text-brand-200/80 max-w-3xl mx-auto font-light leading-relaxed">
          {isGlobal
            ? "Tap into an elite circle of trusted Indian corporate partners, legal advisors, and high-net-worth investors."
            : "Stop cold emailing. Get direct intros to founders, investors, and decision-makers within our vetted B2B network."}
        </p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto mb-20 animate-fade-in-up">
        <div className="bg-white dark:bg-brand-900 rounded-[2.5rem] p-10 md:p-16 flex flex-col group border border-transparent hover:border-brand-200 dark:hover:border-brand-800 transition-all duration-500">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-24 h-24 bg-brand-50 dark:bg-brand-800 rounded-3xl flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-gradient-to-r from-brand-600 to-brand-400 shadow-md group-hover:text-brand-50 transition-all duration-500">
              <Users size={48} />
            </div>
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-950 to-brand-700 dark:from-white dark:to-brand-200 tracking-tighter">
              Value Amplification
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-brand-50/50 dark:bg-brand-950/50 rounded-2xl">
              <Handshake className="w-10 h-10 text-brand-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">{isGlobal ? "Vetted B2B Connections" : "The Inner Circle"}</h3>
              <p className="text-brand-800/70 dark:text-brand-200/70">
                {isGlobal 
                  ? "Expedite your landing in India by connecting with pre-vetted vendors, logistics companies, and distributors."
                  : "An invite-only syndicate of top-tier founders and scaling startups sharing resources and contract opportunities."}
              </p>
            </div>
            
            <div className="p-8 bg-brand-50/50 dark:bg-brand-950/50 rounded-2xl">
              <Target className="w-10 h-10 text-brand-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">{isGlobal ? "Market Insights" : "Strategic Collaborations"}</h3>
              <p className="text-brand-800/70 dark:text-brand-200/70">
                {isGlobal 
                  ? "Access deep, unstructured knowledge from industry insiders about Indian consumer behavior and regulatory shifts."
                  : "Collaborate with complementary businesses inside the Snowfall Network to pitch for large enterprise mandates together."}
              </p>
            </div>

            <div className="p-8 bg-brand-50/50 dark:bg-brand-950/50 rounded-2xl">
              <Globe2 className="w-10 h-10 text-brand-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">{isGlobal ? "C-Suite Talent Matching" : "Cross-Pollination"}</h3>
              <p className="text-brand-800/70 dark:text-brand-200/70">
                {isGlobal 
                  ? "Find reliable, experienced Indian directors and country heads to steer your regional subsidiary."
                  : "Exchange services within the network, reducing cash burn while simultaneously driving high-quality user acquisition."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Network;
