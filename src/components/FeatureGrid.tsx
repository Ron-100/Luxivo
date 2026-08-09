import React from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  UserCheck,
  ShieldCheck,
  Lock,
  Headset,
  ChevronRight,
  LucideProps,
} from 'lucide-react';
import { FEATURE_ITEMS } from '../data/legalData';
import { FeatureItem } from '../types';

interface FeatureGridProps {
  onSelectFeature: (feature: FeatureItem) => void;
  selectedFeatureId?: string;
}

const ICON_MAP: Record<string, React.FC<LucideProps>> = {
  document: FileText,
  userCheck: UserCheck,
  shieldCheck: ShieldCheck,
  lock: Lock,
  headset: Headset,
};

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  onSelectFeature,
  selectedFeatureId,
}) => {
  return (
    <div className="flex flex-col space-y-3 w-full max-w-xl">
      {/* ROW 1: 2 CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        {FEATURE_ITEMS.slice(0, 2).map((item, index) => (
          <FeatureCard
            key={item.id}
            item={item}
            index={index}
            isSelected={selectedFeatureId === item.id}
            onClick={() => onSelectFeature(item)}
          />
        ))}
      </div>

      {/* ROW 2: 2 CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        {FEATURE_ITEMS.slice(2, 4).map((item, index) => (
          <FeatureCard
            key={item.id}
            item={item}
            index={index + 2}
            isSelected={selectedFeatureId === item.id}
            onClick={() => onSelectFeature(item)}
          />
        ))}
      </div>

      {/* ROW 3: 1 FULL-WIDTH CARD */}
      <div className="w-full">
        {FEATURE_ITEMS.slice(4, 5).map((item, index) => (
          <FeatureCard
            key={item.id}
            item={item}
            index={4}
            isSelected={selectedFeatureId === item.id}
            onClick={() => onSelectFeature(item)}
            isFullWidth
          />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  item: FeatureItem;
  index: number;
  isSelected: boolean;
  onClick: () => void;
  isFullWidth?: boolean;
}

const FeatureCard: React.FC<CardProps> = ({
  item,
  index,
  isSelected,
  onClick,
  isFullWidth,
}) => {
  const IconComponent = ICON_MAP[item.iconName] || FileText;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 + index * 0.08, ease: 'easeOut' }}
      whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.985 }}
      onClick={onClick}
      className={`
        relative group cursor-pointer overflow-hidden
        rounded-none transition-all duration-300 select-none
        bg-gradient-to-br from-[#0D0D0D] via-[#080808] to-[#040404]
        border ${
          isSelected
            ? 'border-[#C9A44C] shadow-[0_0_20px_rgba(201,164,76,0.3)] bg-[#12100B]'
            : 'border-[#C9A44C]/30 hover:border-[#C9A44C]/80 hover:shadow-[0_0_15px_rgba(201,164,76,0.18)]'
        }
        px-6 py-3.5 flex items-center space-x-3.5
      `}
      style={{ clipPath: isFullWidth ? 'polygon(2% 0, 100% 0%, 98% 100%, 0% 100%)' : 'polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)' }}
    >
      {/* SUBTLE CORNER GOLD ACCENT LIGHT */}
      <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#C9A44C]/10 rounded-full blur-xl pointer-events-none group-hover:bg-[#C9A44C]/25 transition-all duration-500" />

      {/* CIRCULAR GOLD ICON CONTAINER */}
      <div
        className={`
          relative flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center
          border transition-all duration-300
          ${
            isSelected
              ? 'border-[#C9A44C] bg-[#1C170B] text-[#C9A44C] shadow-[0_0_12px_rgba(201,164,76,0.4)]'
              : 'border-[#C9A44C]/50 bg-[#12100A] text-[#C9A44C] group-hover:border-[#C9A44C] group-hover:bg-[#18140B] group-hover:shadow-[0_0_10px_rgba(201,164,76,0.25)]'
          }
        `}
      >
        <IconComponent className="w-5 h-5 stroke-[1.8]" />
      </div>

      {/* TEXT & DECORATIVE LINE */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="flex items-center space-x-2">
          {/* DECORATIVE SMALL GOLD LINE */}
          <div className="w-3.5 h-[1.5px] bg-[#C9A44C]/70 group-hover:w-5 group-hover:bg-[#C9A44C] transition-all duration-300" />
          <span className="text-[10px] text-[#C9A44C]/80 tracking-widest uppercase font-mono">
            0{index + 1}
          </span>
        </div>

        <h3
          className={`
            text-xs sm:text-[13px] font-bold tracking-wider uppercase leading-snug whitespace-pre-line mt-0.5
            transition-colors duration-200
            ${isSelected ? 'text-[#C9A44C]' : 'text-white group-hover:text-[#F3E5C8]'}
          `}
        >
          {item.title}
        </h3>
      </div>

      {/* INTERACTIVE CHEVRON INDICATOR */}
      <div className="flex-shrink-0 text-[#C9A44C]/40 group-hover:text-[#C9A44C] group-hover:translate-x-0.5 transition-all duration-200">
        <ChevronRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
};
