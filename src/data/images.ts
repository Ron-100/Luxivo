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


