import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CarGallery } from '@/components/car-gallery';
import { BookingWidget } from '@/components/booking-widget';
import { fleetInventory } from '@/lib/data';

const AED = new Intl.NumberFormat('en-US');

export function generateStaticParams() {
  return fleetInventory.map((car) => ({ id: car.id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const car = fleetInventory.find((c) => c.id === params.id);
  if (!car) return {};
  return {
    title: `${car.name} — ${car.color} | POF Rental`,
    description: car.description,
  };
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = fleetInventory.find((c) => c.id === params.id);
  if (!car) notFound();

  const gallery = [car.image, ...car.gallery];
  const discountPercent = car.originalPrice
    ? Math.round((1 - car.price / car.originalPrice) * 100)
    : null;

  const related = fleetInventory
    .filter((c) => c.id !== car.id && (c.brand === car.brand || c.category === car.category))
    .slice(0, 3);

  return (
    <main>
      <Navbar />

      <section className="bg-[var(--bg-surface)] py-8 sm:py-12">
        <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-10">
          <Link
            href="/fleet"
            className="inline-flex items-center gap-1 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            <ChevronLeft size={16} />
            Back to Fleet
          </Link>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
            {/* Gallery */}
            <CarGallery images={gallery} alt={`${car.name} in ${car.color}`} />

            {/* Info panel */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">
                {car.brand} &middot; {car.category}
              </p>
              <h1 className="mt-1 font-display text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
                {car.name}
              </h1>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {car.color} &middot; {car.year}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                {car.description}
              </p>

              {/* Specs */}
              <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-[var(--border-subtle)] py-5 text-sm">
                <div>
                  <dt className="text-xs text-[var(--text-secondary)]">Engine</dt>
                  <dd className="mt-0.5 font-medium text-[var(--text-primary)]">{car.engine}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[var(--text-secondary)]">Seats</dt>
                  <dd className="mt-0.5 font-medium text-[var(--text-primary)]">{car.seats}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[var(--text-secondary)]">Transmission</dt>
                  <dd className="mt-0.5 font-medium text-[var(--text-primary)]">
                    {car.transmission}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[var(--text-secondary)]">Year</dt>
                  <dd className="mt-0.5 font-medium text-[var(--text-primary)]">{car.year}</dd>
                </div>
              </dl>

              {/* Price */}
              <div className="mt-5">
                {car.originalPrice ? (
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <p className="text-2xl font-bold text-[var(--text-primary)]">
                        AED {AED.format(car.price)}
                        <span className="text-sm font-normal text-[var(--text-secondary)]">
                          {' '}
                          /day
                        </span>
                      </p>
                      <span className="rounded-full bg-gold px-2.5 py-1 text-[11px] font-bold text-ink">
                        {discountPercent}% OFF
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] line-through">
                      AED {AED.format(car.originalPrice)} /day
                    </p>
                    {car.promoLabel && (
                      <p className="mt-0.5 text-xs font-semibold text-gold">{car.promoLabel}</p>
                    )}
                  </div>
                ) : (
                  <p className="text-2xl font-bold text-[var(--text-primary)]">
                    AED {AED.format(car.price)}
                    <span className="text-sm font-normal text-[var(--text-secondary)]"> /day</span>
                  </p>
                )}
              </div>

              <div className="mt-5">
                <BookingWidget carName={car.name} color={car.color} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related vehicles */}
      {related.length > 0 && (
        <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-cream)] py-12 sm:py-16">
          <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-10">
            <h2 className="font-display text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
              You might also like
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/fleet/${r.id}`}
                  className="overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-[160px] w-full">
                    <Image
                      src={r.image}
                      alt={`${r.name} in ${r.color}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gold">
                      {r.brand}
                    </p>
                    <h3 className="mt-1 font-display text-sm font-bold text-[var(--text-primary)]">
                      {r.name}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-[var(--text-primary)]">
                      AED {AED.format(r.price)}
                      <span className="text-xs font-normal text-[var(--text-secondary)]">
                        {' '}
                        /day
                      </span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
