export function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left lg:px-10">
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-lg font-extrabold tracking-tight text-[var(--text-primary)]">
            POF
          </span>
          <span className="font-display text-[10px] font-semibold tracking-[0.15em] text-gold">
            RENTAL
          </span>
        </div>
        <p className="text-xs text-[var(--text-secondary)]">
          &copy; {new Date().getFullYear()} POF Rental, Dubai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
