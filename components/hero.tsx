'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

const SLIDES = [
  // { src: '/images/hero-1.webp', alt: 'Luxury vehicle from our Dubai fleet, slide 1' },
  { src: '/images/hero-2.webp', alt: 'Luxury vehicle from our Dubai fleet, slide 2' },
  { src: '/images/hero-6.webp', alt: 'Luxury vehicle from our Dubai fleet, slide 6' },
  // { src: '/images/hero-4.webp', alt: 'Luxury vehicle from our Dubai fleet, slide 4' },
  // { src: '/images/hero-5.webp', alt: 'Luxury vehicle from our Dubai fleet, slide 5' },
];

const SLIDE_INTERVAL_MS = 10000;

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[560px] w-full sm:h-[620px] lg:h-[685px]">
        {SLIDES.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            loading={i === 0 ? undefined : 'eager'}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        <div className="relative mx-auto flex h-full max-w-content flex-col justify-center px-5 sm:px-8 lg:px-10">
          <div className="max-w-xl">
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Drive the Extraordinary
            </h1>
            <p className="mt-4 max-w-md text-sm text-white/85 sm:text-base">
              Dubai&rsquo;s premier collection of exotic and luxury vehicles &mdash;
              delivered to your door.
            </p>

            <form className="mt-8 flex w-full max-w-md items-center gap-2 rounded-full bg-white p-1.5 pl-4 shadow-lg sm:gap-3">
              <Search size={18} className="shrink-0 text-neutral-400" />
              <input
                type="text"
                placeholder="Search by brand or model"
                className="w-full min-w-0 bg-transparent text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] sm:px-6"
              >
                Explore
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
