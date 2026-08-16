import { useState } from 'react';
import { COMPANY, CONTACT } from '../config/constants';
import { services } from '../data/services';
import Logo from './Logo';
import { Printer, ShieldLock, Calculator } from 'lucide-react';

export default function AdminQuotationGenerator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  
  // Quotation Form State
  const [clientName, setClientName] = useState('');
  const [clientProject, setClientProject] = useState('');
  const [date] = useState(new Date().toISOString().split('T')[0]);
  
  // Cubic Meter Calculator State
  const [length, setLength] = useState<number | ''>('');
  const [width, setWidth] = useState<number | ''>('');
  const [depth, setDepth] = useState<number | ''>('');
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const [customRate, setCustomRate] = useState<number>(120);

  // Line Items
  const [items, setItems] = useState<Array<{ description: string; qty: number; rate: number }>>([
    { description: 'Soil Excavation & Earthworks', qty: 100, rate: 120 }
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Set your secret admin PIN here (e.g., 9999)
    if (pin === '7633') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect PIN');
    }
  };

  const calculateCubicMeters = () => {
    if (typeof length === 'number' && typeof width === 'number' && typeof depth === 'number') {
      const totalCbm = length * width * depth;
      setItems([...items, { description: `${selectedServiceId} (${length}m x ${width}m x ${depth}m)`, qty: parseFloat(totalCbm.toFixed(2)), rate: customRate }]);
      setLength('');
      setWidth('');
      setDepth('');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // If not authenticated, show a clean hidden PIN lock screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
        <form onSubmit={handleLogin} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-md w-full shadow-2xl">
          <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
            <ShieldLock className="w-6 h-6 text-amber-500" />
          </div>
          <h2 className="text-2xl font-black text-white mb-2">Restricted Area</h2>
          <p className="text-slate-400 text-sm mb-6">Enter admin PIN to access the quotation letterhead generator.</p>
          <input 
            type="password" 
            placeholder="Enter Admin PIN" 
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white mb-4 focus:outline-none focus:border-amber-500 font-mono text-center tracking-widest text-lg"
          />
          <button type="submit" className="w-full bg-amber-500 text-slate-950 font-bold py-3 rounded-lg hover:bg-amber-400 transition-colors">
            Access Portal
          </button>
        </form>
      </div>
    );
  }

  const subtotal = items.reduce((acc, item) => acc + (item.qty * item.rate), 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 print:bg-white print:p-0">
      
      {/* Control Panel (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-8 bg-slate-900 text-white p-6 rounded-2xl shadow-xl print:hidden flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Quotation Builder Dashboard</h1>
          <button onClick={handlePrint} className="bg-amber-500 text-slate-950 px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-amber-400 transition-colors">
            <Printer className="w-4 h-4" /> Print / Save PDF Letterhead
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Client Name</label>
            <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="e.g. L&T Projects" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white text-sm" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Project Name / Location</label>
            <input type="text" value={clientProject} onChange={(e) => setClientProject(e.target.value)} placeholder="e.g. Shamshabad Site" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white text-sm" />
          </div>
        </div>

        {/* Cubic Meter Calculator Box */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-3 flex items-center gap-2">
            <Calculator className="w-4 h-4" /> Effective Cubic Meter (CBM) Calculator
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
            <input type="number" placeholder="Length (m)" value={length} onChange={(e) => setLength(e.target.value ? parseFloat(e.target.value) : '')} className="bg-slate-900 border border-slate-800 rounded p-2 text-sm text-white" />
            <input type="number" placeholder="Width (m)" value={width} onChange={(e) => setWidth(e.target.value ? parseFloat(e.target.value) : '')} className="bg-slate-900 border border-slate-800 rounded p-2 text-sm text-white" />
            <input type="number" placeholder="Depth (m)" value={depth} onChange={(e) => setDepth(e.target.value ? parseFloat(e.target.value) : '')} className="bg-slate-900 border border-slate-800 rounded p-2 text-sm text-white" />
            <input type="number" placeholder="Rate (₹/CBM)" value={customRate} onChange={(e) => setCustomRate(parseFloat(e.target.value))} className="bg-slate-900 border border-slate-800 rounded p-2 text-sm text-white" />
          </div>
          <div className="flex justify-between items-center">
            <select value={selectedServiceId} onChange={(e) => setSelectedServiceId(e.target.value)} className="bg-slate-900 border border-slate-800 rounded p-2 text-sm text-white max-w-xs">
              {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
            </select>
            <button type="button" onClick={calculateCubicMeters} className="bg-blue-600 text-white px-4 py-2 rounded text-xs font-bold hover:bg-blue-500">
              Add Calculated Item
            </button>
          </div>
        </div>
      </div>

      {/* --- LETTERHEAD PRINTABLE AREA --- */}
      <div className="max-w-4xl mx-auto bg-white p-10 sm:p-14 shadow-2xl rounded-xl print:shadow-none print:w-full print:max-w-none print:m-0 text-slate-900 font-sans">
        
        {/* Letterhead Header */}
        <div className="flex justify-between items-start border-b-2 border-slate-900 pb-8 mb-8">
          <div className="flex items-center gap-4">
            <Logo className="w-16 h-16" />
            <div>
              <h2 className="text-2xl font-black tracking-tight">{COMPANY.name}</h2>
              <p className="text-xs text-amber-600 font-bold uppercase tracking-widest">{COMPANY.tagline}</p>
            </div>
          </div>
          <div className="text-right text-xs text-slate-600 space-y-1">
            <p className="font-bold text-slate-900">GSTIN: {COMPANY.taxDetails.gst}</p>
            <p>{CONTACT.phones.join(' | ')}</p>
            <p>{CONTACT.email}</p>
            <p className="max-w-[220px] ml-auto">{CONTACT.address}</p>
          </div>
        </div>

        {/* Quotation Metadata */}
        <div className="flex justify-between mb-8 bg-slate-50 p-6 rounded-xl border border-slate-200">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Prepared For:</p>
            <h3 className="text-lg font-bold text-slate-900">{clientName || '[Client Name]'}</h3>
            <p className="text-sm text-slate-600">{clientProject || '[Project / Site Location]'}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Quotation Date:</p>
            <p className="text-sm font-mono font-bold text-slate-900">{date}</p>
            <p className="text-xs font-bold text-emerald-600 mt-2">Valid for 30 Days</p>
          </div>
        </div>

        {/* Items Table */}
        <table className="w-full mb-10 text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-slate-900 text-xs font-bold uppercase tracking-wider text-slate-700">
              <th className="py-3 px-4">Description of Service</th>
              <th className="py-3 px-4 text-center">Qty (CBM / Units)</th>
              <th className="py-3 px-4 text-right">Rate (₹)</th>
              <th className="py-3 px-4 text-right">Amount (₹)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm">
            {items.map((item, index) => (
              <tr key={index}>
                <td className="py-4 px-4 font-medium text-slate-900">{item.description}</td>
                <td className="py-4 px-4 text-center font-mono">{item.qty}</td>
                <td className="py-4 px-4 text-right font-mono">₹{item.rate.toLocaleString('en-IN')}</td>
                <td className="py-4 px-4 text-right font-mono font-bold">₹{(item.qty * item.rate).toLocaleString('en-IN')}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals Section */}
        <div className="flex justify-end mb-16">
          <div className="w-72 space-y-2 border-t-2 border-slate-900 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 font-medium">Subtotal</span>
              <span className="font-mono font-bold">₹{subtotal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 font-medium">GST (18%)</span>
              <span className="font-mono font-bold">₹{gst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between text-base border-t border-slate-200 pt-2 text-slate-900 font-black">
              <span>Estimated Total</span>
              <span className="font-mono text-amber-600">₹{total.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>

        {/* Terms & Signoff */}
        <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8 text-xs text-slate-500">
          <div>
            <p className="font-bold text-slate-900 mb-1">Terms & Conditions:</p>
            <p>1. Final measurements taken at site post-excavation will be binding.</p>
            <p>2. Diesel price fluctuations may affect machinery rental quotes.</p>
            <p>3. 50% advance payment required prior to mobilization.</p>
          </div>
          <div className="text-right flex flex-col justify-end">
            <div className="h-12"></div>
            <p className="font-bold text-slate-950 border-t border-slate-400 pt-1 inline-block">Authorized Signatory</p>
            <p className="text-amber-600 font-bold">{COMPANY.name}</p>
          </div>
        </div>

      </div>

    </div>
  );
}