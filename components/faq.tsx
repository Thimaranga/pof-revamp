import { faqs } from '@/lib/data';

export function Faq() {
  return (
    <section
      id="faq"
      className="flex min-h-[calc(100vh-5rem)] scroll-mt-20 snap-start flex-col justify-center bg-[var(--bg-cream)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            Got Questions? We&rsquo;ve Got Answers
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)] sm:text-base">
            Everything you need to know about renting a supercar in Dubai.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6"
            >
              <h3 className="font-display text-sm font-bold text-[var(--text-primary)]">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
