import heroCarImg from '../assets/images/hero_car_showroom_1786197222479.webp';
import step1Img from '../assets/images/step1_showroom_1786197240174.webp';
import step2Img from '../assets/images/step2_calendar_1786197254555.webp';
import step3Img from '../assets/images/step3_verification_1786197268876.webp';
import step4Img from '../assets/images/step4_chauffeur_1786197288475.webp';
import { StepItem } from '../types';

export const HERO_CAR_IMAGE = heroCarImg;

export const STEPS_DATA: StepItem[] = [
  {
    id: '01',
    stepNumber: '01',
    title: 'CHOOSE YOUR VEHICLE',
    description: 'Browse our premium fleet and select your dream car.',
    iconType: 'car',
    image: step1Img,
    alt: 'Luxury car showroom displaying exotic fleet',
  },
  {
    id: '02',
    stepNumber: '02',
    title: 'SELECT DATE & PURPOSE',
    description: 'Tell us when and where you need the vehicle.',
    iconType: 'calendar',
    image: step2Img,
    alt: 'Luxury desk setup with calendar and gold pen',
  },
  {
    id: '03',
    stepNumber: '03',
    title: 'COMPLETE VERIFICATION',
    description: 'Provide the required documents and complete the legal rental process.',
    iconType: 'shield',
    image: step3Img,
    alt: 'Client signing legal rental documents with fountain pen',
  },
  {
    id: '04',
    stepNumber: '04',
    title: 'ENJOY THE EXPERIENCE',
    description: 'Receive your luxury vehicle and make your event unforgettable.',
    iconType: 'key',
    image: step4Img,
    alt: 'Chauffeur presenting luxury vehicle to customer',
  },
];
