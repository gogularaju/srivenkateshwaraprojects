import { Phone, Mail, MapPin, MessageCircle, ChevronRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { COMPANY, CONTACT } from '../config/constants';
import { services } from '../data/services';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Proprietor from '../components/Proprietor';
import Logo from '../components/Logo';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function Home() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const waLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 font-sans selection:bg-amber-500 selection:text-slate-900">
      
      <WhatsAppWidget />

      {/* Navigation */}
      <nav className="bg-slate-950 text-white py-4 px-6 sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl bg-slate-950/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Logo className="w-10 h-10" />
            <div>
              <h1 className="text-lg font-bold tracking-tight leading-tight">{COMPANY.name}</h1>
              <p className="text-[0.65rem] text-amber-500 font-bold tracking-widest uppercase">Contractors & Earthworks</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href={`tel:${CONTACT.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-2 text-slate-300 hover:text-amber-500 transition-colors">
              <Phone className="w-4 h-4 text-amber-500" />
              {CONTACT.phones[0]}
            </a>
            
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#25D366] text-slate-950 px-6 py-2.5 rounded-sm font-bold hover:bg-[#1fbd58] transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <Proprietor />

      {/* Services Grid with Corrected Wider Layout */}
      <section id="services" className="py-24 px-6 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* Expanded max-w-4xl so the heading doesn't wrap awkwardly */}
          <div className="mb-16 max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Contractor Rates & Services.
            </h2>
            <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-2xl">
              Standard baseline rates for heavy earthworks. All charges exclude 18% GST. Final quotations depend on site inspection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Balanced Padding */}
      <footer id="contact" className="bg-slate-950 text-slate-300 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-8 group cursor-pointer" onClick={scrollToTop}>
                <Logo className="w-12 h-12 grayscale brightness-200 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                <h2 className="text-2xl font-black text-white tracking-tight">{COMPANY.name}</h2>
              </div>
              <p className="mb-8 max-w-sm text-slate-400 leading-relaxed font-light">
                Professional stone cutting and land development contractors serving major industrial and commercial projects across Hyderabad and Telangana.
              </p>
              
              <div className="flex flex-col gap-3 p-6 bg-white/5 rounded-xl border border-white/10 max-w-sm backdrop-blur-sm shadow-xl">
                <p className="text-sm flex justify-between items-center"><strong className="text-white font-medium uppercase tracking-wider text-xs">Proprietor</strong> <span className="text-amber-500 font-bold">{COMPANY.owner}</span></p>
                <div className="h-[1px] w-full bg-white/5 my-1"></div>
                <div className="text-sm flex justify-between items-center group cursor-pointer" onClick={() => handleCopy(COMPANY.taxDetails.gst, 'gst')}>
                  <strong className="text-white font-medium uppercase tracking-wider text-xs">GSTIN</strong> 
                  <span className="font-mono text-slate-300 flex items-center gap-2 hover:text-amber-400 transition-colors">
                    {COMPANY.taxDetails.gst} 
                    {copiedField === 'gst' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 lg:ml-auto">
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-8 opacity-50">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" onClick={scrollToTop} className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-amber-500/50 group-hover:text-amber-500 transition-colors" /> Back to Top</a></li>
                <li><a href="#services" className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-amber-500/50 group-hover:text-amber-500 transition-colors" /> Rates & Services</a></li>
                <li><a href={waLink} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-amber-500/50 group-hover:text-amber-500 transition-colors" /> Request a Quote</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4 lg:ml-auto">
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-8 opacity-50">Contact Us</h3>
              
              <div className="space-y-6">
                <div className="group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:border-amber-500/30">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <p className="text-sm leading-relaxed max-w-[250px] text-slate-400 group-hover:text-slate-300 transition-colors mt-1.5">
                    {CONTACT.address}
                  </p>
                </div>
                
                <div className="group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:border-amber-500/30">
                    <Phone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="flex flex-col gap-1 mt-1.5">
                    {CONTACT.phones.map((phone, i) => (
                      <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="text-sm text-slate-400 hover:text-amber-500 transition-colors font-mono tracking-wide">{phone}</a>
                    ))}
                  </div>
                </div>

                <div className="group flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:border-amber-500/30">
                    <Mail className="w-5 h-5 text-amber-500" />
                  </div>
                  <a href={`mailto:${CONTACT.email}`} className="text-sm text-slate-400 hover:text-amber-500 transition-colors">{CONTACT.email}</a>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
            <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Engineered for Heavy Infrastructure
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}