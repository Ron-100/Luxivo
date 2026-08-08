import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OccasionItem } from '../types';
import { X, Check, Sparkles } from 'lucide-react';

interface OccasionModalProps {
  occasion: OccasionItem | null;
  onClose: () => void;
}

export default function OccasionModal({ occasion, onClose }: OccasionModalProps) {
  const [reserved, setReserved] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    notes: '',
  });

  if (!occasion) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setReserved(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        {/* Backdrop Click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-[#090A0D] border border-[#C9A44C]/60 rounded-xl overflow-hidden shadow-[0_0_60px_rgba(201,164,76,0.25)] z-10 my-auto"
        >
          {/* Top Gold Gradient Accent Line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#FFF0CA] via-[#C9A44C] to-[#9E7A2A]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white hover:border-[#C9A44C] hover:text-[#C9A44C] flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Left Column: Image & Vehicle Specs */}
            <div className="md:col-span-5 relative bg-black flex flex-col">
              <div className="relative h-56 md:h-full min-h-[220px]">
                <img
                  src={occasion.image}
                  alt={occasion.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-transparent to-black/40" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-mono tracking-widest text-[#DFB756] uppercase bg-black/70 border border-[#C9A44C]/50 rounded mb-2 shadow-[0_0_8px_rgba(201,164,76,0.3)]">
                    FEATURED VEHICLE
                  </span>
                  <h4 className="text-xl font-bold font-heading uppercase">{occasion.vehicleModel}</h4>
                  <p className="text-xs text-[#C4C4C4] font-medium">{occasion.specs.ratePerDay}</p>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="p-4 bg-[#0D0E12] border-t md:border-t-0 border-[#C9A44C]/20 space-y-2 text-xs">
                <div className="flex justify-between text-gray-400">
                  <span>Engine Powertrain:</span>
                  <span className="text-white font-medium">{occasion.specs.engine}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Performance:</span>
                  <span className="text-[#DFB756] font-bold">{occasion.specs.horsepower}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Chauffeur Service:</span>
                  <span className="text-white font-medium">
                    {occasion.specs.chauffeurAvailable ? 'Available Included' : 'Self-Drive / Driver'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Experience Details & Booking */}
            <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
              {!reserved ? (
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-mono tracking-widest text-[#DFB756] uppercase">
                      OCCASION SPECIFICATION
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1 uppercase font-heading">
                      {occasion.title.replace('\n', ' ')}
                    </h3>
                    <p className="text-sm text-[#C4C4C4] mt-2 leading-relaxed font-medium">
                      {occasion.subtitle}
                    </p>
                  </div>

                  {/* Included Features List */}
                  <div className="mb-6 space-y-2.5">
                    <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 font-heading">
                      INCLUDED WITH RENTAL
                    </h5>
                    {occasion.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-300">
                        <div className="w-4 h-4 rounded-full bg-[#C9A44C]/20 border border-[#C9A44C] text-[#DFB756] flex items-center justify-center mr-2.5 shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Booking Form */}
                  <form onSubmit={handleSubmit} className="space-y-3 pt-2 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase font-mono text-gray-400 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Lord Henry"
                          className="w-full bg-[#12141A] border border-white/10 focus:border-[#C9A44C] rounded px-3 py-1.5 text-xs text-white outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-mono text-gray-400 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 019-2831"
                          className="w-full bg-[#12141A] border border-white/10 focus:border-[#C9A44C] rounded px-3 py-1.5 text-xs text-white outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono text-gray-400 mb-1">
                        Preferred Event Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#12141A] border border-white/10 focus:border-[#C9A44C] rounded px-3 py-1.5 text-xs text-white outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 bg-gradient-to-r from-[#FFF0CA] via-[#C9A44C] to-[#9E7A2A] hover:brightness-110 text-black font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-[0_0_20px_rgba(201,164,76,0.4)] flex items-center justify-center space-x-2 cursor-pointer font-heading"
                    >
                      <Sparkles className="w-4 h-4 text-black" />
                      <span>INQUIRE & RESERVE VEHICLE</span>
                    </button>
                  </form>
                </div>
              ) : (
                /* Success Confirmation View */
                <div className="py-8 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#C9A44C]/20 border-2 border-[#C9A44C] text-[#DFB756] flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase font-heading">Reservation Inquired!</h3>
                  <p className="text-sm text-[#C4C4C4] max-w-sm font-medium">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our concierge team has received your request for the{' '}
                    <span className="text-[#DFB756] font-semibold">{occasion.vehicleModel}</span> and will contact you within 15 minutes.
                  </p>
                  <button
                    onClick={() => {
                      setReserved(false);
                      onClose();
                    }}
                    className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer font-heading"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
