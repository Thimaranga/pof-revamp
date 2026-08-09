import {
  ShieldCheck,
  ReceiptText,
  CreditCard,
  PlaneLanding,
  Headset,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { benefits } from '@/lib/data';

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  ReceiptText,
  CreditCard,
  PlaneLanding,
  Headset,
  Zap,
};

export function WhyChooseUs() {
  return (
    <section id="about" className="bg-[var(--bg-cream)] py-20 sm:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            Why Choose Pupil of Fate
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)] sm:text-base">
            Redefining luxury vehicle rental through personalized excellence.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = ICONS[benefit.icon];
            return (
              <div
                key={benefit.id}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15">
                  <Icon size={22} strokeWidth={2} className="text-gold" />
                </div>
                <h3 className="mt-5 font-display text-sm font-bold text-[var(--text-primary)]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
