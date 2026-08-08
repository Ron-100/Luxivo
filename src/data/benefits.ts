import { BenefitItem, LuxuryCar } from '../types';

export const BENEFIT_ITEMS: BenefitItem[] = [
  {
    id: 'benefit-01',
    number: '01',
    title: 'PROFESSIONALLY\nMAINTAINED FLEET',
    description: 'Every vehicle is regularly serviced\nand inspected for top performance.',
    iconType: 'car-sparkle',
  },
  {
    id: 'benefit-02',
    number: '02',
    title: 'FLEXIBLE\nRENTAL PACKAGES',
    description: 'Choose from a variety of rental\nplans tailored to your needs.',
    iconType: 'calendar-check',
  },
  {
    id: 'benefit-03',
    number: '03',
    title: 'ON-TIME\nVEHICLE DELIVERY',
    description: 'We value your time. Enjoy prompt\nand reliable delivery.',
    iconType: 'clock-delivery',
  },
  {
    id: 'benefit-04',
    number: '04',
    title: 'CHAUFFEUR SERVICE\nAVAILABLE',
    description: 'Sit back and relax with our\nprofessional chauffeurs.',
    iconType: 'chauffeur',
  },
  {
    id: 'benefit-05',
    number: '05',
    title: 'TRANSPARENT\nPRICING',
    description: 'No hidden charges. What you see\nis what you pay—clear and honest.',
    iconType: 'shield-dollar',
  },
  {
    id: 'benefit-06',
    number: '06',
    title: '24/7 CUSTOMER\nSUPPORT',
    description: 'Our dedicated support team is\navailable around the clock.',
    iconType: 'support-247',
  },
];

export const LUXURY_CARS: LuxuryCar[] = [
  {
    id: 'ferrari-sf90',
    name: 'Ferrari SF90 Stradale',
    subtitle: 'HYBRID V8 SUPERCAR',
    color: 'Rosso Corsa Red',
    category: 'Foreground Dominant',
    specs: {
      engine: '4.0L Twin-Turbo V8 + 3 Motors',
      horsepower: '986 HP',
      acceleration: '0-60 mph in 2.5s',
      topSpeed: '211 mph',
    },
    position: 'foreground',
    accentColor: '#E61C24',
  },
  {
    id: 'mclaren-765lt',
    name: 'McLaren 765LT Coupe',
    subtitle: 'LIMITED EDITION TRACK LEGEND',
    color: 'Onyx Gloss Black',
    category: 'Middle Stage',
    specs: {
      engine: '4.0L Twin-Turbo V8',
      horsepower: '755 HP',
      acceleration: '0-60 mph in 2.7s',
      topSpeed: '205 mph',
    },
    position: 'middle',
    accentColor: '#111111',
  },
  {
    id: 'porsche-taycan',
    name: 'Porsche Taycan Turbo S',
    subtitle: 'ELECTRIC GT SPORTS COUPE',
    color: 'Gentian Blue Metallic',
    category: 'Rear Upper Stage',
    specs: {
      engine: 'Dual Permanent Magnet Synchronous',
      horsepower: '750 HP',
      acceleration: '0-60 mph in 2.6s',
      topSpeed: '161 mph',
    },
    position: 'background',
    accentColor: '#104EB2',
  },
];
