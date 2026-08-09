import React from 'react';
import { motion } from 'motion/react';
import { StepItem } from '../types';
import { StepIcon } from './StepIcon';

interface StepCardProps {
  step: StepItem;
  index: number;
  isSelected?: boolean;
  onSelect?: () => void;
}

export const StepCard: React.FC<StepCardProps> = ({ 
  step, 
  index, 
  isSelected = false, 
  onSelect 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.7, 
        delay: 0.15 * index, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      onClick={onSelect}
      className={`group relative w-full bg-[#08080C] rounded-none overflow-hidden cursor-pointer transition-all duration-500 border ${
        isSelected 
          ? 'border-[#C9A44C] shadow-[0_0_30px_rgba(201,164,76,0.25)] bg-[#0C0C12]' 
          : 'border-[#8F6D25]/60 hover:border-[#C9A44C] hover:shadow-[0_0_20px_rgba(201,164,76,0.18)]'
      }`}
      style={{ clipPath: 'polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)' }}
    >
      <div className="flex flex-col sm:flex-row h-full min-h-[145px] sm:min-h-[160px] lg:min-h-[170px]">
        
        {/* Left Side: Diagonal Cut Image */}
        <div className="relative w-full sm:w-[42%] lg:w-[44%] h-44 sm:h-auto overflow-hidden flex-shrink-0">
          {/* Slanted Container */}
          <div 
            className="w-full h-full sm:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105"
          >
            <img 
              src={step.image} 
              alt={step.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-90 contrast-105 transition-transform duration-700 group-hover:scale-110"
            />
            {/* Dark cinematic vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60 pointer-events-none" />
          </div>

          {/* Golden diagonal divider line overlay on desktop */}
          <div className="hidden sm:block absolute top-0 bottom-0 right-[18%] w-[2px] bg-gradient-to-b from-[#C9A44C] via-[#8F6D25] to-[#3A2E10] transform rotate-[10deg] origin-top-right pointer-events-none shadow-[0_0_8px_rgba(201,164,76,0.5)] z-10" />
        </div>

        {/* Right Side: Step Details & Number */}
        <div className="relative flex-1 p-5 sm:p-5 lg:p-6 flex flex-col justify-center bg-[#08080C]">
          
          {/* Top Right Step Number */}
          <div className="absolute top-4 right-5 sm:top-5 sm:right-6 flex flex-col items-end">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono tracking-wider text-[#C9A44C] group-hover:text-[#FAF0BD] transition-colors">
              {step.stepNumber}
            </span>
            <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#C9A44C] to-transparent mt-0.5" />
          </div>

          {/* Main Card Content */}
          <div className="flex items-start space-x-4 sm:space-x-4 pr-12">
            
            {/* Gold Ring Icon Badge */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C9A44C] flex items-center justify-center bg-[#C9A44C]/10 text-[#C9A44C] flex-shrink-0 shadow-[0_0_12px_rgba(201,164,76,0.15)] group-hover:border-[#FAF0BD] group-hover:bg-[#C9A44C]/20 transition-all duration-300 mt-1">
              <StepIcon type={step.iconType} className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A44C] group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Title & Description */}
            <div className="flex flex-col space-y-1">
              <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl tracking-wider uppercase font-sans group-hover:text-[#FAF0BD] transition-colors">
                {step.title}
              </h3>
              <p className="text-[#BDBDBD] text-xs sm:text-sm lg:text-base leading-relaxed font-normal max-w-[340px] lg:max-w-[380px]">
                {step.description}
              </p>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
};
