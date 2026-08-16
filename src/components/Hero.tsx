import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ShieldCheck, HardHat, ChevronLeft } from 'lucide-react';
import { CONTACT } from '../config/constants';

// Array of high-end construction & earthworks site images for the carousel
const siteImages = [
  {
    url: "earth-excavation-service.png",
    alt: "Heavy Excavation & Site Preparation"
  },
  {
    url: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Massive Scale Land Leveling"
  },
  {
    url: "https://images.unsplash.com/photo-1541888086925-ebbc31bc1eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Industrial Groundwork Operations"
  }
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-black tracking-widest uppercase mb-6">
                <HardHat className="w-4 h-4" />
                Sri Venkateswara Projects
              </div>
              
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

                {/* Carousel Navigation Arrows (Visible on Hover / Always on Mobile) */}
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

    </div>
  );
}