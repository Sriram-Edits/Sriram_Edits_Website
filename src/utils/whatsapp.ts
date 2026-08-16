import { siteConfig } from '@/config/siteConfig';

/**
 * Opens WhatsApp with a pre-filled message.
 * Uses the official click-to-chat URL format.
 */
export function openWhatsApp(message?: string): void {
  const msg = message || siteConfig.whatsappMessages.general;
  const encoded = encodeURIComponent(msg);
  const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Returns a WhatsApp click-to-chat URL.
 */
export function getWhatsAppUrl(message?: string): string {
  const msg = message || siteConfig.whatsappMessages.general;
  const encoded = encodeURIComponent(msg);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
