import React, { useState } from 'react';
import { TopHeader } from './TopHeader';
import { FeatureGrid } from './FeatureGrid';
import { LegalShowroomVisual } from './LegalShowroomVisual';
import { DisclaimerPanel } from './DisclaimerPanel';
import { AgreementModal } from './AgreementModal';
import { VerificationModal } from './VerificationModal';
import { FEATURE_ITEMS } from '../data/legalData';
import { FeatureItem } from '../types';
import showroomImg from '../assets/images/luxury_legal_showroom_1786198275201.jpg';

export function LegalVerificationSection() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);
  const [isAgreementModalOpen, setIsAgreementModalOpen] = useState<boolean>(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState<boolean>(false);

  const handleSelectFeature = (feature: FeatureItem) => {
    setSelectedFeature(feature);
    if (feature.id === 'feature-1') {
      setIsAgreementModalOpen(true);
    } else {
      setIsVerificationModalOpen(true);
    }
  };

  const handleOpenVerificationType = (type: string) => {
    if (type === 'insurance') {
      setSelectedFeature(FEATURE_ITEMS[2]); // Fully Insured Vehicles
    } else if (type === 'fleet') {
      setSelectedFeature(FEATURE_ITEMS[1]); // Verified Customer / Fleet
    } else if (type === 'legal') {
      setSelectedFeature(FEATURE_ITEMS[0]); // Legal Agreement
    } else {
      setSelectedFeature(FEATURE_ITEMS[3]); // Privacy
    }
    setIsVerificationModalOpen(true);
  };

  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-[#FFFFFF] font-sans overflow-x-hidden selection:bg-[#C9A44C] selection:text-black border-t border-white/10">
      {/* FULL-BLEED SECTION CAR SHOWROOM BACKGROUND IMAGE */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={showroomImg}
          alt="Luxury Car Showroom Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter contrast-[1.08] brightness-[0.85] transition-transform duration-1000"
        />

        {/* LUXURY DARK GRADIENT OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

        {/* AMBIENT GOLD GLOWS */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#C9A44C]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#8F6D25]/15 rounded-full blur-[160px]" />
      </div>

      {/* MAIN CONTAINER FOR SECTION 05 */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-14 py-8 sm:py-12 md:py-16 flex flex-col space-y-10 md:space-y-12">
        {/* TWO-COLUMN LAYOUT: LEFT (45%) & RIGHT (55%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* LEFT COLUMN: TOP LABEL + HEADING + DESCRIPTION + 5 FEATURE CARDS */}
          <div className="lg:col-span-5 flex flex-col space-y-8 w-full">
            <TopHeader />
            <FeatureGrid
              onSelectFeature={handleSelectFeature}
              selectedFeatureId={selectedFeature?.id}
            />
          </div>

          {/* RIGHT COLUMN: INTERACTIVE LEGAL SHOWROOM OVERLAY & HOTSPOTS */}
          <div className="lg:col-span-7 w-full h-full flex flex-col justify-center my-auto ml-0 lg:ml-8 xl:ml-[70px]">
            <LegalShowroomVisual
              onOpenAgreementModal={() => setIsAgreementModalOpen(true)}
              onOpenVerificationModal={handleOpenVerificationType}
            />
          </div>
        </div>

        {/* BOTTOM FULL-WIDTH DISCLAIMER PANEL */}
        <DisclaimerPanel />
      </main>

      {/* INTERACTIVE MODALS */}
      <AgreementModal
        isOpen={isAgreementModalOpen}
        onClose={() => setIsAgreementModalOpen(false)}
      />

      <VerificationModal
        item={selectedFeature}
        isOpen={isVerificationModalOpen}
        onClose={() => setIsVerificationModalOpen(false)}
      />
    </section>
  );
}
