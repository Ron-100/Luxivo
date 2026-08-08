import React from 'react';
import { motion } from 'motion/react';

export const CeilingLighting: React.FC = () => {
  return (
    <div className="absolute top-0 right-0 left-0 h-40 md:h-56 pointer-events-none z-10 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1200 240" fill="none" preserveAspectRatio="none">
        <defs>
          <radialGradient id="ceilingLightGlow" cx="60%" cy="20%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#DFB756" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <filter id="glowLight" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Top Glow */}
        <rect x="0" y="0" width="1200" height="240" fill="url(#ceilingLightGlow)" opacity="0.15" />

        {/* Primary S-Curve Light Strip 1 */}
        <motion.path
          d="M 350 10 Q 600 120, 850 30 T 1200 60"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          filter="url(#glowLight)"
          initial={{ pathLength: 0, opacity: 0.2 }}
          animate={{ pathLength: 1, opacity: [0.7, 0.95, 0.7] }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Secondary Delicate Curve 2 */}
        <motion.path
          d="M 420 30 Q 650 150, 920 45 T 1200 80"
          stroke="#FFE6A3"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Subtle Ceiling Wood Grain Texture Lines */}
        <path d="M0 0 L1200 0" stroke="#C9A44C" strokeWidth="0.5" opacity="0.2" />
        <path d="M0 15 C 400 25, 800 5, 1200 20" stroke="#C9A44C" strokeWidth="0.3" opacity="0.1" />
      </svg>
    </div>
  );
};
