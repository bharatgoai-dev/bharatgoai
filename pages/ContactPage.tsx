import React, { useState } from 'react';
import { Send, Mail, Phone, Globe, ArrowRight, ShieldCheck, PenTool } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    context: ''
  });

  const handleInitiate = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Institutional Specification Request: ${formData.name}`);
    const body = encodeURIComponent(
      `Identity: ${formData.name}\n` +
      `Enterprise Domain: ${formData.email}\n\n` +
      `Contextual Requirement:\n${formData.context}\n\n` +
      `--- Generated via BharatGoAi Manifest Architecture ---`
    );
    window.location.href = `mailto:bharatgoai.info@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-52 pb-48 relative">
      <div className="watermark top-20 right-[-5vw] opacity-[0.03]">CONNECT</div>
      
      <section className="px-10 md:px-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
          
          {/* Left: Branding & Connection Info */}
          <div className="lg:col-span-5 reveal">
            <div className="mb-12 flex items-center gap-4">
              <PenTool size={16} className="text-[#c44d2d]" />
              <span className="text-[#c44d2d] font-bold uppercase tracking-[0.6em] text-[10px] block">Institutional Portal</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-crimson font-bold text-[#1a1a1a] leading-[0.8] tracking-tighter mb-16">
              Establish <br />
              <span className="handwritten text-[#c44d2d]">the</span> <br />
              Protocol.
            </h1>
            
            <p className="text-2xl text-[#4a4a4a] font-medium leading-relaxed mb-32 max-w-sm italic">
              "We prioritize direct partnerships. Every connection is a drafting of Bharat's AI future."
            </p>

            <div className="space-y-20 relative">
              {/* Vertical Drafting Line */}
              <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-gray-200 hidden md:block"></div>

              {[
                { icon: <Mail size={32} />, label: "Electronic Archive", val: "bharatgoai.info@gmail.com", link: "mailto:bharatgoai.info@gmail.com" },
                { icon: <Phone size={32} />, label: "Voice Frequency", val: "+91 9494006530", link: "tel:9494006530" },
                { icon: <Globe size={32} />, label: "Origin Base", val: "Hyderabad, Telangana", link: null }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-14 relative z-10 group">
                  <div className="w-24 h-24 bg-white border border-gray-100 rounded-none flex items-center justify-center text-[#1a1a1a] shadow-sm group-hover:border-[#c44d2d] group-hover:shadow-xl transition-all duration-700">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] block mb-3">{item.label}</span>
                    {item.link ? (
                      <a href={item.link} className="text-3xl font-crimson font-bold text-[#1a1a1a] hover:text-[#c44d2d] transition-colors">{item.val}</a>
                    ) : (
                      <p className="text-3xl font-crimson font-bold text-[#1a1a1a]">{item.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Physical Document Form */}
          <div className="lg:col-span-7 reveal lg:sticky lg:top-40">
            <div className="bg-white rounded-none p-16 md:p-24 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.12)] border border-gray-100 relative overflow-hidden">
               {/* Aesthetic Red Corner Fold */}
               <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#f9f9f9] border-l border-b border-gray-200 rotate-45 transform origin-top-right"></div>
               </div>

               <div className="mb-20 flex justify-between items-start">
                  <div>
                    <h2 className="text-5xl font-crimson font-bold text-[#1a1a1a] mb-4">Institutional <span className="italic">Manifest</span>.</h2>
                    <span className="handwritten text-3xl text-[#c44d2d]">Confidential Record / 2025</span>
                  </div>
                  <ShieldCheck size={48} className="text-gray-200" strokeWidth={1} />
               </div>

               <form className="space-y-16" onSubmit={handleInitiate}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                     <div className="space-y-4 group relative">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em] ml-2 group-focus-within:text-[#c44d2d] transition-colors">Nominal Identity</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Full Name" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-[#faf9f6] border-none border-b border-gray-100 p-8 text-[#1a1a1a] font-bold text-xl focus:ring-0 focus:bg-white transition-all placeholder:text-gray-300" 
                        />
                        {/* Drafting line */}
                        <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c44d2d] group-focus-within:w-full transition-all duration-700"></div>
                     </div>
                     <div className="space-y-4 group relative">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em] ml-2 group-focus-within:text-[#c44d2d] transition-colors">Enterprise Frequency</label>
                        <input 
                          required
                          type="email" 
                          placeholder="institutional@domain.in" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-[#faf9f6] border-none border-b border-gray-100 p-8 text-[#1a1a1a] font-bold text-xl focus:ring-0 focus:bg-white transition-all placeholder:text-gray-300" 
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c44d2d] group-focus-within:w-full transition-all duration-700"></div>
                     </div>
                  </div>
                  
                  <div className="space-y-4 group relative">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em] ml-2 group-focus-within:text-[#c44d2d] transition-colors">Mission Context</label>
                    <textarea 
                      required
                      placeholder="Outline the architectural requirements of your institution..." 
                      value={formData.context}
                      onChange={(e) => setFormData({...formData, context: e.target.value})}
                      className="w-full h-64 bg-[#faf9f6] border-none p-10 text-[#1a1a1a] font-bold text-xl focus:ring-0 focus:bg-white transition-all resize-none placeholder:text-gray-300 leading-relaxed" 
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c44d2d] group-focus-within:w-full transition-all duration-700"></div>
                    <div className="absolute -right-8 -top-8 hidden md:block">
                       <span className="handwritten text-4xl text-gray-200 rotate-12">Detailed <br />specs please.</span>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button type="submit" className="w-full py-10 bg-[#1a1a1a] text-white font-bold text-2xl uppercase tracking-[0.3em] flex items-center justify-center gap-8 hover:bg-[#c44d2d] transition-all shadow-2xl relative group">
                      Initiate Protocol <Send size={28} className="group-hover:translate-x-3 transition-transform" />
                      
                      {/* Architectural stamp annotation */}
                      <div className="absolute -bottom-12 right-0 hidden lg:block">
                        <div className="border-2 border-[#c44d2d]/20 text-[#c44d2d]/20 px-4 py-1 rounded-lg text-[10px] font-black uppercase rotate-6">
                          Seal of Excellence
                        </div>
                      </div>
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.6em]">
                      BharatGoAi Intelligence • 2025
                    </p>
                  </div>
               </form>

               {/* Stylized Paper Hole Punches */}
               <div className="absolute left-6 top-1/2 -translate-y-1/2 space-y-24 opacity-20 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Verification Strip */}
      <section className="mt-60 py-32 bg-white/50 backdrop-blur-xl border-y border-gray-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-10 md:px-20 flex flex-wrap justify-between items-center gap-16">
           <div className="flex items-center gap-8 reveal">
              <span className="handwritten text-5xl text-[#c44d2d]">V.01</span>
              <span className="text-[11px] font-bold text-[#1a1a1a] uppercase tracking-[0.5em]">Global Communication Standard</span>
           </div>
           <div className="h-12 w-[1px] bg-gray-200 hidden lg:block"></div>
           <div className="flex items-center gap-8 reveal" style={{ transitionDelay: '0.2s' }}>
              <span className="handwritten text-5xl text-[#c44d2d]">HQ</span>
              <span className="text-[11px] font-bold text-[#1a1a1a] uppercase tracking-[0.5em]">Verified Hyderabad Origin</span>
           </div>
           <div className="h-12 w-[1px] bg-gray-200 hidden lg:block"></div>
           <div className="flex items-center gap-8 reveal" style={{ transitionDelay: '0.4s' }}>
              <ShieldCheck size={32} className="text-[#c44d2d]" />
              <span className="text-[11px] font-bold text-[#1a1a1a] uppercase tracking-[0.5em]">Encrypted Data Control</span>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;