import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { SnapchatIcon, TikTokIcon } from '@/components/icons';

const ELITE_BRANDS = ['Rolls-Royce', 'Ferrari', 'Porsche', 'Lamborghini', 'Bentley'];

const QUICK_LINKS = [
  { label: 'Brands', href: '/#brands' },
  { label: 'FAQs', href: '/#faq' },
  { label: 'Membership', href: '/#membership' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact Us', href: '/#contact' },
];

const OFFICE_HOURS = [
  { label: 'Monday – Saturday', value: '8:00 AM – 6:00 PM' },
  { label: 'Sunday', value: 'Closed' },
];

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
      className={`scroll-mt-20 bg-ink text-cream ${snap ? 'snap-start' : ''}`}
    >
      <div className="mx-auto max-w-content px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* contact */}
          <div>
            <Image
              src="/images/pof-logo.webp"
              alt="POF Rental"
              width={85}
              height={38}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-cream/70">
              Pupil of Fate Motors division, providing the ultimate luxury car
              hire experiences across the United Arab Emirates.
            </p>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="tel:+971549957255"
                  className="inline-flex items-center gap-2.5 text-sm text-cream/90 transition-colors hover:text-gold"
                >
                  <Phone size={16} className="shrink-0 text-gold" />
                  +971 54 995 7255
                </a>
              </li>
              <li>
                <a
                  href="mailto:info.rental@pupiloffate.ae"
                  className="inline-flex items-center gap-2.5 text-sm text-cream/90 transition-colors hover:text-gold"
                >
                  <Mail size={16} className="shrink-0 text-gold" />
                  info.rental@pupiloffate.ae
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-cream/90">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>Pupil of Fate Showroom, Sheikh Zayed Road, Al Quoz 1, Dubai, UAE</span>
              </li>
            </ul>
          </div>

          {/* Elite Brands */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">
              Elite Brands
            </h3>
            <ul className="mt-4 space-y-2.5">
              {ELITE_BRANDS.map((brand) => (
                <li key={brand} className="text-sm text-cream/80">
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links — desktop/tablet only */}
          <div className="hidden sm:block">
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Hours + Follow Us */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">
              Office Hours
            </h3>
            <ul className="mt-4 space-y-2">
              {OFFICE_HOURS.map(({ label, value }) => (
                <li key={label} className="text-sm text-cream/80">
                  {label}: {value}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-gold">
              Follow Us
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-cream/10 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-cream/60">
            &copy; {new Date().getFullYear()} POF Rental. All rights reserved. Pupil of Fate Motors.
          </p>
          <p className="text-xs text-cream/60">Privacy Policy · Terms &amp; Conditions</p>
        </div>
      </div>
    </footer>
  );
}
