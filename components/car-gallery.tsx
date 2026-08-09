'use client';

import { useState } from 'react';
import Image from 'next/image';

export function CarGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] sm:h-[420px] lg:h-[460px]">
        <Image
          src={images[active]}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show photo ${i + 1} of ${images.length}`}
            aria-pressed={active === i}
            className={`relative h-20 overflow-hidden rounded-xl border-2 transition-colors sm:h-24 ${
              active === i
                ? 'border-gold'
                : 'border-transparent opacity-80 hover:opacity-100'
            }`}
          >
            <Image src={src} alt="" fill sizes="150px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
