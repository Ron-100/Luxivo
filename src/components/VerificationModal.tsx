import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Lock,
  UserCheck,
  FileText,
  Headset,
  Sparkles,
} from 'lucide-react';
import { FeatureItem } from '../types';

interface VerificationModalProps {
  item: FeatureItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VerificationModal: React.FC<VerificationModalProps> = ({
  item,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none overflow-y-auto">
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* MODAL CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-[#0D0C09] border border-[#C9A44C] rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-10 overflow-hidden my-auto"
        >
          {/* DECORATIVE LIGHTING */}
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#C9A44C]/20 rounded-full blur-2xl pointer-events-none" />

          {/* TOP BAR */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full border border-[#C9A44C] bg-[#1A160D] flex items-center justify-center text-[#C9A44C] shadow-[0_0_15px_rgba(201,164,76,0.3)]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#C9A44C] uppercase">
                  LEGAL & SAFETY SPECIFICATION
                </span>
                <h3 className="text-lg font-extrabold text-white tracking-wider uppercase leading-tight mt-0.5 whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-[#C9A44C] hover:bg-[#C9A44C]/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-[#D1D1D1] leading-relaxed mb-5 border-b border-[#C9A44C]/20 pb-4">
            {item.description}
          </p>

          {/* GUARANTEE POINTS */}
          <div className="space-y-3 mb-6">
            <span className="text-[11px] font-mono tracking-widest text-[#C9A44C] uppercase font-bold">
              VERIFIED COMPLIANCE GUARANTEES:
            </span>

            <div className="space-y-2">
              {item.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-[#14120B] border border-[#C9A44C]/20"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C9A44C] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-[#E5E5E5] font-medium leading-tight">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between pt-2 border-t border-[#C9A44C]/20">
            <div className="flex items-center space-x-1.5 text-[11px] text-[#C9A44C] font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% LAWFUL & REGULATED</span>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#C9A44C] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#E2C376] transition-colors"
            >
              Acknowledge
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
