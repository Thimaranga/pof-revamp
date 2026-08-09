import Image from 'next/image';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative isolate h-full min-w-0 overflow-hidden">
      <Image
        src="/images/mobile-hero-1.webp"
        alt="Silver Rolls-Royce parked at a luxury Dubai residence"
        fill
        priority
        sizes="100vw"
        className="object-cover sm:hidden"
      />
      <Image
        src="/images/hero-6.webp"
        alt="Silver Rolls-Royce parked at a luxury Dubai residence"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover sm:block"
      />
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
  );
}
