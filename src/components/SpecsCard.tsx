import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VehicleSpec } from '../types';

interface SpecsCardProps {
  vehicle: VehicleSpec;
  vehicles: VehicleSpec[];
  onSelectVehicle: (v: VehicleSpec) => void;
  onViewMore: () => void;
}

export const SpecsCard: React.FC<SpecsCardProps> = ({
  vehicle,
  vehicles,
  onSelectVehicle,
  onViewMore,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#121212] border border-neutral-800/60 rounded-[28px] sm:rounded-[30px] p-6 sm:p-7 w-full max-w-[340px] lg:max-w-[360px] ml-auto relative overflow-hidden shadow-2xl pointer-events-auto"
    >
      {/* Top row: Title and vehicle dots */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl sm:text-[28px] font-normal text-white tracking-tight font-sans">
          Specs
        </h2>
        {/* Subtle dot indicators for switching cars */}
        <div className="flex items-center gap-1.5">
          {vehicles.map((v) => (
            <button
              key={v.id}
              onClick={() => onSelectVehicle(v)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                v.id === vehicle.id
                  ? 'w-5 bg-white'
                  : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'
              }`}
              title={v.model}
              aria-label={`Switch to ${v.model}`}
            />
          ))}
        </div>
      </div>

      {/* Description text */}
      <AnimatePresence mode="wait">
        <motion.p
          key={vehicle.id}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          className="text-neutral-400 text-xs sm:text-[13.5px] leading-[1.4] mb-6 font-normal tracking-normal"
        >
          {vehicle.description}
        </motion.p>
      </AnimatePresence>

      {/* View More Button */}
      <div className="flex items-center">
        <button
          onClick={onViewMore}
          className="inline-flex items-center justify-center border border-neutral-600/90 text-white hover:bg-white hover:text-black font-normal text-xs sm:text-sm px-5 py-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none"
        >
          View more
        </button>
      </div>
    </motion.div>
  );
};

