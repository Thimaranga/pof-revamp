import Image from 'next/image';
import { brands } from '@/lib/data';

export function BrandMarquee() {
  const track = [...brands, ...brands];

  return (
    <div id="brands" role="region" aria-label="Brands we carry" className="min-w-0 border-y border-[var(--border-subtle)] bg-[var(--bg-surface)] py-8 dark:bg-[#575757]">
      <div className="no-scrollbar overflow-hidden">
        <ul className="flex w-max animate-marquee items-center gap-16 px-8">
          {track.map((brand, i) => (
            <li
              key={`${brand.slug}-${i}`}
              className="relative h-12 w-32 shrink-0 select-none transition-opacity hover:opacity-100"
            >
              <Image
                src={`/images/brands/${brand.slug}.svg`}
                alt={`${brand.name} logo`}
                fill
                sizes="115px"
                className="object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
