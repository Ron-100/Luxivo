import React from 'react';
import { motion } from 'motion/react';

export const HeaderSection: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6 max-w-[480px]">
      {/* 04. HOW IT WORKS Top Label */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase"
      >
        <span className="text-gray-300 font-sans">HOW IT WORKS</span>
        <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-[#C9A44C] via-[#8F6D25] to-transparent" />
      </motion.div>

      {/* Main Heading Stacked */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight uppercase leading-[1.05] text-white flex flex-col font-sans"
      >
        <span>RENT YOUR</span>
        <span className="text-gold-gradient drop-shadow-[0_2px_10px_rgba(201,164,76,0.2)]">DREAM CAR</span>
        <span>IN 4 SIMPLE STEPS</span>
      </motion.h2>

      {/* Decorative Gold Parallel Slashes / Lines under heading */}
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: '100%' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center space-x-2 py-1"
      >
        <div className="flex space-x-1.5 items-center">
          <span className="w-10 h-[2px] bg-gradient-to-r from-[#C9A44C] to-[#8F6D25] transform -skew-x-[25deg] block" />
          <span className="w-16 h-[2px] bg-gradient-to-r from-[#C9A44C] to-transparent transform -skew-x-[25deg] block" />
        </div>
      </motion.div>

      {/* Supporting Text */}
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="text-[#BDBDBD] text-base sm:text-lg  leading-relaxed font-normal max-w-[450px]"
      >
        We've made the luxury car rental process smooth, fast, and completely hassle-free.
      </motion.p>
    </div>
  );
};
