import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  Globe, 
  Zap, 
  ArrowRight,
  Target
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const catalog = [
    {
      index: "01",
      title: "Sovereign Framework",
      desc: "Institutional intelligence engineered for private deployment. Your data never crosses the boundary of your own infrastructure.",
      technical: ["Air-gapped compatible", "Kernel-level encryption", "Private GPU clusters"],
      icon: <Lock strokeWidth={1} size={48} />
    },
    {
      index: "02",
      title: "Indic Foundations",
      desc: "Natively synthesized models representing 22+ Indian languages. We don't just translate; we capture the cultural intent.",
      technical: ["Bespoke fine-tuning", "Linguistic nuancing", "Contextual absolute"],
      icon: <Globe strokeWidth={1} size={48} />
    },
    {
      index: "03",
      title: "Edge Orchestration",
      desc: "Low-latency inference engines designed for real-time mission-critical enterprise systems in finance and energy.",
      technical: ["Quantized kernels", "Scalable node sync", "Hardware-aware ML"],
      icon: <Zap strokeWidth={1} size={48} />
    }
  ];

  return (
    <div className="pt-40 pb-32">
      {/* Editorial Header */}
      <section className="px-10 md:px-20 max-w-[1600px] mx-auto mb-64 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-9">
            <span className="text-[#c44d2d] font-bold uppercase tracking-[0.5em] text-[10px] mb-12 block">The Technical Index</span>
            <h1 className="text-7xl md:text-[9rem] font-crimson font-bold text-[#1a1a1a] leading-[0.85] tracking-tighter mb-20">
              Blueprints <br />
              <span className="handwritten text-[#c44d2d]">of the</span> <br />
              New <span className="italic">Frontier.</span>
            </h1>
          </div>
          <div className="lg:col-span-3 flex items-end">
            <div className="border-l border-gray-300 pl-8 mb-4">
              <span className="handwritten text-4xl block mb-4">Craftsman's <br />Verification</span>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Specifications updated <br />Jan 2025 / Hyderabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Catalog List */}
      <section className="px-10 md:px-20 max-w-[1500px] mx-auto space-y-40 mb-80">
        {catalog.map((item, i) => (
          <div key={i} className="reveal group grid grid-cols-1 lg:grid-cols-12 gap-20 items-start border-t border-gray-200 pt-20">
            <div className="lg:col-span-1">
              <span className="text-5xl font-crimson font-bold text-gray-200 group-hover:text-[#c44d2d] transition-all">{item.index}.</span>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="text-[#c44d2d] mb-12 transform group-hover:scale-110 transition-transform duration-700">{item.icon}</div>
              <h2 className="text-6xl font-crimson font-bold text-[#1a1a1a] mb-8 group-hover:italic transition-all duration-500">{item.title}</h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-16 max-w-xl font-medium">
                "{item.desc}"
              </p>
              
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-6">Technical Specifications</span>
                <div className="flex flex-wrap gap-4">
                  {item.technical.map((tech, idx) => (
                    <span key={idx} className="px-8 py-3 bg-white border border-gray-100 rounded-none text-xs font-bold uppercase tracking-widest shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Founder's margin annotation */}
              <div className="absolute -right-20 top-0 hidden xl:block">
                 <span className="handwritten text-3xl text-gray-300 -rotate-12 block">Quality <br />Verified.</span>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-20">
              <div className="aspect-[4/3] bg-white border border-gray-100 p-8 shadow-xl relative overflow-hidden group-hover:shadow-2xl transition-all">
                 <div className="absolute inset-0 blueprint-sketch opacity-10">
                   <svg width="100%" height="100%">
                     <pattern id="dot" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                       <circle cx="2" cy="2" r="0.5" fill="black" />
                     </pattern>
                     <rect width="100%" height="100%" fill="url(#dot)" />
                     <line x1="10%" y1="10%" x2="90%" y2="90%" stroke="black" strokeWidth="0.5" />
                   </svg>
                 </div>
                 <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Target size={60} strokeWidth={0.5} className="text-gray-200 group-hover:text-[#c44d2d] transition-colors" />
                 </div>
                 <div className="absolute bottom-6 left-8 text-[9px] font-bold uppercase tracking-[0.5em] text-gray-300">Architecture Sheet / Ref: {item.index}B</div>
              </div>
              <div className="mt-12 text-center">
                <Link to="/contact" className="btn-hand-crafted w-full block text-center">
                   Initiate Specs Review
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* The Master Specification */}
      <section className="py-72 bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="watermark top-0 left-[-5vw] opacity-5">ENGINEERING</div>
        <div className="max-w-[1400px] mx-auto px-10 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-40 items-center relative z-10">
          <div className="reveal">
             <h2 className="text-7xl md:text-9xl font-crimson font-bold mb-12">The <br />Standard.</h2>
             <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-xl mb-20 italic">
               "We do not release features. We release institutional assets that endure for decades."
             </p>
             <div className="space-y-8">
               {[
                 "Kernel-integrated safety protocols.",
                 "Multi-dialect synthesis validation.",
                 "Redundant fail-safe architecture."
               ].map((text, idx) => (
                 <div key={idx} className="flex items-center gap-10">
                    <div className="w-12 h-[1px] bg-[#c44d2d]"></div>
                    <span className="text-lg font-bold uppercase tracking-widest">{text}</span>
                 </div>
               ))}
             </div>
          </div>

          <div className="reveal relative">
             <div className="bg-white/5 backdrop-blur-xl p-20 border border-white/10 rounded-none relative">
                <span className="handwritten text-5xl text-[#c44d2d] mb-12 block">Certification:</span>
                <div className="space-y-12">
                   <div>
                      <div className="text-6xl font-crimson font-bold mb-4">99.99<span className="text-[#c44d2d]">%</span></div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">Service Integrity</div>
                   </div>
                   <div>
                      <div className="text-6xl font-crimson font-bold mb-4">128<span className="text-[#c44d2d]">ms</span></div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">Inference Baseline</div>
                   </div>
                </div>
                {/* Manual Stamp */}
                <div className="absolute bottom-10 right-10 rotate-12 border-4 border-[#c44d2d]/30 text-[#c44d2d]/30 p-4 rounded-xl font-bold uppercase tracking-widest text-xs">
                   Verified By <br />BharatGoAi Labs
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;