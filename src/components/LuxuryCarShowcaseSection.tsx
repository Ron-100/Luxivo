import React, { useState, useEffect } from 'react';
import { CarSelector } from './CarSelector';
import { HeroCarDisplay } from './HeroCarDisplay';
import { RightSpecsPanel } from './RightSpecsPanel';
import { BottomSpecsBar } from './BottomSpecsBar';
import { ReservationDrawer } from './ReservationDrawer';
import { AudioVisualizerModal } from './AudioVisualizerModal';
import { HYPERCARS } from '../data/cars';
import { Volume2 } from 'lucide-react';
import { engineSound } from '../utils/engineSound';

export function LuxuryCarShowcaseSection() {
  const [selectedCarId, setSelectedCarId] = useState<string>('bugatti-chiron-ss-300');
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);
  const [isSoundModalOpen, setIsSoundModalOpen] = useState<boolean>(false);
  const [isReving, setIsReving] = useState<boolean>(false);

  // Get currently selected car or fallback to first
  const currentCar = HYPERCARS.find(c => c.id === selectedCarId) || HYPERCARS[0];

  const handleRevClick = () => {
    setIsReving(true);
    engineSound.playEngineRev(currentCar.soundType, currentCar.audioConfig.baseFreq);
    setTimeout(() => setIsReving(false), 2900);
  };

  // Keyboard navigation arrow up/down to switch cars
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isReservationOpen || isSoundModalOpen) return;
      const currentIndex = HYPERCARS.findIndex(c => c.id === selectedCarId);

      if (e.key === 'ArrowUp' && currentIndex > 0) {
        setSelectedCarId(HYPERCARS[currentIndex - 1].id);
      } else if (e.key === 'ArrowDown' && currentIndex < HYPERCARS.length - 1) {
        setSelectedCarId(HYPERCARS[currentIndex + 1].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCarId, isReservationOpen, isSoundModalOpen]);

  return (
    <div className="relative w-full min-h-screen lg:h-screen bg-[#050505] text-[#f3f3f3] selection:bg-white selection:text-black overflow-y-auto lg:overflow-hidden font-sans border-t border-white/10 z-20">
      {/* FULLSCREEN EDITORIAL LAYOUT */}
      <main className="relative w-full min-h-screen lg:h-full flex flex-col justify-between p-4 sm:p-8 lg:p-10">
        
        {/* TOP FLOATING OVERLAY: Title & Badge */}
        <div className="flex items-center justify-between z-30 pointer-events-auto gap-2 py-2">
          <div className="hidden sm:block text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-mono">
            COLLECTION // 0{HYPERCARS.findIndex(c => c.id === selectedCarId) + 1}
          </div>

          <div className="text-[11px] sm:text-sm tracking-[0.25em] sm:tracking-[0.35em] uppercase text-neutral-200 font-light font-mono text-center sm:text-left">
            LUXURY VEHICLE SHOWCASE
          </div>

          <button
            onClick={handleRevClick}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[11px] sm:text-xs font-mono tracking-widest text-neutral-300 hover:text-white hover:border-white/30 transition-all duration-300 shrink-0 ${
              isReving ? 'border-white/60 text-white shadow-[0_0_15px_rgba(255,255,255,0.25)]' : ''
            }`}
            title="Click to play synthesized engine sound"
          >
            <Volume2 className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isReving ? 'animate-bounce text-white' : 'text-neutral-400'}`} />
            <span>{currentCar.badgeText}</span>
          </button>
        </div>

        {/* HERO MAIN GRID */}
        <div className="relative w-full flex-1 grid grid-cols-1 lg:grid-cols-12 items-center z-10 gap-6 my-4 lg:my-auto">
          
          {/* LEFT COLUMN: Vehicle Selector */}
          <div className="lg:col-span-3 z-30">
            <CarSelector
              cars={HYPERCARS}
              activeCarId={selectedCarId}
              onSelectCar={(id) => setSelectedCarId(id)}
            />
          </div>

          {/* CENTER COLUMN: Hypercar Studio Display */}
          <div className="lg:col-span-6 h-full min-h-[260px] sm:min-h-[360px] flex items-center justify-center z-10 my-2 lg:my-0">
            <HeroCarDisplay currentCar={currentCar} />
          </div>

          {/* RIGHT COLUMN: Specification Info Panel */}
          <div className="lg:col-span-3 flex justify-start lg:justify-end z-30">
            <RightSpecsPanel
              car={currentCar}
              onOpenReservation={() => setIsReservationOpen(true)}
            />
          </div>
        </div>

        {/* BOTTOM MINIMAL SPECS BAR */}
        <BottomSpecsBar car={currentCar} />
      </main>

      {/* RESERVATION CONCIERGE DRAWER */}
      <ReservationDrawer
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        car={currentCar}
      />

      {/* ACOUSTIC ENGINE STUDIO MODAL */}
      <AudioVisualizerModal
        isOpen={isSoundModalOpen}
        onClose={() => setIsSoundModalOpen(false)}
        car={currentCar}
      />
    </div>
  );
}
