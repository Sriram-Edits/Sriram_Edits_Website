export interface PricingPlan {
  id: string;
  label: string;
  title: string;
  price: string;
  priceSuffix: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'flexible',
    label: 'Flexible',
    title: 'Single Reel',
    price: '₹800–₹1,000',
    priceSuffix: '/ reel',
    features: [
      '1 professionally edited reel',
      'Captions',
      'Cuts & transitions',
      'Music / sound effects',
      'Platform-ready export',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    id: 'starter',
    label: 'Starter',
    title: '10 Reels',
    price: '₹7,999',
    priceSuffix: '/ package',
    features: [
      '10 edited reels',
      'Social-media optimized',
      'Captions',
      'Transitions & effects',
      'Music / sound design',
    ],
    highlighted: false,
    cta: 'Choose Package',
  },
  {
    id: 'popular',
    label: 'Most Popular',
    title: '15 Reels',
    price: '₹9,999',
    priceSuffix: '/ package',
    features: [
      '15 edited reels',
      'Social-media optimized',
      'Captions',
      'Transitions & effects',
      'Music / sound design',
    ],
    highlighted: true,
    cta: 'Choose Package',
  },
  {
    id: 'scale',
    label: 'Scale',
    title: '30 Reels',
    price: '₹14,999',
    priceSuffix: '/ package',
    features: [
      '30 edited reels',
      'Social-media optimized',
      'Captions',
      'Transitions & effects',
      'Music / sound design',
    ],
    highlighted: false,
    cta: 'Choose Package',
  },
];
