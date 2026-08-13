import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LUXURY_CARS } from '../data/benefits';
import { LuxuryCar } from '../types';
import showroomImagePath from '../assets/images/luxury_showroom_cars_1786196157817.webp';

export const ShowroomScene: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<LuxuryCar | null>(null);
  const [isHeadlightsOn, setIsHeadlightsOn] = useState(true);

  return (
    <div className="relative w-full h-full min-h-[480px] lg:min-h-[640px] xl:min-h-[720px] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-2xl border border-[#C9A44C]/20 bg-[#050505] flex items-center justify-center group">
      {/* Showroom Background Image */}
      <motion.img
        src={showroomImagePath}
        alt="Luxury Car Showroom at Night with Ferrari, McLaren, and Porsche"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.08] transition-all duration-700 group-hover:scale-[1.02]"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Dark Luxury Vignette & Shadow Gradients for High Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent w-full md:w-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]/90 pointer-events-none" />

      {/* Headlight Ray Effect Overlay when Enabled */}
      {isHeadlightsOn && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none bg-radial from-[#FFF0CA]/10 via-transparent to-transparent mix-blend-screen"
        />
      )}

      {/* Glossy Reflective Floor Line Accents (Concentric Circles) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 700" fill="none">
        <ellipse cx="500" cy="580" rx="420" ry="90" stroke="#C9A44C" strokeWidth="1" strokeDasharray="6 8" opacity="0.25" />
        <ellipse cx="500" cy="580" rx="320" ry="70" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.35" />
        <ellipse cx="500" cy="580" rx="220" ry="50" stroke="#C9A44C" strokeWidth="0.8" opacity="0.2" />
      </svg>

      {/* Interactive Car Hotspot / Badge Buttons */}
      <div className="absolute inset-0 pointer-events-auto">
        {/* Foreground Red Ferrari Badge */}
        <motion.button
          onClick={() => setSelectedCar(LUXURY_CARS[0])}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-[22%] right-[28%] z-20 flex items-center gap-2 px-4 py-1.5 rounded-none bg-black/80 border border-[#E61C24]/60 text-white text-xs font-semibold shadow-[0_0_15px_rgba(230,28,36,0.3)] hover:border-[#E61C24] transition-all cursor-pointer"
          style={{ clipPath: 'polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)' }}
        >
          <span className="w-2 h-2 bg-[#E61C24]" />
          <span className="tracking-wider uppercase font-bold text-[11px] text-[#FFA3A6]">Ferrari SF90</span>
        </motion.button>

        {/* Middle Stage McLaren Badge */}
        <motion.button
          onClick={() => setSelectedCar(LUXURY_CARS[1])}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-[44%] left-[42%] z-20 flex items-center gap-2 px-4 py-1.5 rounded-none bg-black/80 border border-[#C9A44C]/60 text-white text-xs font-semibold shadow-[0_0_15px_rgba(201,164,76,0.3)] hover:border-[#DFB756] transition-all cursor-pointer"
          style={{ clipPath: 'polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)' }}
        >
          <span className="w-2 h-2 bg-[#DFB756]" />
          <span className="tracking-wider uppercase font-bold text-[11px] text-[#FFF0CA]">McLaren 765LT</span>
        </motion.button>

        {/* Rear Upper Stage Blue Porsche Badge */}
        <motion.button
          onClick={() => setSelectedCar(LUXURY_CARS[2])}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-[38%] right-[22%] z-20 flex items-center gap-2 px-4 py-1.5 rounded-none bg-black/80 border border-[#104EB2]/60 text-white text-xs font-semibold shadow-[0_0_15px_rgba(16,78,178,0.3)] hover:border-[#3B82F6] transition-all cursor-pointer"
          style={{ clipPath: 'polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)' }}
        >
          <span className="w-2 h-2 bg-[#3B82F6]" />
          <span className="tracking-wider uppercase font-bold text-[11px] text-[#93C5FD]">Porsche Taycan</span>
        </motion.button>
      </div>

      {/* Showroom Interactive Control Bar (Bottom Right) */}
      <div
        className="absolute bottom-4 right-4 z-20 flex items-center gap-3 px-4 py-1.5 rounded-none bg-black/75 border border-white/10 text-xs text-white/80"
        style={{ clipPath: 'polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)' }}
      >
        <button
          onClick={() => setIsHeadlightsOn(!isHeadlightsOn)}
          className="flex items-center gap-1.5 hover:text-[#DFB756] transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4 text-[#DFB756]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="text-[11px] font-medium">{isHeadlightsOn ? 'Showroom Glow ON' : 'Showroom Glow OFF'}</span>
        </button>
      </div>

      {/* Car Specs Quick View Modal / Drawer */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 z-30 p-4 rounded-xl glass-panel shadow-2xl border border-[#C9A44C]/40 text-white"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
              <div>
                <span className="text-[10px] tracking-widest text-[#C9A44C] uppercase font-bold">{selectedCar.subtitle}</span>
                <h4 className="text-base font-extrabold font-heading text-white">{selectedCar.name}</h4>
              </div>
              <button
                onClick={() => setSelectedCar(null)}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white/5 p-2 rounded border border-white/5">
                <span className="block text-[10px] text-white/50 uppercase">Power Output</span>
                <span className="font-bold text-[#FFF0CA]">{selectedCar.specs.horsepower}</span>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/5">
                <span className="block text-[10px] text-white/50 uppercase">0 - 60 MPH</span>
                <span className="font-bold text-[#FFF0CA]">{selectedCar.specs.acceleration}</span>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/5">
                <span className="block text-[10px] text-white/50 uppercase">Engine Type</span>
                <span className="font-bold text-white/90 text-[11px] truncate block">{selectedCar.specs.engine}</span>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/5">
                <span className="block text-[10px] text-white/50 uppercase">Top Speed</span>
                <span className="font-bold text-white/90">{selectedCar.specs.topSpeed}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
