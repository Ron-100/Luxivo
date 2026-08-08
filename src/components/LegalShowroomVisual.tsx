import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  FileCheck2,
  Scale,
  Sparkles,
  Maximize2,
  CheckCircle2,
  Car,
  Info,
  ExternalLink,
} from 'lucide-react';
import { INTERACTIVE_HOTSPOTS } from '../data/legalData';
import { Hotspot } from '../types';
import showroomImg from '../assets/images/luxury_legal_showroom_1786198275201.jpg';

interface LegalShowroomVisualProps {
  onOpenAgreementModal: () => void;
  onOpenVerificationModal: (type: string) => void;
}

export const LegalShowroomVisual: React.FC<LegalShowroomVisualProps> = ({
  onOpenAgreementModal,
  onOpenVerificationModal,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      className="relative w-full rounded-2xl overflow-hidden border border-[#C9A44C]/40 bg-[#080808]/60 backdrop-blur-md shadow-[0_15px_50px_rgba(0,0,0,0.85)] group select-none"
    >
      {/* SHOWROOM DISPLAY SCENE FRAME */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/10] xl:aspect-[16/11] overflow-hidden rounded-2xl">
        <img
          src={showroomImg}
          alt="Luxury Vehicle with Legal Rental Agreement and Lady Justice Statue"
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          className={`
            w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}
          `}
        />

        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#080808] flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-[#C9A44C] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* GOLD CINEMATIC OVERLAY LIGHTING & VIGNETTE */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 pointer-events-none" />
        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] pointer-events-none" />

        {/* TOP STATUS BADGES */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center space-x-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C9A44C]/40 shadow-lg"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest text-white uppercase">
              FLEET STATUS: VERIFIED
            </span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            onClick={onOpenAgreementModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-1.5 bg-[#14110A]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C9A44C] text-[#C9A44C] text-[11px] font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(201,164,76,0.25)] hover:bg-[#C9A44C] hover:text-black transition-all"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Inspect Agreement</span>
          </motion.button>
        </div>

        {/* INTERACTIVE HOTSPOTS OVERLAY */}
        {INTERACTIVE_HOTSPOTS.map((spot) => {
          const isActive = activeHotspot?.id === spot.id;
          return (
            <div
              key={spot.id}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button
                onClick={() => {
                  if (spot.id === 'hotspot-document') {
                    onOpenAgreementModal();
                  } else if (spot.id === 'hotspot-plaque') {
                    onOpenVerificationModal('insurance');
                  } else if (spot.id === 'hotspot-car') {
                    onOpenVerificationModal('fleet');
                  } else if (spot.id === 'hotspot-statue') {
                    onOpenVerificationModal('legal');
                  } else {
                    setActiveHotspot(isActive ? null : spot);
                  }
                }}
                onMouseEnter={() => setActiveHotspot(spot)}
                onMouseLeave={() => setActiveHotspot(null)}
                className="relative group/btn p-2"
                aria-label={spot.label}
              >
                {/* PULSING RINGS */}
                <span className="absolute inset-0 rounded-full bg-[#C9A44C]/30 animate-ping pointer-events-none" />
                <span className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A0A0A] border-2 border-[#C9A44C] text-[#C9A44C] shadow-[0_0_15px_rgba(201,164,76,0.6)] group-hover/btn:scale-125 transition-transform duration-200">
                  {spot.icon === 'car' && <Car className="w-3.5 h-3.5" />}
                  {spot.icon === 'file' && <FileCheck2 className="w-3.5 h-3.5" />}
                  {spot.icon === 'scale' && <Scale className="w-3.5 h-3.5" />}
                  {spot.icon === 'shield' && <Shield className="w-3.5 h-3.5" />}
                </span>
              </button>

              {/* TOOLTIP ON HOVER */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 rounded-xl bg-[#0F0E0A]/95 border border-[#C9A44C] text-white shadow-[0_10px_25px_rgba(0,0,0,0.9)] backdrop-blur-md pointer-events-none z-30"
                  >
                    <div className="flex items-center space-x-1.5 text-[#C9A44C] text-xs font-bold tracking-wider uppercase mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{spot.title}</span>
                    </div>
                    <p className="text-[11px] text-[#D1D1D1] leading-snug">
                      {spot.description}
                    </p>
                    <div className="mt-2 text-[10px] text-[#C9A44C] font-semibold flex items-center justify-between border-t border-[#C9A44C]/30 pt-1.5">
                      <span>CLICK TO INSPECT</span>
                      <Info className="w-3 h-3" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* BOTTOM INTERACTIVE CARD OVERLAY IN IMAGE */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-auto z-10">
          {/* QUICK DOCUMENT STAMP INTERACTION */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={onOpenAgreementModal}
            className="cursor-pointer bg-black/85 backdrop-blur-md p-3 rounded-xl border border-[#C9A44C]/40 flex items-center space-x-3 shadow-lg hover:border-[#C9A44C] transition-colors max-w-xs"
          >
            <div className="w-9 h-9 rounded-lg bg-[#18140B] border border-[#C9A44C] flex items-center justify-center text-[#C9A44C] flex-shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center space-x-1">
                <span>RENTAL AGREEMENT</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <p className="text-[10px] text-[#BDBDBD] line-clamp-1">
                Fully transparent contract • Verified ID signed
              </p>
            </div>
          </motion.div>

          {/* INSURED BADGE INTERACTIVE DISPLAY */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => onOpenVerificationModal('insurance')}
            className="cursor-pointer bg-gradient-to-br from-[#18140B] to-[#0A0A0A] backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#C9A44C] flex items-center space-x-2 shadow-[0_0_15px_rgba(201,164,76,0.3)]"
          >
            <Shield className="w-4 h-4 text-[#C9A44C]" />
            <div className="flex flex-col">
              <span className="text-[9px] text-[#C9A44C] font-bold tracking-widest uppercase">
                STATUS
              </span>
              <span className="text-xs font-black tracking-widest text-white uppercase">
                INSURED
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

