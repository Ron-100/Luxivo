import React from 'react';
import { motion } from 'motion/react';

interface HeroLeftProps {
  onGetStarted: () => void;
}

export const HeroLeft: React.FC<HeroLeftProps> = ({ onGetStarted }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col justify-start max-w-xl lg:max-w-2xl select-none pointer-events-none"
    >
      {/* Main Display Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] font-medium text-white heading-tight font-sans tracking-[-0.045em] leading-[1.0] select-none">
        Luxury Cars for Every<br />
        Extraordinary <br />
        Occasion <br />
      </h1>

      {/* Subtitle Paragraph */}
      <p className="mt-6 sm:mt-8 lg:mt-9 text-neutral-400 text-sm sm:text-base lg:text-[17px] leading-[1.38] max-w-sm font-normal tracking-wide">
        From weddings and film productions to VIP events and exclusive celebrations, we provide premium luxury vehicles for legal rental—delivering elegance, prestige, and unforgettable experiences.
      </p>

      {/* Get Started Button */}
      <div className="mt-8 sm:mt-9 pointer-events-auto">
        <button
          onClick={onGetStarted}
          className="inline-flex items-center justify-center bg-white text-black font-medium text-sm sm:text-[15px] px-7 py-3 sm:px-8 sm:py-3 rounded-full hover:bg-neutral-200 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer focus:outline-none"
        >
          Get started
        </button>
      </div>
    </motion.div>
  );
};

