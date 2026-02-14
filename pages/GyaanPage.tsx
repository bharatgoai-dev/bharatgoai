import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Copy, Download, Target, Loader2, Command, Zap, Activity, Info } from 'lucide-react';
import { generateTextResponse } from '../services/gemini';

const GyaanPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState('Professional');

  const handleGenerate = async () => {
    if (!prompt.trim() || loading) return;

    setLoading(true);
    try {
      const enhancedPrompt = `System Protocol: ${style}. Institutional Context: BharatGoAi AI Platform Synthesis Tool. Requirement: ${prompt}. (Note: This is an AI-generated output from BharatGoAi Engine)`;
      const response = await generateTextResponse(enhancedPrompt);
      setResult(response || "Protocol failure: Synthesis output null.");
    } catch (error) {
      setResult("SYSTEM ERROR: Connectivity to Hyderabad architectural labs interrupted. Process suspended.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
  };

  return (
    <div className="pt-72 pb-40 px-10 md:px-20 lg:px-32 xl:px-48 max-w-[2400px] mx-auto min-h-screen relative">
      <div className="structural-char top-[-5vh] right-[-8vw] text-[#b33d1d]/[0.012] pointer-events-none select-none">ज्ञ</div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 mb-40 items-end kinetic-reveal">
        <div className="lg:col-span-8 text-left">
          <div className="flex items-center gap-10 mb-12">
            <div className="w-20 h-[1.5px] bg-[#b33d1d]"></div>
            <span className="text-[#b33d1d] font-bold uppercase tracking-[2em] text-[13px] block">Synthesis Module MMXXV // Gyaan Studio</span>
          </div>
          <h1 className="text-[6.5rem] md:text-[12rem] lg:text-[14rem] font-crimson font-bold text-black tracking-tighter leading-[0.75]">Strategic <br /><span className="italic text-gray-200">Synthesis.</span></h1>
        </div>
        
        <div className="lg:col-span-4 lg:text-right">
           <div className="flex items-center justify-end gap-6 mb-10 text-gray-400">
             <Activity size={18} className="text-[#b33d1d]" />
             <span className="text-[11px] font-bold uppercase tracking-[0.5em]">System Status: BharatGoAi Synthesis Tool</span>
           </div>
           <p className="text-4xl text-gray-400 font-light italic font-crimson leading-[1.3] max-w-lg ml-auto">
            "Directing high-compute AI toward the production of mission-critical institutional clarity."
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 xl:gap-40 items-start">
        {/* Command Terminal Input */}
        <div className="lg:col-span-5 kinetic-reveal">
          <div className="bg-white p-14 shadow-[0_120px_240px_-60px_rgba(0,0,0,0.12)] border border-gray-100 bracket-frame bracket-tl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg width="100%" height="100%">
                <pattern id="smallGridGyaan" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="black" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#smallGridGyaan)" />
              </svg>
            </div>

            <div className="flex items-center justify-between mb-16 relative z-10">
               <div className="flex items-center gap-8">
                 <Command size={22} className="text-[#b33d1d]" />
                 <span className="text-[12px] font-bold text-gray-400 uppercase tracking-[1.2em]">Command Protocol</span>
               </div>
               <div className="flex gap-4">
                 {['Enterprise', 'Refined'].map((s) => (
                   <button 
                      key={s}
                      onClick={() => setStyle(s)}
                      className={`px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.4em] transition-all border duration-700 ${style === s ? 'bg-black text-white border-black shadow-xl' : 'bg-transparent text-gray-400 border-gray-100 hover:border-[#b33d1d]'}`}
                   >
                     {s}
                   </button>
                 ))}
               </div>
            </div>
            
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Draft the institutional requirement context for AI synthesis..."
              className="w-full h-[580px] bg-[#faf9f6]/90 border-none p-14 text-3xl text-black font-light focus:ring-4 focus:ring-[#b33d1d]/5 transition-all resize-none leading-[1.6] placeholder:text-gray-200 custom-scrollbar font-crimson italic relative z-10"
            />
            
            <div className="mt-14 relative z-10">
              <button 
                onClick={handleGenerate}
                disabled={loading || !prompt.trim()}
                className="btn-hand-crafted w-full !py-12 bg-black !text-white hover:bg-[#b33d1d] flex items-center justify-center gap-12 text-2xl shadow-4xl group/btn"
              >
                {loading ? <Loader2 size={32} className="animate-spin"/> : <Zap size={28} className="text-[#b33d1d] group-hover/btn:scale-125 transition-transform" />}
                {loading ? "PROCESSING..." : "INITIATE PROTOCOL"}
              </button>
            </div>

            <div className="absolute -bottom-14 -left-14 opacity-20 pointer-events-none hidden md:block select-none">
               <span className="handwritten text-[10rem] text-[#b33d1d] rotate-12 block">Verified_AI.</span>
            </div>
          </div>
        </div>

        {/* Synthesis Result Manifest */}
        <div className="lg:col-span-7 kinetic-reveal">
          <div className="bg-[#0a0a0a] text-white p-16 min-h-[850px] relative flex flex-col bracket-frame bracket-br shadow-5xl overflow-hidden">
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#b33d1d]/10 blur-[150px] rounded-full pointer-events-none"></div>
            
            <div className="flex items-center justify-between mb-20 relative z-10">
               <div className="flex items-center gap-8">
                 <div className="w-4 h-4 bg-[#b33d1d] animate-pulse rounded-full shadow-[0_0_20px_rgba(179,61,29,0.5)]"></div>
                 <span className="text-[12px] font-bold text-white/30 uppercase tracking-[1.2em]">AI Platform Output</span>
               </div>
               {result && (
                 <div className="flex gap-6">
                   <button onClick={copyToClipboard} title="Archive Output" className="w-18 h-18 border border-white/10 flex items-center justify-center hover:border-[#b33d1d] hover:text-[#b33d1d] transition-all duration-700 bg-white/5 backdrop-blur-md p-4"><Copy size={24}/></button>
                   <button className="w-18 h-18 border border-white/10 flex items-center justify-center hover:border-[#b33d1d] hover:text-[#b33d1d] transition-all duration-700 bg-white/5 backdrop-blur-md p-4"><Download size={24}/></button>
                 </div>
               )}
            </div>
            
            <div className="flex-grow overflow-y-auto pr-8 custom-scrollbar relative z-10">
              <AnimatePresence mode="wait">
                {!result && !loading && (
                  <motion.div 
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center px-24 opacity-10"
                  >
                     <Sparkles size={140} strokeWidth={0.3} className="text-white mb-16" />
                     <p className="text-5xl font-crimson font-light italic leading-tight">"Awaiting institutional directive for AI synthesis."</p>
                  </motion.div>
                )}
                
                {loading && (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-14"
                  >
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="h-4 bg-white/5 w-full relative overflow-hidden">
                        <motion.div 
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ repeat: Infinity, duration: 1.8, delay: i * 0.1, ease: "linear" }}
                          className="absolute inset-0 bg-white/10"
                        />
                      </div>
                    ))}
                  </motion.div>
                )}

                {result && (
                  <motion.div 
                    key="result"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl text-white/90 leading-[1.7] whitespace-pre-wrap font-light font-crimson italic selection:bg-[#b33d1d] selection:text-white"
                  >
                    {result}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-16 pt-10 border-t border-white/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-[1.2em] text-white/10 relative z-10">
               <div className="flex items-center gap-4">
                 <Info size={14} className="text-[#b33d1d]" />
                 <span>VERIFIED BHARATGOAI PLATFORM INSTRUMENT</span>
               </div>
               <span>INTEGRITY: ABSOLUTE</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .structural-char {
          position: absolute;
          font-family: 'Noto Serif Devanagari', serif;
          font-weight: 900;
          line-height: 0.5;
          z-index: -1;
        }
      `}</style>
    </div>
  );
};

export default GyaanPage;