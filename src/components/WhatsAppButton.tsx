import { openWhatsApp } from '@/utils/whatsapp';
import { siteConfig } from '@/config/siteConfig';

export default function WhatsAppButton() {
  return (
    <button
      onClick={() => openWhatsApp(siteConfig.whatsappMessages.general)}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#22c55e] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:scale-110 animate-pulse-glow cursor-pointer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
      </svg>
    </button>
  );
}
