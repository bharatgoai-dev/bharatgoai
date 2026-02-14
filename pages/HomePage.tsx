import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight,
  Target,
  Command,
  Activity,
  Shield,
  Zap,
  Globe,
  Cpu,
  Layers,
  Lock,
  Boxes,
  Database,
  Search
} from 'lucide-react';

const HomePage: React.FC = () => {
  const { scrollY } = useScroll();
  
  // High-fidelity Parallax Mapping
  const yDepth1 = useTransform(scrollY, [0, 3000], [0, -1000]);
  const yDepth2 = useTransform(scrollY, [0, 3500], [400, -1200]);
  const yHeroText = useTransform(scrollY, [0, 1000], [0, -250]);
  const opacityHero = useTransform(scrollY, [0, 800], [1, 0]);
  const scaleHeroImg = useTransform(scrollY, [0, 1200], [1, 1.25]);
  const rotatePlate = useSpring(useTransform(scrollY, [0, 2000], [3, -7]), { stiffness: 40, damping: 25 });

  return (
    <div className="relative selection:bg-[#b33d1d] selection:text-white">
      {/* Structural Backdrop Kinetic Characters */}
      <motion.div 
        style={{ y: yDepth1 }}
        className="structural-char top-[-5vh] left-[-15vw] md:left-[-6vw] text-[#b33d1d]/[0.015] pointer-events-none select-none"
      >
        भ
      </motion.div>
      <motion.div 
        style={{ y: yDepth2 }}
        className="structural-char bottom-0 right-[-12vw] text-black/[0.008] pointer-events-none select-none"
      >
        रा
      </motion.div>

      {/* Hero: Enterprise AI Platform Foundation */}
      <section className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 xl:px-40 max-w-[2400px] mx-auto relative pt-48 lg:pt-0">
        
        {/* Editorial Grid Markers for Perfect Alignment */}
        <div className="hidden xl:block absolute left-32 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-black/[0.08] to-transparent"></div>
        <div className="hidden xl:block absolute left-0 right-0 top-[60%] h-[1px] bg-gradient-to-r from-transparent via-black/[0.06] to-transparent"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-40 items-center w-full relative z-10">
          <motion.div 
            style={{ y: yHeroText, opacity: opacityHero }}
            className="lg:col-span-8 xl:pl-24"
          >
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-10 mb-12">
                <div className="w-20 h-[2px] bg-[#b33d1d]"></div>
                <span className="text-[11px] font-bold uppercase tracking-[1em] text-[#b33d1d] animate-pulse">Enterprise AI Infrastructure // Protocol MMXXV</span>
              </div>
              
              <h1 className="text-[clamp(4rem,14vw,17rem)] font-crimson font-bold text-black leading-[0.75] tracking-tighter mb-16 flex flex-col items-start">
                <span className="block">Building</span>
                <span className="text-[#b33d1d] italic py-4">Bharat's AI</span>
                <span className="flex items-center gap-10">
                   <span className="font-signature text-[0.42em] text-gray-200 align-middle inline-block opacity-40">for</span>
                   <span>Everyone.</span>
                </span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="max-w-5xl lg:pl-2"
            >
              <p className="text-3xl md:text-5xl lg:text-6xl text-gray-400 font-light leading-[1.3] mb-24 italic font-crimson">
                "We architect the <span className="text-black font-bold not-italic border-b-8 border-[#b33d1d]/10 pb-2">autonomous AI infrastructure</span> required for the Indian century’s digital future."
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-16 xl:gap-32">
                <Link to="/solutions" className="btn-hand-crafted !px-16 !py-8 text-lg group shadow-3xl">
                  <span className="relative z-10">Launch Platform</span>
                  <ArrowRight size={24} className="inline ml-10 group-hover:translate-x-12 transition-all duration-[0.8s]" />
                </Link>
                <div className="flex flex-col gap-6 border-l-2 border-black/5 pl-12">
                   <div className="flex items-center gap-6 text-gray-400">
                      <Database size={18} className="text-[#b33d1d]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.5em]">PLATFORM_CORE: BHARAT_AI_V1</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)] animate-pulse"></div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 italic">High-Compute Infrastructure Live</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Master Card: The Architectural Matrix */}
          <motion.div 
            style={{ rotate: rotatePlate }}
            className="lg:col-span-4 relative hidden lg:block"
          >
            <div className="bg-white p-14 shadow-[0_150px_300px_-80px_rgba(0,0,0,0.2)] border border-gray-100 relative group overflow-hidden bracket-frame bracket-tl bracket-br">
              <div className="aspect-[3/4.5] overflow-hidden grayscale contrast-110 hover:grayscale-0 transition-all duration-[3.5s] mb-14 relative">
                 <motion.img 
                   style={{ scale: scaleHeroImg }}
                   src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                   alt="Enterprise AI Engine Kernel" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-[#b33d1d]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="absolute top-16 -right-36 transform rotate-90 origin-left">
                 <span className="text-[11px] font-bold uppercase tracking-[2.2em] text-gray-200">AI_PLATFORM_V.01_BHARATGOAI</span>
              </div>

              <div className="px-8 pb-8 border-l-8 border-[#b33d1d] text-left">
                <h4 className="font-crimson text-5xl font-bold mb-6 tracking-tight">The Kernel</h4>
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.8em] italic">Simple Identity Verification.</p>
              </div>
              
              <div className="absolute -bottom-16 -right-16 opacity-30 select-none pointer-events-none group-hover:scale-110 transition-transform duration-[2s]">
                 <span className="handwritten text-9xl text-[#b33d1d] -rotate-15 block">Bharat_AI.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verification Ledger (Live Platform Metrics) */}
      <section className="py-16 bg-[#0a0a0a] overflow-hidden border-y border-white/5 relative z-20">
        <div className="flex whitespace-nowrap animate-marquee gap-80">
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="flex gap-80 items-center">
                <span className="text-[12px] font-bold uppercase tracking-[1.8em] text-white/40 flex items-center gap-10">
                  <Activity size={18} className="text-[#b33d1d]" /> AI_STABILITY: 99.9%
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[1.8em] text-white/40 flex items-center gap-10">
                  <Globe size={18} className="text-[#b33d1d]" /> INDIC_SYNC: NATIVE_TIER
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[1.8em] text-white/40 flex items-center gap-10">
                  <Shield size={18} className="text-[#b33d1d]" /> ARCHITECTURE: ENTERPRISE
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[1.8em] text-white/40 flex items-center gap-10">
                  <Cpu size={18} className="text-[#b33d1d]" /> HW_COMPUTE: LOCAL_CORE
                </span>
             </div>
           ))}
        </div>
      </section>

      {/* The Pillars of Bharat's AI Future */}
      <section className="py-80 bg-white relative overflow-hidden border-b border-black/5">
        <div className="max-w-[2100px] mx-auto px-10 md:px-24 xl:px-32">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-72 items-end kinetic-reveal">
              <div className="lg:col-span-8 text-left">
                 <span className="text-[#b33d1d] font-bold uppercase tracking-[1.8em] text-[13px] mb-14 block">PLATFORM_DIRECTIVES // BHARATGOAI</span>
                 <h2 className="text-8xl md:text-[14rem] lg:text-[16rem] font-crimson font-bold text-black leading-[0.72] tracking-tighter">
                   Platform <br /> <span className="italic text-gray-200 ml-16 md:ml-32">for</span> <br /> Local Growth.
                 </h2>
              </div>
              <div className="lg:col-span-4 lg:text-right border-l-8 lg:border-l-0 lg:border-r-8 border-[#b33d1d] pl-16 lg:pl-0 lg:pr-16 pb-10 text-left md:text-right">
                 <p className="text-4xl text-gray-400 font-light italic leading-relaxed font-crimson max-w-md md:ml-auto">
                   "BharatGoAi is the enterprise AI platform for long-term growth. We build intelligence that respects Bharat's needs."
                 </p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 xl:gap-24">
              {[
                { 
                  title: "Indic Sync", 
                  desc: "Native fluency across 22+ languages. The platform understands local dialects perfectly.",
                  icon: <Globe strokeWidth={1} size={56} />,
                  tag: "Linguistic Platform"
                },
                { 
                  title: "Private Kernels", 
                  desc: "Secure AI tools engineered for private execution with zero data egress.",
                  icon: <Lock strokeWidth={1} size={56} />,
                  tag: "Security Tier"
                },
                { 
                  title: "Edge Orchestration", 
                  desc: "Mission-critical AI tools designed for real-time local infrastructure.",
                  icon: <Zap strokeWidth={1} size={56} />,
                  tag: "High-Speed AI"
                },
                { 
                  title: "Logic Synthesis", 
                  desc: "Multi-layered reasoning architecture tailored for Indian complexity.",
                  icon: <Layers strokeWidth={1} size={56} />,
                  tag: "Advanced Synthesis"
                }
              ].map((pillar, i) => (
                <div key={i} className="kinetic-reveal group p-14 bg-[#faf9f6] border border-transparent hover:border-[#b33d1d]/30 transition-all duration-[1.5s] hover:shadow-[0_120px_240px_-60px_rgba(0,0,0,0.12)] relative overflow-hidden text-left">
                   <div className="text-[#b33d1d] mb-16 group-hover:scale-125 transition-transform duration-[0.8s]">
                      {pillar.icon}
                   </div>
                   <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-gray-300 mb-6 block">{pillar.tag}</span>
                   <h3 className="text-5xl font-crimson font-bold text-black mb-8 group-hover:translate-x-4 transition-transform duration-[0.8s]">{pillar.title}</h3>
                   <p className="text-2xl text-gray-400 font-light italic leading-relaxed font-crimson">"{pillar.desc}"</p>
                   
                   <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Boxes size={20} className="text-[#b33d1d]" />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Visual Narrative Gallery */}
      <section className="py-80 px-10 md:px-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        <motion.div 
           style={{ x: useTransform(scrollY, [3500, 7500], [500, -500]) }}
           className="absolute top-32 left-0 text-[35vw] font-black text-white/[0.015] pointer-events-none tracking-tighter select-none"
        >
          BHARAT
        </motion.div>

        <div className="max-w-[2100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 xl:gap-40 items-start relative z-10">
           <div className="lg:col-span-5 lg:sticky lg:top-60 kinetic-reveal text-left">
              <span className="text-[#b33d1d] font-bold uppercase tracking-[2em] text-[13px] mb-16 block">AI STUDIO // EXHIBITION</span>
              <h2 className="text-[7.5rem] md:text-[11rem] lg:text-[14rem] font-crimson font-bold leading-[0.8] tracking-tighter mb-24">
                Platform <br /> <span className="handwritten text-[#b33d1d] text-[0.6em] align-middle opacity-80">of</span> <br /> Vision.
              </h2>
              <p className="text-4xl text-gray-500 font-light leading-relaxed mb-32 italic font-crimson max-w-lg">
                "BharatGoAi's AI-driven visual tools enable high-fidelity synthesis that respects the aesthetic soul of Bharat."
              </p>
              <Link to="/chitra" className="btn-hand-crafted border-white/20 text-white group !px-20 !py-10">
                Launch Visual Studio
                <ArrowUpRight size={28} className="inline ml-10 group-hover:translate-x-10 group-hover:-translate-y-10 transition-all duration-[0.8s]" />
              </Link>
           </div>

           <div className="lg:col-span-7 space-y-[45vh] kinetic-reveal">
              {[
                { 
                  img: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1936&auto=format&fit=crop", 
                  title: "Cultural Synthesis", 
                  ref: "MANIFEST_01_AI_SYNC" 
                },
                { 
                  img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", 
                  title: "Institutional Foundation", 
                  ref: "CORE_MANIFEST_02_ENT" 
                }
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                   <div className="aspect-[16/10] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-[4s] shadow-5xl">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-[6s]" />
                   </div>
                   <div className="absolute -bottom-28 left-0 right-0 flex justify-between items-end border-b border-white/10 pb-16">
                      <h4 className="text-6xl font-crimson font-bold italic tracking-tight">{item.title}</h4>
                      <span className="text-[12px] font-bold uppercase tracking-[1.5em] text-[#b33d1d]">{item.ref}</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Protocol Final Manifesto */}
      <section className="py-[40vh] px-10 text-center relative overflow-hidden bg-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vw] border border-black/[0.02] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[65vw] border border-black/[0.03] rounded-full pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto relative z-10 kinetic-reveal">
           <span className="text-[#b33d1d] font-bold uppercase tracking-[2.5em] text-[16px] mb-24 block">The Conclusion</span>
           <h2 className="text-[clamp(6rem,20vw,26rem)] font-crimson font-bold leading-[0.7] tracking-tighter mb-44 text-black text-center">
              Build <br />
              <span className="handwritten font-normal text-[#b33d1d] text-[0.55em] align-middle -mt-16 inline-block opacity-80">with</span> <br />
              Bharat.
           </h2>
           
           <p className="text-4xl md:text-7xl text-gray-400 font-light max-w-[85%] mx-auto leading-tight mb-64 italic font-crimson">
              "We invite the institutions of the subcontinent to establish the leading standard using the BharatGoAi AI Platform."
           </p>

           <div className="flex flex-col md:flex-row items-center justify-center gap-24 lg:gap-32">
              <Link to="/contact" className="btn-hand-crafted !px-32 !py-16 text-3xl group shadow-3xl bg-black !text-white hover:bg-[#b33d1d] hover:scale-105">
                Establish Protocol
              </Link>
              <Link to="/about" className="group flex items-center gap-14 font-bold uppercase tracking-[1.8em] text-[15px] hover:text-[#b33d1d] transition-all duration-[0.8s]">
                The Philosophy <ArrowRight className="group-hover:translate-x-16 transition-transform duration-[0.8s]" size={60} strokeWidth={1} />
              </Link>
           </div>
        </div>

        {/* Signature Annotations */}
        <div className="mt-[40vh] pt-40 border-t border-black/[0.06] grid grid-cols-1 md:grid-cols-3 gap-24 items-center text-[12px] font-bold uppercase tracking-[1.8em] text-gray-300">
           <div className="text-left flex items-center gap-12">
              <div className="w-16 h-[2px] bg-gray-200"></div>
              ORIGIN: HYDERABAD MASTER LABS
           </div>
           <div className="text-center">© 2025 BHARATGOAI PLATFORM</div>
           <div className="text-right flex items-center justify-end gap-16">
              <span>EST. MMXXV / IV / BHARAT AI</span>
              <div className="w-24 h-[1px] bg-gray-200"></div>
           </div>
        </div>
      </section>

      <style>{`
        .structural-char {
          position: absolute;
          font-family: 'Noto Serif Devanagari', serif;
          font-weight: 900;
          font-size: clamp(40vw, 75vw, 95vw);
          line-height: 0.5;
          user-select: none;
          z-index: -1;
        }
      `}</style>
    </div>
  );
};

export default HomePage;