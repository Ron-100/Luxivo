import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroLeft } from './components/HeroLeft';
import { SpecsCard } from './components/SpecsCard';
import { TimelineSection } from './components/TimelineSection';
import { SpecsModal } from './components/SpecsModal';
import { FAQModal } from './components/FAQModal';
import { ContactModal } from './components/ContactModal';
import { AboutModal } from './components/AboutModal';
import { MobileMenu } from './components/MobileMenu';
import { HeroLens } from './components/HeroLens';
import { LuxuryCarShowcaseSection } from './components/LuxuryCarShowcaseSection';
import { OccasionsSection } from './components/OccasionsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorksSection } from './components/HowItWorksSection';
import { LegalVerificationSection } from './components/LegalVerificationSection';
import { LuxuryCtaSection } from './components/LuxuryCtaSection';
import { VEHICLE_SPECS, TIMELINE_FEATURES } from './data/mockData';
import { DEFAULT_SUPERCAR_PAIR } from './data/images';
import { VehicleSpec, TimelineFeature, ImageItem, LensConfig } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  const [selectedVehicle, setSelectedVehicle] = useState<VehicleSpec>(VEHICLE_SPECS[0]);
  const [activeFeatureId, setActiveFeatureId] = useState<string>(TIMELINE_FEATURES[0].id);

  // Background Hero Showcase State
  const [image1, setImage1] = useState<ImageItem>(DEFAULT_SUPERCAR_PAIR.image1);
  const [image2, setImage2] = useState<ImageItem>(DEFAULT_SUPERCAR_PAIR.image2);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [lensConfig, setLensConfig] = useState<LensConfig>({
    radius: 100,
    borderGlow: true,
    showCoordinates: false,
    lensShape: 'circle',
  });

  // Preloader Logic: Preload images and track loading progress
  useEffect(() => {
    const imagesToPreload = [
      DEFAULT_SUPERCAR_PAIR.image1.url,
      DEFAULT_SUPERCAR_PAIR.image2.url,
      ...VEHICLE_SPECS.map(v => v.image).filter(Boolean)
    ];

    let loadedCount = 0;
    const totalCount = imagesToPreload.length;

    const updateProgress = () => {
      loadedCount++;
      const calculatedProgress = Math.min(90, Math.round((loadedCount / totalCount) * 100));
      setLoadingProgress(calculatedProgress);
    };

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress;
    });

    const handleWindowLoad = () => {
      setLoadingProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad);
      // Fallback timer to prevent getting stuck if any asset hangs
      const fallbackTimer = setTimeout(() => {
        setLoadingProgress(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, 2500);

      return () => {
        window.removeEventListener('load', handleWindowLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  // Toggle image swap (Main <-> Hover reveal)
  const handleSwapImages = () => {
    setIsFlipped((prev) => !prev);
  };

  // Modals state
  const [isSpecsModalOpen, setIsSpecsModalOpen] = useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSelectFeature = (feature: TimelineFeature) => {
    setActiveFeatureId(feature.id);
  };

  const handleOpenFeatureModal = (feature: TimelineFeature) => {
    setActiveFeatureId(feature.id);
    setIsSpecsModalOpen(true);
  };

  return (
    <div className="relative w-full bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Car Wheel Preloader overlay until content & assets are fully loaded */}
      <Preloader progress={loadingProgress} isLoading={isLoading} />

      {/* STICKY HERO SECTION (Stays fixed pinned at top while all subsequent sections scroll above it) */}
      <div className="sticky top-0 z-0 h-screen w-full min-h-screen flex flex-col justify-between overflow-hidden">
        {/* Animated Hero Showcase Background Component */}
        <HeroLens
          image1={image1}
          image2={image2}
          isFlipped={isFlipped}
          onSwapImages={handleSwapImages}
          config={lensConfig}
        />

        {/* Top Navbar */}
        <Navbar
          onOpenFAQ={() => setIsFAQModalOpen(true)}
          onOpenContact={() => setIsContactModalOpen(true)}
          onOpenAbout={() => setIsAboutModalOpen(true)}
          onToggleMobileMenu={() => setIsMobileMenuOpen(true)}
        />

        {/* Main Hero Content */}
        <main className="w-full max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 pt-6 sm:pt-10 pb-16 lg:pb-20 my-auto relative z-10 pointer-events-none">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-6">
            {/* Left Column: Hero Headline & CTA */}
            <div className="w-full lg:w-[50%] xl:w-[52%] pt-2 lg:pt-4">
              <HeroLeft onGetStarted={() => setIsContactModalOpen(true)} />
            </div>

            {/* Right Column: Specs Card & Timeline Section */}
            <div className="w-full lg:w-[340px] xl:w-[360px] flex flex-col items-end gap-2 ml-auto">
              {/* Top Specs Card */}
              <SpecsCard
                vehicle={selectedVehicle}
                vehicles={VEHICLE_SPECS}
                onSelectVehicle={(v) => setSelectedVehicle(v)}
                onViewMore={() => setIsSpecsModalOpen(true)}
              />

              {/* Bottom Timeline Feature List */}
              <TimelineSection
                features={TIMELINE_FEATURES}
                activeFeatureId={activeFeatureId}
                onSelectFeature={handleSelectFeature}
                onOpenFeatureModal={handleOpenFeatureModal}
              />
            </div>
          </div>
        </main>

        {/* Footer copyright tagline */}
        <footer className="w-full max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-[72px] pb-6 flex items-center justify-between text-xs text-neutral-400 font-mono tracking-wider relative z-10 pointer-events-none">
          <span>Luxivo® AUTOMOTIVE</span>
          <span className="hidden sm:inline">HIGH PERFORMANCE TUNING LAB</span>
        </footer>
      </div>

      {/* SCROLLABLE SECTIONS WRAPPER (Sits on higher z-index (z-10) and scrolls smoothly over the pinned sticky hero) */}
      <div className="relative z-10 bg-black">
        {/* 2. Second Section: Luxury Car Showcase */}
        <LuxuryCarShowcaseSection />

        {/* 3. Third Section: Perfect For Every Occasion */}
        <OccasionsSection />

        {/* 4. Fourth Section: Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Fifth Section: How It Works */}
        <HowItWorksSection />

        {/* 6. Sixth Section: Legal & Verification */}
        <LegalVerificationSection />

        {/* 7. Seventh Section: Luxury CTA */}
        <div className="w-full bg-[#030303] py-12 px-4 sm:px-8 border-t border-white/10">
          <LuxuryCtaSection />
        </div>
      </div>

      {/* Modals & Overlays */}
      <SpecsModal
        isOpen={isSpecsModalOpen}
        onClose={() => setIsSpecsModalOpen(false)}
        vehicle={selectedVehicle}
        vehicles={VEHICLE_SPECS}
        onSelectVehicle={(v) => setSelectedVehicle(v)}
      />

      <FAQModal
        isOpen={isFAQModalOpen}
        onClose={() => setIsFAQModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenFAQ={() => setIsFAQModalOpen(true)}
        onOpenContact={() => setIsContactModalOpen(true)}
        onOpenAbout={() => setIsAboutModalOpen(true)}
        onOpenSpecs={() => setIsSpecsModalOpen(true)}
      />
    </div>
  );
}
