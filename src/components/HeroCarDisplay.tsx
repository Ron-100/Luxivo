import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hypercar } from '../types';

interface HeroCarDisplayProps {
  currentCar: Hypercar;
}

export const HeroCarDisplay: React.FC<HeroCarDisplayProps> = ({ currentCar }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt calculation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);

      setMousePos({ x: mouseX, y: mouseY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const rotateX = mousePos.y * -3; // 2-3 degrees tilt
  const rotateY = mousePos.x * 4;
  const translateX = mousePos.x * 12;
  const translateY = mousePos.y * 8;

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center overflow-hidden pointer-events-none select-none"
    >
      {/* BACKGROUND: Enormous Transparent Brand Typography */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCar.brandBgText}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.035, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transform: `translate3d(${mousePos.x * -15}px, ${mousePos.y * -10}px, 0)`,
            }}
            className="w-full text-center tracking-[0.05em] font-black uppercase text-white leading-none text-[18vw] xl:text-[22vw] whitespace-nowrap select-none font-sans font-extrabold opacity-3"
          >
            {currentCar.brandBgText}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Ambient floor illumination spot */}
      <div className="absolute bottom-12 w-[85%] h-[120px] bg-gradient-to-t from-white/5 via-white/1 to-transparent blur-3xl rounded-full z-0 pointer-events-none" />

      {/* CAR DISPLAY CANVAS - NO CARD, NO RECTANGLE CONTAINER */}
      <div className="relative z-10 w-full max-w-[1250px] aspect-[16/9] sm:aspect-[21/10] lg:aspect-[16/8] flex items-center justify-center px-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCar.id}
            initial={{ opacity: 0, scale: 0.96, x: 40, rotateY: -3 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: 0, 
              rotateY: 0,
              transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.95, 
              x: -50, 
              rotateY: 2,
              transition: { duration: 0.7, ease: [0.7, 0, 0.84, 0] }
            }}
            style={{
              transformStyle: 'preserve-3d',
              transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0)`,
            }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* CAR FLOOR SHADOW - Large realistic soft shadow blending seamlessly into floor */}
            <div className="absolute bottom-[2%] w-[92%] h-[24%] car-shadow blur-xl rounded-[100%] z-0" />
            <div className="absolute bottom-[1%] w-[84%] h-[12%] bg-black/95 blur-md rounded-[100%] z-0" />

            {/* HEADLIGHTS BREATHING GLOW EFFECT */}
            <div className="absolute top-[38%] left-[16%] w-[12%] h-[18%] rounded-full animate-headlight-glow pointer-events-none z-20 mix-blend-screen opacity-60" />

            {/* WHEEL REFLECTION LIGHT SWEEP */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none z-20">
              <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-light-sweep" />
            </div>

            {/* CAR IMAGE - Seamlessly blends into background without container box */}
            <img
              src={currentCar.image}
              alt={currentCar.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] transition-all duration-300 pointer-events-auto"
            />

            {/* FLOOR REFLECTION (FLIPPED SOFT MIRROR) */}
            <div className="absolute -bottom-[22%] w-[90%] h-[40%] overflow-hidden pointer-events-none z-0 opacity-20 filter blur-[2px]">
              <img
                src={currentCar.image}
                alt=""
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain floor-reflection transform scale-y-[-1] origin-top opacity-40"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
