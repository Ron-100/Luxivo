import { useState } from 'react';
import { motion } from 'motion/react';
import { OccasionItem } from '../types';
import { Camera, Film, Gift, Heart, Star } from 'lucide-react';

interface OccasionCardProps {
  key?: string;
  occasion: OccasionItem;
  index: number;
  onSelect: (occasion: OccasionItem) => void;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

export default function OccasionCard({
  occasion,
  index,
  onSelect,
  isHovered,
  onHover,
}: OccasionCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Render icon based on occasion icon type
  const renderIcon = () => {
    const iconProps = { className: "w-5 h-5 text-[#DFB756]" };
    switch (occasion.icon) {
      case 'rings':
        return <Heart {...iconProps} />;
      case 'film':
        return <Film {...iconProps} />;
      case 'star':
        return <Star {...iconProps} />;
      case 'camera':
        return <Camera {...iconProps} />;
      case 'gift':
        return <Gift {...iconProps} />;
      default:
        return <Star {...iconProps} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => onHover(occasion.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onSelect(occasion)}
      className="relative cursor-pointer group flex-1 w-full lg:min-w-0 lg:max-w-none h-[460px] sm:h-[500px] lg:h-[520px] xl:h-[540px] flex flex-col justify-between my-2"
    >
      {/* Container with clip-path polygon for angled top/bottom */}
      <div
        className="relative w-full h-full p-[1.5px] transition-all duration-500 overflow-hidden"
        style={{
          clipPath: occasion.clipPolygon,
          background: isHovered
            ? 'linear-gradient(180deg, #C9A44C 0%, rgba(224,185,91,0.7) 50%, #9E792D 100%)'
            : 'linear-gradient(180deg, rgba(201, 164, 76, 0.75) 0%, rgba(201, 164, 76, 0.2) 50%, rgba(201, 164, 76, 0.75) 100%)',
          boxShadow: isHovered ? '0 0 30px rgba(201, 164, 76, 0.5)' : 'none',
        }}
      >
        {/* SVG Border Overlay for crisp antialiased stroke */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none z-30"
        >
          <polygon
            points={occasion.svgPoints}
            fill="none"
            stroke="#C9A44C"
            strokeWidth={isHovered ? '1.8' : '1'}
            strokeOpacity={isHovered ? '1' : '0.6'}
            className="transition-all duration-300"
          />
        </svg>

        {/* Inner Card Body */}
        <div
          className="relative w-full h-full bg-[#08090C] flex flex-col overflow-hidden"
          style={{ clipPath: occasion.clipPolygon }}
        >
          {/* Subtle Ambient Gold Glow on Hover */}
          <div
            className={`absolute inset-0 bg-radial from-[#C9A44C]/30 via-[#9E792D]/10 to-transparent transition-opacity duration-500 pointer-events-none z-10 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Upper Image Section */}
          <div className="relative w-full h-[52%] sm:h-[54%] overflow-hidden bg-[#0A0B0E]">
            {/* Dark Vignette Overlay for Editorial Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-black/20 to-black/40 z-10" />

            {/* Main Image */}
            <motion.img
              src={occasion.image}
              alt={occasion.title}
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              animate={{ scale: isHovered ? 1.08 : 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className={`w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.88] transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          {/* Central Floating Icon Badge */}
          <div className="relative -mt-7 sm:-mt-8 flex justify-center z-20">
            <motion.div
              animate={{ scale: isHovered ? 1.12 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#C9A44C] bg-[#0A0C10] flex items-center justify-center shadow-[0_0_18px_rgba(201,164,76,0.4)] transition-all duration-300 ${
                isHovered ? 'shadow-[0_0_30px_rgba(201,164,76,0.8)] border-[#FFF0CA]' : ''
              }`}
            >
              {renderIcon()}
            </motion.div>
          </div>

          {/* Card Lower Text Section */}
          <div className="flex-1 flex flex-col justify-center items-center px-4 py-4 text-center z-20">
            {/* Title */}
            <h3 className="text-white font-black text-lg sm:text-[22px] leading-tight tracking-wide uppercase font-heading group-hover:text-gold-light transition-colors duration-300">
              {occasion.title.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h3>

            {/* Gold Accent Line */}
            <motion.div
              animate={{ width: isHovered ? '48px' : '32px' }}
              transition={{ duration: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-[#FFF0CA] via-[#C9A44C] to-[#9E7A2A] my-2.5 sm:my-3 shadow-[0_0_10px_rgba(201,164,76,0.8)]"
            />

            {/* Description */}
            <p className="text-[#C4C4C4] text-xs sm:text-[14px] leading-relaxed max-w-[240px] font-medium">
              {occasion.description.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
