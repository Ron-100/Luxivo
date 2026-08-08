import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Store, Palette, Disc3 } from 'lucide-react';
import { TimelineFeature } from '../types';

interface TimelineSectionProps {
  features: TimelineFeature[];
  activeFeatureId: string;
  onSelectFeature: (feature: TimelineFeature) => void;
  onOpenFeatureModal: (feature: TimelineFeature) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  features,
  activeFeatureId,
  onSelectFeature,
  onOpenFeatureModal,
}) => {
  const activeFeature =
    features.find((f) => f.id === activeFeatureId) || features[0];

  const getIcon = (type: TimelineFeature['icon'], isActive: boolean) => {
    const iconClass = isActive
      ? 'text-black w-5 h-5 stroke-[2]'
      : 'text-neutral-300 w-5 h-5 stroke-[1.8]';

    switch (type) {
      case 'shop':
        return <Store className={iconClass} />;
      case 'palette':
        return <Palette className={iconClass} />;
      case 'disc':
        return <Disc3 className={iconClass} />;
      default:
        return <Store className={iconClass} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[340px] lg:max-w-[360px] ml-auto mt-6 sm:mt-8 flex items-start gap-4 sm:gap-5 select-none pointer-events-auto"
    >
      {/* Left Column: Vertical Nodes Stack with Dashed Lines */}
      <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
        {features.map((item, index) => {
          const isActive = item.id === activeFeature.id;
          const isLast = index === features.length - 1;

          return (
            <React.Fragment key={item.id}>
              {/* Circle Icon Badge */}
              <button
                onClick={() => onSelectFeature(item)}
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-white shadow-lg scale-105'
                    : 'bg-[#262626] hover:bg-[#303030]'
                }`}
                title={`Select ${item.title}`}
                aria-label={item.title}
              >
                {getIcon(item.icon, isActive)}
              </button>

              {/* Dashed Vertical Connecting Line */}
              {!isLast && (
                <div className="w-[1.5px] h-6 my-1 border-l-2 border-dashed border-neutral-700/80" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Right Column: Active Feature Title & Description */}
      <div className="flex-1 pt-0.5 cursor-pointer" onClick={() => onOpenFeatureModal(activeFeature)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature.id}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.25 }}
          >
            {/* Title: 2 lines */}
            <h3 className="text-xl sm:text-[23px] font-normal leading-[1.12] text-white tracking-tight font-sans mb-2.5">
              {activeFeature.title.includes(' ') ? (
                <>
                  {activeFeature.title.split(' ')[0]} <br />
                  {activeFeature.title.split(' ').slice(1).join(' ')}
                </>
              ) : (
                activeFeature.title
              )}
            </h3>

            {/* Description Text matching exact screenshot font styling */}
            <p className="text-neutral-400 text-xs sm:text-[13px] leading-[1.4] font-normal">
              {activeFeature.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

