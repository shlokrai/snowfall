import React from 'react';
import { Target, Users, BookOpen, CheckCircle2 } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-brand-50 dark:bg-brand-950 min-h-screen pt-32 pb-24 transition-colors duration-500 font-sans text-brand-950 dark:text-brand-50">
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto text-center mb-24 animate-fade-in-up">
        <h1 className="text-5xl lg:text-7xl font-black text-brand-950 dark:text-white tracking-tighter mb-8 bg-clip-text">
          Who We <span className="text-brand-600 dark:text-brand-400">Are</span>
        </h1>
        <p className="text-xl lg:text-2xl text-brand-800/80 dark:text-brand-200/80 max-w-3xl mx-auto font-light leading-relaxed">
          Founded on the principles of integrity and innovation, we started with a simple goal: to help businesses navigate the complexities of their industry. Over the years, we've grown into a dedicated team of professionals passionate about making a real impact.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-brand-900 border-2 border-transparent p-12 rounded-[2.5rem] hover:border-brand-400 hover:shadow-xl transition-all duration-500 group">
            <div className="w-16 h-16 bg-brand-50 dark:bg-brand-800 rounded-2xl flex flex-col justify-center items-center mb-8 group-hover:bg-brand-600 transition-colors">
              <Target size={32} className="text-brand-950 dark:text-brand-50 group-hover:text-white" />
            </div>
            <h2 className="text-3xl font-black mb-4 text-brand-950 dark:text-white">Our Mission</h2>
            <p className="text-lg text-brand-800 dark:text-brand-200 leading-relaxed font-light">
              To empower our clients with the tools, strategies, and insights they need to achieve sustainable growth and outpace the competition.
            </p>
          </div>
          <div className="bg-brand-950 dark:bg-brand-800 border-2 border-transparent p-12 rounded-[2.5rem] hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
            <div className="w-16 h-16 bg-brand-800 dark:bg-brand-900 rounded-2xl flex flex-col justify-center items-center mb-8 border border-brand-600/30">
              <BookOpen size={32} className="text-brand-400" />
            </div>
            <h2 className="text-3xl font-black mb-4 text-white">Core Values</h2>
            <ul className="text-brand-200/90 space-y-4 font-light text-lg">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-400" size={20}/> <strong className="text-white font-semibold">Transparency:</strong> Honest communication at every stage.</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-400" size={20}/> <strong className="text-white font-semibold">Excellence:</strong> Good is never enough; we strive for the best.</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-400" size={20}/> <strong className="text-white font-semibold">Collaboration:</strong> We treat your business as if it were our own.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto text-center">
         <h2 className="text-4xl lg:text-5xl font-black text-brand-950 dark:text-white tracking-tighter mb-12">
          Meet Our <span className="text-brand-600 dark:text-brand-400">Leadership</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-brand-100 dark:bg-brand-900/50 p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform">
             <div className="w-32 h-32 mx-auto bg-brand-200 dark:bg-brand-800 rounded-full mb-6 border-4 border-white dark:border-brand-950 flex items-center justify-center">
                <Users size={40} className="text-brand-400/50" />
             </div>
             <h3 className="text-2xl font-black text-brand-950 dark:text-white mb-1">John Doe</h3>
             <p className="text-brand-600 dark:text-brand-400 font-bold mb-4 uppercase tracking-wider text-sm">CEO & Founder</p>
             <p className="text-brand-800 dark:text-brand-200/80 font-light">With over 15 years of industry experience, John leads the strategic vision of Snowfall.</p>
          </div>
          <div className="bg-brand-100 dark:bg-brand-900/50 p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform">
             <div className="w-32 h-32 mx-auto bg-brand-200 dark:bg-brand-800 rounded-full mb-6 border-4 border-white dark:border-brand-950 flex items-center justify-center">
                <Users size={40} className="text-brand-400/50" />
             </div>
             <h3 className="text-2xl font-black text-brand-950 dark:text-white mb-1">Jane Smith</h3>
             <p className="text-brand-600 dark:text-brand-400 font-bold mb-4 uppercase tracking-wider text-sm">Head of Operations</p>
             <p className="text-brand-800 dark:text-brand-200/80 font-light">Jane ensures that every project is executed flawlessly and exceeds client expectations.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;