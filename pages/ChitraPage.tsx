import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Download, Share2, Loader2, Target, Command, ArrowRight, Aperture } from 'lucide-react';
import { generateImage } from '../services/gemini';
import { ChitraImage } from '../types';

const ChitraPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<"1:1" | "16:9" | "9:16">("1:1");
  const [images, setImages] = useState<ChitraImage[]>([]);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim() || generating) return;
    
    setGenerating(true);
    try {
      const url = await generateImage(prompt, aspectRatio);
      setImages(prev => [{
        id: Date.now().toString(),
        url,
        prompt,
        createdAt: new Date()
      }, ...prev]);
    } catch (error) {
      alert("SYNTHESIS FAILED: Visual render engine disconnected. Error captured.");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="pt-72 pb-40 px-10 md:px-20 lg:px-32 max-w-[2400px] mx-auto min-h-screen relative">
      <div className="structural-char top-[-10vh] left-[-15vw] text-black/[0.012] pointer-events-none select-none">चित्र</div>

      <div className="flex flex-col lg:flex-row gap-32 lg:gap-60 items-start">
        {/* Render Control Console */}
        <div className="w-full lg:w-[650px] lg:sticky lg:top-60">
          <div className="kinetic-reveal mb-32">
             <div className="flex items-center gap-10 mb-16">
               <div className="w-24 h-[1px] bg-[#b33d1d]"></div>
               <span className="text-[#b33d1d] font-bold uppercase tracking-[2.5em] text-[13px] block">Visual Render Engine // Chitra</span>
             </div>
             <h1 className="text-[6rem] md:text-[10rem] lg:text-[12rem] font-crimson font-bold text-black tracking-tighter leading-[0.75] mb-16">Chitra <br /><span className="italic text-gray-200">Render.</span></h1>
             <p className="text-4xl text-gray-400 font-light italic font-crimson leading-[1.3] max-w-xl">
              "Directing BharatGoAi Visual Synthesis toward the creation of high-fidelity institutional assets with absolute cultural precision."
             </p>
          </div>

          <div className="space-y-20 kinetic-reveal">
            <div className="space-y-10">
              <div className="flex items-center gap-10">
                 <Aperture size={24} className="text-[#b33d1d] animate-spin-slow" />
                 <label className="text-[13px] font-bold uppercase tracking-[1em] text-gray-300">Visualization Directive</label>
              </div>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Draft the cinematic, technical, or architectural parameters for the manifest..."
                className="w-full bg-white border border-gray-100 p-20 min-h-[350px] focus:ring-8 focus:ring-[#b33d1d]/5 transition-all text-3xl text-black font-light leading-[1.6] resize-none shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] placeholder:text-gray-200 font-crimson italic shadow-inner"
              />
            </div>

            <div className="space-y-10">
              <label className="text-[13px] font-bold uppercase tracking-[1em] text-gray-300 ml-4">Frame Geometry Architecture</label>
              <div className="grid grid-cols-3 gap-10">
                {(["1:1", "16:9", "9:16"] as const).map(ratio => (
                  <button 
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`py-8 border text-[11px] font-bold uppercase tracking-[0.8em] transition-all duration-[1s] shadow-sm ${
                      aspectRatio === ratio 
                      ? 'bg-black text-white border-black shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] scale-105' 
                      : 'bg-transparent border-gray-100 text-gray-400 hover:border-[#b33d1d] hover:bg-white'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={generating || !prompt.trim()}
              className="btn-hand-crafted w-full !py-14 bg-black !text-white hover:bg-[#b33d1d] flex items-center justify-center gap-16 text-3xl shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] group/render"
            >
              {generating ? <Loader2 className="animate-spin" size={40} /> : <Target size={40} className="text-[#b33d1d] group-hover/render:scale-125 transition-transform" />}
              {generating ? "RENDERING ASSET..." : "INITIATE RENDER"}
            </button>
            
            <p className="text-center text-[10px] font-bold uppercase tracking-[1.2em] text-gray-300 pt-6">BharatGoAi Visual System V.01 Enterprise</p>
          </div>
        </div>

        {/* Master Render Gallery Ledger */}
        <div className="flex-grow kinetic-reveal w-full">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-24">
            <AnimatePresence mode="popLayout">
              {generating && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-[#faf9f6] aspect-[4/5] flex flex-col items-center justify-center border border-gray-100 relative overflow-hidden bracket-frame bracket-tl shadow-inner group"
                  >
                      <div className="w-64 h-2 bg-black/5 mb-16 relative overflow-hidden shadow-inner">
                        <motion.div 
                           initial={{ x: '-100%' }}
                           animate={{ x: '100%' }}
                           transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                           className="absolute inset-0 bg-[#b33d1d]"
                        />
                      </div>
                      <p className="font-bold text-gray-300 uppercase tracking-[2.5em] text-[12px] ml-6">RENDERING ARCHIVE</p>
                      
                      {/* Kinetic Detail */}
                      <div className="absolute top-10 right-10 flex gap-2">
                         <div className="w-2 h-2 bg-[#b33d1d] rounded-full animate-ping"></div>
                         <div className="w-2 h-2 bg-[#b33d1d] rounded-full"></div>
                      </div>
                  </motion.div>
              )}

              {images.length === 0 && !generating && (
                <div className="col-span-full py-[20vh] text-center bg-[#faf9f6] border border-dashed border-gray-100 bracket-frame bracket-tl bracket-br">
                  <div className="relative inline-block mb-20">
                     <ImageIcon size={160} strokeWidth={0.2} className="text-gray-100 mx-auto" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-black/[0.03] rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-7xl font-crimson font-bold mb-10 text-black italic leading-tight">The Visual Archive is Void.</h3>
                  <p className="text-4xl text-gray-300 font-light italic font-crimson max-w-2xl mx-auto">"Synthesize your first visual manifest to occupy this institutional space."</p>
                </div>
              )}

              {images.map((img, idx) => (
                <motion.div 
                  key={img.id}
                  layout
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-white p-14 border border-gray-100 shadow-[0_150px_300px_-80px_rgba(0,0,0,0.15)] hover:shadow-[0_200px_400px_-100px_rgba(0,0,0,0.25)] transition-all duration-[2s]"
                >
                  <div className={`overflow-hidden mb-16 relative shadow-2xl ${aspectRatio === "9:16" ? 'aspect-[9/16]' : aspectRatio === "16:9" ? 'aspect-[16/9]' : 'aspect-square'}`}>
                    <img src={img.url} alt={img.prompt} className="w-full h-full object-cover transform scale-120 group-hover:scale-100 transition-all duration-[8s] grayscale-[50%] group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex items-center justify-center pointer-events-none">
                       <span className="text-[12px] font-bold text-white uppercase tracking-[2.5em] translate-y-16 group-hover:translate-y-0 transition-transform duration-[1s]">ASSET SYNTHESIZED</span>
                    </div>
                  </div>
                  
                  <div className="space-y-12">
                    <p className="text-4xl font-crimson font-light text-black/50 italic leading-tight line-clamp-2 group-hover:text-black transition-colors duration-1000">"{img.prompt}"</p>
                    
                    <div className="flex justify-between items-center pt-12 border-t border-black/5">
                      <div className="flex gap-12">
                        <button 
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = img.url;
                            link.download = `bh-asset-${img.id}.png`;
                            link.click();
                          }}
                          className="w-20 h-20 bg-black text-white flex items-center justify-center hover:bg-[#b33d1d] transition-all duration-700 shadow-2xl hover:scale-110"
                        >
                          <Download size={28} />
                        </button>
                        <button className="w-20 h-20 bg-white border border-gray-100 text-gray-200 hover:text-[#b33d1d] transition-all duration-700 hover:scale-110">
                          <Share2 size={28} />
                        </button>
                      </div>
                      <div className="text-right">
                         <span className="text-[11px] font-bold uppercase tracking-[1.2em] text-gray-200 block mb-2">MANIFEST_ID</span>
                         <span className="text-xl font-crimson font-bold text-gray-400">REF_{img.id.slice(-6)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Luxury Stamp Aesthetic */}
                  <div className="absolute -bottom-10 -right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s] rotate-[-15deg] pointer-events-none">
                    <div className="border-[3px] border-[#b33d1d]/30 p-6 rounded-2xl">
                       <span className="handwritten text-7xl text-[#b33d1d] block">High-Fidelity.</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .structural-char {
          position: absolute;
          font-family: 'Noto Serif Devanagari', serif;
          font-weight: 900;
          line-height: 0.6;
          z-index: -1;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ChitraPage;