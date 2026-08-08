import React from 'react';
import { motion } from 'motion/react';
import { BENEFIT_ITEMS } from '../data/benefits';
import { BenefitCard } from './BenefitCard';
import { ShowroomScene } from './ShowroomScene';
import { CeilingLighting } from './CeilingLighting';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-white py-10 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden flex flex-col justify-center select-none">
      {/* Background Architectural Atmosphere & Glows */}
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-radial from-[#C9A44C]/10 via-transparent to-transparent pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-radial from-[#101018] via-transparent to-transparent pointer-events-none blur-3xl" />
      
      {/* Ceiling Architectural Lighting Curves */}
      <CeilingLighting />

      {/* Main Section Canvas Container */}
      <div className="relative z-20 w-full max-w-[1680px] mx-auto">
        
        {/* Top Label (03. WHY CHOOSE US + Gold Horizontal Accent Line) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6 lg:mb-8"
        >
          <span className="text-white/90 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase font-heading">
            WHY CHOOSE US
          </span>
          <div className="h-[1px] flex-1 max-w-sm sm:max-w-md md:max-w-xl bg-gradient-to-r from-[#C9A44C]/70 via-[#C9A44C]/20 to-transparent ml-2" />
        </motion.div>

        {/* Main 2-Part Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-stretch">
          
          {/* LEFT COLUMN: Typography + Six Benefit Items (36% - 40% Width) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between">
            <div>
              {/* Stacked Main Heading */}
              <motion.h1
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-black text-4xl sm:text-5xl md:text-6xl xl:text-[70px] 2xl:text-[76px] leading-[0.92] tracking-tight uppercase font-heading text-white mb-5"
              >
                <span className="block text-white">EXPERIENCE</span>
                <span className="block text-gold-gradient drop-shadow-[0_4px_12px_rgba(201,164,76,0.2)]">LUXURY</span>
                <span className="block text-white">WITHOUT</span>
                <span className="block text-white">COMPROMISE</span>
              </motion.h1>

              {/* Supporting Description Text */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#C4C4C4] text-sm sm:text-base xl:text-[17px] font-medium leading-relaxed max-w-[450px] mb-4 whitespace-pre-line"
              >
                We deliver more than premium vehicles—{"\n"}
                we provide a seamless luxury experience{"\n"}
                from booking to drop-off.
              </motion.p>

              {/* Decorative Accent Swoosh Lines Beneath Description */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mb-6 origin-left"
              >
                <svg className="w-28 h-3 text-[#C9A44C]/70" viewBox="0 0 120 12" fill="none">
                  <path d="M 2 8 C 35 2, 85 2, 118 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 15 11 C 45 6, 75 6, 105 11" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" />
                </svg>
              </motion.div>
            </div>

            {/* Vertical List of SIX Benefit Items */}
            <div className="space-y-2.5 sm:space-y-3 mt-1">
              {BENEFIT_ITEMS.map((item, index) => (
                <BenefitCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Automotive Showroom Scene (60% - 64% Width) */}
          <div className="lg:col-span-7 xl:col-span-7 flex items-center justify-center min-h-[480px] lg:min-h-full">
            <ShowroomScene />
          </div>

        </div>

      </div>
    </section>
  );
};
