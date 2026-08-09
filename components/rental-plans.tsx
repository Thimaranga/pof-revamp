import { rentalPlans } from '@/lib/data';

const AED = new Intl.NumberFormat('en-US');

export function RentalPlans() {
  return (
    <section
      id="plans"
      className="flex min-h-[calc(100vh-5rem)] scroll-mt-20 snap-start flex-col justify-center bg-[var(--bg-cream)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            Tailored Rental Plans
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)] sm:text-base">
            Flexible options matching the tempo of your Dubai itinerary.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {rentalPlans.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8"
            >
              <h3 className="font-display text-base font-bold text-[var(--text-primary)]">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {plan.description}
              </p>
              <div className="mt-auto border-t border-[var(--border-subtle)] pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)]">
                  Starting from
                </p>
                <p className="mt-1.5 text-xl font-bold text-gold">
                  AED {AED.format(plan.price)}
                  <span className="text-xs font-normal text-[var(--text-secondary)]">
                    {' '}
                    {plan.unit}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
