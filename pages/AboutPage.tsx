import React from 'react';
import { Target, Heart, Award, ShieldCheck, Mail, Phone, ChevronRight, ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-52 pb-32">
      <section className="px-10 md:px-14 max-w-[1440px] mx-auto mb-64">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-7 reveal">
            <span className="text-[#b33d1d] font-bold uppercase tracking-[0.45em] text-[11px] mb-10 block">The Manifesto</span>
            <h1 className="text-7xl md:text-[8.5rem] font-crimson font-bold text-[#141414] leading-[0.85] tracking-tighter mb-14">
              Mastery. <br /><span className="italic text-[#b33d1d]">Identity.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-[#5f5f5f] font-medium leading-relaxed mb-20 max-w-3xl">
              BharatGoAi was established in 2025 to architect a bridge between global technological frontiers and the specific, sophisticated reality of the Indian enterprise.
            </p>
            <div className="flex gap-24 border-t border-gray-200 pt-20">
               <div>
                  <div className="text-6xl font-crimson font-bold text-[#141414] mb-4">2025</div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Founded, Hyderabad</div>
               </div>
               <div>
                  <div className="text-6xl font-crimson font-bold text-[#141414] mb-4">100%</div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Locally Built</div>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 reveal relative">
            <div className="aspect-[3/4] bg-white rounded-[5rem] shadow-2xl p-5 border border-gray-100 relative group overflow-hidden rotate-2">
               <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                  alt="Laboratory Excellence" 
                  className="w-full h-full object-cover rounded-[4rem] opacity-90 transition-all duration-[2000ms] group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#b33d1d]/20 to-transparent"></div>
               <div className="absolute bottom-16 left-16 right-16">
                  <div className="text-[10px] font-bold text-white uppercase tracking-[0.5em] mb-4">Institutional Badge</div>
                  <div className="text-3xl font-crimson font-bold text-white leading-tight italic text-right">Quality Above <br />All.</div>
               </div>
            </div>
            {/* Annotation */}
            <div className="absolute -top-10 -right-10">
               <span className="handwritten text-4xl text-[#b33d1d]">Verified Origin.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conviction Architectural Grid */}
      <section className="bg-white py-64 border-y border-gray-200">
        <div className="max-w-[1440px] mx-auto px-10 md:px-14">
          <div className="reveal text-center mb-48 max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-crimson font-bold text-[#141414] mb-12">Institutional Principles.</h2>
            <p className="text-2xl md:text-3xl text-[#5f5f5f] font-medium leading-relaxed max-w-3xl mx-auto italic">
              "We believe in intelligence that acts as a multiplier of human potential, rather than a displacement of it. Built with cultural honor."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { icon: <Target size={32}/>, title: "Cultural Depth", desc: "Natively optimized for 22+ official Indian languages and their nuanced idioms." },
              { icon: <Heart size={32}/>, title: "Ethical Kernel", desc: "Governance protocols woven into the very fabric of our models for absolute safety." },
              { icon: <Award size={32}/>, title: "Elite Precision", desc: "World-class accuracy standards tailored for mission-critical enterprise tasks." },
              { icon: <ShieldCheck size={32}/>, title: "Data Integrity", desc: "Institutional data control resides entirely within the partner's domain." }
            ].map((item, i) => (
              <div key={i} className="reveal group p-14 bg-[#faf9f6] rounded-[3.5rem] border border-transparent hover:border-[#b33d1d]/20 hover:bg-white transition-all duration-700 hover:shadow-2xl">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#b33d1d] mb-12 shadow-sm group-hover:bg-[#b33d1d] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-crimson font-bold text-[#141414] mb-6">{item.title}</h3>
                <p className="text-lg text-[#5f5f5f] font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection Strip - Editorial Focus */}
      <section className="py-72 px-10 md:px-14 text-center reveal max-w-5xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-crimson font-bold text-[#141414] mb-14">Initiate Connection.</h2>
        <p className="text-2xl text-gray-400 font-medium mb-28 leading-relaxed max-w-3xl mx-auto">
           Whether seeking technical specifications or institutional partnership, our team is ready to connect with intent.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-24 border-t border-gray-200 pt-28">
           <a href="mailto:bharatgoai.info@gmail.com" className="group">
              <div className="w-24 h-24 bg-[#faf9f6] rounded-full flex items-center justify-center text-[#141414] mx-auto mb-10 group-hover:bg-[#b33d1d] group-hover:text-white transition-all shadow-md">
                 <Mail size={36} />
              </div>
              <span className="text-2xl font-crimson font-bold text-[#141414] block mb-3">Electronic Mail</span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.25em]">bharatgoai.info@gmail.com</span>
           </a>
           <a href="tel:9494006530" className="group">
              <div className="w-24 h-24 bg-[#faf9f6] rounded-full flex items-center justify-center text-[#141414] mx-auto mb-10 group-hover:bg-[#b33d1d] group-hover:text-white transition-all shadow-md">
                 <Phone size={36} />
              </div>
              <span className="text-2xl font-crimson font-bold text-[#141414] block mb-3">Voice Frequency</span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.25em]">+91 9494006530</span>
           </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;