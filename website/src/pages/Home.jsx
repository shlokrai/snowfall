import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Users, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-brand-50 dark:bg-brand-950 selection:bg-gradient-to-r from-brand-600 to-brand-400 shadow-md selection:text-white font-sans text-brand-950 dark:text-brand-50 overflow-hidden transition-colors duration-500">
      
      {/* Hero Layout - Split Minimal */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto flex flex-col lg:flex-col md:flex-row items-center gap-8 md:p-16">
        {/* Left Typography */}
        <div className="flex-1 text-left relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gradient-to-tr from-brand-900 to-brand-800 border shadow-lg border-brand-200 dark:border-brand-800 shadow-sm mb-8 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 shadow-md animate-pulse"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-800 dark:text-brand-200">For Indian Startups</span>
          </div>
          
          <h1 className="text-[5rem] sm:text-[6rem] lg:text-[7.5rem] font-black tracking-tighter leading-[0.9] mb-8 text-brand-950 dark:text-white">
            Scale <br/>
            <span className="text-brand-600 dark:text-brand-400">Faster.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-brand-800/80 dark:text-brand-200/80 max-w-xl font-light leading-relaxed mb-12">
            An exclusive ecosystem of Indian businesses. Focus solely on your product while we handle complex compliance and fuel your B2B growth.
          </p>
          
          <div className="flex flex-col sm:flex-col md:flex-row gap-4">
            <Link to="/contact" className="group inline-flex items-center justify-between px-8 py-5 rounded-full text-lg font-medium text-brand-950 dark:text-brand-950 bg-brand-200 dark:bg-brand-400 hover:bg-brand-400 dark:hover:bg-brand-200 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 sm:w-80">
              <span>Start Growing</span>
              <div className="bg-brand-950/10 p-2 rounded-full group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={20} className="text-brand-950" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Abstract Visual / Stats Bento */}
        <div className="flex-1 w-full lg:w-auto grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-to-r from-brand-600 to-brand-400 shadow-md dark:bg-brand-800 text-brand-950 dark:text-white p-8 rounded-[2rem] flex flex-col justify-between aspect-square hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-600/30 transition-all cursor-default group">
            <Zap className="text-brand-950/50 dark:text-brand-400 group-hover:animate-wiggle" size={32} />
            <div>
              <p className="text-4xl md:text-6xl font-black tracking-tighter mb-2 text-brand-950 dark:text-white">250+</p>
              <p className="text-brand-950/80 dark:text-brand-200 font-medium">Businesses Trust Us</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gradient-to-tr from-brand-900 to-brand-800 border shadow-lg-2 border-transparent p-8 rounded-[2rem] flex flex-col justify-end aspect-square shadow-sm translate-y-8 hover:scale-[1.02] hover:border-brand-400 transition-all cursor-default group">
             <p className="text-4xl md:text-5xl font-black tracking-tighter mb-2 text-brand-950 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">â‚¹500Cr</p>
             <p className="text-brand-800 dark:text-brand-200 font-medium">+ Capital Facilitated</p>
          </div>
          <div className="bg-white dark:bg-gradient-to-tr from-brand-900 to-brand-800 border shadow-lg-2 border-transparent p-8 rounded-[2rem] flex flex-col justify-end aspect-square shadow-sm -translate-y-8 hover:scale-[1.02] hover:border-brand-400 transition-all cursor-default group">
             <p className="text-4xl md:text-5xl font-black tracking-tighter mb-2 text-brand-950 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">100+</p>
             <p className="text-brand-800 dark:text-brand-200 font-medium">Certified Professionals</p>
          </div>
          <Link to="/contact" className="bg-brand-200 dark:bg-brand-800 border-2 border-transparent p-8 rounded-[2rem] flex flex-col justify-center items-center aspect-square flex-col text-center hover:scale-[1.02] hover:bg-brand-400 dark:hover:bg-gradient-to-r from-brand-600 to-brand-400 shadow-md hover:shadow-xl transition-all cursor-pointer relative overflow-hidden group">
             <div className="w-16 h-16 rounded-full bg-brand-50 dark:bg-brand-900 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
               <ArrowUpRight size={28} className="text-brand-950 dark:text-brand-50" />
             </div>
             <p className="font-semibold text-brand-950 dark:text-brand-50">Join the Network</p>
          </Link>
        </div>
      </section>

      {/* Break Marquee / Big Text Statement */}
      <section className="py-24 bg-gradient-to-r from-brand-600 to-brand-400 shadow-md dark:bg-brand-800 overflow-hidden flex whitespace-nowrap text-brand-950 dark:text-brand-50 border-y-8 border-brand-400 dark:border-brand-900 transition-colors duration-500 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="animate-marquee flex gap-8 md:p-16 items-center hover:[animation-play-state:paused] transition-all duration-300">
          <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-950 to-brand-800 dark:from-brand-200 dark:to-white">Stop burning hours on red tape</span>
          <span className="text-4xl md:text-6xl font-black text-brand-50 dark:text-brand-50 uppercase tracking-tighter">Focus on revenue</span>
          <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-950 to-brand-800 dark:from-brand-200 dark:to-white">Stop burning hours on red tape</span>
          <span className="text-4xl md:text-6xl font-black text-brand-50 dark:text-brand-50 uppercase tracking-tighter">Focus on revenue</span>
        </div>
      </section>

      {/* Asymmetric Bento Pillars */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto animate-fade-in-up" id="growth" style={{ animationDelay: '0.6s' }}>
        <div className="flex flex-col lg:flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-5xl md:text-7xl font-black tracking-tighter leading-none max-w-2xl text-brand-950 dark:text-white">
            Everything you need. <br/><span className="text-brand-600 border-b-8 border-brand-400">Nothing you don't.</span>
          </h2>
          <p className="text-xl text-brand-800/80 dark:text-brand-200/80 font-medium max-w-md pb-2">
            The core pillars designed exclusively for high-growth Indian enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[24rem]">
          {/* Large Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-brand-950 to-brand-800 dark:from-brand-900 dark:to-brand-800 shadow-xl text-brand-50 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group hover:shadow-2xl hover:shadow-brand-950/20 hover:-translate-y-2 transition-all duration-500 cursor-default">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-r from-brand-600 to-brand-400 shadow-md rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-brand-400/50 group-hover:scale-110 group-hover:bg-gradient-to-r from-brand-600 to-brand-400 shadow-md/30 transition-all">
                <Shield size={32} className="text-brand-50 group-hover:text-brand-200 transition-colors" />
              </div>
              <div>
                <h3 className="text-4xl font-black mb-4 tracking-tight text-white group-hover:text-brand-200 transition-colors">Advisory & Compliance</h3>
                <p className="text-brand-50/80 text-xl font-light max-w-lg leading-relaxed group-hover:text-brand-50 transition-colors">
                  Bulletproof your business. From complex tax structuring to monthly bookkeeping, our elite network of certified professionals keeps your foundation rock solid.
                </p>
              </div>
            </div>
          </div>

          {/* Small Card 1 */}
          <div className="bg-white dark:bg-gradient-to-tr from-brand-900 to-brand-800 border shadow-lg-2 border-transparent p-6 md:p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-brand-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-default group">
            <div className="w-14 h-14 bg-brand-50 dark:bg-brand-800 border border-brand-200 dark:border-brand-700 rounded-2xl flex items-center justify-center text-brand-950 dark:text-brand-50 group-hover:scale-[1.15] group-hover:bg-gradient-to-r from-brand-600 to-brand-400 shadow-md group-hover:border-brand-600 transition-all duration-500">
              <TrendingUp size={28} className="group-hover:text-brand-950 transition-colors" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight text-brand-950 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">Funding Raise</h3>
              <p className="text-brand-800 dark:text-brand-200 font-medium leading-relaxed">
                Don't navigate blind. We prep your financials and connect you with capital.
              </p>
            </div>
          </div>

          {/* Small Card 2 */}
          <div className="bg-white dark:bg-gradient-to-tr from-brand-900 to-brand-800 border shadow-lg-2 border-transparent p-6 md:p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-brand-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-default group">
            <div className="w-14 h-14 bg-brand-50 dark:bg-brand-800 border border-brand-200 dark:border-brand-700 rounded-2xl flex items-center justify-center text-brand-950 dark:text-brand-50 group-hover:scale-[1.15] group-hover:bg-gradient-to-r from-brand-600 to-brand-400 shadow-md group-hover:border-brand-600 transition-all duration-500">
              <Users size={28} className="group-hover:text-brand-950 transition-colors" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight text-brand-950 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">B2B Network</h3>
              <p className="text-brand-800 dark:text-brand-200 font-medium leading-relaxed">
                Gain exclusive access to our partnered businesses to unlock revenue streams.
              </p>
            </div>
          </div>
          
          {/* Span Bottom Banner */}
          <div className="md:col-span-2 bg-brand-400 dark:bg-brand-800 border-2 border-brand-200 dark:border-brand-700 p-6 md:p-10 rounded-[2.5rem] flex items-center justify-between overflow-hidden relative hover:shadow-2xl hover:shadow-brand-400/20 transition-all duration-500 cursor-default group">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-2 tracking-tight text-brand-950 dark:text-white group-hover:translate-x-2 transition-transform duration-500">The "Founder's Focus" Commitments</h3>
              <ul className="text-brand-950 dark:text-brand-50 font-bold space-y-2 mt-6">
                <li className="flex items-center gap-3 group-hover:translate-x-3 transition-transform duration-500 delay-75"><CheckCircle2 className="text-brand-950 dark:text-brand-400" size={20}/> Flawless Investor & Audit-Ready Books</li>
                <li className="flex items-center gap-3 group-hover:translate-x-3 transition-transform duration-500 delay-150"><CheckCircle2 className="text-brand-950 dark:text-brand-400" size={20}/> Definitive Legal & Tax Clarity</li>
              </ul>
            </div>
            <div className="absolute right-0 -bottom-10 opacity-30 text-brand-950 dark:text-brand-900 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-700">
                <Shield size={220} strokeWidth={0.5} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto animate-fade-in-up" id="testimonials">
        <div className="bg-gradient-to-br from-brand-950 to-brand-800 dark:from-brand-900 dark:to-brand-800 shadow-xl border-2 border-transparent p-8 md:p-12 lg:p-8 md:p-16 rounded-[3rem] text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-500 cursor-default">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-400 to-transparent opacity-50"></div>
           <svg className="w-12 h-12 mx-auto mb-8 text-brand-600 dark:text-brand-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
             <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
           </svg>
           <p className="text-2xl lg:text-4xl font-light text-white mb-10 leading-relaxed italic">
             "Working with this team changed the trajectory of our business. The strategic insight and execution speed are unmatched. Highly recommended!"
           </p>
           <div>
             <h4 className="text-xl font-bold text-brand-200">Client Name Placeholder</h4>
             <p className="text-brand-400/80 font-medium">CEO, StartupInc</p>
           </div>
        </div>
      </section>

      {/* Massive Bold Footer CTA */}
      <section className="py-32 bg-brand-200 dark:bg-brand-900 text-brand-950 dark:text-white rounded-t-[3rem] mt-20 relative overflow-hidden group transition-colors duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 dark:from-brand-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-duration-1000"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
          <h2 className="text-4xl md:text-5xl md:text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
            Ready to <br/><span className="text-brand-600 dark:text-brand-400">Scale?</span>
          </h2>
          <p className="text-xl text-brand-800 dark:text-brand-200 mb-12 font-medium max-w-2xl leading-relaxed">
            We actively facilitate funding and B2B partnerships. We selectively vet every business to maintain network quality.
          </p>
          <Link to="/contact" className="group/btn inline-flex items-center space-x-4 bg-brand-950 dark:bg-brand-400 text-brand-50 dark:text-brand-950 px-10 py-6 rounded-full hover:scale-105 hover:bg-gradient-to-r from-brand-600 to-brand-400 shadow-md dark:hover:bg-gradient-to-r from-brand-600 to-brand-400 shadow-md hover:text-brand-950 hover:shadow-2xl hover:shadow-brand-950/20 transition-all shadow-xl">
            <span className="text-xl font-bold">Schedule Discovery Call</span>
            <div className="bg-brand-50/20 dark:bg-brand-950/10 p-2 rounded-full group-hover/btn:bg-white group-hover/btn:text-brand-950 transition-colors">
              <ArrowUpRight size={24} className="group-hover/btn:rotate-45 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
