import React, { useState } from 'react';
import { X, Volume2, Disc, Play, Square, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Hypercar } from '../types';
import { engineSound } from '../utils/engineSound';

interface AudioVisualizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: Hypercar;
}

export const AudioVisualizerModal: React.FC<AudioVisualizerModalProps> = ({
  isOpen,
  onClose,
  car,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rpm, setRpm] = useState(1000);

  const triggerRev = () => {
    setIsPlaying(true);
    engineSound.playEngineRev(car.soundType, car.audioConfig.baseFreq);

    // RPM Gauge animation loop
    let currentRpm = car.audioConfig.rpmRange[0];
    const targetRpm = car.audioConfig.rpmRange[1];
    const interval = setInterval(() => {
      currentRpm += 800;
      if (currentRpm >= targetRpm) {
        clearInterval(interval);
        setTimeout(() => {
          setRpm(car.audioConfig.rpmRange[0]);
          setIsPlaying(false);
        }, 1200);
      } else {
        setRpm(currentRpm);
      }
    }, 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#090909] border border-white/15 rounded-2xl p-6 sm:p-8 z-10 overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.08)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-xs font-mono tracking-[0.25em] text-neutral-300 uppercase">
                  ACOUSTIC ENGINE STUDIO // {car.badgeText}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Car & Sound Info */}
            <div className="py-6 flex flex-col items-center text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white">{car.name}</h3>
                <p className="text-xs font-mono text-neutral-400 mt-1">{car.engine} Powerplant Architecture</p>
              </div>

              {/* RPM Gauge Display */}
              <div className="relative w-48 h-48 rounded-full border-2 border-white/10 flex flex-col items-center justify-center bg-black/60 shadow-inner">
                <div
                  className="absolute inset-0 rounded-full border-2 border-white/40 border-t-transparent transition-all duration-300"
                  style={{ transform: `rotate(${(rpm / car.audioConfig.rpmRange[1]) * 270}deg)` }}
                />
                <span className="text-3xl font-mono font-bold text-white tracking-widest">
                  {rpm.toLocaleString()}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  RPM / TACHOMETER
                </span>
              </div>

              {/* Sound Wave Bars Animation */}
              <div className="flex items-center justify-center gap-1.5 h-12 w-full max-w-xs">
                {[12, 24, 38, 18, 48, 28, 14, 32, 42, 20, 36, 16, 26, 44, 22].map((height, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: isPlaying ? [10, height, 8] : 8,
                    }}
                    transition={{
                      repeat: isPlaying ? Infinity : 0,
                      duration: 0.4 + (i % 3) * 0.1,
                      ease: 'easeInOut',
                    }}
                    className={`w-1.5 rounded-full ${
                      isPlaying ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'bg-neutral-800'
                    }`}
                  />
                ))}
              </div>

              {/* Rev Trigger Button */}
              <button
                onClick={triggerRev}
                disabled={isPlaying}
                className="flex items-center gap-3 px-8 py-4 rounded-xl border border-white/30 bg-white text-black font-mono text-xs tracking-[0.2em] uppercase font-semibold hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-50"
              >
                <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-pulse' : ''}`} />
                <span>{isPlaying ? 'REVVING EXHAUST...' : 'TRIGGER EXHAUST REV'}</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
