import { Pickaxe, Truck, HardHat } from 'lucide-react';
import type { Service } from '../data/services';

export default function ServiceCard({ service }: { service: Service }) {
  // Dynamically assign an icon based on the service ID string
  const getIcon = (id: string) => {
    if (id.includes('rock')) return <HardHat className="w-6 h-6 text-slate-700 group-hover:text-slate-900" />;
    if (id.includes('soil')) return <Pickaxe className="w-6 h-6 text-slate-700 group-hover:text-slate-900" />;
    return <Truck className="w-6 h-6 text-slate-700 group-hover:text-slate-900" />;
  };

  return (
    <div className="bg-white p-8 border border-slate-200 rounded-xl hover:border-amber-500 hover:shadow-xl transition-all group flex flex-col h-full">
      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors shrink-0">
        {getIcon(service.id)}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
      <p className="text-slate-600 text-sm mb-6 flex-grow">{service.description}</p>
      
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between shrink-0">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Base Rate</span>
        <span className="text-lg font-black text-slate-900">{service.baseRate}</span>
      </div>
    </div>
  );
}