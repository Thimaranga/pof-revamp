import Image from 'next/image';
import { buildInquiryMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

export function Chauffeur() {
  const whatsappUrl = buildWhatsAppUrl(buildInquiryMessage('the VIP chauffeur service'));

  return (
    <section
      id="chauffeur"
      className="flex min-h-[calc(100vh-5rem)] scroll-mt-20 snap-start flex-col justify-center bg-[var(--bg-surface)] py-20 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[var(--bg-cream)] lg:aspect-square">
          {/* Swap in a real chauffeur + car photo at public/images/chauffeur.jpg */}
          <Image
            src="/images/chauffeur.png"
            alt="Professional chauffeur standing beside a luxury car in Dubai"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">
            VIP Chauffeur Services
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-[var(--text-primary)] sm:text-3xl">
            Your Personal Chauffeur, On Demand
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            Whether you require seamless airport transit, executive travel for high-profile
            business meetings, or a bespoke sightseeing journey through Dubai, our professional
            bilingual chauffeurs guarantee immaculate presentation and absolute punctuality.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-ink px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-black dark:bg-white dark:text-ink dark:hover:bg-white/90"
          >
            Book A Chauffeur
          </a>
        </div>
      </div>
    </section>
  );
}
