// ─── Site Configuration ─────────────────────────────────────────────────────
// Change these values to customize the entire website.
// All components reference this single config object.

export const siteConfig = {
  // Brand
  brandName: 'Sriram Edits',
  brandFirst: 'Sriram',
  brandSeparator: ' ',
  brandSecond: 'Edits',
  tagline: 'Visual stories. Thoughtfully created.',
  siteTitle: 'Sriram Edits — Cinematic Videography, Video Editor & Production',
  siteDescription:
    'Professional videography, cinematic films, event coverage, video editing and social media production.',
  canonicalUrl: 'https://sriramedits.com',

  // Videographer
  videographerName: 'Sriram Edits',
  location: 'India',

  // Contact
  whatsappNumber: '919176639685', // No +, spaces, or dashes. Country code + number.
  email: 'sriramsriram18g@gmail.com',

  // Social
  instagramUrl: 'https://www.instagram.com/sriram.edit_6376?igsh=NXF3amhhZDJ3MmNx&utm_source=qr',

  // Navigation
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ],

  // Stats
  stats: [
    { value: '50+', label: 'Projects' },
    { value: '30+', label: 'Happy Clients' },
    { value: '3+', label: 'Years Experience' },
    { value: '100%', label: 'Creative Focus' },
  ],

  // WhatsApp pre-filled messages
  whatsappMessages: {
    hero: 'Hi, I came across your website and would like to discuss a video project.',
    wedding: "Hi, I'm interested in your wedding videography services.",
    commercial: "Hi, I'd like to discuss a commercial video project.",
    social: "Hi, I'm interested in social media video content.",
    general: "Hi, I'd like to know more about your videography services.",
    cta: "Hi, I have a story to tell and I'd love to work with you.",
  },

  // Footer
  footerYear: 2026,
} as const;
