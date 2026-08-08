import React from 'react';
import { motion } from 'motion/react';
import { BenefitItem } from '../types';
import { BenefitIcon } from './BenefitIcons';

interface BenefitCardProps {
  item: BenefitItem;
  index: number;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      whileHover={{ scale: 1.015, x: 4 }}
      className="group relative flex items-center gap-4 py-3 px-3.5 rounded-lg border border-[#C9A44C]/20 bg-[#0B0B0C]/80 hover:bg-[#14120C]/90 hover:border-[#C9A44C]/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_25px_rgba(201,164,76,0.15)] cursor-pointer backdrop-blur-md"
    >
      {/* Subtle Gold Accent Glow Line on Hover */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 group-hover:h-3/4 bg-gradient-to-b from-[#FFF0CA] via-[#C9A44C] to-transparent transition-all duration-300 rounded-r" />

      {/* Circular Gold Icon Container */}
      <div className="relative shrink-0 flex items-center justify-center w-11 h-11 rounded-full border border-[#C9A44C]/60 bg-gradient-to-b from-[#1E190E] via-[#100D07] to-[#080808] text-[#DFB756] group-hover:text-[#FFF0CA] group-hover:border-[#DFB756] group-hover:shadow-[0_0_15px_rgba(201,164,76,0.3)] transition-all duration-300">
        <BenefitIcon type={item.iconType} className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Content Area */}
      <div className="flex-1 min-w-0 pr-1">
        {/* Title */}
        <h3 className="text-[13px] sm:text-[14px] font-extrabold text-white tracking-wider uppercase leading-snug whitespace-pre-line group-hover:text-[#FFF5DC] transition-colors duration-200">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-[11px] sm:text-[12px] text-[#C4C4C4] leading-tight mt-1 whitespace-pre-line font-normal group-hover:text-white/90 transition-colors duration-200">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};
