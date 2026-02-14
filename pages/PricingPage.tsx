import React from 'react';
import { Check, Zap, Crown, Rocket, ArrowRight } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: "Bhiksha (Foundation)",
      price: "₹0",
      icon: <Zap size={32} className="text-slate-400" />,
      features: [
        "Base API Infrastructure",
        "Public Documentation",
        "Community Access",
        "Sandbox Environment"
      ],
      cta: "Explore Foundation",
      popular: false
    },
    {
      name: "Kshamta (Enterprise)",
      price: "₹4,999",
      period: "/month",
      icon: <Rocket size={32} className="text-[#e8633b]" />,
      features: [
        "Priority Architecture Quotas",
        "Indic NLP Optimization",
        "High-Res Visual Synthesis",
        "Direct Support Channel",
        "Full Commercial Rights"
      ],
      cta: "Start Deployment",
      popular: true
    },
    {
      name: "Varchasva (Bharat)",
      price: "Custom",
      icon: <Crown size={32} className="text-yellow-700" />,
      features: [
        "On-Premise Deployment",
        "Bespoke Model Synthesis",
        "Dedicated Support Matrix",
        "Unlimited Bandwidth",
        "Institutional SLA"
      ],
      cta: "Contact Solutions",
      popular: false
    }
  ];

  return (
    <div className="pt-52 pb-32">
      <div className="reveal text-center mb-48 px-10">
        <span className="text-[#e8633b] font-bold uppercase tracking-[0.45em] text-[11px] mb-10 block">Investment Tiers</span>
        <h1 className="text-6xl md:text-[9rem] font-crimson font-bold text-[#0d0d0d] mb-14 leading-[0.85] tracking-tighter">Scale with <br/><span className="italic text-[#e8633b]">Confidence.</span></h1>
        <p className="text-2xl md:text-3xl text-[#5f5f5f] font-medium max-w-4xl mx-auto leading-relaxed">
          Infrastructure engineered for the global Indian enterprise. Transparent frameworks for world-class growth.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-10 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-stretch">
          {plans.map((plan, i) => (
            <div key={i} className={`reveal flex flex-col h-full ${plan.popular ? 'z-10 scale-105' : ''}`}>
              <div className={`bg-white rounded-[4rem] p-16 border shadow-sm transition-all duration-700 flex-grow flex flex-col ${plan.popular ? 'border-[#e8633b]/30 shadow-2xl shadow-[#e8633b]/10' : 'border-[#e2dfd8] hover:border-[#e8633b]/20'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 py-3.5 bg-[#0d0d0d] text-white text-[10px] font-bold uppercase tracking-[0.4em] rounded-full shadow-2xl">
                    Institutional Standard
                  </div>
                )}
                
                <div className="mb-14">
                  <div className="mb-12 p-10 bg-[#faf9f6] rounded-[2.5rem] w-fit shadow-inner group-hover:scale-110 transition-transform duration-500">{plan.icon}</div>
                  <h3 className="text-4xl font-crimson font-bold mb-8 text-[#0d0d0d]">{plan.name}</h3>
                  <div className="flex items-baseline gap-3">
                    <span className="text-6xl font-crimson font-bold text-[#0d0d0d] tracking-tighter">{plan.price}</span>
                    {plan.period && <span className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">{plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-10 mb-20 flex-grow">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-6 text-[#5f5f5f] font-bold text-lg">
                      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0 border border-green-100 shadow-sm">
                        <Check size={18} strokeWidth={3} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-8 rounded-full font-bold text-xl transition-all btn-premium ${
                  plan.popular 
                  ? 'bg-[#0d0d0d] text-white hover:bg-[#e8633b] shadow-2xl' 
                  : 'bg-[#faf9f6] border border-[#e2dfd8] text-[#0d0d0d] hover:bg-white hover:border-[#e8633b]'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specification FAQ */}
        <div className="reveal mt-64 pt-32 border-t border-[#e2dfd8]">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
              <div>
                 <h4 className="text-4xl md:text-6xl font-crimson font-bold text-[#0d0d0d] mb-10 italic">Core Inquiries.</h4>
                 <p className="text-2xl text-[#5f5f5f] font-medium leading-relaxed">Detailed specifications for institutional integration and deployment.</p>
              </div>
              <div className="space-y-16">
                 {[
                   { q: "Is on-premise private deployment feasible?", a: "Yes, our Varchasva framework is designed specifically for institutional requirements necessitating air-gapped or localized hardware synthesis." },
                   { q: "Do you maintain native support for regional dialects?", a: "Our proprietary Indic Core is architected natively across 22+ official languages with deep dialect awareness for unmatched cultural precision." }
                 ].map((faq, idx) => (
                   <div key={idx}>
                      <h5 className="text-2xl font-bold text-[#0d0d0d] mb-6">{faq.q}</h5>
                      <p className="text-xl text-[#5f5f5f] leading-relaxed font-medium">{faq.a}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;