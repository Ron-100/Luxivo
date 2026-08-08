import React from 'react';
import { motion } from 'motion/react';
import { Scale, ShieldAlert } from 'lucide-react';
import { SECTION_INFO } from '../data/legalData';

export const DisclaimerPanel: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
      className="w-full relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-r from-[#0C0B08] via-[#080808] to-[#0A0A0A] border border-[#C9A44C]/40 p-5 md:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.9)] select-none"
    >
      {/* SUBTLE BACKGROUND GOLD GLOW AMBIENCE */}
      <div className="absolute -bottom-10 left-1/4 w-72 h-32 bg-[#C9A44C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
        {/* LEFT SECTION: GOLD SHIELD ICON + DISCLAIMER LABEL */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#C9A44C] bg-[#14110B] flex items-center justify-center text-[#C9A44C] shadow-[0_0_15px_rgba(201,164,76,0.3)]">
            <Scale className="w-6 h-6 md:w-7 md:h-7 stroke-[1.8]" />
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-mono tracking-widest text-[#C9A44C]/70 uppercase">
              LEGAL NOTICE
            </span>
            <h4 className="text-base md:text-xl font-extrabold tracking-[0.18em] text-[#C9A44C] uppercase drop-shadow-[0_2px_8px_rgba(201,164,76,0.3)]">
              DISCLAIMER
            </h4>
          </div>
        </div>

        {/* CENTER VERTICAL GOLD DIVIDER LINE (DESKTOP ONLY) */}
        <div className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-transparent via-[#C9A44C]/50 to-transparent flex-shrink-0" />

        {/* RIGHT SECTION: EXACT DISCLAIMER PARAGRAPH */}
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm md:text-[14.5px] text-[#D1D1D1] font-normal leading-relaxed">
            {SECTION_INFO.disclaimer}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
