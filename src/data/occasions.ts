import { OccasionItem } from '../types';

import weddingImg from '../assets/images/wedding_car_1786193230860.jpg';
import filmImg from '../assets/images/film_shoot_car_1786193244491.jpg';
import vipImg from '../assets/images/vip_event_car_1786193260613.jpg';
import photoshootImg from '../assets/images/photoshoot_car_1786193274496.jpg';
import specialImg from '../assets/images/special_occasion_car_1786193291427.jpg';

export const OCCASIONS: OccasionItem[] = [
  {
    id: 'weddings',
    title: 'Weddings',
    subtitle: 'Arrive in elegance on your most memorable day.',
    description: 'Arrive in elegance on\nyour most memorable day.',
    image: weddingImg,
    icon: 'rings',
    vehicleModel: 'Rolls-Royce Phantom VIII',
    specs: {
      engine: '6.75L Twin-Turbo V12',
      horsepower: '563 HP',
      chauffeurAvailable: true,
      ratePerDay: '$2,800 / day',
    },
    clipPolygon: 'polygon(0% 6%, 100% 1.5%, 100% 95.5%, 0% 100%)',
    svgPoints: '0,6 100,1.5 100,95.5 0,100',
    features: [
      'Professional Uniformed Chauffeur',
      'White Floral & Ribbon Styling',
      'Red Carpet Arrival Experience',
      'Complimentary Vintage Champagne',
    ],
  },
  {
    id: 'film-shoots',
    title: 'Film & Commercial\nShoots',
    subtitle: 'Luxury vehicles for movies, advertisements, and music videos.',
    description: 'Luxury vehicles for movies,\nadvertisements, and\nmusic videos.',
    image: filmImg,
    icon: 'film',
    vehicleModel: 'Lamborghini Huracán EVO',
    specs: {
      engine: '5.2L Naturally Aspirated V10',
      horsepower: '631 HP',
      chauffeurAvailable: false,
      ratePerDay: '$3,200 / day',
    },
    clipPolygon: 'polygon(0% 4%, 100% 0.5%, 100% 97%, 0% 100%)',
    svgPoints: '0,4 100,0.5 100,97 0,100',
    features: [
      'Full Camera Rig & Mount Permits',
      'On-Set Vehicle Precision Driver',
      'Comprehensive Commercial Insurance',
      'Custom Exterior Decal Compatibility',
    ],
  },
  {
    id: 'vip-events',
    title: 'VIP Events',
    subtitle: 'Stand out at corporate events, exhibitions, and private celebrations.',
    description: 'Stand out at corporate\nevents, exhibitions, and\nprivate celebrations.',
    image: vipImg,
    icon: 'star',
    vehicleModel: 'Mercedes-Maybach S 680',
    specs: {
      engine: '6.0L Biturbo V12',
      horsepower: '621 HP',
      chauffeurAvailable: true,
      ratePerDay: '$2,500 / day',
    },
    clipPolygon: 'polygon(0% 2%, 100% 0%, 100% 98.5%, 0% 100%)',
    svgPoints: '0,2 100,0 100,98.5 0,100',
    features: [
      'Discreet Executive Transport',
      'Private Jet & Heliport Pickups',
      '4K Burmester Sound & Rear Lounge',
      'Armored Security Detail Available',
    ],
  },
  {
    id: 'photoshoots',
    title: 'Photoshoots',
    subtitle: 'Create stunning visual content with iconic luxury automobiles.',
    description: 'Create stunning visual\ncontent with iconic\nluxury automobiles.',
    image: photoshootImg,
    icon: 'camera',
    vehicleModel: 'Ferrari 488 Pista',
    specs: {
      engine: '3.9L Twin-Turbo V8',
      horsepower: '710 HP',
      chauffeurAvailable: false,
      ratePerDay: '$2,900 / day',
    },
    clipPolygon: 'polygon(0% 0%, 100% 3%, 100% 100%, 0% 97%)',
    svgPoints: '0,0 100,3 100,100 0,97',
    features: [
      'Studio & Outdoor Rental Rates',
      'Detailing & High-Gloss Prep On-Site',
      'Engine Sound & Rev Demonstrations',
      'Flexible Half-Day & Full-Day Booking',
    ],
  },
  {
    id: 'special-occasions',
    title: 'Special Occasions',
    subtitle: 'Birthdays, anniversaries, proposals, and memorable celebrations.',
    description: 'Birthdays, anniversaries,\nproposals, and memorable\ncelebrations.',
    image: specialImg,
    icon: 'gift',
    vehicleModel: 'Mercedes-AMG G 63',
    specs: {
      engine: '4.0L V8 Biturbo',
      horsepower: '577 HP',
      chauffeurAvailable: true,
      ratePerDay: '$2,200 / day',
    },
    clipPolygon: 'polygon(0% 0%, 100% 5.5%, 100% 100%, 0% 94.5%)',
    svgPoints: '0,0 100,5.5 100,100 0,94.5',
    features: [
      'Surprise Delivery with Gift Box Presentation',
      'Personalized Celebration Itinerary',
      'Chauffeur or Self-Drive Options',
      'Photo Memory Package Included',
    ],
  },
];
