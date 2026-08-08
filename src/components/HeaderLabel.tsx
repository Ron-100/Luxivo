import { motion } from 'motion/react';

export default function HeaderLabel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase select-none mb-8 sm:mb-12"
    >
      <span className="text-white/90 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase font-heading">
        PERFECT FOR EVERY OCCASION
      </span>
      <div className="h-[1px] flex-1 max-w-sm sm:max-w-md md:max-w-xl bg-gradient-to-r from-[#C9A44C]/70 via-[#C9A44C]/20 to-transparent ml-2" />
    </motion.div>
  );
}
