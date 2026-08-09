import type { Metadata } from 'next';
import Image from 'next/image';
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

      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt="Luxury car arriving at a Dubai residence"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35" />

        <div className="relative mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Our Fleet
          </h1>
          <p className="mt-3 max-w-xl text-sm text-white/85 sm:text-base">
            Browse and reserve from Dubai&rsquo;s most exclusive collection of
            direct-owned exotic supercars, elite SUVs, and prestigious grand
            tourers.
          </p>
        </div>
      </section>

      <section className="bg-[var(--bg-cream)] py-12 sm:py-16">
        <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-10">
          <FleetBrowser />
        </div>
      </section>

      <Footer />
    </main>
  );
}
