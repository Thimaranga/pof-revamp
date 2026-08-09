import Image from 'next/image';
import { brands } from '@/lib/data';

export function BrandMarquee() {
  // Duplicate the list so the track can loop seamlessly at -50%
  const track = [...brands, ...brands];

  return (
    <section id="brands" aria-label="Brands we carry" className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)] py-8">
      <div className="no-scrollbar overflow-hidden">
        <ul className="flex w-max animate-marquee items-center gap-16 px-8">
          {track.map((brand, i) => (
            <li
              key={`${brand.slug}-${i}`}
              className="relative h-8 w-28 shrink-0 select-none opacity-70 grayscale transition-opacity hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={`/images/brands/${brand.slug}.svg`}
                alt={`${brand.name} logo`}
                fill
                sizes="112px"
                className="object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
