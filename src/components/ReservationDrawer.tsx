import React, { useState } from 'react';
import { X, Calendar, MapPin, User, Mail, Phone, ShieldCheck, CheckCircle2, Sparkles, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Hypercar, ReservationDetails } from '../types';

interface ReservationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  car: Hypercar;
}

export const ReservationDrawer: React.FC<ReservationDrawerProps> = ({
  isOpen,
  onClose,
  car,
}) => {
  const [serviceType, setServiceType] = useState<ReservationDetails['serviceType']>('VIP_ARRIVAL');
  const [startDate, setStartDate] = useState<string>('2026-08-15');
  const [endDate, setEndDate] = useState<string>('2026-08-18');
  const [city, setCity] = useState<string>('Monaco / Monte Carlo');
  const [withChauffeur, setWithChauffeur] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  // Calculate rental duration
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
  const basePrice = diffTime * car.pricePerDay;
  const chauffeurFee = withChauffeur ? diffTime * 1200 : 0;
  const deliveryFee = 2500; // Enclosed flatbed global transport
  const totalEstimated = basePrice + chauffeurFee + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'AURA-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer Slide-Over */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-xl h-full bg-[#080808] border-l border-white/10 p-6 sm:p-8 overflow-y-auto z-10 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-500">
                  CONCIERGE RESERVATION
                </span>
                <h3 className="text-xl font-bold text-white tracking-wide font-sans">
                  Reserve {car.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Success View */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center gap-6 my-auto"
              >
                <div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                    ENQUIRY CONFIRMED // {bookingRef}
                  </span>
                  <h4 className="text-2xl font-bold text-white">Your Request Has Been Received</h4>
                  <p className="text-sm font-light text-neutral-400 max-w-md mx-auto leading-relaxed">
                    Our private hypercar concierge will contact you within 15 minutes to arrange security clearance, enclosed flatbed transport, and schedule delivery to {city}.
                  </p>
                </div>

                <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-left font-mono text-xs space-y-2">
                  <div className="flex justify-between text-neutral-400">
                    <span>Vehicle:</span>
                    <span className="text-white font-medium">{car.name}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Destination:</span>
                    <span className="text-white font-medium">{city}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Duration:</span>
                    <span className="text-white font-medium">{diffTime} Days ({startDate} - {endDate})</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Estimated Total:</span>
                    <span className="text-white font-medium">${totalEstimated.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-3.5 rounded-lg border border-white/30 bg-white text-black font-mono text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors"
                >
                  Return to Showcase
                </button>
              </motion.div>
            ) : (
              /* Reservation Form */
              <form onSubmit={handleSubmit} className="py-6 space-y-6">
                {/* Vehicle Selected Mini Banner */}
                <div className="flex items-center gap-4 p-3 rounded-xl border border-white/10 bg-white/5">
                  <img src={car.image} alt={car.name} className="w-20 h-12 object-contain" referrerPolicy="no-referrer" />
                  <div className="text-xs">
                    <p className="text-white font-medium">{car.name}</p>
                    <p className="text-neutral-400 font-mono">${car.pricePerDay.toLocaleString()} / DAY • {car.engine}</p>
                  </div>
                </div>

                {/* Service Purpose Selection */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                    Select Event / Purpose
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'VIP_ARRIVAL', label: 'VIP / Gala Arrival' },
                      { id: 'WEDDING_GALA', label: 'Luxury Wedding' },
                      { id: 'FILM_PHOTOSHOOT', label: 'Film & Media Shoot' },
                      { id: 'PRIVATE_TRACK', label: 'Private Track Day' },
                      { id: 'EXECUTIVE_CHAUFFEUR', label: 'Chauffeur Service' },
                    ].map((svc) => (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() => setServiceType(svc.id as ReservationDetails['serviceType'])}
                        className={`p-2.5 rounded-lg border text-left font-mono transition-all duration-200 ${
                          serviceType === svc.id
                            ? 'border-white bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]'
                            : 'border-white/10 bg-transparent text-neutral-400 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {svc.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Selection */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" /> Delivery Destination
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-white"
                  >
                    <option value="Monaco / Monte Carlo">Monaco / Monte Carlo, France</option>
                    <option value="Dubai / Abu Dhabi">Dubai / Abu Dhabi, UAE</option>
                    <option value="Beverly Hills / Malibu">Beverly Hills / Malibu, CA</option>
                    <option value="London / Mayfair">London / Mayfair, UK</option>
                    <option value="Zurich / Geneva">Zurich / Geneva, Switzerland</option>
                    <option value="Miami / South Beach">Miami / South Beach, FL</option>
                    <option value="Tokyo / Ginza">Tokyo / Ginza, Japan</option>
                    <option value="Paris / Place Vendôme">Paris / Place Vendôme, France</option>
                  </select>
                </div>

                {/* Date Selection */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Start Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> End Date
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-white"
                    />
                  </div>
                </div>

                {/* Driver Option */}
                <div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-black/40">
                  <div className="space-y-0.5">
                    <span className="text-xs font-mono text-white">Include Executive Driver / Security Chauffeur</span>
                    <p className="text-[10px] text-neutral-400 font-mono">Professional track-certified driver ($1,200/day)</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={withChauffeur}
                    onChange={(e) => setWithChauffeur(e.target.checked)}
                    className="w-4 h-4 accent-white rounded"
                  />
                </div>

                {/* Contact Information */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                    Client Contact Details
                  </span>
                  <div className="space-y-2">
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-3.5 h-3.5 text-neutral-500" />
                      <input
                        type="text"
                        required
                        placeholder="Full Legal Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-black/60 border border-white/15 rounded-lg pl-9 pr-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-3.5 h-3.5 text-neutral-500" />
                        <input
                          type="email"
                          required
                          placeholder="VIP Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-black/60 border border-white/15 rounded-lg pl-9 pr-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-white"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-3.5 h-3.5 text-neutral-500" />
                        <input
                          type="tel"
                          required
                          placeholder="Direct Phone / WhatsApp"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-black/60 border border-white/15 rounded-lg pl-9 pr-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="p-4 rounded-xl border border-white/15 bg-white/5 space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-neutral-400">
                    <span>Daily Rate ({diffTime} days @ ${car.pricePerDay.toLocaleString()}):</span>
                    <span className="text-white">${basePrice.toLocaleString()}</span>
                  </div>
                  {withChauffeur && (
                    <div className="flex justify-between text-neutral-400">
                      <span>Executive Chauffeur ({diffTime} days):</span>
                      <span className="text-white">${chauffeurFee.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-neutral-400">
                    <span>Enclosed Air-Conditioned Flatbed Carrier:</span>
                    <span className="text-white">${deliveryFee.toLocaleString()}</span>
                  </div>
                  <div className="w-full h-[1px] bg-white/10 my-1" />
                  <div className="flex justify-between text-sm font-bold text-white">
                    <span>Estimated Total:</span>
                    <span>${totalEstimated.toLocaleString()}</span>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg border border-white/30 bg-white text-black font-mono text-xs tracking-[0.2em] font-medium uppercase hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  Submit Priority Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
