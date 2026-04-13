import React from 'react';
import { Shield, CheckCircle2, FileText, Scale, Landmark } from 'lucide-react';

const Compliance = ({ isGlobal }) => {
  return (
    <div className="bg-gradient-to-b from-brand-50 via-white to-brand-50 dark:from-brand-950 dark:via-brand-900/40 dark:to-brand-950 min-h-screen pt-32 pb-24 transition-colors duration-500 font-sans text-brand-950 dark:text-brand-50">
      <section className="px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto text-center mb-20 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gradient-to-tr from-brand-900 to-brand-800 border shadow-lg border-brand-200 dark:border-brand-800 shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 shadow-md animate-pulse"></span>
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-800 dark:text-brand-200">Foundation & Legalities</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-950 to-brand-800 dark:from-white dark:to-brand-200 tracking-tighter pb-1 mb-6">
          {isGlobal ? "Cross-Border" : "Advisory &"} <span className="text-brand-600 dark:text-brand-400">Compliance</span>
        </h1>
        <p className="text-xl lg:text-2xl text-brand-800/80 dark:text-brand-200/80 max-w-3xl mx-auto font-light leading-relaxed">
          {isGlobal
            ? "Bulletproof your international expansion with meticulous tax structuring and strict FEMA compliance."
            : "Secure your business foundation from unpredictable ROC filings, keeping you 100% audit-ready."}
        </p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto mb-20 animate-fade-in-up">
        <div className="bg-white dark:bg-brand-900 rounded-[2.5rem] p-10 md:p-16 flex flex-col group border border-transparent hover:border-brand-200 dark:hover:border-brand-800 transition-all duration-500">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-24 h-24 bg-brand-50 dark:bg-brand-800 rounded-3xl flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-gradient-to-r from-brand-600 to-brand-400 shadow-md group-hover:text-brand-50 transition-all duration-500">
              <Shield size={48} />
            </div>
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-950 to-brand-800 dark:from-white dark:to-brand-200 tracking-tighter">
              Our Defensive Arsenal
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-brand-50/50 dark:bg-brand-950/50 rounded-2xl">
              <Scale className="w-10 h-10 text-brand-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">{isGlobal ? "Entity Structuring" : "ROC Filings"}</h3>
              <p className="text-brand-800/70 dark:text-brand-200/70">
                {isGlobal 
                  ? "We navigate foreign investment regulations, deciding the optimal legal entity to incorporate in India for maximal tax efficiency."
                  : "Timely, flawless execution of all corporate law requirements so you never face regulatory penalties or operational friction."}
              </p>
            </div>
            
            <div className="p-8 bg-brand-50/50 dark:bg-brand-950/50 rounded-2xl">
              <FileText className="w-10 h-10 text-brand-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">{isGlobal ? "FEMA Compliance" : "Bookkeeping"}</h3>
              <p className="text-brand-800/70 dark:text-brand-200/70">
                {isGlobal 
                  ? "Reserve Bank of India compliances handled seamlessly, ensuring proper reporting of foreign direct investment and fund repatriation."
                  : "Institutional-grade monthly bookkeeping giving you a crystal-clear lens into your financial runway and cash flow health."}
              </p>
            </div>

            <div className="p-8 bg-brand-50/50 dark:bg-brand-950/50 rounded-2xl">
              <Landmark className="w-10 h-10 text-brand-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">{isGlobal ? "International Tax" : "Tax Structuring"}</h3>
              <p className="text-brand-800/70 dark:text-brand-200/70">
                {isGlobal 
                  ? "Mitigation of Double Taxation Avoidance Agreements (DTAA) complexities to keep capital efficiently allocated."
                  : "Strategic domestic tax optimization across direct and indirect (GST) taxation, creating compounding value for stakeholders."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
