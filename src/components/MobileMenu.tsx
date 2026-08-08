import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFAQ: () => void;
  onOpenContact: () => void;
  onOpenAbout: () => void;
  onOpenSpecs: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenFAQ,
  onOpenContact,
  onOpenAbout,
  onOpenSpecs,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-12 text-white"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-white fill-current"
              >
                <path
                  d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 4c5.523 0 10 4.477 10 10 0 2.45-.88 4.693-2.348 6.435l-3.328-3.328A5.966 5.966 0 0 0 21 16c0-2.761-2.239-5-5-5s-5 2.239-5 5a4.99 4.99 0 0 0 2.1 4.053l-3.048 3.048A8.956 8.956 0 0 1 7 16c0-4.97 4.03-9 9-9z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-2xl font-medium tracking-tight font-sans lowercase">
              Luxivo
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-white cursor-pointer focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col gap-6 my-auto">
          <button
            onClick={() => {
              onClose();
              onOpenSpecs();
            }}
            className="text-left text-3xl sm:text-4xl font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group"
          >
            <span>Vehicle Specs Sheet</span>
            <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenFAQ();
            }}
            className="text-left text-3xl sm:text-4xl font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group"
          >
            <span>FAQ</span>
            <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="text-left text-3xl sm:text-4xl font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group"
          >
            <span>Contact & Booking</span>
            <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenAbout();
            }}
            className="text-left text-3xl sm:text-4xl font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group"
          >
            <span>About us</span>
            <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-xs text-neutral-500 font-mono">
          <span>Luxivo PERFORMANCE TUNING LAB</span>
          <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
