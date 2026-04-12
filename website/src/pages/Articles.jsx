import React from 'react';
import { ArrowRight, Calendar, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Articles = ({ isGlobal }) => {
  return (
    <div className="bg-brand-50 dark:bg-brand-950 min-h-screen pt-32 pb-24 transition-colors duration-500 font-sans text-brand-950 dark:text-brand-50">

      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto text-center mb-24 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-800 dark:text-brand-200">Snowfall Intel</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-brand-950 dark:text-white tracking-tighter mb-8 bg-clip-text">
          {isGlobal ? "Global " : "Founder "} <span className="text-brand-600 dark:text-brand-400">Insights</span>
        </h1>
        <p className="text-xl lg:text-2xl text-brand-800/80 dark:text-brand-200/80 max-w-3xl mx-auto font-light leading-relaxed">
          {isGlobal ? "Stay sharp. Dive into our latest strategies on foreign direct investment, cross-border compliance, and leveraging local networks for explosive entry into India." : "Stay sharp. Dive into our latest strategies on capital raising, tax compliance, and leveraging B2B networks for explosive growth in India."}
        </p>
      </section>      {/* Featured Article */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="bg-brand-950 dark:bg-brand-900 text-white rounded-[3rem] p-10 md:p-16 lg:p-24 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-400 group-hover:scale-150 transition-all duration-1000"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
             <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                   <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                   <span className="text-xs font-semibold tracking-widest uppercase text-brand-100">{isGlobal ? "Featured Cross-Border" : "Featured  Capital Raise"}</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter leading-tight group-hover:text-brand-200 transition-colors">
                  {isGlobal ? "Navigating Indian Subsidiary Setup in Under 45 Days" : "How to Build an Investor-Ready Data Room in 7 Days"}
                </h2>
                <div className="flex items-center gap-3 text-brand-200/80 font-medium mb-8">
                   <Calendar size={18} />
                   <span>April 10, 2026</span>
                   <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mx-2"></span>
                   <span>6 min read</span>
                </div>
                <p className="text-xl text-brand-50/80 font-light leading-relaxed mb-10 max-w-lg">        
                  {isGlobal ? "Entering India means breaking through complex compliance barriers. Here's exactly what global HQs need to structure their local offices flawlessly..." : "Raising capital in India requires absolute transparency. Learn exactly what tier-1 VCs want to see before writing that term sheet..."}
                </p>
                <Link to="#" className="group/btn inline-flex items-center space-x-4 bg-brand-600 text-white px-8 py-4 rounded-full hover:bg-white hover:text-brand-950 transition-all shadow-lg hover:scale-105">  
                   <span className="text-lg font-bold">Read Full Strategy</span>
                   <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
             </div>
             
             {/* Featured Image Placeholder */}
             <div className="h-full min-h-[400px] bg-brand-800 dark:bg-brand-950/50 rounded-[2rem] border-2 border-brand-600/30 overflow-hidden relative group-hover:border-brand-400/50 transition-all duration-500 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-950/50 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Capital Raise" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700" />
                <div className="relative z-20 text-brand-400/50 text-xl font-bold uppercase tracking-widest">Image Placeholder</div>
             </div>
          </div>
        </div>
      </section>

      {/* Recent Articles Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto animate-fade-in-up" id="recent" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-3xl font-black text-brand-950 dark:text-white mb-12 flex items-center gap-4">
           Recent Intel
           <div className="h-px flex-1 bg-brand-200 dark:bg-brand-800"></div>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

           {/* Article 1 */}
           <div className="bg-white dark:bg-brand-900 border-2 border-transparent p-8 rounded-[2rem] flex flex-col justify-between hover:border-brand-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
              <div>
                <div className="h-48 rounded-xl bg-brand-100 dark:bg-brand-800 mb-6 overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tax Strategy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                </div>
                <div className="text-sm font-bold text-brand-600 dark:text-brand-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
                   {isGlobal ? "FDI Compliance" : "Compliance"} <span className="w-1 h-1 rounded-full bg-brand-400"></span> April 5
                </div>
                <h4 className="text-2xl font-bold mb-4 text-brand-950 dark:text-white leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {isGlobal ? "Repatriating Profits: A Tax Guide for Foreign HQs" : "Tax Structuring for Series A Startups"}
                </h4>
                <p className="text-brand-800/80 dark:text-brand-200/80 font-light leading-relaxed mb-6">  
                  {isGlobal ? "Don't let DTAA clauses blindside you. How to structure your Indian operations to seamlessly remit profits back home without double taxation..." : "Don't lose a chunk of your raise to poor structuring. How our CAs blueprint your accounts before the term sheet hits..."}
                </p>
              </div>
              <Link to="#" className="inline-flex items-center text-brand-950 dark:text-white font-bold group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                 Read Full Intel <ArrowUpRight size={18} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
           </div>

           {/* Article 2 */}
           <div className="bg-white dark:bg-brand-900 border-2 border-transparent p-8 rounded-[2rem] flex flex-col justify-between hover:border-brand-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
              <div>
                <div className="h-48 rounded-xl bg-brand-100 dark:bg-brand-800 mb-6 overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="B2B Network" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                </div>
                <div className="text-sm font-bold text-brand-600 dark:text-brand-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
                   {isGlobal ? "Partnerships" : "Networking"} <span className="w-1 h-1 rounded-full bg-brand-400"></span> March 28        
                </div>
                <h4 className="text-2xl font-bold mb-4 text-brand-950 dark:text-white leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {isGlobal ? "Securing Your First Indian Enterprise Client" : "Unlocking B2B Synergies: Case Study"}
                </h4>
                <p className="text-brand-800/80 dark:text-brand-200/80 font-light leading-relaxed mb-6">  
                  {isGlobal ? "How a European SaaS provider used our local network to land a Top 10 Indian conglomerate as their anchor client in 2 months..." : "How two founders inside the Snowfall Network cross-pollinated their client bases to generate ₹2Cr in native revenue within a quarter..."}
                </p>
              </div>
              <Link to="#" className="inline-flex items-center text-brand-950 dark:text-white font-bold group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                 Read Full Intel <ArrowUpRight size={18} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
           </div>

           {/* Article 3 */}
           <div className="bg-white dark:bg-brand-900 border-2 border-transparent p-8 rounded-[2rem] flex flex-col justify-between hover:border-brand-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
              <div>
                <div className="h-48 rounded-xl bg-brand-100 dark:bg-brand-800 mb-6 overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Grand Slam Offer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                </div>
                <div className="text-sm font-bold text-brand-600 dark:text-brand-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
                   {isGlobal ? "Market Entry" : "Strategy"} <span className="w-1 h-1 rounded-full bg-brand-400"></span> March 20
                </div>
                <h4 className="text-2xl font-bold mb-4 text-brand-950 dark:text-white leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {isGlobal ? "The Hyper-Localization Playbook" : "The Snowfall \"Grand Slam\" Guide"}
                </h4>
                <p className="text-brand-800/80 dark:text-brand-200/80 font-light leading-relaxed mb-6">  
                  {isGlobal ? "Why bringing your exact foreign product model to India usually fails, and how to successfully adapt without losing your brand identity..." : "Why competing on price in India is a death sentence, and how exclusivity and risk-reversal can hyper-propel your brand..."}
                </p>
              </div>
              <Link to="#" className="inline-flex items-center text-brand-950 dark:text-white font-bold group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                 Read Full Intel <ArrowUpRight size={18} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Articles;
