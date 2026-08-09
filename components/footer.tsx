import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { SnapchatIcon, TikTokIcon } from '@/components/icons';

const LOCATIONS = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ras Al Khaimah'];

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/pof.rental', Icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/pof.rental/', Icon: Instagram },
  { label: 'TikTok', href: 'https://www.tiktok.com/@pof.rental', Icon: TikTokIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/pof-rental/', Icon: Linkedin },
  { label: 'YouTube', href: 'https://www.youtube.com/@pof.rental', Icon: Youtube },
  { label: 'Snapchat', href: 'https://www.snapchat.com/add/pof.rental', Icon: SnapchatIcon },
];

export function Footer({ snap = false }: { snap?: boolean }) {
  return (
    <footer
      id="contact"
      className={`scroll-mt-20 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] ${
        snap ? 'snap-start' : ''
      }`}
    >
      <div className="mx-auto max-w-content px-5 py-12 text-center sm:px-8 sm:py-14 sm:text-left lg:px-10">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex justify-center sm:justify-start">
              <Image
                src="/images/pof-logo.webp"
                alt="POF Rental"
                width={85}
                height={38}
                className="h-9 w-auto"
              />
            </div>
            <p className="mt-3 text-sm text-[var(--text-secondary)] sm:max-w-xs">
              Dubai&rsquo;s premier collection of exotic and luxury vehicles &mdash;
              delivered to your door.
            </p>

            <div className="mt-5 flex justify-center gap-2.5 sm:justify-start">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)]">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+971549957255"
                  className="inline-flex items-center gap-2.5 text-sm text-[var(--text-primary)] transition-colors hover:text-gold"
                >
                  <Phone size={16} className="shrink-0 text-gold" />
                  +971 54 995 7255
                </a>
              </li>
              <li>
                <a
                  href="mailto:info.rental@pupiloffate.ae"
                  className="inline-flex items-center gap-2.5 text-sm text-[var(--text-primary)] transition-colors hover:text-gold"
                >
                  <Mail size={16} className="shrink-0 text-gold" />
                  info.rental@pupiloffate.ae
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)]">
              Locations
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-1">
              {LOCATIONS.map((city) => (
                <li
                  key={city}
                  className="inline-flex items-center justify-center gap-2 text-sm text-[var(--text-primary)] sm:justify-start"
                >
                  <MapPin size={16} className="shrink-0 text-gold" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border-subtle)] pt-6">
          <p className="text-xs text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} POF Rental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
