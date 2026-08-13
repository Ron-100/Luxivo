import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Sparkles } from 'lucide-react';
import { FleetModal } from './FleetModal';
import { BookingModal } from './BookingModal';
import bgImage from '../assets/images/luxury_car_cta_bg_1786199208802.webp';

// Custom SVG Car Outline Icon matching the reference image button 1
const CarOutlineIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.7 0-1.3.3-1.8.7C4.3 8.6 3 10 3 10s-2.7.6-4.5 1.1C.7 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
    <path d="M5 10l1.5-3.5C6.8 6 7.4 5.5 8 5.5h8c.6 0 1.2.5 1.5 1L19 10" />
  </svg>
);

export const LuxuryCtaSection: React.FC = () => {
  const [isFleetOpen, setIsFleetOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('Rolls-Royce Phantom VIII');

  const handleOpenBooking = (carName?: string) => {
    if (carName) setSelectedVehicle(carName);
    setIsBookingOpen(true);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      {/* Outer Container with 16:9 visual proportion, dark background, and thin metallic gold border */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#050505] border border-[#C9A44C]/40 shadow-2xl gold-card-border group"
      >
        {/* Background Image Container with Cinematic Lighting and Overlays */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Main photorealistic background image */}
          <img
            src={bgImage}
            alt="Luxury Sedan VIP Entrance"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center md:object-right scale-100 group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
          />

          {/* Left Side Darkness Gradient Overlay to ensure maximum contrast for left text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 via-45% to-transparent z-10" />
          
          {/* Top and Bottom Subtle Vignette for cinematic depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]/90 z-10 pointer-events-none" />

          {/* Ambient Gold Light Reflection Effect on left */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C9A44C]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full min-h-[540px] sm:min-h-[580px] md:min-h-[640px] flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          
          {/* LEFT CONTENT AREA (~40-45% desktop width) */}
          <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col items-start text-left">
            
            {/* TOP DECORATIVE ELEMENT: Thin gold line with central diamond ornament */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[280px] sm:max-w-[320px] flex items-center justify-center gap-3 mb-6 sm:mb-8"
            >
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C9A44C]/80" />
              {/* Diamond ornament */}
              <div className="w-2.5 h-2.5 rotate-45 border border-[#E6C875] bg-[#C9A44C]/60 shadow-[0_0_8px_rgba(201,164,76,0.8)]" />
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C9A44C]/80" />
            </motion.div>

            {/* MAIN HEADING (3 Lines) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-extrabold uppercase tracking-tight leading-[0.92] text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-['Montserrat',sans-serif] select-none"
            >
              {/* Line 1: READY TO */}
              <div className="text-white drop-shadow-md">
                READY TO
              </div>

              {/* Line 2: ARRIVE (Gold Highlight) */}
              <div className="relative inline-block my-1">
                <span className="text-gold-gradient gold-shimmer-text drop-shadow-[0_2px_15px_rgba(201,164,76,0.3)]">
                  ARRIVE
                </span>
              </div>

              {/* Line 3: IN STYLE? */}
              <div className="text-white drop-shadow-md">
                IN STYLE?
              </div>
            </motion.div>

            {/* SMALL THIN GOLD DECORATIVE LINE below heading */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '60px' }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-[1.5px] bg-gradient-to-r from-[#C9A44C] to-[#E6C875] my-5 sm:my-6 rounded-full"
            />

            {/* DESCRIPTION TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[#BDBDBD] text-base sm:text-lg md:text-[17px] leading-relaxed max-w-[440px] font-normal mb-8 sm:mb-10 text-balance"
            >
              Turn every occasion into an unforgettable experience with our exclusive luxury car rental service.
            </motion.p>

            {/* BUTTONS CONTAINER (2 Buttons, Horizontal on Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              {/* BUTTON 1: PRIMARY CTA - VIEW LUXURY FLEET */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsFleetOpen(true)}
                id="view-fleet-primary-btn"
                className="group relative flex items-center justify-center gap-3 px-6 sm:px-7 py-4 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-gold-btn cursor-pointer overflow-hidden min-h-[52px]"
              >
                {/* Button shine sweep effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                <CarOutlineIcon className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-300" />
                <span className="font-extrabold tracking-wider">VIEW LUXURY FLEET</span>
              </motion.button>

              {/* BUTTON 2: SECONDARY CTA - BOOK YOUR VEHICLE */}
              <motion.button
                whileHover={{ scale: 1.03, borderColor: 'rgba(230, 200, 117, 1)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleOpenBooking()}
                id="book-vehicle-secondary-btn"
                className="group flex items-center justify-center gap-3 px-6 sm:px-7 py-4 rounded-xl bg-black/40 hover:bg-black/70 border border-[#C9A44C]/80 hover:border-[#E6C875] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300 cursor-pointer min-h-[52px]"
              >
                <Calendar className="w-5 h-5 text-[#C9A44C] group-hover:text-[#E6C875] transition-colors duration-300" />
                <span className="font-extrabold tracking-wider">BOOK YOUR VEHICLE</span>
              </motion.button>
            </motion.div>

          </div>

        </div>

        {/* Bottom subtle luxury highlight bar */}
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C]/50 to-transparent pointer-events-none" />
      </motion.div>

      {/* Interactive Modals */}
      <FleetModal
        isOpen={isFleetOpen}
        onClose={() => setIsFleetOpen(false)}
        onSelectVehicle={(vehicleName) => handleOpenBooking(vehicleName)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedVehicle={selectedVehicle}
      />
    </section>
  );
};
