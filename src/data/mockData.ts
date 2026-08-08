import { VehicleSpec, TimelineFeature, FAQItem } from '../types';

export const VEHICLE_SPECS: VehicleSpec[] = [
  {
    id: 'chiron-super-sport',
    model: 'Bugatti Chiron Super Sport',
    shortName: 'Chiron Super Sport',
    engine: '8.0 L Quad-Turbo W16',
    displacement: '7,993 cc',
    powertrain: 'All-Wheel Drive',
    stockPower: '1,600 PS',
    tunedPower: '1,600 PS',
    stockTorque: '1,600 Nm',
    tunedTorque: '1,600 Nm',
    acceleration0to60: '2.4 sec',
    tuned0to60: '2.4 sec',
    topSpeed: '273 mph (440 km/h)',
    description:
      'The Bugatti Chiron Super Sport combines an 8.0-liter quad-turbocharged W16 engine with extraordinary power, extreme high-speed performance, and grand-touring luxury.',
    modifications: [
      'Factory Bugatti W16 Powertrain',
      'Quad-Turbocharged Engine',
      'Advanced All-Wheel Drive System',
      'High-Speed Aerodynamic Package'
    ]
  },

  {
    id: 'demon-170',
    model: 'Dodge Challenger SRT Demon 170',
    shortName: 'Demon 170',
    engine: '6.2 L Supercharged HEMI V8',
    displacement: '6,166 cc',
    powertrain: 'Rear-Wheel Drive',
    stockPower: '1,025 HP @ 6,500 RPM',
    tunedPower: '1,025 HP',
    stockTorque: '945 lb-ft',
    tunedTorque: '945 lb-ft',
    acceleration0to60: '1.66 sec',
    tuned0to60: '1.66 sec',
    topSpeed: '151 mph (243 km/h)',
    description:
      'The Dodge Challenger SRT Demon 170 is a street-legal high-performance muscle car powered by a supercharged 6.2-liter HEMI V8, delivering 1,025 horsepower and extraordinary straight-line performance.',
    modifications: [
      'Supercharged HEMI V8 Powertrain',
      'High-Performance Drag Racing Calibration',
      'TransBrake Launch System',
      'Performance-Oriented Suspension Setup'
    ]
  },

  {
    id: 'w16-mistral',
    model: 'Bugatti W16 Mistral',
    shortName: 'W16 Mistral',
    engine: '8.0 L Quad-Turbo W16',
    displacement: '7,993 cc',
    powertrain: 'All-Wheel Drive',
    stockPower: '1,600 PS',
    tunedPower: '1,600 PS',
    stockTorque: '1,600 Nm',
    tunedTorque: '1,600 Nm',
    acceleration0to60: 'Approx. 2.4 sec',
    tuned0to60: 'Approx. 2.4 sec',
    topSpeed: '261 mph (420 km/h)',
    description:
      'The Bugatti W16 Mistral is an exclusive open-top hyper sports car combining the legendary 8.0-liter quad-turbocharged W16 with extraordinary performance and an uncompromising luxury roadster experience.',
    modifications: [
      'Open-Top Roadster Design',
      'Advanced Aerodynamic Package',
      'Carbon Fiber Monocoque',
      'Luxury Performance Interior'
    ]
  }
];

export const TIMELINE_FEATURES: TimelineFeature[] = [
  {
    id: 'aftermarket',
    icon: 'shop',
    title: 'Aftermarket Performance',
    description: 'We specialize in upgrading your vehicle with after-market parts. Instead of using original manufacturer parts. We offer you the opportunity to personalize your ride with parts of your',
    details: [
      'Bespoke Titanium & Inconel Exhaust Systems',
      'High-Efficiency Cold Air Intake Systems',
      'Upgrade Turbochargers & Supercharger Pulleys',
      'Custom Forged Lightweight Wheels & Track Tires'
    ]
  },
  {
    id: 'ecu-tuning',
    icon: 'palette',
    title: 'Custom ECU Tuning & Styling',
    description: 'Custom engine mapping recalibrates fuel curves, ignition timing, and boost parameters to unleash hidden power while ensuring engine reliability and throttle responsiveness.',
    details: [
      'Dyno-Proven Stage 1, Stage 2, and Custom E85 Maps',
      'Transmission Control Unit (TCU) Quick-Shift Recalibration',
      'Bespoke Exterior Vinyl Wraps & Paint Protection Film (PPF)',
      'Custom Alcantara & Carbon Fiber Interior Re-Trim'
    ]
  },
  {
    id: 'aerodynamics',
    icon: 'disc',
    title: 'Precision Aerodynamics & Exhaust',
    description: 'Wind-tunnel tested carbon fiber aerodynamic components engineered to increase downforce, lower high-speed drag, and optimize airflow cooling dynamics.',
    details: [
      'Autoclave Pre-Preg Carbon Fiber Front Splitters & Wings',
      'Functional Rear Diffusers with Active Aero Vanes',
      'Thermal Heat-Shielded Downpipes & Race Catalysts',
      'Weight-Reduced Track Suspension & Corner-Balancing'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Performance',
    question: 'How much horsepower increase can I expect from a Stage 1 tune?',
    answer: 'Depending on the vehicle, a Stage 1 software optimization yields between 15% to 30% increases in horsepower and torque without requiring physical engine hardware changes.'
  },
  {
    category: 'Warranty',
    question: 'Will aftermarket modifications affect my factory warranty?',
    answer: 'We offer specialized Luxivo Warranty Protection options and reversible tuning software, preserving peace of mind while maximizing driving pleasure.'
  },
  {
    category: 'Installation',
    question: 'How long does a complete aftermarket tuning process take?',
    answer: 'ECU software flashes take 2 to 4 hours including dyno runs. Comprehensive exhaust, intake, and aerodynamic installs range from 1 to 3 days.'
  },
  {
    category: 'Customization',
    question: 'Can I select bespoke exhaust notes or burble controls?',
    answer: 'Yes! Our custom ECU tuning software permits full control over valve actuation, cold-start volume, and sport exhaust overrun frequencies.'
  }
];
