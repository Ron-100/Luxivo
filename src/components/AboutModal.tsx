import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, Wrench, Shield, Cpu } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#111111] border border-neutral-800 rounded-3xl p-6 sm:p-8 w-full max-w-2xl z-10 overflow-hidden shadow-2xl my-8 text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                About Luxivo
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mt-1">
                Engineering Without Compromise
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-all cursor-pointer focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-6 space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p>
              Founded by motorsports engineers and telemetry specialists, Luxivo was established with a singular objective: to redefine high-performance supercar recalibration and aftermarket integration.
            </p>
            <p>
              Rather than relying solely on factory specifications, we analyze airflow dynamics, thermal threshold tolerances, and powertrain limits to engineer custom modifications that elevate performance safely.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-neutral-950 rounded-2xl border border-neutral-800 flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-sm font-semibold mb-1">Race Proven</h4>
                  <p className="text-xs text-neutral-400">Tested on Nürburgring and Laguna Seca telemetry circuits.</p>
                </div>
              </div>

              <div className="p-4 bg-neutral-950 rounded-2xl border border-neutral-800 flex items-start gap-3">
                <Cpu className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-sm font-semibold mb-1">Custom ECU</h4>
                  <p className="text-xs text-neutral-400">Proprietary dual-processor remapping technology.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="text-xs text-neutral-400 hover:text-white underline"
            >
              Start a custom build project
            </button>
            <button
              onClick={onClose}
              className="bg-white text-black font-medium text-sm px-6 py-2 rounded-full hover:bg-neutral-200 transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
