import Image from 'next/image';
import { fleetCars } from '@/lib/data';

const AED = new Intl.NumberFormat('en-US');

export function FeaturedFleet() {
  return (
    <section
      id="fleet"
      className="flex min-h-[calc(100vh-5rem)] scroll-mt-20 snap-start flex-col justify-center bg-[var(--bg-surface)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-gold sm:text-3xl">
            Featured Fleet
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)] sm:text-base">
            Choose from our curated collection of pristine luxury vehicles.
          </p>
        </div>

        {/* Horizontally scrollable row; snaps per card on touch devices */}
        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:mt-12">
          {fleetCars.map((car) => (
            <article
              key={car.id}
              className="w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-sm transition-shadow hover:shadow-lg sm:w-[300px]"
            >
              <div className="relative h-[180px] w-full">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 640px) 280px, 300px"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gold">
                  {car.brand}
                </p>
                <h3 className="mt-1 font-display text-base font-bold text-[var(--text-primary)]">
                  {car.name}
                </h3>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">{car.specs}</p>
                <p className="mt-3 text-lg font-bold text-[var(--text-primary)]">
                  AED {AED.format(car.price)}
                  <span className="text-xs font-normal text-[var(--text-secondary)]"> /day</span>
                </p>
                <a
                  href="#book"
                  className="mt-4 block rounded-full bg-ink py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-black dark:bg-white dark:text-ink dark:hover:bg-white/90"
                >
                  Book Now
                </a>
              </div>
            </article>
          ))}

          {/* Placeholder CTA card in the 5th slot; add a 5th car to
              fleetCars in lib/data.ts to replace it with a real listing. */}
          <a
            href="/fleet"
            className="flex w-[280px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[var(--border-subtle)] p-6 text-center transition-colors hover:bg-cream dark:hover:bg-white/5 sm:w-[300px]"
          >
            <span className="font-display text-base font-bold text-[var(--text-primary)]">
              View Full Fleet
            </span>
            <span className="text-xs text-[var(--text-secondary)]">
              20+ more exotic &amp; luxury vehicles
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
