import { useState } from 'react';
import { motion } from 'motion/react';
import SpeedometerGraphic from './SpeedometerGraphic';
import heroCarImg from '../assets/images/hero_luxury_car_1786193215800.jpg';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  const [rpm, setRpm] = useState(6.8);
  const [carHovered, setCarHovered] = useState(false);

  return (
    <div className="relative w-full mb-8 sm:mb-12 md:mb-16 lg:mb-20 pt-1 sm:pt-2 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        
        {/* LEFT COLUMN: Headline & Body Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 xl:col-span-5 z-20 text-left"
        >
          {/* Main Headline with Gold Gradient Text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-black text-white leading-[1.08] tracking-tight uppercase font-heading">
            Luxury for Every <br className="hidden sm:inline" />
            <span className="text-gold-gradient drop-shadow-[0_4px_12px_rgba(201,164,76,0.25)] inline-block">
              Special
            </span>{' '}
            Moment
          </h1>

          {/* Subtitle Paragraph */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#C4C4C4] leading-relaxed max-w-[520px] font-medium">
            Whether you&apos;re creating unforgettable memories or making a lasting impression, our premium vehicles are available for legal rental across a variety of events and occasions.
          </p>

          {/* Luxury Legal Rental Badges */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-mono text-gray-400">
            <div className="flex items-center space-x-2 bg-white/5 border border-[#C9A44C]/30 px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C9A44C]" />
              <span className="text-white">100% Fully Insured Fleet</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 border border-[#C9A44C]/30 px-3 py-1.5">
              <span className="text-[#DFB756]">★</span>
              <span className="text-gray-300">White-Glove Concierge</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Sports Car & Tachometer Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center lg:justify-end min-h-[220px] sm:min-h-[360px] md:min-h-[440px] overflow-visible"
          onMouseEnter={() => {
            setCarHovered(true);
            setRpm(8.5);
          }}
          onMouseLeave={() => {
            setCarHovered(false);
            setRpm(6.8);
          }}
        >
          {/* Tachometer SVG Graphic overlay behind car */}
          <SpeedometerGraphic interactiveRpm={rpm} />

          {/* Vehicle Container */}
          <div className="relative w-full max-w-[340px] sm:max-w-[540px] md:max-w-[620px] lg:max-w-[680px] z-10 group cursor-pointer">
            {/* Soft Ambient Gold Underglow beneath vehicle */}
            <div
              className={`absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-[35%] bg-gradient-to-r from-[#C9A44C] to-[#8F6D25] rounded-full blur-[40px] sm:blur-[60px] transition-opacity duration-700 pointer-events-none ${
                carHovered ? 'opacity-60 scale-105' : 'opacity-30'
              }`}
            />

            {/* High Resolution Luxury Sports Car Image */}
            <motion.img
              src={heroCarImg}
              alt="Luxury Black Supercar"
              referrerPolicy="no-referrer"
              animate={{
                y: carHovered ? -6 : 0,
                scale: carHovered ? 1.02 : 1,
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative z-10 w-full h-auto object-contain filter contrast-[1.12] brightness-[0.96] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] sm:drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            />

            {/* Vehicle Interactive Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: carHovered ? 1 : 0 }}
              className="absolute bottom-1 sm:bottom-2 right-2 sm:right-4 z-20 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-mono text-white flex items-center space-x-1.5 sm:space-x-2 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.47) 100%)',
              }}
            >
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#DFB756]" />
              <span>AUDI R8 V10 PERFORMANCE - 610 HP</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
