import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../config/constants';

export default function Proprietor() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image side with professional styling */}
        <div className="relative h-[550px] rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100 group">
          <img 
            src="/proprietor.jpg" 
            alt={COMPANY.owner}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-10">
            <h3 className="text-4xl font-black text-white mb-2">{COMPANY.owner}</h3>
            <p className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Founder & Proprietor</p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded text-white text-xs font-mono border border-white/20">PAN: {COMPANY.taxDetails.pan}</span>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div>
          <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
            Decades of expertise in heavy earthworks and precision cutting.
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Under the leadership of <span className="text-amber-600 font-bold underline decoration-amber-300 decoration-2 underline-offset-4">{COMPANY.owner}</span>, Sri Venkateswara Projects has grown to become the trusted groundwork partner for Telangana's most ambitious infrastructure developments, from international airports to tech city campuses[cite: 3].
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              "Specialized in deep-terrain hard soil and rock boulder cutting.",
              "Fully equipped machinery fleet for massive commercial operations.",
              "Strict adherence to site safety and rapid timeline execution."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
          
          {/* High-Impact Certified Entity Badge */}
          <div className="p-6 bg-slate-950 border-2 border-amber-500/40 rounded-2xl flex items-center justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <p className="text-xs font-bold text-amber-500 uppercase tracking-widest">Verified Tax Entity</p>
              </div>
              <p className="text-base font-bold text-white">Registered GST & PAN Compliant</p>
              <p className="text-xs font-mono text-slate-400 mt-1">GSTIN: {COMPANY.taxDetails.gst}</p>
            </div>
            
            <div className="relative z-10 w-14 h-14 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
              <ShieldCheck className="w-7 h-7" strokeWidth={2.5} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}