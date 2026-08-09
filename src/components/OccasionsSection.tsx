import { useState, useRef, UIEvent } from 'react';
import HeaderLabel from './HeaderLabel';
import HeroSection from './HeroSection';
import OccasionCard from './OccasionCard';
import OccasionModal from './OccasionModal';
import { OCCASIONS } from '../data/occasions';
import { OccasionItem } from '../types';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

export function OccasionsSection() {
  const [selectedOccasion, setSelectedOccasion] = useState<OccasionItem | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll mobile/tablet carousel to specific card index
  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.scrollWidth / OCCASIONS.length;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    });
    setActiveMobileIndex(index);
  };

  const handlePrev = () => {
    const nextIndex = Math.max(0, activeMobileIndex - 1);
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = Math.min(OCCASIONS.length - 1, activeMobileIndex + 1);
    scrollToIndex(nextIndex);
  };

  // Track scroll position to update active dot index
  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const totalWidth = container.scrollWidth - container.clientWidth;
    if (totalWidth <= 0) return;
    const newIndex = Math.round((scrollPosition / totalWidth) * (OCCASIONS.length - 1));
    if (newIndex !== activeMobileIndex && newIndex >= 0 && newIndex < OCCASIONS.length) {
      setActiveMobileIndex(newIndex);
    }
  };

  return (
    <section className="min-h-screen w-full bg-[#050505] text-white font-sans antialiased selection:bg-[#C9A44C] selection:text-black relative overflow-x-hidden flex flex-col justify-center py-6 sm:py-10 md:py-12 lg:py-16 border-t border-white/10">
      {/* Background Ambient Gold Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(201,164,76,0.12),rgba(5,5,5,1))] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#C9A44C]/8 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#8F6D25]/6 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 z-10">
        
        {/* TOP LABEL: "02. PERFECT FOR EVERY OCCASION -" */}
        <HeaderLabel />

        {/* HERO AREA: Headline Left, Black Supercar & Speedometer Right */}
        <HeroSection />

        {/* CARDS AREA: Exactly 5 Angled Vertical Occasion Cards */}
        <div className="relative w-full mt-4 sm:mt-8">
          
          {/* Desktop Layout (1024px+): 5 Cards in 1 Seamless Row */}
          <div className="hidden lg:flex flex-row items-stretch justify-between gap-3 lg:gap-3 xl:gap-5 w-full">
            {OCCASIONS.map((occasion, index) => (
              <OccasionCard
                key={occasion.id}
                occasion={occasion}
                index={index}
                onSelect={setSelectedOccasion}
                isHovered={hoveredCardId === occasion.id}
                onHover={setHoveredCardId}
              />
            ))}
          </div>

          {/* Mobile & Tablet Layout (<1024px): Touch-Scrollable Horizontal Carousel with Prev/Next Controls & Dots */}
          <div className="block lg:hidden w-full">
            {/* Navigation Arrows for Mobile/Tablet */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-[11px] sm:text-xs font-mono text-gray-400 tracking-wider uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#DFB756]" />
                <span>EXPLORE OCCASIONS ({activeMobileIndex + 1}/5)</span>
              </span>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  disabled={activeMobileIndex === 0}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 hover:bg-[#C9A44C] hover:border-[#C9A44C] hover:text-black transition-all"
                  aria-label="Previous Occasion"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeMobileIndex === OCCASIONS.length - 1}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 hover:bg-[#C9A44C] hover:border-[#C9A44C] hover:text-black transition-all"
                  aria-label="Next Occasion"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory space-x-4 sm:space-x-6 pb-6 pt-2 no-scrollbar px-1 scroll-smooth"
            >
              {OCCASIONS.map((occasion, index) => (
                <div
                  key={occasion.id}
                  className="snap-center shrink-0 w-[270px] sm:w-[320px] md:w-[340px]"
                >
                  <OccasionCard
                    occasion={occasion}
                    index={index}
                    onSelect={setSelectedOccasion}
                    isHovered={hoveredCardId === occasion.id}
                    onHover={setHoveredCardId}
                  />
                </div>
              ))}
            </div>

            {/* Pagination Dots & Touch Hint */}
            <div className="flex flex-col items-center justify-center space-y-3 mt-1">
              {/* Dots */}
              <div className="flex items-center space-x-2">
                {OCCASIONS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeMobileIndex === idx
                        ? 'w-8 bg-gradient-to-r from-[#FFF0CA] via-[#C9A44C] to-[#9E7A2A] shadow-[0_0_10px_rgba(201,164,76,0.8)]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Scroll Hint Text */}
              <p className="text-[11px] font-mono text-gray-500 uppercase tracking-widest flex items-center space-x-1.5">
                <span>SWIPE OR USE ARROWS TO EXPLORE</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Occasion Booking & Detail Modal */}
      <OccasionModal
        occasion={selectedOccasion}
        onClose={() => setSelectedOccasion(null)}
      />
    </section>
  );
}
