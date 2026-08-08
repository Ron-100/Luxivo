export interface VehicleSpec {
  id: string;
  model: string;
  shortName: string;
  engine: string;
  displacement: string;
  powertrain: string;
  stockPower: string;
  tunedPower: string;
  stockTorque: string;
  tunedTorque: string;
  acceleration0to60: string;
  tuned0to60: string;
  topSpeed: string;
  description: string;
  image?: string;
  modifications: string[];
}

export interface TimelineFeature {
  id: string;
  icon: 'shop' | 'palette' | 'disc';
  title: string;
  description: string;
  details: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TuningInquiry {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  service: string;
  message: string;
}

export interface ImageItem {
  id: string;
  name: string;
  subtitle: string;
  url: string;
  description: string;
  badge?: string;
  specs?: { label: string; value: string }[];
}

export interface ImagePair {
  id: string;
  title: string;
  image1: ImageItem;
  image2: ImageItem;
}

export interface LensConfig {
  radius: number;
  borderGlow: boolean;
  showCoordinates: boolean;
  lensShape: 'circle' | 'square' | 'diamond';
}

// Hypercar showcase types
export interface CarSpec {
  label: string;
  value: string;
  iconName: 'Gauge' | 'Zap' | 'Cpu' | 'Activity' | 'Scale' | 'Timer' | 'Shield' | 'Globe';
}

export interface Hypercar {
  id: string;
  name: string;
  brand: string;
  tagline: string;
  badgeText: string;
  description: string;
  brandBgText: string;
  topSpeed: string;
  horsepower: string;
  engine: string;
  drive: string;
  transmission: string;
  weight: string;
  acceleration: string;
  year: number;
  country: string;
  limitedUnits: string;
  pricePerDay: number;
  image: string;
  accentColor: string;
  soundType: 'W16' | 'V12' | 'V8' | 'ELECTRIC' | 'AMG_V12';
  audioConfig: {
    baseFreq: number;
    rpmRange: [number, number];
    cylinders: number;
    hasTurbo: boolean;
  };
}

export interface ReservationDetails {
  vehicleId: string;
  serviceType: 'VIP_ARRIVAL' | 'WEDDING_GALA' | 'FILM_PHOTOSHOOT' | 'PRIVATE_TRACK' | 'EXECUTIVE_CHAUFFEUR';
  startDate: string;
  endDate: string;
  city: string;
  withChauffeur: boolean;
  fullName: string;
  email: string;
  phone: string;
  specialRequests?: string;
  totalDays: number;
  estimatedPrice: number;
}

// Section2 Occasion types
export interface OccasionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: 'rings' | 'film' | 'star' | 'camera' | 'gift';
  vehicleModel: string;
  specs: {
    engine: string;
    horsepower: string;
    chauffeurAvailable: boolean;
    ratePerDay: string;
  };
  clipPolygon: string; // CSS clip-path polygon string
  svgPoints: string;   // SVG polygon points for border
  features: string[];
}

// Section3 Benefit types
export interface BenefitItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconType: 'car-sparkle' | 'calendar-check' | 'clock-delivery' | 'chauffeur' | 'shield-dollar' | 'support-247';
}

export interface LuxuryCar {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  category: string;
  specs: {
    engine: string;
    horsepower: string;
    acceleration: string;
    topSpeed: string;
  };
  position: 'foreground' | 'middle' | 'background';
  accentColor: string;
}

// Section4 Step types
export interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  iconType: 'car' | 'calendar' | 'shield' | 'key';
  image: string;
  alt: string;
}

// Section5 Legal types
export interface FeatureItem {
  id: string;
  iconName: 'document' | 'userCheck' | 'shieldCheck' | 'lock' | 'headset';
  title: string;
  subtitle?: string;
  description: string;
  details: string[];
  fullWidth?: boolean;
}

export interface LegalClause {
  title: string;
  summary: string;
  fullText: string;
  badge: string;
}

export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  label: string;
  title: string;
  description: string;
  icon: string;
}
