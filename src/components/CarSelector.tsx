import React, { useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { Hypercar } from '../types';

interface CarSelectorProps {
  cars: Hypercar[];
  activeCarId: string;
  onSelectCar: (carId: string) => void;
}

export const CarSelector: React.FC<CarSelectorProps> = ({
  cars,
  activeCarId,
  onSelectCar,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndex = cars.findIndex(c => c.id === activeCarId);

  const scrollPrev = () => {
    if (activeIndex > 0) {
      onSelectCar(cars[activeIndex - 1].id);
    }
  };

  const scrollNext = () => {
    if (activeIndex < cars.length - 1) {
      onSelectCar(cars[activeIndex + 1].id);
    }
  };

  return (
    <div className="w-full select-none">
      {/* MOBILE & TABLET HORIZONTAL SELECTOR (< lg) */}
      <div className="flex lg:hidden flex-col gap-2 w-full">
        <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-neutral-500 uppercase px-1">
          <span>SELECT VEHICLE</span>
          <span>0{activeIndex + 1} / 0{cars.length}</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 -mx-2 sm:mx-0">
          {cars.map((car, idx) => {
            const isActive = car.id === activeCarId;
            return (
              <button
                key={car.id}
                onClick={() => onSelectCar(car.id)}
                className={`relative flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-mono tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'border-white bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)] font-medium'
                    : 'border-white/10 bg-black/40 text-neutral-400 hover:border-white/30 hover:text-neutral-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeHorizontalDot"
                    className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="whitespace-nowrap">{car.brand} {car.name.split(' ').slice(1, 3).join(' ')}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* DESKTOP VERTICAL SELECTOR (≥ lg) */}
      <div className="hidden lg:flex flex-col gap-3 max-w-xs">
        {/* Scroll Up Button */}
        <button
          onClick={scrollPrev}
          disabled={activeIndex === 0}
          className="self-start text-neutral-600 hover:text-white disabled:opacity-20 disabled:hover:text-neutral-600 transition-colors duration-200 p-1"
          aria-label="Previous car"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        {/* Vertical Selector List */}
        <div 
          ref={containerRef}
          className="flex flex-col gap-2.5 max-h-[320px] overflow-y-auto no-scrollbar py-1"
        >
          {cars.map((car, idx) => {
            const isActive = car.id === activeCarId;

            return (
              <button
                key={car.id}
                onClick={() => onSelectCar(car.id)}
                className="group relative flex items-center gap-3 text-left py-1 pl-1 pr-3 transition-all duration-300 outline-none"
              >
                {/* Thin Vertical Animated Active Indicator */}
                <div className="relative w-3 flex justify-center items-center">
                  {isActive ? (
                    <motion.div
                      layoutId="activeVerticalIndicator"
                      className="w-[2px] h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  ) : (
                    <div className="w-[1px] h-2 bg-neutral-800 group-hover:bg-neutral-600 transition-colors duration-300" />
                  )}
                </div>

                {/* Status Arrow or Bullet */}
                <span className={`text-[10px] font-mono transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-neutral-600 group-hover:text-neutral-400'
                }`}>
                  {isActive ? '•' : idx < activeIndex ? '↑' : '↓'}
                </span>

                {/* Car Name */}
                <span
                  className={`text-xs sm:text-sm font-light tracking-wide transition-all duration-300 transform group-hover:translate-x-1 ${
                    isActive
                      ? 'text-white font-medium drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  {car.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={scrollNext}
          disabled={activeIndex === cars.length - 1}
          className="self-start text-neutral-600 hover:text-white disabled:opacity-20 disabled:hover:text-neutral-600 transition-colors duration-200 p-1"
          aria-label="Next car"
        >
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Index indicator */}
        <div className="text-[10px] font-mono tracking-widest text-neutral-600 pl-4">
          0{activeIndex + 1} / 0{cars.length}
        </div>
      </div>
    </div>
  );
};
