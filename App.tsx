import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  X, 
  ArrowUpRight,
  Linkedin,
  Twitter,
  Instagram,
  Command,
  Layout,
  Globe,
  Compass
} from 'lucide-react';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GyaanPage from './pages/GyaanPage';
import ChitraPage from './pages/ChitraPage';
import VaniPage from './pages/VaniPage';
import PricingPage from './pages/PricingPage';

const KineticObserver = () => {
  const location = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.kinetic-reveal');
    elements.forEach(el => observer.observe(el));

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => observer.disconnect();
  }, [location]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Blueprint', path: '/solutions' },
    { name: 'Gyaan Studio', path: '/gyaan' },
    { name: 'Chitra Visuals', path: '/chitra' },
    { name: 'Vani Audio', path: '/vani' },
    { name: 'Investment', path: '/pricing' },
    { name: 'Philosophy', path: '/about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-[1.5s] ease-[0.16, 1, 0.3, 1] ${scrolled ? 'py-6 bg-white/95 backdrop-blur-3xl border-b border-black/5' : 'py-12 bg-transparent'}`}>
      <div className="max-w-[2100px] mx-auto px-8 md:px-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-6 group">
          <div className="relative">
            <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-crimson font-bold text-2xl transition-transform duration-[1s] group-hover:rotate-[135deg]">B</div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#b33d1d] animate-pulse"></div>
          </div>
          <span className="text-3xl font-crimson font-bold tracking-tight text-black flex items-baseline relative overflow-hidden h-[1.2em]">
            <span className="block translate-y-0 group-hover:-translate-y-full transition-transform duration-[0.8s]">BharatGo<span className="text-[#b33d1d] italic ml-1">Ai</span></span>
            <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-[0.8s] text-[#b33d1d]">Sovereign<span className="text-black italic ml-1">Ai</span></span>
          </span>
        </Link>

        <div className="hidden xl:flex items-center gap-16">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-[10px] font-bold uppercase tracking-[0.6em] transition-all hover:text-[#b33d1d] relative group ${location.pathname === link.path ? 'text-[#b33d1d]' : 'text-gray-400'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[1.5px] bg-[#b33d1d] transition-all duration-[0.8s] ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          <Link to="/contact" className="btn-hand-crafted !py-4 !px-10 text-[10px] border-black hover:bg-black hover:text-white transition-colors">
            Establish Protocol
          </Link>
        </div>

        <button className="xl:hidden relative z-[1001] w-12 h-12 flex items-center justify-center bg-black text-white group" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20}/> : <Layout size={20} className="group-hover:rotate-90 transition-transform duration-500" />}
        </button>
      </div>

      {/* Advanced Fullscreen Split Menu */}
      <div className={`xl:hidden fixed inset-0 z-[1000] flex transition-all duration-[1.2s] ease-[0.16, 1, 0.3, 1] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className={`w-1/2 bg-white h-full transition-transform duration-[1.2s] ease-[0.16, 1, 0.3, 1] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
           <div className="h-full flex flex-col justify-center px-10 gap-8">
             {navLinks.slice(0, 3).map((link) => (
               <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-5xl font-crimson font-bold text-black tracking-tighter hover:text-[#b33d1d] transition-all transform hover:translate-x-4 duration-500">{link.name}</Link>
             ))}
           </div>
        </div>
        <div className={`w-1/2 bg-[#0a0a0a] h-full transition-transform duration-[1.2s] ease-[0.16, 1, 0.3, 1] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full flex flex-col justify-center px-10 gap-8 border-l border-white/5">
             {navLinks.slice(3).map((link) => (
               <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-5xl font-crimson font-bold text-white tracking-tighter hover:text-[#b33d1d] transition-all transform hover:translate-x-4 duration-500">{link.name}</Link>
             ))}
             <Link to="/contact" onClick={() => setIsOpen(false)} className="text-5xl font-crimson font-bold text-[#b33d1d] tracking-tighter hover:text-white transition-all transform hover:translate-x-4 duration-500">Initiate Contact</Link>
           </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#0a0a0a] text-white pt-48 pb-20 px-8 md:px-16 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[70vw] h-[70vw] bg-[#b33d1d]/5 blur-[200px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
    
    <div className="max-w-[2100px] mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
        <div className="lg:col-span-6">
          <Link to="/" className="flex items-center gap-6 mb-12 group">
            <div className="w-16 h-16 bg-white text-black flex items-center justify-center font-crimson font-bold text-3xl group-hover:bg-[#b33d1d] group-hover:text-white transition-all duration-700">B</div>
            <span className="text-5xl font-crimson font-bold tracking-tight">BharatGoAi</span>
          </Link>
          <p className="text-white/40 text-3xl leading-[1.3] mb-16 max-w-xl font-crimson italic">
            "Architecting the sovereign intelligence foundation for the Indian Subcontinent. Built with honor, precision, and technological permanence."
          </p>
          <div className="flex gap-10">
            {[Linkedin, Twitter, Instagram].map((Icon, idx) => (
              <a key={idx} href="#" className="w-14 h-14 border border-white/10 flex items-center justify-center text-white/20 hover:text-[#b33d1d] hover:border-[#b33d1d] transition-all hover:-translate-y-2 duration-500">
                <Icon size={24} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 lg:col-start-8">
          <h4 className="font-bold uppercase tracking-[1em] text-[10px] text-white/20 mb-12 flex items-center gap-4">
            <Compass size={14} /> Platform Index
          </h4>
          <ul className="space-y-8 text-white/40 font-bold text-[11px] uppercase tracking-[0.3em]">
            <li><Link to="/solutions" className="hover:text-[#b33d1d] transition-colors flex items-center gap-4 group">Core Blueprints <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span></Link></li>
            <li><Link to="/gyaan" className="hover:text-[#b33d1d] transition-colors flex items-center gap-4 group">Synthesis Engine <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span></Link></li>
            <li><Link to="/chitra" className="hover:text-[#b33d1d] transition-colors flex items-center gap-4 group">Visual Render <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span></Link></li>
            <li><Link to="/vani" className="hover:text-[#b33d1d] transition-colors flex items-center gap-4 group">Acoustic Lab <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span></Link></li>
            <li><Link to="/pricing" className="hover:text-[#b33d1d] transition-colors flex items-center gap-4 group">Investment Tiers <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span></Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-bold uppercase tracking-[1em] text-[10px] text-white/20 mb-12 flex items-center gap-4">
            <Globe size={14} /> Master Lab
          </h4>
          <div className="space-y-8">
            <p className="text-white/70 font-medium text-xl tracking-wide font-crimson italic">Financial District, Hyderabad<br/>Telangana, Bharat</p>
            <p className="text-white/60 font-bold text-xs tracking-[0.2em] hover:text-[#b33d1d] transition-colors">
              <a href="mailto:bharatgoai.info@gmail.com">bharatgoai.info@gmail.com</a>
            </p>
            <div className="text-[#b33d1d] text-3xl font-crimson font-bold mt-8">+91 949400 6530</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-bold uppercase tracking-[0.6em] text-white/10">
        <div className="flex items-center gap-6">
           <div className="w-8 h-[1px] bg-[#b33d1d]"></div>
           <p>© 2025 BHARATGOAI ARCHITECTURAL LABS. PREMIERE SOVEREIGN AI PLATFORM.</p>
        </div>
        <div className="flex gap-16">
          <a href="#" className="hover:text-white transition-colors">Security Charter</a>
          <a href="#" className="hover:text-white transition-colors">Institutional Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <KineticObserver />
      <div className="min-h-screen flex flex-col selection:bg-[#b33d1d] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<ServicesPage />} />
            <Route path="/gyaan" element={<GyaanPage />} />
            <Route path="/chitra" element={<ChitraPage />} />
            <Route path="/vani" element={<VaniPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;