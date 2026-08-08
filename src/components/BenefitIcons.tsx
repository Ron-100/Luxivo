import React from 'react';

interface IconProps {
  type: string;
  className?: string;
}

export const BenefitIcon: React.FC<IconProps> = ({ type, className = "w-5 h-5" }) => {
  switch (type) {
    case 'car-sparkle':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Car profile */}
          <path d="M3 15h18" />
          <path d="M4 15v-2a2 2 0 0 1 2-2h3.5l1.8-3.2A2 2 0 0 1 13 7h3.5a2 2 0 0 1 1.8 1.1L20 12h1a1 1 0 0 1 1 1v2" />
          <circle cx="7" cy="15" r="2.5" />
          <circle cx="17" cy="15" r="2.5" />
          {/* Sparkles */}
          <path d="M12 3v2M11 4h2" />
          <path d="M20 4l-1 1M5 5l1 1" />
          <path d="M18 2.5l.5.5M5.5 2.5l-.5.5" />
        </svg>
      );

    case 'calendar-check':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M16 2v4M8 2v4M3 9h18" />
          <path d="M8.5 14.5l2.5 2.5 5-5" strokeWidth="2" />
        </svg>
      );

    case 'clock-delivery':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Clock */}
          <circle cx="9" cy="10" r="6" />
          <path d="M9 7v3l2 2" />
          {/* Delivery vehicle / key outline */}
          <path d="M15 13h5l2 3v3h-2" />
          <circle cx="17" cy="19" r="1.5" />
          <path d="M15 16h2" />
        </svg>
      );

    case 'chauffeur':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Chauffeur cap */}
          <path d="M6 9a6 6 0 0 1 12 0v1H6V9z" />
          <path d="M4 10h16a1 1 0 0 1 1 1v1H3v-1a1 1 0 0 1 1-1z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="12" cy="7.5" r="1" fill="currentColor" />
          {/* Collar/bow tie */}
          <path d="M7 16c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5" />
          <path d="M12 14.5v4" />
          <path d="M10 18.5l2-1.5 2 1.5" />
        </svg>
      );

    case 'shield-dollar':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3z" />
          {/* Dollar symbol inside */}
          <path d="M12 7v10M14 9.5c0-1.4-1-2-2-2s-2 .6-2 2 1 2 2 2 2 .6 2 2-1 2-2 2" strokeWidth="1.8" />
        </svg>
      );

    case 'support-247':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" />
          <text x="12" y="13.5" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="currentColor" stroke="none" fontFamily="sans-serif">
            24/7
          </text>
        </svg>
      );

    default:
      return null;
  }
};
