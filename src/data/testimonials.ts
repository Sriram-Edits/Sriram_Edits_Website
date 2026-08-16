export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  type: string;
  avatar: string | null;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'Working with the team completely transformed our event footage into something we actually wanted to watch again. The cinematic quality was beyond what we expected.',
    name: 'Aisha Rahman',
    type: 'Corporate Event',
    avatar: null,
  },
  {
    id: 'testimonial-2',
    quote:
      "They captured our wedding day exactly as it felt — emotional, beautiful, and real. Every time we watch the film, we're right back in that moment.",
    name: 'Vikram & Priya',
    type: 'Wedding Film',
    avatar: null,
  },
  {
    id: 'testimonial-3',
    quote:
      'Our social media engagement tripled after the video campaign. The team understood our brand voice perfectly and delivered content that actually converts.',
    name: 'Rohan Mehta',
    type: 'Brand Campaign',
    avatar: null,
  },
];
