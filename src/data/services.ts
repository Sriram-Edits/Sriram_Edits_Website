import {
  Film,
  PartyPopper,
  Briefcase,
  Smartphone,
  Clapperboard,
  Palette,
} from 'lucide-react';

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: typeof Film;
}

export const services: Service[] = [
  {
    id: 'wedding',
    number: '01',
    title: 'Wedding Films',
    description:
      'Cinematic wedding films that preserve genuine moments and emotions.',
    icon: Film,
  },
  {
    id: 'event',
    number: '02',
    title: 'Event Videography',
    description:
      'Professional coverage for events, conferences, celebrations and launches.',
    icon: PartyPopper,
  },
  {
    id: 'commercial',
    number: '03',
    title: 'Commercial Films',
    description:
      'Visual storytelling for brands, products and businesses.',
    icon: Briefcase,
  },
  {
    id: 'social',
    number: '04',
    title: 'Social Media Content',
    description:
      'Short-form videos optimized for Instagram Reels, YouTube Shorts and social platforms.',
    icon: Smartphone,
  },
  {
    id: 'cinematic',
    number: '05',
    title: 'Cinematic Videos',
    description:
      'Story-driven cinematic production with professional visual direction.',
    icon: Clapperboard,
  },
  {
    id: 'editing',
    number: '06',
    title: 'Video Editing',
    description:
      'Professional editing, color grading, sound design and motion graphics.',
    icon: Palette,
  },
];
