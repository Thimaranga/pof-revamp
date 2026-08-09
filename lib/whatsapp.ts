export const WHATSAPP_NUMBER = '971549957255';
export const WHATSAPP_DISPLAY = '+971 54 995 7255';

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildCarBookingMessage(
  carName: string,
  color: string,
  dates?: { pickup?: string; returnDate?: string },
) {
  let message = `Hi! I'd like to book the ${carName} (${color}) for a rental.`;
  if (dates?.pickup) message += ` Pickup: ${dates.pickup}.`;
  if (dates?.returnDate) message += ` Return: ${dates.returnDate}.`;
  message += ' Please share availability and pricing.';
  return message;
}
