'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const NAV_LINKS = [
  { label: 'Fleet', href: '/fleet' },
  // { label: 'Brands', href: '/#brands' },
  { label: 'Membership', href: '/#membership' },
  { label: 'Why us', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 transform-gpu border-b border-[var(--border-subtle)] bg-[var(--nav-blur)] backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-content items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/pof-logo.webp"
            alt="POF Rental"
            width={85}
            height={38}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <a
            href="#book"
            className="hidden rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98] sm:inline-block"
          >
            Book Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? 'max-h-96' : 'max-h-0 border-t-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-[var(--text-secondary)] transition-colors hover:bg-cream hover:text-[var(--text-primary)] dark:hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex items-center justify-between gap-3 px-3">
            <span className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">
              Theme
            </span>
            <ThemeToggle />
          </li>
          <li className="mt-2 px-3">
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-gold px-6 py-2.5 text-center text-sm font-semibold text-ink"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
