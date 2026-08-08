import React, { useState, useRef, useEffect } from 'react';
import { ImageItem, LensConfig } from '../types';

interface HeroLensProps {
  image1: ImageItem;
  image2: ImageItem;
  isFlipped: boolean;
  onSwapImages: () => void;
  config: LensConfig;
}

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export const HeroLens: React.FC<HeroLensProps> = ({
  image1,
  image2,
  isFlipped,
  onSwapImages,
  config,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(true);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  // Dynamic lens sizing: expanded on movement, contracted on idle
  const idleRadius = 22; // Small stationary focal point
  const [animatedRadius, setAnimatedRadius] = useState<number>(idleRadius);
  const currentRadiusRef = useRef<number>(idleRadius);
  const targetRadiusRef = useRef<number>(idleRadius);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);

  // Active base image vs revealed hover image
  const baseImage = isFlipped ? image2 : image1;
  const hoverImage = isFlipped ? image1 : image2;

  // Smooth lerp loop for radius expansion / contraction
  useEffect(() => {
    let active = true;

    const animate = () => {
      if (!active) return;
      const diff = targetRadiusRef.current - currentRadiusRef.current;
      if (Math.abs(diff) > 0.2) {
        currentRadiusRef.current += diff * 0.18; // Lerp speed
        setAnimatedRadius(currentRadiusRef.current);
      } else if (currentRadiusRef.current !== targetRadiusRef.current) {
        currentRadiusRef.current = targetRadiusRef.current;
        setAnimatedRadius(targetRadiusRef.current);
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      active = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Global window pointer movement listener so pointer tracking follows cursor everywhere
  useEffect(() => {
    const handleGlobalPointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // Check if mouse is within window boundaries
      const isInsideWindow =
        e.clientX >= 0 &&
        e.clientX <= window.innerWidth &&
        e.clientY >= 0 &&
        e.clientY <= window.innerHeight;

      if (!isInsideWindow) {
        setIsHovered(false);
        targetRadiusRef.current = idleRadius;
        return;
      }

      setIsHovered(true);
      const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));
      setCursorPos({ x, y });

      // Expand lens on motion
      targetRadiusRef.current = config.radius;

      // Reset idle timer - shrink back to small focal point when mouse stops
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        targetRadiusRef.current = idleRadius;
      }, 280);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      targetRadiusRef.current = idleRadius;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };

    window.addEventListener('pointermove', handleGlobalPointerMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('pointermove', handleGlobalPointerMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [config.radius]);

  // Handle click on background canvas to swap main & revealed images with ripple effect
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rippleId = Date.now();
    const newRipple: ClickRipple = { id: rippleId, x, y };
    setRipples((prev) => [...prev.slice(-3), newRipple]);

    // Reliable fallback cleanup after animation finishes (500ms)
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== rippleId));
    }, 550);

    // Briefly contract lens focal point on click so swapped car is displayed cleanly
    targetRadiusRef.current = idleRadius;
    currentRadiusRef.current = idleRadius;
    setAnimatedRadius(idleRadius);

    onSwapImages();
  };

  const handleRippleEnd = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  // Compute CSS Mask for feathered, soft-fadey hover lens
  const getMaskStyle = () => {
    const { x, y } = cursorPos;
    const radius = animatedRadius;

    if (!isHovered) {
      return {
        maskImage: 'radial-gradient(circle 0px at 0px 0px, transparent 0%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(circle 0px at 0px 0px, transparent 0%, transparent 100%)',
      };
    }

    return {
      maskImage: `radial-gradient(circle ${radius}px at ${x}px ${y}px, black 0%, black 60%, transparent 100%)`,
      WebkitMaskImage: `radial-gradient(circle ${radius}px at ${x}px ${y}px, black 0%, black 60%, transparent 100%)`,
    };
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="absolute inset-0 w-full h-full overflow-hidden select-none bg-neutral-950 flex items-center justify-center z-0 cursor-pointer"
    >
      {/* 1. Base Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={baseImage.url}
          alt=""
          className="w-full h-full object-cover object-center transition-opacity duration-300"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 2. Hover Revealed Image (Feathered Lens Edge using Mask) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={getMaskStyle()}
      >
        <img
          src={hoverImage.url}
          alt=""
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 3. CLICK RIPPLE */}
      {ripples.map((r) => (
        <div
          key={r.id}
          onAnimationEnd={() => handleRippleEnd(r.id)}
          className="absolute rounded-full border border-white/60 pointer-events-none transition-all z-30 opacity-0 animate-ripple"
          style={{
            left: `${r.x}px`,
            top: `${r.y}px`,
            width: '100px',
            height: '100px',
            marginLeft: '-50px',
            marginTop: '-50px',
          }}
        />
      ))}
    </div>
  );
};
