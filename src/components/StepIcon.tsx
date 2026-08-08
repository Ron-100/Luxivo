import React from 'react';
import { Car, Calendar, ShieldCheck, Key } from 'lucide-react';

interface StepIconProps {
  type: 'car' | 'calendar' | 'shield' | 'key';
  className?: string;
}

export const StepIcon: React.FC<StepIconProps> = ({ type, className = "w-5 h-5 text-[#C9A44C]" }) => {
  switch (type) {
    case 'car':
      return <Car className={className} strokeWidth={1.75} />;
    case 'calendar':
      return <Calendar className={className} strokeWidth={1.75} />;
    case 'shield':
      return <ShieldCheck className={className} strokeWidth={1.75} />;
    case 'key':
      return <Key className={className} strokeWidth={1.75} />;
    default:
      return <Car className={className} strokeWidth={1.75} />;
  }
};
