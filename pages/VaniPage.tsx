import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Square, Loader2, Target, Command, Mic2, Waves, Activity, Speaker } from 'lucide-react';
import { generateSpeech, decodeAudio } from '../services/gemini';

const VaniPage: React.FC = () => {
  const [text, setText] = useState('Experience the architecture of sound. BharatGoAi Vani Spectrum delivers high-fidelity institutional narration synthesized with absolute emotive precision and cultural nuance.');
  const [voice, setVoice] = useState('Kore');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);

  const voices = [
    { name: 'Kore', gender: 'Female', tone: 'Institutional Narrative', desc: 'Deeply authoritative with a sophisticated regional undercurrent.', color: '#b33d1d' },
    { name: 'Puck', gender: 'Male', tone: 'Executive Command', desc: 'Precise, mission-critical vocal profile for leadership briefs.', color: '#1a1a1a' },
    { name: 'Charon', gender: 'Male', tone: 'Cinematic Depth', desc: 'Grand, resonant acoustic presence for cultural manifests.', color: '#4a4a4a' },
    { name: 'Zephyr', gender: 'Female', tone: 'Elegant Clarity', desc: 'Crystal-clear delivery for high-speed technical orchestration.', color: '#8a8a8a' },
  ];

  const handleSynthesize = async () => {
    if (!text.trim() || isGenerating) return;
    setIsGenerating(true);
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
      }
      const base64Audio = await generateSpeech(text, voice);
      if (base64Audio) {
        const buffer = await decodeAudio(base64Audio, audioContextRef.current);
        if (sourceNodeRef.current) {
          try { sourceNodeRef.current.stop(); } catch(e) {}
        }
        const source = audioContextRef.current.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContextRef.current.destination);
        source.onended = () => setIsPlaying(false);
        sourceNodeRef.current = source;
        source.start(0);
        setIsPlaying(true);
      }
    } catch (error) {
      alert("ACOUSTIC FAILURE: Narration engine synthesis interrupted. Check lab connectivity.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="pt-72 pb-40 px-10 md:px-20 lg:px-32 max-w-[2000px] mx-auto min-h-screen relative">
      <div className="structural-char top-[-5vh] right-[-8vw] text-[#b33d1d]/[0.015] pointer-events-none select-none">वा</div>

      <div className="text-center mb-48 max-w-6xl mx-auto kinetic-reveal">
        <div className="flex items-center justify-center gap-10 mb-16">
          <div className="w-24 h-[1px] bg-[#b33d1d]"></div>
          <span className="text-[#b33d1d] font-bold uppercase tracking-[2.5em] text-[14px] block">Acoustic Orchestration // Vani</span>
          <div className="w-24 h-[1px] bg-[#b33d1d]"></div>
        </div>
        <h1 className="text-[6rem] md:text-[12rem] lg:text-[16rem] font-crimson font-bold text-black tracking-tighter mb-16 leading-[0.75]">Vani <br /><span className="italic text-gray-200">Acoustic.</span></h1>
        <p className="text-4xl text-gray-400 font-light italic font-crimson leading-[1.3] max-w-4xl mx-auto">
          "High-fidelity human-grade narration synthesized by AI for institutional weight and linguistic precision."
        </p>
      </div>

      <div className="bg-white border border-gray-100 p-20 lg:p-32 shadow-[0_150px_300px_-80px_rgba(0,0,0,0.1)] relative overflow-hidden bracket-frame bracket-tl bracket-br kinetic-reveal">
        {/* Advanced Acoustic Visualization Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <AnimatePresence>
            {isPlaying && (
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="w-full h-full flex items-center justify-center"
              >
                <Waves size={1000} strokeWidth={0.1} className="text-[#b33d1d]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-40 relative z-10">
          {/* Voice Profile Orchestration */}
          <div className="lg:col-span-4 space-y-16">
            <div className="space-y-12">
              <div className="flex items-center gap-8 border-b border-black/5 pb-6">
                 <Mic2 size={24} className="text-[#b33d1d]" />
                 <label className="text-[14px] font-bold uppercase tracking-[1.2em] text-gray-400">Acoustic Profile</label>
              </div>
              <div className="space-y-8">
                {voices.map((v, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setVoice(v.name)}
                    className={`w-full p-12 border text-left transition-all duration-[1.2s] group relative overflow-hidden shadow-sm ${
                      voice === v.name ? 'bg-black border-black text-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] translate-x-6' : 'bg-[#faf9f6] border-gray-100 text-gray-400 hover:bg-white hover:border-[#b33d1d]'
                    }`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                         <span className="text-4xl font-crimson font-bold italic transition-colors duration-[1s] group-hover:text-[#b33d1d]">{v.name}</span>
                         <Volume2 size={28} className={voice === v.name ? 'text-[#b33d1d] animate-pulse' : 'text-gray-100'} />
                      </div>
                      <div className={`text-[11px] font-bold uppercase tracking-[0.5em] mb-4 ${voice === v.name ? 'text-white/40' : 'text-gray-300'}`}>
                        {v.gender} // {v.tone}
                      </div>
                      <p className={`text-lg font-crimson font-medium italic leading-relaxed transition-opacity duration-[1.2s] ${voice === v.name ? 'text-white/60 opacity-100' : 'text-gray-200 opacity-50'}`}>
                        "{v.desc}"
                      </p>
                    </div>
                    {voice === v.name && (
                      <div className="absolute right-0 top-0 bottom-0 w-3" style={{ backgroundColor: v.color }}></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Script Narrative Terminal */}
          <div className="lg:col-span-8 space-y-20">
            <div className="space-y-12">
               <div className="flex items-center justify-between border-b border-black/5 pb-8">
                <div className="flex items-center gap-8">
                  <Command size={24} className="text-[#b33d1d]" />
                  <label className="text-[14px] font-bold uppercase tracking-[1.2em] text-gray-400">Script Narrative Architecture</label>
                </div>
                <div className="flex items-center gap-6">
                   <Activity size={18} className="text-green-500 animate-pulse" />
                   <span className="text-[11px] font-bold text-gray-200 uppercase tracking-[0.6em]">{text.length} / 1200 Chars Protocol</span>
                </div>
              </div>
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full bg-[#faf9f6] border-none p-20 min-h-[500px] focus:ring-8 focus:ring-[#b33d1d]/5 transition-all text-5xl text-black font-crimson leading-[1.7] resize-none shadow-inner font-light italic placeholder:text-gray-200 custom-scrollbar relative"
                placeholder="Compose the institutional narrative script for acoustic synthesis..."
              />
              <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden xl:block opacity-10 pointer-events-none">
                 <Speaker size={300} strokeWidth={0.1} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 pt-12">
              <button 
                onClick={handleSynthesize}
                disabled={isGenerating || !text.trim()}
                className="btn-hand-crafted flex-grow !py-16 bg-black !text-white hover:bg-[#b33d1d] flex items-center justify-center gap-16 text-3xl shadow-[0_80px_160px_-40px_rgba(0,0,0,0.4)] group/vocal"
              >
                {isGenerating ? <Loader2 className="animate-spin" size={48} /> : <Target size={48} className="text-[#b33d1d] group-hover/vocal:scale-125 transition-transform duration-[1s]" />}
                {isGenerating ? "ORCHESTRATING..." : "INITIATE NARRATION"}
              </button>
              
              <AnimatePresence>
                {isPlaying && (
                  <motion.button 
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    onClick={() => {
                      if (sourceNodeRef.current) {
                        try { sourceNodeRef.current.stop(); } catch(e) {}
                      }
                      setIsPlaying(false);
                    }}
                    className="py-16 px-24 border-[3px] border-red-100 text-red-500 font-bold uppercase tracking-[0.8em] text-sm flex items-center justify-center gap-8 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-[0_40px_80px_-20px_rgba(220,38,38,0.2)] duration-[0.8s]"
                  >
                    <Square size={32} /> ABORT
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
            
            <div className="flex items-center gap-12 pt-16 opacity-10 hover:opacity-50 transition-opacity duration-[1s] group/footer">
               <div className="w-20 h-[1.5px] bg-black group-hover/footer:w-40 transition-all duration-[1s]"></div>
               <span className="text-[10px] font-bold uppercase tracking-[1.5em]">REFERENCE SHEET: ACOUSTIC_CORE_V.01_BHARATGOAI</span>
               <div className="flex-grow h-[1px] bg-black/5"></div>
               <span className="text-[10px] font-bold uppercase tracking-[1.2em] text-[#b33d1d]">HYDERABAD LABS SIGNATURE</span>
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

export default VaniPage;