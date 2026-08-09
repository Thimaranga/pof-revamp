export type FleetCategory = 'Sports Car' | 'SUV' | 'Sedan' | 'Convertible';

export type FleetListing = {
  id: string;
  brand: string;
  name: string;
  color: string;
  category: FleetCategory;
  engine: string;
  year: number;
  seats: number;
  transmission: string;
  price: number;
  /** Set when this listing is running a promo; badge shows the % off vs. price. */
  originalPrice?: number;
  promoLabel?: string;
  image: string;
  /** Extra photos (interior, detail shots) shown on the vehicle's detail page. */
  gallery: string[];
  description: string;
  /** Shown in the homepage's Featured Fleet carousel. */
  featured?: boolean;
};

export const fleetInventory: FleetListing[] = [
  {
    id: 'lamborghini-revuelto',
    brand: 'Lamborghini',
    name: 'Lamborghini Revuelto',
    color: 'Grey',
    category: 'Sports Car',
    engine: '6.5L V12 Hybrid',
    year: 2024,
    seats: 2,
    transmission: 'Automatic',
    price: 6500,
    featured: true,
    image: '/images/fleet/lamborghini-revuelto.webp',
    gallery: [
      '/images/fleet/gallery/lamborghini-revuelto-1.jpg',
      '/images/fleet/gallery/lamborghini-revuelto-2.jpg',
      '/images/fleet/gallery/lamborghini-revuelto-3.jpg',
      '/images/fleet/gallery/lamborghini-revuelto-4.jpg',
    ],
    description:
      "Lamborghini's first V12 hybrid hypercar delivers 1,015 hp and a 0-100 km/h sprint in 2.5 seconds — an unmistakable statement on the streets of Dubai.",
  },
  {
    id: 'ferrari-12cilindri',
    brand: 'Ferrari',
    name: 'Ferrari 12Cilindri',
    color: 'Green',
    category: 'Sports Car',
    engine: '6.5L V12',
    year: 2024,
    seats: 2,
    transmission: 'Automatic',
    price: 6000,
    featured: true,
    image: '/images/fleet/ferrari-12cilindri.jpg',
    gallery: [
      '/images/fleet/gallery/ferrari-12cilindri-1.jpg',
      '/images/fleet/gallery/ferrari-12cilindri-2.jpg',
      '/images/fleet/gallery/ferrari-12cilindri-3.jpg',
      '/images/fleet/gallery/ferrari-12cilindri-4.jpg',
    ],
    description:
      "A modern tribute to Ferrari's naturally-aspirated V12 grand tourers, blending timeless design with 819 hp of pure engine sound.",
  },
  {
    id: 'ferrari-purosangue-black',
    brand: 'Ferrari',
    name: 'Ferrari Purosangue',
    color: 'Black',
    category: 'SUV',
    engine: '6.5L V12',
    year: 2024,
    seats: 4,
    transmission: 'Automatic',
    price: 6000,
    image: '/images/fleet/ferrari-purosangue-black.webp',
    gallery: [
      '/images/fleet/gallery/ferrari-purosangue-black-1.webp',
      '/images/fleet/gallery/ferrari-purosangue-black-2.webp',
      '/images/fleet/gallery/ferrari-purosangue-black-3.webp',
      '/images/fleet/gallery/ferrari-purosangue-black-4.webp',
    ],
    description:
      "Ferrari's first four-door, four-seat model brings supercar performance to a genuine daily driver, powered by a naturally-aspirated V12.",
  },
  {
    id: 'ferrari-purosangue-orange',
    brand: 'Ferrari',
    name: 'Ferrari Purosangue',
    color: 'Orange',
    category: 'SUV',
    engine: '6.5L V12',
    year: 2024,
    seats: 4,
    transmission: 'Automatic',
    price: 6000,
    image: '/images/fleet/ferrari-purosangue-orange.webp',
    gallery: [
      '/images/fleet/gallery/ferrari-purosangue-orange-1.jpg',
      '/images/fleet/gallery/ferrari-purosangue-orange-2.jpg',
      '/images/fleet/gallery/ferrari-purosangue-orange-3.jpg',
      '/images/fleet/gallery/ferrari-purosangue-orange-4.jpg',
    ],
    description:
      "Ferrari's first four-door, four-seat model brings supercar performance to a genuine daily driver, powered by a naturally-aspirated V12.",
  },
  {
    id: 'ferrari-purosangue-white',
    brand: 'Ferrari',
    name: 'Ferrari Purosangue',
    color: 'White',
    category: 'SUV',
    engine: '6.5L V12',
    year: 2024,
    seats: 4,
    transmission: 'Automatic',
    price: 6000,
    image: '/images/fleet/ferrari-purosangue-white.webp',
    gallery: [
      '/images/fleet/gallery/ferrari-purosangue-white-1.jpg',
      '/images/fleet/gallery/ferrari-purosangue-white-2.jpg',
      '/images/fleet/gallery/ferrari-purosangue-white-3.jpg',
      '/images/fleet/gallery/ferrari-purosangue-white-4.jpg',
    ],
    description:
      "Ferrari's first four-door, four-seat model brings supercar performance to a genuine daily driver, powered by a naturally-aspirated V12.",
  },
  {
    id: 'ferrari-purosangue-blue',
    brand: 'Ferrari',
    name: 'Ferrari Purosangue',
    color: 'Blue',
    category: 'SUV',
    engine: '6.5L V12',
    year: 2024,
    seats: 4,
    transmission: 'Automatic',
    price: 6000,
    image: '/images/fleet/ferrari-purosangue-blue.webp',
    gallery: [
      '/images/fleet/gallery/ferrari-purosangue-blue-1.jpg',
      '/images/fleet/gallery/ferrari-purosangue-blue-2.jpg',
      '/images/fleet/gallery/ferrari-purosangue-blue-3.jpg',
      '/images/fleet/gallery/ferrari-purosangue-blue-4.jpg',
    ],
    description:
      "Ferrari's first four-door, four-seat model brings supercar performance to a genuine daily driver, powered by a naturally-aspirated V12.",
  },
  {
    id: 'lamborghini-huracan-sto',
    brand: 'Lamborghini',
    name: 'Lamborghini Huracán STO',
    color: 'Black',
    category: 'Sports Car',
    engine: '5.2L V10',
    year: 2023,
    seats: 2,
    transmission: 'Automatic',
    price: 3500,
    originalPrice: 4200,
    promoLabel: 'Weekend Special',
    image: '/images/fleet/lamborghini-huracan-sto.webp',
    gallery: [
      '/images/fleet/gallery/lamborghini-huracan-sto-1.jpg',
      '/images/fleet/gallery/lamborghini-huracan-sto-2.jpg',
      '/images/fleet/gallery/lamborghini-huracan-sto-3.jpg',
      '/images/fleet/gallery/lamborghini-huracan-sto-4.jpg',
    ],
    description:
      "Track-bred and road-legal, the Huracán STO channels Lamborghini's Super Trofeo racing pedigree into a razor-sharp street car.",
  },
  {
    id: 'porsche-911-gt3-rs-grey',
    brand: 'Porsche',
    name: 'Porsche 911 GT3 RS',
    color: 'Grey',
    category: 'Sports Car',
    engine: '4.0L Flat-6',
    year: 2023,
    seats: 2,
    transmission: 'Automatic',
    price: 3250,
    featured: true,
    image: '/images/fleet/porsche-911-gt3-rs-grey.jpg',
    gallery: [
      '/images/fleet/gallery/porsche-911-gt3-rs-grey-1.jpg',
      '/images/fleet/gallery/porsche-911-gt3-rs-grey-2.jpg',
      '/images/fleet/gallery/porsche-911-gt3-rs-grey-3.jpg',
      '/images/fleet/gallery/porsche-911-gt3-rs-grey-4.jpg',
    ],
    description:
      "Porsche's most extreme naturally-aspirated 911, built for the track with aerodynamics borrowed straight from motorsport.",
  },
  {
    id: 'porsche-911-gt3-rs-yellow',
    brand: 'Porsche',
    name: 'Porsche 911 GT3 RS',
    color: 'Yellow',
    category: 'Sports Car',
    engine: '4.0L Flat-6',
    year: 2023,
    seats: 2,
    transmission: 'Automatic',
    price: 3250,
    originalPrice: 3750,
    promoLabel: 'Limited Time',
    image: '/images/fleet/porsche-911-gt3-rs-yellow.webp',
    gallery: [
      '/images/fleet/gallery/porsche-911-gt3-rs-yellow-1.jpg',
      '/images/fleet/gallery/porsche-911-gt3-rs-yellow-2.jpg',
      '/images/fleet/gallery/porsche-911-gt3-rs-yellow-3.jpg',
      '/images/fleet/gallery/porsche-911-gt3-rs-yellow-4.jpg',
    ],
    description:
      "Porsche's most extreme naturally-aspirated 911, built for the track with aerodynamics borrowed straight from motorsport.",
  },
  {
    id: 'lamborghini-urus-se',
    brand: 'Lamborghini',
    name: 'Lamborghini Urus SE',
    color: 'Yellow',
    category: 'SUV',
    engine: '4.0L V8 Hybrid',
    year: 2024,
    seats: 4,
    transmission: 'Automatic',
    price: 2950,
    originalPrice: 3400,
    promoLabel: 'Summer Offer',
    image: '/images/fleet/lamborghini-urus-se.webp',
    gallery: [
      '/images/fleet/gallery/lamborghini-urus-se-1.jpg',
      '/images/fleet/gallery/lamborghini-urus-se-2.jpg',
      '/images/fleet/gallery/lamborghini-urus-se-3.jpg',
      '/images/fleet/gallery/lamborghini-urus-se-4.jpg',
    ],
    description:
      "The world's first plug-in hybrid super SUV, combining Lamborghini performance with everyday versatility and near-silent EV cruising.",
  },
  {
    id: 'aston-martin-dbx707',
    brand: 'Aston Martin',
    name: 'Aston Martin DBX 707',
    color: 'Black',
    category: 'SUV',
    engine: '4.0L V8 Biturbo',
    year: 2023,
    seats: 5,
    transmission: 'Automatic',
    price: 2100,
    featured: true,
    image: '/images/fleet/aston-martin-dbx707.webp',
    gallery: [
      '/images/fleet/gallery/aston-martin-dbx707-1.webp',
      '/images/fleet/gallery/aston-martin-dbx707-2.webp',
      '/images/fleet/gallery/aston-martin-dbx707-3.webp',
      '/images/fleet/gallery/aston-martin-dbx707-4.webp',
    ],
    description:
      "The world's most powerful luxury SUV, pairing a 707 hp twin-turbo V8 with Aston Martin's signature handcrafted cabin.",
  },
  {
    id: 'bentley-bentayga',
    brand: 'Bentley',
    name: 'Bentley Bentayga',
    color: 'Blue',
    category: 'SUV',
    engine: '4.0L V8',
    year: 2023,
    seats: 5,
    transmission: 'Automatic',
    price: 1250,
    image: '/images/fleet/bentley-bentayga.webp',
    gallery: [
      '/images/fleet/gallery/bentley-bentayga-1.webp',
      '/images/fleet/gallery/bentley-bentayga-2.webp',
      '/images/fleet/gallery/bentley-bentayga-3.webp',
      '/images/fleet/gallery/bentley-bentayga-4.webp',
    ],
    description:
      'A handcrafted British SUV that blends serious off-road capability with first-class cabin comfort.',
  },
  {
    id: 'bentley-continental-gtc',
    brand: 'Bentley',
    name: 'Bentley Continental GTC',
    color: 'Black',
    category: 'Convertible',
    engine: '4.0L V8',
    year: 2024,
    seats: 4,
    transmission: 'Automatic',
    price: 2950,
    originalPrice: 3400,
    promoLabel: 'Grand Touring Special',
    featured: true,
    image: '/images/fleet/bentley-continental-gtc.webp',
    gallery: [
      '/images/fleet/gallery/bentley-continental-gtc-1.webp',
      '/images/fleet/gallery/bentley-continental-gtc-2.webp',
      '/images/fleet/gallery/bentley-continental-gtc-3.webp',
      '/images/fleet/gallery/bentley-continental-gtc-4.webp',
    ],
    description:
      "Effortless grand touring with the roof down — twin-turbo V8 power wrapped in Bentley's finest craftsmanship.",
  },
  {
    id: 'bentley-flying-spur',
    brand: 'Bentley',
    name: 'Bentley Flying Spur',
    color: 'White',
    category: 'Sedan',
    engine: '4.0L V8',
    year: 2023,
    seats: 5,
    transmission: 'Automatic',
    price: 1250,
    image: '/images/fleet/bentley-flying-spur.webp',
    gallery: [
      '/images/fleet/gallery/bentley-flying-spur-1.webp',
      '/images/fleet/gallery/bentley-flying-spur-2.webp',
      '/images/fleet/gallery/bentley-flying-spur-3.webp',
      '/images/fleet/gallery/bentley-flying-spur-4.webp',
    ],
    description:
      'A four-door limousine with sports car pace, built for arriving in complete comfort.',
  },
  {
    id: 'land-rover-defender-110',
    brand: 'Land Rover',
    name: 'Land Rover Defender 110',
    color: 'Black',
    category: 'SUV',
    engine: '5.0L V8 Supercharged',
    year: 2023,
    seats: 5,
    transmission: 'Automatic',
    price: 850,
    image: '/images/fleet/land-rover-defender-110.jpg',
    gallery: [
      '/images/fleet/gallery/land-rover-defender-110-1.jpg',
      '/images/fleet/gallery/land-rover-defender-110-2.jpg',
      '/images/fleet/gallery/land-rover-defender-110-3.jpg',
      '/images/fleet/gallery/land-rover-defender-110-4.jpg',
    ],
    description:
      'Rugged capability meets modern luxury, with a supercharged V8 for genuine off-road and on-road performance.',
  },
  {
    id: 'ferrari-296-gtb',
    brand: 'Ferrari',
    name: 'Ferrari 296 GTB',
    color: 'Grey',
    category: 'Sports Car',
    engine: '3.0L V6 Hybrid',
    year: 2023,
    seats: 2,
    transmission: 'Automatic',
    price: 2160,
    image: '/images/fleet/ferrari-296-gtb.webp',
    gallery: [
      '/images/fleet/gallery/ferrari-296-gtb-1.webp',
      '/images/fleet/gallery/ferrari-296-gtb-2.webp',
      '/images/fleet/gallery/ferrari-296-gtb-3.webp',
      '/images/fleet/gallery/ferrari-296-gtb-4.webp',
    ],
    description:
      "Ferrari's V6 hybrid berlinetta delivers 830 hp and F1-derived hybrid technology in a compact, razor-sharp package.",
  },
  {
    id: 'ferrari-roma',
    brand: 'Ferrari',
    name: 'Ferrari Roma',
    color: 'Green',
    category: 'Sports Car',
    engine: '3.9L V8 Biturbo',
    year: 2023,
    seats: 4,
    transmission: 'Automatic',
    price: 1565,
    image: '/images/fleet/ferrari-roma.jpg',
    gallery: [
      '/images/fleet/gallery/ferrari-roma-1.jpg',
      '/images/fleet/gallery/ferrari-roma-2.jpg',
      '/images/fleet/gallery/ferrari-roma-3.jpg',
      '/images/fleet/gallery/ferrari-roma-4.jpg',
    ],
    description:
      "A modern take on Ferrari's 1960s dolce vita grand tourers, effortlessly elegant with 612 hp on tap.",
  },
  {
    id: 'ferrari-roma-spider',
    brand: 'Ferrari',
    name: 'Ferrari Roma Spider',
    color: 'Black',
    category: 'Convertible',
    engine: '3.9L V8 Biturbo',
    year: 2023,
    seats: 2,
    transmission: 'Automatic',
    price: 1860,
    image: '/images/fleet/ferrari-roma-spider.jpg',
    gallery: [
      '/images/fleet/gallery/ferrari-roma-spider-1.jpg',
      '/images/fleet/gallery/ferrari-roma-spider-2.jpg',
      '/images/fleet/gallery/ferrari-roma-spider-3.jpg',
      '/images/fleet/gallery/ferrari-roma-spider-4.jpg',
    ],
    description:
      'The open-top Roma, pairing timeless Italian styling with a retractable soft-top for open-air touring.',
  },
  {
    id: 'mercedes-amg-g63',
    brand: 'Mercedes-AMG',
    name: 'Mercedes-AMG G63',
    color: 'Black',
    category: 'SUV',
    engine: '4.0L V8 Biturbo',
    year: 2023,
    seats: 5,
    transmission: 'Automatic',
    price: 1700,
    featured: true,
    image: '/images/fleet/mercedes-amg-g63.png',
    gallery: [
      '/images/fleet/gallery/mercedes-amg-g63-1.jpg',
      '/images/fleet/gallery/mercedes-amg-g63-2.jpg',
      '/images/fleet/gallery/mercedes-amg-g63-3.jpg',
      '/images/fleet/gallery/mercedes-amg-g63-4.jpg',
    ],
    description:
      'The iconic G-Wagon, reengineered by AMG with a twin-turbo V8 for unmistakable road presence.',
  },
  {
    id: 'lamborghini-huracan-evo-spyder',
    brand: 'Lamborghini',
    name: 'Lamborghini Huracán EVO Spyder',
    color: 'Blue',
    category: 'Convertible',
    engine: '5.2L V10',
    year: 2023,
    seats: 2,
    transmission: 'Automatic',
    price: 2160,
    image: '/images/fleet/lamborghini-huracan-evo-spyder.webp',
    gallery: [
      '/images/fleet/gallery/lamborghini-huracan-evo-spyder-1.jpg',
      '/images/fleet/gallery/lamborghini-huracan-evo-spyder-2.jpg',
      '/images/fleet/gallery/lamborghini-huracan-evo-spyder-3.jpg',
      '/images/fleet/gallery/lamborghini-huracan-evo-spyder-4.jpg',
    ],
    description:
      'Open-top V10 theatre — the Huracán EVO Spyder delivers naturally-aspirated drama with the roof down.',
  },
  {
    id: 'maserati-mc20',
    brand: 'Maserati',
    name: 'Maserati MC20',
    color: 'Black',
    category: 'Sports Car',
    engine: '3.0L V6 Twin-Turbo',
    year: 2023,
    seats: 2,
    transmission: 'Automatic',
    price: 1850,
    image: '/images/fleet/maserati-mc20.jpg',
    gallery: [
      '/images/fleet/gallery/maserati-mc20-1.jpg',
      '/images/fleet/gallery/maserati-mc20-2.jpg',
      '/images/fleet/gallery/maserati-mc20-3.jpg',
      '/images/fleet/gallery/maserati-mc20-4.jpg',
    ],
    description:
      "Maserati's return to true supercar form, powered by the in-house Nettuno twin-turbo V6.",
  },
  {
    id: 'mclaren-artura',
    brand: 'McLaren',
    name: 'McLaren Artura',
    color: 'Black',
    category: 'Sports Car',
    engine: '3.0L V6 Hybrid',
    year: 2024,
    seats: 2,
    transmission: 'Automatic',
    price: 2450,
    featured: true,
    image: '/images/fleet/mclaren-artura.jpg',
    gallery: [
      '/images/fleet/gallery/mclaren-artura-1.jpg',
      '/images/fleet/gallery/mclaren-artura-2.jpg',
      '/images/fleet/gallery/mclaren-artura-3.jpg',
      '/images/fleet/gallery/mclaren-artura-4.jpg',
    ],
    description:
      "McLaren's series-production hybrid supercar, combining a V6 twin-turbo with an electric motor for instant response.",
  },
  {
    id: 'porsche-macan-ev',
    brand: 'Porsche',
    name: 'Porsche Macan EV',
    color: 'Orange',
    category: 'SUV',
    engine: 'Electric Dual Motor',
    year: 2024,
    seats: 5,
    transmission: 'Automatic',
    price: 850,
    image: '/images/fleet/porsche-macan-ev.jpg',
    gallery: ['/images/fleet/gallery/porsche-macan-ev-1.jpg'],
    description:
      "Porsche's first fully-electric SUV, delivering sports-car acceleration with zero emissions.",
  },
  {
    id: 'porsche-panamera',
    brand: 'Porsche',
    name: 'Porsche Panamera',
    color: 'Green',
    category: 'Sedan',
    engine: '2.9L V6 Biturbo',
    year: 2023,
    seats: 4,
    transmission: 'Automatic',
    price: 1500,
    originalPrice: 1750,
    promoLabel: 'Midweek Deal',
    image: '/images/fleet/porsche-panamera.jpg',
    gallery: ['/images/fleet/gallery/porsche-panamera-1.jpg'],
    description:
      "A four-door sports sedan that doesn't compromise — genuine Porsche dynamics with everyday practicality.",
  },
  {
    id: 'porsche-911-turbo-s-cabriolet',
    brand: 'Porsche',
    name: 'Porsche 911 Turbo S Cabriolet',
    color: 'Silver',
    category: 'Convertible',
    engine: '3.7L Flat-6 Biturbo',
    year: 2023,
    seats: 4,
    transmission: 'Automatic',
    price: 1860,
    image: '/images/fleet/porsche-911-turbo-s-cabriolet.jpg',
    gallery: [
      '/images/fleet/gallery/porsche-911-turbo-s-cabriolet-1.jpg',
      '/images/fleet/gallery/porsche-911-turbo-s-cabriolet-2.jpg',
      '/images/fleet/gallery/porsche-911-turbo-s-cabriolet-3.jpg',
      '/images/fleet/gallery/porsche-911-turbo-s-cabriolet-4.jpg',
    ],
    description:
      'All-wheel-drive, twin-turbo, and open-top — the fastest way to experience the 911 with the roof down.',
  },
  {
    id: 'rolls-royce-cullinan',
    brand: 'Rolls-Royce',
    name: 'Rolls-Royce Cullinan Black Badge',
    color: 'Black',
    category: 'SUV',
    engine: '6.75L V12 Biturbo',
    year: 2023,
    seats: 5,
    transmission: 'Automatic',
    price: 2400,
    featured: true,
    image: '/images/fleet/rolls-royce-cullinan.jpg',
    gallery: [
      '/images/fleet/gallery/rolls-royce-cullinan-1.jpg',
      '/images/fleet/gallery/rolls-royce-cullinan-2.jpg',
      '/images/fleet/gallery/rolls-royce-cullinan-3.jpg',
      '/images/fleet/gallery/rolls-royce-cullinan-4.jpg',
    ],
    description:
      'The darker, more assertive Cullinan — a 6.75L V12 SUV built for total presence.',
  },
  {
    id: 'rolls-royce-ghost',
    brand: 'Rolls-Royce',
    name: 'Rolls-Royce Ghost',
    color: 'White',
    category: 'Sedan',
    engine: '6.75L V12 Biturbo',
    year: 2023,
    seats: 5,
    transmission: 'Automatic',
    price: 1700,
    image: '/images/fleet/rolls-royce-ghost.jpg',
    gallery: [
      '/images/fleet/gallery/rolls-royce-ghost-1.jpg',
      '/images/fleet/gallery/rolls-royce-ghost-2.jpg',
      '/images/fleet/gallery/rolls-royce-ghost-3.jpg',
      '/images/fleet/gallery/rolls-royce-ghost-4.jpg',
    ],
    description:
      'Effortless, understated luxury sedan powered by a silent, 6.75L twin-turbo V12.',
  },
  {
    id: 'range-rover-svr',
    brand: 'Land Rover',
    name: 'Range Rover SVR',
    color: 'Black',
    category: 'SUV',
    engine: '5.0L V8 Supercharged',
    year: 2022,
    seats: 5,
    transmission: 'Automatic',
    price: 820,
    originalPrice: 950,
    promoLabel: 'Off-Peak Offer',
    image: '/images/fleet/range-rover-svr.jpg',
    gallery: [
      '/images/fleet/gallery/range-rover-svr-1.jpg',
      '/images/fleet/gallery/range-rover-svr-2.jpg',
      '/images/fleet/gallery/range-rover-svr-3.jpg',
      '/images/fleet/gallery/range-rover-svr-4.jpg',
    ],
    description:
      'A supercharged V8 Range Rover, built by Special Vehicle Operations for serious performance.',
  },
  {
    id: 'mercedes-benz-s580',
    brand: 'Mercedes-Benz',
    name: 'Mercedes-Benz S580',
    color: 'White',
    category: 'Sedan',
    engine: '4.0L V8 Biturbo',
    year: 2023,
    seats: 5,
    transmission: 'Automatic',
    price: 590,
    image: '/images/fleet/mercedes-benz-s580.jpg',
    gallery: [
      '/images/fleet/gallery/mercedes-benz-s580-1.jpg',
      '/images/fleet/gallery/mercedes-benz-s580-2.jpg',
      '/images/fleet/gallery/mercedes-benz-s580-3.jpg',
      '/images/fleet/gallery/mercedes-benz-s580-4.jpg',
    ],
    description:
      'The benchmark luxury sedan, chauffeur-grade comfort paired with a potent twin-turbo V8.',
  },
  {
    id: 'lamborghini-urus',
    brand: 'Lamborghini',
    name: 'Lamborghini Urus',
    color: 'Grey',
    category: 'SUV',
    engine: '4.0L V8 Biturbo',
    year: 2023,
    seats: 5,
    transmission: 'Automatic',
    price: 2250,
    image: '/images/fleet/lamborghini-urus.webp',
    gallery: [
      '/images/fleet/gallery/lamborghini-urus-1.jpg',
      '/images/fleet/gallery/lamborghini-urus-2.jpg',
      '/images/fleet/gallery/lamborghini-urus-3.jpg',
      '/images/fleet/gallery/lamborghini-urus-4.jpg',
    ],
    description:
      'The super SUV that started it all — Lamborghini performance with room for the whole family.',
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

export type RentalPlan = {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
};

export const rentalPlans: RentalPlan[] = [
  {
    id: 'daily',
    name: 'Daily rental',
    description: 'The most popular choice for tourists, special occasions, photoshoots, and one-day experiences. All models available.',
    price: 4500,
    unit: '/ day',
  },
  {
    id: 'weekend',
    name: 'Weekend rental',
    description: 'Two to three days to explore Dubai and beyond at your pace. Ideal for combining city driving with a day trip to Abu Dhabi or Ras Al Khaimah.',
    price: 12000,
    unit: '/ weekend',
  },
  {
    id: 'weekly',
    name: 'Weekly rental',
    description: 'Better value per day for guests on extended stays, covering a full week of premium mobility across the UAE.',
    price: 28000,
    unit: '/ week',
  },
  {
    id: 'monthly',
    name: 'Monthly rental',
    description: 'Our long lease options are the best daily value available, designed for residents, relocating professionals, and corporate clients who want consistent access to a luxury rent a car in Dubai without a long-term commitment.',
    price: 90000,
    unit: '/ month',
  },
];

export type MembershipPerk = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const membershipPerks: MembershipPerk[] = [
  {
    id: 'special-discounts',
    title: 'Special Discounts',
    description: 'Save up to 20% on our standard daily rates on select models.',
    icon: 'Percent',
  },
  {
    id: 'no-deposit',
    title: 'No Deposit Required',
    description: 'Skip credit card authorization blocks entirely.',
    icon: 'ShieldCheck',
  },
  {
    id: 'birthday-free-rent',
    title: 'Birthday Free Rent',
    description: 'Enjoy a complimentary drive on your special day.',
    icon: 'Gift',
  },
  {
    id: 'free-delivery',
    title: 'Free UAE-Wide Delivery',
    description: 'Doorstep dropoff and pickup anywhere in Dubai or Abu Dhabi.',
    icon: 'Truck',
  },
];

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: 'security-deposit',
    question: 'Is a security deposit required?',
    answer:
      'For general rentals, we hold a standard deposit via credit card pre-authorization. However, our Premium members enjoy completely deposit-free bookings.',
  },
  {
    id: 'extend-rental',
    question: 'Can I extend my rental return date?',
    answer:
      'Yes, easily. Contact your dedicated concierge manager via WhatsApp at least 4 hours prior to your scheduled return to arrange an extension.',
  },
  {
    id: 'reserve-specific-car',
    question: 'How do I reserve a specific car?',
    answer:
      'Simply click Book Now, choose your dates, or message us directly on WhatsApp. We guarantee the exact model, year, and color selected.',
  },
  {
    id: 'exceed-mileage',
    question: 'What if I exceed the mileage limit?',
    answer:
      'The rental car is only allowed a maximum of 250 kilometres of driving per day. The additional miles driven will be charged at the end of the rental period, depending on the type of vehicle.',
  },
  {
    id: 'insurance-policies',
    question: 'What kinds of insurance policies do you have?',
    answer:
      'When you hire a car from us, you have an option to choose an insurance coverage called CDW. CDW (Collision Damage Waiver) covers you from any damage to the rental cars in a collision. We recommend that you add this to your rental.',
  },
  {
    id: 'smoking-permitted',
    question: 'Is smoking permitted in rental cars?',
    answer:
      'Smoking inside the car is not allowed; if you smoke inside the vehicle, we will charge 1000 AED in addition to the rental payment, which will be used to clean the smell of the tobacco inside the car.',
  },
];

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
