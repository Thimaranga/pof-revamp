'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fleetInventory } from '@/lib/data';

const AED = new Intl.NumberFormat('en-US');
const featuredCars = fleetInventory.filter((car) => car.featured);

export function FeaturedFleet() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      setPageCount(Math.max(1, Math.round(el.scrollWidth / el.clientWidth)));
      setPage(Math.round(el.scrollLeft / el.clientWidth));
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const goToPage = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <section
      id="fleet"
      className="flex min-h-[calc(100vh-5rem)] scroll-mt-20 snap-start flex-col justify-center bg-[var(--bg-surface)] py-20 sm:py-24"
    >
      <div className="mx-auto w-full min-w-0 max-w-content px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            Featured Fleet
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)] sm:text-base">
            Choose from our curated collection of pristine luxury vehicles.
          </p>
        </div>

        {/* Horizontally scrollable row; snaps per page, browsable via the arrows below */}
        <div
          ref={scrollerRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 sm:mt-12"
        >
          {featuredCars.map((car) => (
            <article
              key={car.id}
              className="w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-sm transition-shadow hover:shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <Link href={`/fleet/${car.id}`} className="block">
                <div className="relative h-[180px] w-full">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-5">
                <Link href={`/fleet/${car.id}`} className="block">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gold">
                    {car.brand}
                  </p>
                  <h3 className="mt-1 font-display text-base font-bold text-[var(--text-primary)] transition-colors hover:text-gold">
                    {car.name}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">
                    {car.engine} &middot; {car.year} &middot; {car.seats} Seats
                  </p>
                  <p className="mt-3 text-lg font-bold text-[var(--text-primary)]">
                    AED {AED.format(car.price)}
                    <span className="text-xs font-normal text-[var(--text-secondary)]"> /day</span>
                  </p>
                </Link>
                <Link
                  href={`/fleet/${car.id}`}
                  className="mt-4 block rounded-full bg-ink py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-black dark:bg-white dark:text-ink dark:hover:bg-white/90"
                >
                  Book Now
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Prev/next + page dots; only shown once the cards overflow into multiple pages */}
        {pageCount > 1 && (
          <div className="mt-6 flex items-center justify-between sm:mt-8">
            <button
              type="button"
              onClick={() => goToPage(Math.max(0, page - 1))}
              disabled={page === 0}
              aria-label="Previous vehicles"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  aria-current={i === page}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === page ? 'bg-gold' : 'bg-[var(--border-subtle)]'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goToPage(Math.min(pageCount - 1, page + 1))}
              disabled={page === pageCount - 1}
              aria-label="Next vehicles"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
