import { Building2, Plane, Activity, Laptop, ShieldCheck, Factory } from 'lucide-react';

const clients = [
  { name: "Tech Mahindra, Hi-Tech City", icon: Laptop },
  { name: "L&T Projects, Shamshabad", icon: ShieldCheck },
  { name: "CMC, Gachibowli", icon: Building2 },
  { name: "Omega Hospital, Banjara Hills", icon: Activity },
  { name: "Amar Raja Group", icon: Factory },
  { name: "RBR International Airport", icon: Plane }
];

export default function ClientGrid() {
  return (
    <section className="py-20 bg-amber-500 border-b-8 border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-black text-slate-900 uppercase tracking-widest text-center mb-12 opacity-80">
          Trusted by Industry Leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {clients.map((client, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300">
                <client.icon className="w-8 h-8 text-slate-900" />
              </div>
              <span className="text-sm font-bold text-slate-900 max-w-[120px] leading-tight">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}