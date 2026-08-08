import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Car, CheckCircle2, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedVehicle?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedVehicle = 'Rolls-Royce Phantom VIII'
}) => {
  const [vehicle, setVehicle] = useState(preselectedVehicle);
  const [pickupLocation, setPickupLocation] = useState('VIP Private Airport Terminal');
  const [pickupDate, setPickupDate] = useState('2026-08-15');
  const [returnDate, setReturnDate] = useState('2026-08-18');
  const [serviceType, setServiceType] = useState<'chauffeur' | 'self-drive'>('chauffeur');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

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
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#0A0A0A] border border-[#C9A44C]/50 rounded-2xl p-6 sm:p-8 text-white shadow-2xl gold-card-border"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-booking-modal-btn"
              className="absolute top-6 right-6 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Header */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A44C]/30 bg-[#C9A44C]/10 text-[#E6C875] text-xs font-semibold tracking-widest uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Reserve Your VIP Experience
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                    Book Your <span className="gold-shimmer-text">Vehicle</span>
                  </h2>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                    Complete your reservation details for seamless luxury arrival.
                  </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  {/* Vehicle Choice */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#C9A44C] mb-2 flex items-center gap-2">
                      <Car className="w-4 h-4" /> Selected Vehicle
                    </label>
                    <select
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="w-full bg-[#121212] border border-zinc-700 focus:border-[#C9A44C] rounded-lg px-4 py-3 text-sm text-white focus:outline-none"
                    >
                      <option value="Rolls-Royce Phantom VIII">Rolls-Royce Phantom VIII (V12 Flagship)</option>
                      <option value="Bentley Flying Spur Mulliner">Bentley Flying Spur Mulliner (W12)</option>
                      <option value="Mercedes-Maybach S 680">Mercedes-Maybach S 680 (First-Class)</option>
                    </select>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#C9A44C] mb-2 flex items-center gap-2">
                      <UserCheck className="w-4 h-4" /> Service Preference
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setServiceType('chauffeur')}
                        className={`py-3 px-4 rounded-lg border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          serviceType === 'chauffeur'
                            ? 'bg-[#C9A44C]/20 border-[#C9A44C] text-[#E6C875]'
                            : 'bg-[#121212] border-zinc-800 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        <UserCheck className="w-4 h-4" />
                        Chauffeur Driven
                      </button>
                      <button
                        type="button"
                        onClick={() => setServiceType('self-drive')}
                        className={`py-3 px-4 rounded-lg border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          serviceType === 'self-drive'
                            ? 'bg-[#C9A44C]/20 border-[#C9A44C] text-[#E6C875]'
                            : 'bg-[#121212] border-zinc-800 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        <Car className="w-4 h-4" />
                        Self Drive
                      </button>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C9A44C]" /> Pickup Date
                      </label>
                      <input
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-full bg-[#121212] border border-zinc-700 focus:border-[#C9A44C] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C9A44C]" /> Return Date
                      </label>
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full bg-[#121212] border border-zinc-700 focus:border-[#C9A44C] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C9A44C]" /> Delivery / Pickup Location
                    </label>
                    <select
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full bg-[#121212] border border-zinc-700 focus:border-[#C9A44C] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none"
                    >
                      <option value="VIP Private Airport Terminal">VIP Private Airport Terminal</option>
                      <option value="Grand Luxury Hotel Entrance">Grand Luxury Resort & Hotel Entrance</option>
                      <option value="Private Estate Address">Private Estate Residence</option>
                    </select>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="confirm-reservation-btn"
                  className="w-full py-4 rounded-xl bg-gold-gradient text-black font-extrabold text-sm uppercase tracking-widest hover:bg-gold-gradient-hover transition-all cursor-pointer shadow-gold-btn"
                >
                  Confirm Instant VIP Reservation
                </button>
              </form>
            ) : (
              /* Success Screen */
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 bg-[#C9A44C]/20 border border-[#C9A44C] rounded-full flex items-center justify-center mx-auto text-[#E6C875]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight">
                    Reservation Confirmed
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2 max-w-md mx-auto">
                    Your luxury vehicle <span className="text-[#E6C875] font-bold">{vehicle}</span> is reserved for delivery at <span className="text-white font-semibold">{pickupLocation}</span>.
                  </p>
                </div>

                <div className="bg-[#121212] border border-[#C9A44C]/30 p-4 rounded-xl text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Booking Reference:</span>
                    <span className="font-mono text-[#E6C875] font-bold">LX-9824-ARRIVE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Service:</span>
                    <span className="text-white capitalize">{serviceType} Service</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Dates:</span>
                    <span className="text-white">{pickupDate} to {returnDate}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-[#C9A44C]" />
                  <span>Our VIP Concierge will reach out via encrypted communication.</span>
                </div>

                <button
                  onClick={handleReset}
                  id="done-reservation-btn"
                  className="py-3 px-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
