export type FleetCar = {
  id: string;
  brand: string;
  name: string;
  specs: string;
  price: number;
  image: string;
};

export const fleetCars: FleetCar[] = [
  {
    id: 'lamborghini-revuelto',
    brand: 'Lamborghini',
    name: 'Lamborghini Revuelto',
    specs: '6.5L V12 · 2024 · 2 Seats',
    price: 6500,
    image: '/images/car-lamborghini.png',
  },
  {
    id: 'ferrari-purosangue',
    brand: 'Ferrari',
    name: 'Ferrari Purosangue',
    specs: '6.5L V12 · 2024 · 4 Seats',
    price: 6000,
    image: '/images/car-ferrari.png',
  },
  {
    id: 'mercedes-amg-g63',
    brand: 'Mercedes-AMG',
    name: 'Mercedes-AMG G63',
    specs: '4.0L V8 Biturbo · 2024 · 5 Seats',
    price: 4500,
    image: '/images/car-mercedes.png',
  },
  {
    id: 'porsche-911-gt3-rs',
    brand: 'Porsche',
    name: 'Porsche 911 GT3 RS',
    specs: '4.0L H6 · 2023 · 2 Seats',
    price: 5500,
    image: '/images/car-porsche.png',
  },
];

export type Brand = {
  name: string;
  slug: string;
};

export const brands: Brand[] = [
  { name: 'Ferrari', slug: 'ferrari' },
  { name: 'Porsche', slug: 'porsche' },
  { name: 'Bentley', slug: 'bentley' },
  { name: 'McLaren', slug: 'mclaren' },
  { name: 'Rolls-Royce', slug: 'rolls-royce' },
  { name: 'Aston Martin', slug: 'aston-martin' },
  { name: 'Maserati', slug: 'maserati' },
  { name: 'Lamborghini', slug: 'lamborghini' },
  { name: 'BMW', slug: 'bmw' },
];

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const benefits: Benefit[] = [
  {
    id: 'fleet-ownership',
    title: 'Fleet Ownership',
    description: 'We own 100% of our fleet. Zero brokers, direct accountability.',
    icon: 'ShieldCheck',
  },
  {
    id: 'zero-hidden-fees',
    title: 'Zero Hidden Fees',
    description: 'Clear upfront pricing. What you see is exactly what you pay.',
    icon: 'ReceiptText',
  },
  {
    id: 'no-deposit-membership',
    title: 'No-Deposit Membership',
    description: 'Unlock premium booking. Drive all our cars without a deposit.',
    icon: 'CreditCard',
  },
  {
    id: 'airport-delivery',
    title: 'Airport Delivery',
    description: 'Step off your flight and straight into your supercar.',
    icon: 'PlaneLanding',
  },
  {
    id: 'concierge-support',
    title: '24/7 Concierge Support',
    description: 'A dedicated client manager is at your service around the clock.',
    icon: 'Headset',
  },
  {
    id: 'instant-booking',
    title: 'Instant Booking',
    description: 'Reserve via WhatsApp or web within minutes. Be behind the wheel today.',
    icon: 'Zap',
  },
];
