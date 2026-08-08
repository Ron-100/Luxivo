import { FeatureItem, LegalClause, Hotspot } from '../types';

export const SECTION_INFO = {
  number: null,
  label: 'LEGAL & SAFETY ASSURANCE',
  heading: {
    line1: 'TRUSTED.',
    line2: 'LEGAL.',
    line3: 'PROFESSIONAL.',
  },
  description:
    'Every rental is handled through a transparent legal agreement to ensure a safe and hassle-free experience for both parties. Our vehicles are insured, regularly inspected, and rented only for lawful purposes.',
  disclaimer:
    'Our luxury vehicles are available only for lawful purposes, including weddings, events, film productions, photoshoots, business engagements, and approved personal use. All rentals are subject to identity verification and our rental terms & conditions.',
};

export const FEATURE_ITEMS: FeatureItem[] = [
  {
    id: 'feature-1',
    iconName: 'document',
    title: 'LEGAL RENTAL\nAGREEMENT',
    subtitle: 'Transparent Contractual Terms',
    description:
      'Clear, binding rental contracts detailing liability, usage guidelines, and transparent pricing with zero hidden fees.',
    details: [
      'Comprehensive liability coverage clauses',
      'Digital signature with cryptographic timestamp',
      'Transparent security deposit return SLA (48h)',
      'Clear cancellation and modification policies',
    ],
  },
  {
    id: 'feature-2',
    iconName: 'userCheck',
    title: 'VERIFIED\nCUSTOMER PROCESS',
    subtitle: 'Strict Identity & Driver Vetting',
    description:
      'Fast, secure background and driver license verification to guarantee safety and prevent fraudulent rentals.',
    details: [
      'Encrypted government ID authentication',
      'Automated driving record & points check',
      'Biometric face matching for key release',
      'Conducted within 5 minutes online',
    ],
  },
  {
    id: 'feature-3',
    iconName: 'shieldCheck',
    title: 'FULLY INSURED\nVEHICLES',
    subtitle: 'Comprehensive Commercial Coverage',
    description:
      'Every flagship vehicle in our fleet is backed by multi-million dollar comprehensive collision and liability coverage.',
    details: [
      '$5,000,000 commercial umbrella liability',
      'Zero-deductible premium protection option',
      '24/7 complimentary roadside replacement',
      'Passenger collision & medical coverage included',
    ],
  },
  {
    id: 'feature-4',
    iconName: 'lock',
    title: 'PRIVACY\nPROTECTED',
    subtitle: 'Bank-Grade Data Encryption',
    description:
      'Your identity, payment data, and trip logs are protected by strict non-disclosure policies and military-grade encryption.',
    details: [
      'AES-256 encrypted document vaults',
      'No telemetry data sold or shared with third parties',
      'Automatic trip route wipe upon vehicle return',
      'Strict discretion for VIP and celebrity clientele',
    ],
  },
  {
    id: 'feature-5',
    iconName: 'headset',
    title: 'PROFESSIONAL CUSTOMER SUPPORT',
    subtitle: 'Dedicated Legal & Concierge Operations 24/7',
    description:
      'Round-the-clock priority assistance from licensed automotive legal representatives and senior concierge team members.',
    details: [
      'Instant direct phone line to dedicated account executive',
      'On-demand police & accident reporting response unit',
      'Global multilingual support in 12 languages',
      'Immediate replacement vehicle dispatch within 30 mins',
    ],
    fullWidth: true,
  },
];

export const LEGAL_CLAUSES: LegalClause[] = [
  {
    title: 'Section 1: Permitted Usage & Scope',
    summary: 'Lawful commercial, executive, event, and private travel explicitly specified.',
    fullText:
      'The vehicle shall be operated solely by verified designated drivers for lawful purposes including business travel, VIP transit, events, film/photoshoots, and personal leisure. Track racing, stunt driving, and unauthorized sub-leasing are strictly prohibited.',
    badge: 'Standard Mandate',
  },
  {
    title: 'Section 2: Comprehensive Insurance & Indemnity',
    summary: 'Full commercial policy coverage including third-party liability and comprehensive damage.',
    fullText:
      'Renter and passengers are fully protected under our tier-one commercial fleet insurance policy. Zero liability shall be incurred by the client for mechanical failures or non-negligent acts of third parties.',
    badge: 'Fully Protected',
  },
  {
    title: 'Section 3: Discretion & Data Confidentiality',
    summary: 'Strict non-disclosure agreement regarding client identity, routes, and schedules.',
    fullText:
      'All rental records, payment details, and vehicle telemetry remain strictly confidential under non-disclosure protocols. GPS location data is monitored strictly for vehicle safety and deleted upon lease fulfillment.',
    badge: 'Strict Privacy',
  },
  {
    title: 'Section 4: Inspection & Condition Guarantee',
    summary: 'Dual 50-point inspection record signed before handoff and after return.',
    fullText:
      'Prior to vehicle handover, both parties execute a digital 50-point visual and mechanical condition checklist. Any pre-existing cosmetic imperfection is logged and excluded from security deposit assessments.',
    badge: '100% Verified',
  },
];

export const INTERACTIVE_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot-car',
    x: 62,
    y: 35,
    label: 'Executive Fleet Vehicle',
    title: 'Fully Insured & Regularly Inspected Fleet',
    description: 'Rolls-Royce Ghost / Phantom executive series. Undergoes a 50-point mechanical inspection prior to every client delivery.',
    icon: 'car',
  },
  {
    id: 'hotspot-document',
    x: 64,
    y: 68,
    label: 'Rental Agreement',
    title: 'Transparent Legal Rental Contract',
    description: 'Binding agreement detailing clear usage guidelines, zero hidden fees, and transparent deposit terms.',
    icon: 'file',
  },
  {
    id: 'hotspot-statue',
    x: 88,
    y: 42,
    label: 'Legal Symbol',
    title: 'Strict Regulatory & Law Compliance',
    description: 'Operating strictly within local, state, and international transport regulations and legal standards.',
    icon: 'scale',
  },
  {
    id: 'hotspot-plaque',
    x: 92,
    y: 67,
    label: 'Insured Plaque',
    title: 'Commercial Fleet Insurance Protection',
    description: 'Backing every vehicle with up to $5,000,000 umbrella liability coverage and zero-deductible options.',
    icon: 'shield',
  },
];
