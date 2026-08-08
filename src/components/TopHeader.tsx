import React from 'react';
import { motion } from 'motion/react';
import { SECTION_INFO } from '../data/legalData';

export const TopHeader: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6 max-w-xl">
      {/* SECTION LABEL */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center space-x-3 text-xs md:text-sm uppercase font-semibold tracking-[0.2em]"
      >
        <span className="text-[#C9A44C] font-mono text-base md:text-lg font-bold">
          {SECTION_INFO.number}
        </span>
        <span className="text-[#E5E5E5] font-medium drop-shadow-sm">
          {SECTION_INFO.label}
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C9A44C]/70 via-[#C9A44C]/30 to-transparent ml-2" />
      </motion.div>

      {/* MAIN STACKED HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        className="flex flex-col font-sans font-black tracking-tight text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[0.92] select-none"
      >
        <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
          {SECTION_INFO.heading.line1}
        </span>
        <span className="bg-gradient-to-r from-[#E2C376] via-[#C9A44C] to-[#8F6D25] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(201,164,76,0.3)]">
          {SECTION_INFO.heading.line2}
        </span>
        <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
          {SECTION_INFO.heading.line3}
        </span>
      </motion.div>

      {/* DESCRIPTION PARAGRAPH */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        className="flex flex-col space-y-4"
      >
        <p className="text-[#BDBDBD] text-sm md:text-base lg:text-[17px] font-normal leading-relaxed max-w-[500px]">
          {SECTION_INFO.description}
        </p>

        {/* SUBTLE DECORATIVE GOLD LINE UNDERNEATH */}
        <div className="w-16 h-[2px] bg-gradient-to-r from-[#C9A44C] to-[#C9A44C]/20 rounded-full shadow-[0_0_8px_rgba(201,164,76,0.5)]" />
      </motion.div>
    </div>
  );
};
