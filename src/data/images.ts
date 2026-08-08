import bugattiImg from '../assets/images/bugatti_chiron_new_1785952595676.jpg';
import dodgeImg from '../assets/images/dodge_demon_hero_1785951958666.jpg';
import { ImagePair } from '../types';

export const DEFAULT_SUPERCAR_PAIR: ImagePair = {
  id: 'hypercar-duo',
  title: 'Bugatti Chiron vs Dodge Demon 170',
  image1: {
    id: 'bugatti-chiron',
    name: 'Bugatti Chiron Super Sport',
    subtitle: 'W16 Quad-Turbo Hypercar',
    url: bugattiImg,
    description: '1,578 HP French pinnacle of aerodynamic precision and luxury engineering.',
    badge: '1,578 HP',
    specs: [
      { label: 'Engine', value: '8.0L W16 Quad-Turbo' },
      { label: '0-60 MPH', value: '2.2 sec' },
      { label: 'Top Speed', value: '273 MPH' }
    ]
  },
  image2: {
    id: 'dodge-demon-170',
    name: 'Dodge Challenger SRT Demon 170',
    subtitle: 'Supercharged Hemified Beast',
    url: dodgeImg,
    description: '1,025 HP American ethanol drag monster pushing boundaries of street acceleration.',
    badge: '1,025 HP',
    specs: [
      { label: 'Engine', value: '6.2L Supercharged V8' },
      { label: '0-60 MPH', value: '1.66 sec' },
      { label: 'Quarter Mile', value: '8.91 sec' }
    ]
  }
};

export const PRESET_PAIRS: ImagePair[] = [
  DEFAULT_SUPERCAR_PAIR,
  {
    id: 'cyberpunk-tokyo',
    title: 'Neon Tokyo: Day & Night',
    image1: {
      id: 'tokyo-day',
      name: 'Tokyo Shinjuku (Day)',
      subtitle: 'Metropolitan High-Rise Horizon',
      url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80',
      description: 'Sunlit urban geometry across the vibrant streets of Shinjuku.',
      badge: 'Daylight',
      specs: [
        { label: 'Location', value: 'Shinjuku, Tokyo' },
        { label: 'Time', value: '14:30 JST' }
      ]
    },
    image2: {
      id: 'tokyo-night',
      name: 'Tokyo Shinjuku (Neon Night)',
      subtitle: 'Cyberpunk Rain Reflections',
      url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1920&q=80',
      description: 'Electric neon glows and soaked asphalt reflecting city lights.',
      badge: 'Neon Night',
      specs: [
        { label: 'Location', value: 'Kabukicho, Tokyo' },
        { label: 'Time', value: '23:45 JST' }
      ]
    }
  },
  {
    id: 'dark-cyber-car',
    title: 'Porsche 911 GT3 RS Dual Spec',
    image1: {
      id: 'porsche-black',
      name: 'Porsche 911 GT3 RS (Stealth Spec)',
      subtitle: 'Satin Black Aerodynamic Mastery',
      url: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1920&q=80',
      description: 'Track-focused track monster in pure satin black finish.',
      badge: 'Track Spec',
      specs: [
        { label: 'Engine', value: '4.0L Flat-6 NA' },
        { label: 'Output', value: '518 HP' }
      ]
    },
    image2: {
      id: 'porsche-gt3',
      name: 'Porsche GT3 RS (Racing Heritage)',
      subtitle: 'Motorsport Livery Edition',
      url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80',
      description: 'Iconic Weissach package performance build in studio setting.',
      badge: 'Heritage',
      specs: [
        { label: '0-60 MPH', value: '3.0 sec' },
        { label: 'Downforce', value: '860 kg' }
      ]
    }
  }
];
