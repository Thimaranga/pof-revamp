'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { fleetInventory, type FleetCategory } from '@/lib/data';
import { buildCarBookingMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

const AED = new Intl.NumberFormat('en-US');

const CATEGORIES: Array<'All' | FleetCategory> = [
  'All',
  'Sports Car',
  'SUV',
  'Sedan',
  'Convertible',
];

type SortKey = 'featured' | 'price-asc' | 'price-desc';

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

export function FleetBrowser() {
  const brandOptions = useMemo(
    () => ['All', ...Array.from(new Set(fleetInventory.map((car) => car.brand)))],
    [],
  );

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<'All' | FleetCategory>('All');
  const [brand, setBrand] = useState('All');
  const [sort, setSort] = useState<SortKey>('featured');

  const results = useMemo(() => {
    const query = search.trim().toLowerCase();
    const filtered = fleetInventory.filter((car) => {
      const matchesQuery =
        !query ||
        car.name.toLowerCase().includes(query) ||
        car.brand.toLowerCase().includes(query) ||
        car.color.toLowerCase().includes(query) ||
        car.category.toLowerCase().includes(query);
      return (
        matchesQuery &&
        (category === 'All' || car.category === category) &&
        (brand === 'All' || car.brand === brand)
      );
    });
    if (sort === 'price-asc') return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [search, category, brand, sort]);

  return (
    <div>
      {/* Search */}
      <div className="relative mx-auto mb-6 max-w-md">
        <Search
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by brand, model, or color"
          aria-label="Search the fleet"
          className="w-full rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] py-3 pl-11 pr-11 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-1 focus:ring-gold"
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch('')}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-[var(--text-secondary)] transition-colors hover:bg-cream hover:text-[var(--text-primary)] dark:hover:bg-white/10"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Filter bar */}
      <div className="flex flex-col gap-5 border-b border-[var(--border-subtle)] pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                category === c
                  ? 'border-ink bg-ink text-white dark:border-white dark:bg-white dark:text-ink'
                  : 'border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-ink hover:text-[var(--text-primary)] dark:hover:border-white dark:hover:text-white'
              }`}
            >
              {c === 'All' ? 'All Vehicles' : c}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            aria-label="Filter by brand"
            className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:ring-1 focus:ring-gold"
          >
            {brandOptions.map((b) => (
              <option key={b} value={b}>
                {b === 'All' ? 'All Brands' : b}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            aria-label="Sort by"
            className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:ring-1 focus:ring-gold"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-6 text-xs text-[var(--text-secondary)]">
        Showing {results.length} of {fleetInventory.length} vehicles
      </p>

      {results.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="font-display text-lg font-bold text-[var(--text-primary)]">
            No vehicles match your filters
          </p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            {search
              ? `No results for "${search}". Try a different search or filter.`
              : 'Try a different brand or category.'}
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((car) => {
            const discountPercent = car.originalPrice
              ? Math.round((1 - car.price / car.originalPrice) * 100)
              : null;
            const whatsappUrl = buildWhatsAppUrl(
              buildCarBookingMessage(car.name, car.color),
            );

            return (
              <article
                key={car.id}
                className="overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-sm transition-shadow hover:shadow-lg"
              >
                <Link href={`/fleet/${car.id}`} className="block">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={car.image}
                      alt={`${car.name} in ${car.color}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                      {car.category}
                    </span>
                    {discountPercent && (
                      <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-[11px] font-bold text-ink">
                        {discountPercent}% OFF
                      </span>
                    )}
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
                    <p className="mt-1 text-xs text-[var(--text-secondary)]">
                      {car.color} &middot; {car.transmission}
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
                        {car.promoLabel && (
                          <p className="mt-0.5 text-[11px] font-semibold text-gold">
                            {car.promoLabel}
                          </p>
                        )}
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
      )}
    </div>
  );
}
