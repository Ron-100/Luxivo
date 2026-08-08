import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hypercar } from '../types';

interface BottomSpecsBarProps {
  car: Hypercar;
}

export const BottomSpecsBar: React.FC<BottomSpecsBarProps> = ({ car }) => {
  return (
    <footer className="w-full z-20 py-3 sm:py-4 px-2 sm:px-6 pointer-events-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={car.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-t border-white/10 pt-3 sm:pt-4 text-[10px] sm:text-[11px] font-mono tracking-widest text-neutral-400"
        >
          {/* Year */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-neutral-600 uppercase">YEAR:</span>
            <span className="text-neutral-200">{car.year}</span>
          </div>

          {/* Country */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-neutral-600 uppercase">ORIGIN:</span>
            <span className="text-neutral-200">{car.country}</span>
          </div>

          {/* Limited Units */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-neutral-600 uppercase">ALLOCATION:</span>
            <span className="text-neutral-200">{car.limitedUnits}</span>
          </div>

          {/* Engine */}
          <div className="hidden sm:flex items-center gap-1.5 sm:gap-2">
            <span className="text-neutral-600 uppercase">POWERPLANT:</span>
            <span className="text-neutral-200">{car.engine}</span>
          </div>

          {/* Daily Rate */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-neutral-600 uppercase">RENTAL:</span>
            <span className="text-white font-medium">${car.pricePerDay.toLocaleString()} / DAY</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </footer>
  );
};
