import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Zap, Users, Sparkles, Calendar, ChevronRight } from 'lucide-react';

interface FleetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVehicle: (carName: string) => void;
}

const FLEET_VEHICLES = [
  {
    id: 'rolls-royce-phantom',
    name: 'Rolls-Royce Phantom VIII',
    category: 'Ultra-Luxury Executive Sedan',
    price: '$2,400',
    period: '/ day',
    engine: '6.75L Twin-Turbo V12',
    power: '563 HP',
    passengers: '4 VIP Passengers',
    features: ['Starlight Headliner', 'Rear Theater Configuration', 'Chauffeur Included', 'Bespoke Audio'],
    badge: 'Flagship'
  },
  {
    id: 'bentley-flying-spur',
    name: 'Bentley Flying Spur Mulliner',
    category: 'Grand Touring Sedan',
    price: '$1,850',
    period: '/ day',
    engine: '6.0L W12 Twin-Turbo',
    power: '626 HP',
    passengers: '4 Passengers',
    features: ['Diamond Quilting', 'Naim 2200W Sound', 'Massage Seating', 'All-Wheel Steering'],
    badge: 'Popular'
  },
  {
    id: 'maybach-s680',
    name: 'Mercedes-Maybach S 680',
    category: 'Executive First-Class Suite',
    price: '$1,950',
    period: '/ day',
    engine: '6.0L Biturbo V12',
    power: '621 HP',
    passengers: '4 Passengers',
    features: ['First-Class Rear Suite', 'Champagne Refrigerator', 'Burmester 4D Audio', 'Active Noise Cancelling'],
    badge: 'VIP Preferred'
  }
];

export const FleetModal: React.FC<FleetModalProps> = ({ isOpen, onClose, onSelectVehicle }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A] border border-[#C9A44C]/40 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 text-white gold-card-border"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-fleet-modal-btn"
              className="absolute top-6 right-6 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A44C]/30 bg-[#C9A44C]/10 text-[#E6C875] text-xs font-semibold tracking-widest uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Exclusive Fleet
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase">
                Select Your <span className="gold-shimmer-text">Masterpiece</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2">
                Every vehicle in our presidential collection represents the pinnacle of automotive engineering and prestige.
              </p>
            </div>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FLEET_VEHICLES.map((car) => (
                <div
                  key={car.id}
                  className="group relative flex flex-col justify-between bg-[#111111] border border-zinc-800 hover:border-[#C9A44C]/60 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A44C]/10"
                >
                  <div>
                    {/* Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs uppercase tracking-widest text-[#C9A44C] font-semibold">
                        {car.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold bg-[#C9A44C]/20 text-[#E6C875] border border-[#C9A44C]/40">
                        {car.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#E6C875] transition-colors mb-2">
                      {car.name}
                    </h3>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400 mb-6 bg-black/40 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#C9A44C]" />
                        <span>{car.power}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#C9A44C]" />
                        <span>{car.passengers}</span>
                      </div>
                      <div className="col-span-2 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C9A44C]" />
                        <span className="truncate">{car.engine}</span>
                      </div>
                    </div>

                    {/* Feature list */}
                    <ul className="space-y-1.5 text-xs text-zinc-300 mb-6">
                      {car.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-2xl font-extrabold text-[#E6C875]">{car.price}</span>
                      <span className="text-xs text-zinc-500">{car.period}</span>
                    </div>

                    <button
                      onClick={() => {
                        onSelectVehicle(car.name);
                        onClose();
                      }}
                      id={`select-${car.id}-btn`}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#C9A44C] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E6C875] transition-all cursor-pointer shadow-md"
                    >
                      <span>Reserve This Vehicle</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A44C]" />
                <span>24/7 Dedicated Concierge & Fully Insured Executive VIP Transport</span>
              </div>
              <div className="flex items-center gap-2 text-[#E6C875]">
                <Calendar className="w-4 h-4" />
                <span>Custom Chauffeur Itineraries Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
