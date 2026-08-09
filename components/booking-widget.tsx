'use client';

import { useState } from 'react';
import { WhatsAppIcon } from '@/components/icons';
import { WHATSAPP_DISPLAY, buildCarBookingMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

export function BookingWidget({ carName, color }: { carName: string; color: string }) {
  const [pickup, setPickup] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const whatsappUrl = buildWhatsAppUrl(
    buildCarBookingMessage(carName, color, { pickup, returnDate }),
  );

  return (
    <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 shadow-sm">
      <h3 className="font-display text-base font-bold text-[var(--text-primary)]">
        Book this car
      </h3>
      <p className="mt-1 text-xs text-[var(--text-secondary)]">
        No upfront authorization hold for Elite Members
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
          Pickup Date
          <input
            type="date"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-sm normal-case text-[var(--text-primary)] focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
          Return Date
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-sm normal-case text-[var(--text-primary)] focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </label>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <WhatsAppIcon size={18} />
        Book via WhatsApp
      </a>

      <p className="mt-3 text-center text-xs text-[var(--text-secondary)]">
        Or call{' '}
        <a href="tel:+971549957255" className="font-medium text-gold hover:underline">
          {WHATSAPP_DISPLAY}
        </a>
      </p>
      <p className="mt-2 text-center text-xs text-[var(--text-secondary)]">
        Free delivery to any location in Dubai, VIP Terminals, or luxury hotels.
      </p>
    </div>
  );
}
