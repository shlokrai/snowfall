import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

const ContactUs = ({ isGlobal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError(null);
    setSubmitted(true);
    // In a real app, send to backend or Google Form integration
  };

  return (
    <div className="bg-gradient-to-b from-brand-50 via-white to-brand-50 dark:from-brand-950 dark:via-brand-900/40 dark:to-brand-950 min-h-screen pt-40 pb-24 transition-colors duration-500 font-sans text-brand-950 dark:text-brand-50" id="contact">
      <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-950 to-brand-700 dark:from-white dark:to-brand-200 tracking-tighter pb-1">
            {isGlobal ? "Enter India With Precision" : "Let's Talk Growth"}
          </h1>
          <p className="mt-6 text-xl text-brand-800/80 dark:text-brand-200/80 max-w-2xl mx-auto font-light leading-relaxed">
            {isGlobal ? "Ready to expand into the world's fastest-growing enterprise market? Connect with our cross-border advisory team to engineer your flawless entry strategy." : "Ready to scale your business? Reach out to our team of experts and let's get started on your grand slam offer."}
          </p>
        </div>

        <div className="bg-white dark:bg-brand-900 rounded-[2.5rem] shadow-xl overflow-hidden md:flex border border-brand-200/50 dark:border-brand-800 transition-colors">
          {/* Contact Info Sidebar */}
          <div className="bg-brand-950 dark:bg-brand-800 p-8 lg:p-12 md:w-2/5 text-brand-50 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-brand-600 to-brand-400 shadow-md rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-8 tracking-tight text-white">Contact Info</h3>
              <p className="text-brand-200/80 mb-12 font-light leading-relaxed text-lg">
                Fill out the form and our team will get back to you within 24 hours. We strictly vet applications to match you with the right advisory path.
              </p>
              
              <div className="space-y-8 font-medium">
                <div className="flex items-center space-x-5 group cursor-default">
                  <div className="p-3 rounded-2xl bg-brand-800/50 dark:bg-brand-950/50 border border-brand-600/30 group-hover:scale-110 group-hover:bg-gradient-to-r from-brand-600 to-brand-400 shadow-md transition-all">
                    <Phone className="text-brand-400 group-hover:text-brand-50 transition-colors" size={24} />
                  </div>
                  <span className="text-lg group-hover:text-brand-200 transition-colors">+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center space-x-5 group cursor-default">
                  <div className="p-3 rounded-2xl bg-brand-800/50 dark:bg-brand-950/50 border border-brand-600/30 group-hover:scale-110 group-hover:bg-gradient-to-r from-brand-600 to-brand-400 shadow-md transition-all">
                    <Mail className="text-brand-400 group-hover:text-brand-50 transition-colors" size={24} />
                  </div>
                  <span className="text-lg group-hover:text-brand-200 transition-colors">admin.snowfall@gmail.com</span>
                </div>
                <div className="flex items-start space-x-5 group cursor-default">
                  <div className="p-3 rounded-2xl bg-brand-800/50 dark:bg-brand-950/50 border border-brand-600/30 mt-1 group-hover:scale-110 group-hover:bg-gradient-to-r from-brand-600 to-brand-400 shadow-md transition-all min-w-[50px] flex justify-center">
                    <MapPin className="text-brand-400 group-hover:text-brand-50 transition-colors" size={24} />
                  </div>
                  <span className="text-lg font-medium group-hover:text-brand-200 transition-colors">33 C.R. Avenue, 9th Floor, <br/>Suite No. 912<br/><span className="text-base text-brand-400/80 font-normal mt-1 block">Kolkata, West Bengal, India - 700012</span></span>
                </div>
              </div>
            </div>
            
            <div className="mt-20 relative z-10">
              <a href="https://docs.google.com/forms/d/e/PLACEHOLDER/viewform" target="_blank" rel="noopener noreferrer" 
                className="inline-block border-2 border-brand-600 text-brand-50 hover:bg-gradient-to-r from-brand-600 to-brand-400 shadow-md hover:text-brand-950 px-6 py-4 rounded-full transition-all font-bold w-full text-center hover:scale-105 shadow-sm">
                Open Full Intake Form
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:w-3/5 lg:p-16 text-left">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-brand-50 dark:bg-brand-800 rounded-full flex items-center justify-center border-4 border-brand-400">
                  <CheckCircle2 size={48} className="text-brand-600" />
                </div>
                <h3 className="text-4xl font-black text-brand-950 dark:text-white tracking-tight">Application Received</h3>
                <p className="text-xl text-brand-800/80 dark:text-brand-200/80 font-light max-w-md">Our advisory team is reviewing your details. We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="border-b border-brand-100 dark:border-brand-800 pb-6 mb-10">
                  <h3 className="text-3xl font-black text-brand-950 dark:text-white tracking-tight">Send us a message</h3>
                </div>
                
                {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-200 font-medium">{error}</div>}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-brand-900 dark:text-brand-200 mb-3 tracking-wide uppercase">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} 
                      className="w-full px-5 py-4 bg-brand-50/50 dark:bg-brand-950/50 border-2 border-brand-100 dark:border-brand-800 text-brand-950 dark:text-white rounded-2xl focus:ring-0 focus:border-brand-600 dark:focus:border-brand-400 transition-all outline-none font-medium placeholder-brand-900/30 dark:placeholder-brand-200/30" 
                      placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-900 dark:text-brand-200 mb-3 tracking-wide uppercase">Work Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} 
                      className="w-full px-5 py-4 bg-brand-50/50 dark:bg-brand-950/50 border-2 border-brand-100 dark:border-brand-800 text-brand-950 dark:text-white rounded-2xl focus:ring-0 focus:border-brand-600 dark:focus:border-brand-400 transition-all outline-none font-medium placeholder-brand-900/30 dark:placeholder-brand-200/30" 
                      placeholder="john@company.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-900 dark:text-brand-200 mb-3 tracking-wide uppercase">Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} 
                    className="w-full px-5 py-4 bg-brand-50/50 dark:bg-brand-950/50 border-2 border-brand-100 dark:border-brand-800 text-brand-950 dark:text-white rounded-2xl focus:ring-0 focus:border-brand-600 dark:focus:border-brand-400 transition-all outline-none font-medium placeholder-brand-900/30 dark:placeholder-brand-200/30" 
                    placeholder="Snowfall Inc." />
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-900 dark:text-brand-200 mb-3 tracking-wide uppercase">Your Current Bottleneck *</label>
                  <textarea name="message" rows={5} value={formData.message} onChange={handleChange} 
                    className="w-full px-5 py-4 bg-brand-50/50 dark:bg-brand-950/50 border-2 border-brand-100 dark:border-brand-800 text-brand-950 dark:text-white rounded-2xl focus:ring-0 focus:border-brand-600 dark:focus:border-brand-400 transition-all outline-none resize-none font-medium placeholder-brand-900/30 dark:placeholder-brand-200/30" 
                    placeholder="We are struggling with our series A compliance..." />
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full flex justify-center py-5 px-6 border-2 border-transparent rounded-full shadow-lg text-xl font-black text-white bg-gradient-to-r from-brand-600 to-brand-400 shadow-md hover:bg-brand-400 hover:text-brand-950 hover:-translate-y-1 focus:outline-none transition-all">
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
