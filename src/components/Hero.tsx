import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ShieldCheck, Building2, Activity, Factory, Plane, Laptop, Video, User, MapPin, ChevronLeft } from 'lucide-react';
import { CONTACT } from '../config/constants';

// Array of high-end construction & earthworks site images for the carousel
const siteImages = [
  {
    url: "/earth-excavation-service.png",
    alt: "Heavy Excavation & Site Preparation"
  },
  {
    url: "/carousel-1.jpg",
    alt: "Massive Scale Land Leveling"
  },
  {
    url: "/carousel-2.jpg",
    alt: "Industrial Groundwork Operations"
  }
];

const clients = [
  { name: "Tech Mahindra", location: "Hi-Tech City", icon: Laptop, color: "text-blue-600 bg-blue-50 border-blue-100" },
  { name: "L&T Projects", location: "Shamshabad", icon: ShieldCheck, color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
  { name: "CMC Projects", location: "Gachibowli & Shamshabad", icon: Building2, color: "text-amber-600 bg-amber-50 border-amber-100" },
  { name: "Omega Hospital", location: "Banjara Hills", icon: Activity, color: "text-rose-600 bg-rose-50 border-rose-100" },
  { name: "Amar Raja Group", location: "Terminal A, Nanakramguda", icon: Factory, color: "text-indigo-600 bg-indigo-50 border-indigo-100" },
  { name: "RBR Int. Airport", location: "Bangalore", icon: Plane, color: "text-sky-600 bg-sky-50 border-sky-100" },
  { name: "TV5 Cellar", location: "Banjara Hills", icon: Video, color: "text-purple-600 bg-purple-50 border-purple-100" },
  { name: "Anil KDR", location: "Banjara Hills", icon: User, color: "text-teal-600 bg-teal-50 border-teal-100" },
  { name: "R Balram Reddy", location: "Shamshabad", icon: Plane, color: "text-cyan-600 bg-cyan-50 border-cyan-100" },
  { name: "Surya Latha Pvt", location: "Kalavakurthi", icon: MapPin, color: "text-orange-600 bg-orange-50 border-orange-100" }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const waLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % siteImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % siteImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + siteImages.length) % siteImages.length);
  };

  return (
    <div className="bg-slate-50 overflow-hidden">
      
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.05] tracking-tight">
                Scale. <br />
                Precision. <br />
                <span className="text-amber-500">Capacity.</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
                We deliver high-capacity earthworks, deep-terrain rock cutting, and massive-scale land leveling for Telangana's most ambitious infrastructure projects.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a 
                  href={waLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-500 text-slate-950 px-8 py-4 rounded-md font-bold hover:bg-amber-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 group text-center"
                >
                  Discuss Your Project 
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#services" 
                  className="px-8 py-4 rounded-md font-bold text-slate-700 bg-white border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all duration-300 text-center shadow-sm"
                >
                  View Rates & Services
                </a>
              </div>
            </motion.div>

            {/* Right Interactive Image Carousel Column (Fully Mobile Responsive) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 relative pb-8 lg:pb-0"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-200 aspect-[16/11] group">
                
                {/* Carousel Image Stream */}
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentIndex}
                    src={siteImages[currentIndex].url} 
                    alt={siteImages[currentIndex].alt} 
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Carousel Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/60 backdrop-blur-md text-white flex items-center justify-center opacity-80 hover:opacity-100 hover:bg-slate-950 transition-all z-20"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/60 backdrop-blur-md text-white flex items-center justify-center opacity-80 hover:opacity-100 hover:bg-slate-950 transition-all z-20"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Carousel Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-slate-950/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                  {siteImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-amber-500' : 'w-2 bg-white/60'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>
              
              {/* Floating Metric Card */}
              <div className="absolute -bottom-2 lg:bottom-4 -left-4 lg:-left-6 bg-white p-5 lg:p-6 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4 max-w-xs z-30">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-amber-500 rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
                  <ShieldCheck className="w-6 h-6 lg:w-7 lg:h-7 text-slate-950" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">1.2L+</p>
                  <p className="text-[0.65rem] lg:text-xs font-bold text-slate-500 uppercase tracking-wider">Sq.Ft Rock Cleared</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Client Showcase Grid */}
      <section className="py-24 bg-white border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-amber-500"></div>
                <span className="text-slate-500 text-xs font-bold tracking-widest uppercase">
                  Our Portfolio
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Trusted by <br />
                <span className="text-amber-500">Industry Leaders.</span>
              </h2>
            </div>
            <p className="text-slate-500 font-medium max-w-sm md:text-right leading-relaxed">
              We are the groundwork partner of choice for major corporate campuses, international airports, and multi-specialty hospitals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-slate-200 shadow-sm rounded-lg overflow-hidden">
            {clients.map((client, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative flex flex-col items-center text-center p-8 border-r border-b border-slate-200 bg-white hover:bg-slate-50/80 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border shadow-sm group-hover:scale-110 transition-transform duration-300 ${client.color}`}>
                  <client.icon className="w-7 h-7" strokeWidth={2} />
                </div>
                
                <h3 className="text-sm font-bold text-slate-900 mb-1 leading-tight">{client.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{client.location}</p>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}