'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { fleetInventory } from '@/lib/data';
import { buildCarBookingMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

const AED = new Intl.NumberFormat('en-US');
const PER_PAGE = 8;

export function FleetBrowser() {
  const brandOptions = useMemo(
    () => ['All', ...Array.from(new Set(fleetInventory.map((car) => car.brand)))],
    [],
  );

  const [search, setSearch] = useState('');
  const [brand, setBrand] = useState('All');
  const [page, setPage] = useState(0);

  const results = useMemo(() => {
    const query = search.trim().toLowerCase();
    return fleetInventory.filter((car) => {
      const matchesQuery =
        !query ||
        car.name.toLowerCase().includes(query) ||
        car.brand.toLowerCase().includes(query);
      return matchesQuery && (brand === 'All' || car.brand === brand);
    });
  }, [search, brand]);

  const pageCount = Math.max(1, Math.ceil(results.length / PER_PAGE));

  // Keep the current page in range whenever the filtered result set shrinks or grows.
  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const pagedResults = results.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div>
      {/* Search */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto flex w-full max-w-2xl items-center gap-2 rounded-full bg-[var(--bg-surface)] p-1.5 pl-4 shadow-sm ring-1 ring-[var(--border-subtle)] sm:gap-3"
      >
        <Search size={18} className="shrink-0 text-[var(--text-secondary)]" />
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0);
          }}
          placeholder="Search by brand or model..."
          aria-label="Search the fleet"
          className="w-full min-w-0 bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] dark:bg-white dark:text-ink sm:px-6"
        >
          Search
        </button>
      </form>

      {/* Brand filter pills */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {brandOptions.map((b) => (
          <button
            key={b}
            type="button"
            onClick={() => {
              setBrand(b);
              setPage(0);
            }}
            aria-pressed={brand === b}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              brand === b
                ? 'border-gold bg-gold text-ink'
                : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-gold hover:text-[var(--text-primary)]'
            }`}
          >
            {b === 'All' ? 'All' : b}
          </button>
        ))}
      </div>

      {results.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="font-display text-lg font-bold text-[var(--text-primary)]">
            No vehicles match your filters
          </p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            {search
              ? `No results for "${search}". Try a different search or brand.`
              : 'Try a different brand.'}
          </p>
        </div>
      ) : (
        <>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pagedResults.map((car) => {
              const whatsappUrl = buildWhatsAppUrl(
                buildCarBookingMessage(car.name, car.color),
              );

              return (
                <article
                  key={car.id}
                  className="overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-sm transition-shadow hover:shadow-lg"
                >
                  <Link href={`/fleet/${car.id}`} className="block">
                    <div className="relative h-[180px] w-full">
                      <Image
                        src={car.image}
                        alt={`${car.name} in ${car.color}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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

                      {car.originalPrice ? (
                        <div className="mt-3">
                          <p className="text-lg font-bold text-[var(--text-primary)]">
                            AED {AED.format(car.price)}
                            <span className="text-xs font-normal text-[var(--text-secondary)]">
                              {' '}
                              /day
                            </span>
                          </p>
                          <p className="text-xs text-[var(--text-secondary)] line-through">
                            AED {AED.format(car.originalPrice)} /day
                          </p>
                        </div>
                      ) : (
                        <p className="mt-3 text-lg font-bold text-[var(--text-primary)]">
                          AED {AED.format(car.price)}
                          <span className="text-xs font-normal text-[var(--text-secondary)]">
                            {' '}
                            /day
                          </span>
                        </p>
                      )}
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block rounded-full bg-ink py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-black dark:bg-white dark:text-ink dark:hover:bg-white/90"
                    >
                      Book Now
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Prev/next + page dots */}
          {pageCount > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                aria-label="Previous page"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-40"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPage(i)}
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
                onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
                disabled={page === pageCount - 1}
                aria-label="Next page"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-40"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
