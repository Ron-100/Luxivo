import React from 'react';
import { motion } from 'motion/react';
import { HERO_CAR_IMAGE } from '../data/steps';

export const VehicleShowroom: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full flex-1 h-full min-h-[300px] rounded-br-[80px] rounded-tl-[80px] overflow-hidden group border border-[#8F6D25]/30 shadow-2xl bg-[#08080A] flex flex-col"
    >
      {/* Background ambient lighting overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-[#C9A44C]/10 via-transparent to-black/80 pointer-events-none z-10" />
      
      {/* Main Vehicle Image container stretching 100% height to align with right side cards bottom line */}
      <div className="relative w-full h-full flex-1 overflow-hidden">
        <img 
          src={HERO_CAR_IMAGE} 
          alt="Glossy black luxury sports car in dark showroom"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-bottom transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Headlight beam highlight overlay for realistic depth */}
        <div className="absolute bottom-[28%] left-[22%] w-24 h-24 bg-white/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-[28%] left-[62%] w-24 h-24 bg-white/20 rounded-full blur-2xl pointer-events-none" />

        {/* Golden floor inlay curved accent lines SVG overlay matching reference image */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-75">
          <svg className="w-full h-full" viewBox="0 0 800 500" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M-50 480 C 200 450, 450 350, 850 420" 
              stroke="url(#goldFloorGradient1)" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
              className="drop-shadow-[0_0_8px_rgba(201,164,76,0.6)]"
            />
            <path 
              d="M-100 420 C 150 400, 380 320, 820 370" 
              stroke="url(#goldFloorGradient2)" 
              strokeWidth="1.5" 
              strokeDasharray="4 4"
              className="opacity-60"
            />
            <defs>
              <linearGradient id="goldFloorGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A44C" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#FAF0BD" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#8F6D25" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="goldFloorGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8F6D25" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#C9A44C" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#C9A44C" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Gradient shadow edges to integrate into dark showroom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10" />
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#050505]/80 to-transparent z-10" />
      </div>
    </motion.div>
  );
};
