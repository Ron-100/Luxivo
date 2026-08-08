import React from 'react';
import { Gauge, Zap, Cpu, Activity, Scale, Timer, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Hypercar } from '../types';

interface RightSpecsPanelProps {
  car: Hypercar;
  onOpenReservation: () => void;
}

export const RightSpecsPanel: React.FC<RightSpecsPanelProps> = ({
  car,
  onOpenReservation,
}) => {
  const specs = [
    { label: 'TOP SPEED', value: car.topSpeed, icon: Gauge },
    { label: 'HORSEPOWER', value: car.horsepower, icon: Zap },
    { label: 'ENGINE', value: car.engine, icon: Cpu },
    { label: 'DRIVE', value: car.drive, icon: Activity },
    { label: 'TRANSMISSION', value: car.transmission, icon: ShieldCheck },
    { label: 'WEIGHT', value: car.weight, icon: Scale },
    { label: 'ACCELERATION', value: car.acceleration, icon: Timer },
  ];

  return (
    <div className="w-full max-w-full lg:max-w-sm flex flex-col justify-between py-2 text-left z-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={car.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 sm:gap-6"
        >
          {/* VEHICLE TITLE */}
          <div className="space-y-1.5 sm:space-y-2">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.1] font-sans"
            >
              {car.name}
            </motion.h2>
            <p className="text-xs sm:text-sm font-light text-neutral-400 leading-relaxed font-sans max-w-md lg:max-w-xs">
              {car.description}
            </p>
          </div>

          {/* DIVIDER LINE */}
          <div className="w-full h-[1px] bg-white/10" />

          {/* SPECIFICATIONS LIST (Grid on tablet/mobile for compactness) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-2.5 font-mono text-xs">
            {specs.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="flex items-center justify-between py-1.5 border-b border-white/5 hover:border-white/15 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2 text-neutral-400">
                    <IconComp className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span className="tracking-wider text-[11px] text-neutral-400 uppercase font-light truncate">
                      {item.label}
                    </span>
                  </div>
                  <span className="font-medium text-white tracking-wide text-xs shrink-0 pl-2">
                    {item.value}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* RESERVE VEHICLE BUTTON - Minimal outline style */}
          <div className="pt-2">
            <button
              onClick={onOpenReservation}
              className="group relative w-full flex items-center justify-between px-6 py-3.5 rounded-lg border border-white/20 bg-black/40 backdrop-blur-md text-xs font-mono tracking-[0.2em] text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-[0.98]"
            >
              <span className="uppercase font-medium">RESERVE THIS VEHICLE</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
