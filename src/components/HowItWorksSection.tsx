import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HeaderSection } from './HeaderSection';
import { VehicleShowroom } from './VehicleShowroom';
import { StepCard } from './StepCard';
import { STEPS_DATA } from '../data/steps';
import showroomImg from '../assets/images/hero_car_showroom_1786197222479.jpg';

export const HowItWorksSection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('01');

  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-white overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 flex items-center justify-center border-t border-white/10">
      
      {/* FULL-BLEED SECTION CAR SHOWROOM BACKGROUND IMAGE (Matching Section 5 Legal & Safety Assurance Style) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={showroomImg}
          alt="Showroom Car Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter contrast-[1.08] brightness-[0.85] transition-transform duration-1000"
        />

        {/* LUXURY DARK GRADIENT OVERLAYS FOR OPTIMUM TYPOGRAPHY & CARD READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

        {/* AMBIENT GOLD GLOWS */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#C9A44C]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#8F6D25]/15 rounded-full blur-[160px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#121217_1px,transparent_1px),linear-gradient(to_bottom,#121217_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      {/* Main Section Content Wrapper */}
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        
        {/* Two-Column Grid: Left 40%, Right 60% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-stretch">
          
          {/* LEFT COLUMN: ~40% Width (5 cols on 12-col grid) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Header Text Block */}
            <HeaderSection />

            {/* Left Vehicle Showroom Stage */}
            <VehicleShowroom />
          </div>

          {/* RIGHT COLUMN: ~60% Width (7 cols on 12-col grid) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 lg:space-y-6">
            {STEPS_DATA.map((step, idx) => (
              <StepCard
                key={step.id}
                step={step}
                index={idx}
                isSelected={activeStepId === step.id}
                onSelect={() => setActiveStepId(step.id)}
              />
            ))}
          </div>

        </div>



      </div>

    </section>
  );
};
