import { motion } from 'motion/react';

interface SpeedometerProps {
  interactiveRpm?: number;
}

export default function SpeedometerGraphic({ interactiveRpm = 6.8 }: SpeedometerProps) {
  // Generate tick marks around the tachometer arc (from 135deg to 405deg, i.e., -225deg to 45deg)
  const totalTicks = 48;
  const startAngle = -210; // degrees
  const endAngle = 30;     // degrees

  const ticks = Array.from({ length: totalTicks }).map((_, i) => {
    const progress = i / (totalTicks - 1);
    const angle = startAngle + progress * (endAngle - startAngle);
    const rad = (angle * Math.PI) / 180;
    
    // Highlight ticks near redline (> 70% progress)
    const isRedline = progress > 0.65;
    const isMajor = i % 4 === 0;

    const outerR = 210;
    const innerR = isMajor ? (isRedline ? 180 : 188) : 196;

    const x1 = 250 + outerR * Math.cos(rad);
    const y1 = 250 + outerR * Math.sin(rad);
    const x2 = 250 + innerR * Math.cos(rad);
    const y2 = 250 + innerR * Math.sin(rad);

    return {
      x1, y1, x2, y2,
      isRedline,
      isMajor,
      angle,
      progress,
    };
  });

  return (
    <div className="absolute top-[-20px] sm:top-[-40px] right-[-20px] sm:right-[-40px] md:right-[0px] lg:right-[-30px] xl:right-[0px] w-[260px] xs:w-[320px] sm:w-[460px] md:w-[560px] lg:w-[680px] h-[260px] xs:h-[320px] sm:h-[460px] md:h-[560px] lg:h-[680px] pointer-events-none select-none z-0">
      {/* Soft Ambient Fire Radial Glow */}
      <div className="absolute inset-0 bg-radial from-[#FF3B00]/30 via-[#FF6A00]/10 to-transparent blur-3xl opacity-80" />

      {/* SVG Tachometer Ring */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full overflow-visible opacity-90 drop-shadow-[0_0_25px_rgba(255,85,0,0.5)]"
      >
        <defs>
          <linearGradient id="redlineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3B00" stopOpacity="1" />
            <stop offset="50%" stopColor="#FF6A00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFAA00" stopOpacity="0.5" />
          </linearGradient>

          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF3B00" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Center subtle glow disk */}
        <circle cx="250" cy="250" r="180" fill="url(#centerGlow)" />

        {/* Outer Dark Track Ring */}
        <circle
          cx="250"
          cy="250"
          r="215"
          fill="none"
          stroke="#1E1E24"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="opacity-60"
        />

        {/* Glowing Fire Outer Arc Segment (Redline indicator) */}
        <motion.path
          d="M 125,125 A 210,210 0 0,1 425,180"
          fill="none"
          stroke="url(#redlineGlow)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0.8 }}
          animate={{ pathLength: [0.8, 1, 0.85] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Tachometer Tick Marks */}
        {ticks.map((tick, idx) => (
          <line
            key={idx}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke={tick.isRedline ? '#FF3B00' : tick.isMajor ? '#6B7280' : '#2A2D34'}
            strokeWidth={tick.isMajor ? (tick.isRedline ? '3' : '2.5') : '1.5'}
            strokeLinecap="round"
            className={tick.isRedline ? 'drop-shadow-[0_0_8px_rgba(255,85,0,0.9)]' : ''}
          />
        ))}

        {/* Digital Speedometer Notch Numbers */}
        {[0, 2, 4, 6, 8, 10].map((rpm, idx) => {
          const progress = idx / 5;
          const angle = startAngle + progress * (endAngle - startAngle);
          const rad = (angle * Math.PI) / 180;
          const textR = 162;
          const tx = 250 + textR * Math.cos(rad);
          const ty = 250 + textR * Math.sin(rad);
          const isHigh = rpm >= 6;

          return (
            <text
              key={rpm}
              x={tx}
              y={ty}
              textAnchor="middle"
              dominantBaseline="central"
              fill={isHigh ? '#FF5500' : '#9CA3AF'}
              fontSize="11"
              fontWeight={isHigh ? '700' : '500'}
              fontFamily="monospace"
              className={isHigh ? 'drop-shadow-[0_0_10px_rgba(255,85,0,1)]' : ''}
            >
              {rpm}
            </text>
          );
        })}

        {/* Subtle Inner Concentric Rings */}
        <circle
          cx="250"
          cy="250"
          r="145"
          fill="none"
          stroke="#FF3B00"
          strokeOpacity="0.2"
          strokeWidth="1"
        />

        {/* RPM Needle Line */}
        <motion.line
          x1="250"
          y1="250"
          x2={250 + 190 * Math.cos(((-210 + (interactiveRpm / 10) * 240) * Math.PI) / 180)}
          y2={250 + 190 * Math.sin(((-210 + (interactiveRpm / 10) * 240) * Math.PI) / 180)}
          stroke="#FF3B00"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="drop-shadow-[0_0_12px_rgba(255,85,0,1)]"
          animate={{
            x2: 250 + 190 * Math.cos(((-210 + (interactiveRpm / 10) * 240) * Math.PI) / 180),
            y2: 250 + 190 * Math.sin(((-210 + (interactiveRpm / 10) * 240) * Math.PI) / 180),
          }}
          transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        />

        {/* Center Cap */}
        <circle cx="250" cy="250" r="8" fill="#0A0B0E" stroke="#FF3B00" strokeWidth="2" />
      </svg>
    </div>
  );
}
