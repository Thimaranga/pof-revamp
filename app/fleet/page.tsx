import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FleetBrowser } from '@/components/fleet-browser';

export const metadata: Metadata = {
  title: 'Our Fleet — POF Rental',
  description:
    'Browse and filter our full collection of exotic and luxury rental cars in Dubai.',
};

export default function FleetPage() {
  return (
    <main>
      <Navbar />

      <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-cream)] py-14 sm:py-16">
        <div className="mx-auto max-w-content px-5 text-center sm:px-8 lg:px-10">
          <h1 className="font-display text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
            Our Fleet
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--text-secondary)] sm:text-base">
            Browse and filter our full collection of exotic and luxury vehicles &mdash;
            every car is owned and maintained in-house.
          </p>
        </div>
      </section>

      <section className="bg-[var(--bg-surface)] py-12 sm:py-16">
        <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-10">
          <FleetBrowser />
        </div>
      </section>

      <Footer />
    </main>
  );
}
