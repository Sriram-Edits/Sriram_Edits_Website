export type ProjectCategory =
  | 'All'
  | 'Wedding'
  | 'Commercial'
  | 'Colour Grading'
  | 'Portrait'
  | 'Cinematic';

export interface Project {
  id: string;
  number: string;
  category: ProjectCategory;
  title: string;
  description: string;
  thumbnail: string | null; // null = placeholder
  videoUrl: string | null; // MP4, WebM, YouTube, or Vimeo URL
  year: number;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    number: '01',
    category: 'Wedding',
    title: 'Forever Begins Here',
    description: '',
    thumbnail: '/wedding.jpg',
    videoUrl: '/wedding.mp4',
    year: 2026,
  },
  {
    id: 'project-2',
    number: '02',
    category: 'Commercial',
    title: 'Made To Move',
    description: '',
    thumbnail: '/commercial.png',
    videoUrl: '/commercial.mp4',
    year: 2026,
  },
  {
    id: 'project-3',
    number: '03',
    category: 'Colour Grading',
    title: 'Color Grading',
    description: '',
    thumbnail: '/colour grading.jpg',
    videoUrl: '/colour grading.mp4',
    year: 2025,
  },
  {
    id: 'project-4',
    number: '04',
    category: 'Portrait',
    title: 'Built For Attention',
    description: '',
    thumbnail: '/another commercial.png',
    videoUrl: '/another commercial.mp4',
    year: 2025,
  },
];

export const categories: ProjectCategory[] = [
  'All',
  'Wedding',
  'Commercial',
  'Colour Grading',
  'Portrait',
  'Cinematic',
];
