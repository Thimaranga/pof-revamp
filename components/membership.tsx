import { Trophy, Percent, ShieldCheck, Gift, Truck, type LucideIcon } from 'lucide-react';
import { membershipPerks } from '@/lib/data';
import { buildInquiryMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

const ICONS: Record<string, LucideIcon> = {
  Percent,
  ShieldCheck,
  Gift,
  Truck,
};

export function Membership() {
  const whatsappUrl = buildWhatsAppUrl(
    buildInquiryMessage('the Pupil of Fate Elite Club membership'),
  );

  return (
    <section
      id="membership"
      className="flex min-h-[calc(100vh-5rem)] scroll-mt-20 snap-start flex-col justify-center bg-[var(--bg-surface)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15">
            <Trophy size={24} strokeWidth={2} className="text-gold" />
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            No Deposit Required for Members
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[var(--text-secondary)] sm:text-base">
            Join the Pupil of Fate Elite Club. Enjoy absolute freedom driving exotics across
            Dubai with no credit card authorization holds.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {membershipPerks.map((perk) => {
            const Icon = ICONS[perk.icon];
            return (
              <div
                key={perk.id}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-cream)] p-6"
              >
                <Icon size={20} strokeWidth={2} className="text-gold" />
                <h3 className="mt-4 font-display text-sm font-bold text-[var(--text-primary)]">
                  {perk.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-left">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Become a Member
          </a>
        </div>
      </div>
    </section>
  );
}
