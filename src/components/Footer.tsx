import { Instagram, Mail } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border py-16 md:py-20">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-xl font-bold tracking-tight inline-block mb-3"
            >
              <span className="text-text-primary">
                {siteConfig.brandFirst}
              </span>
              <span className="text-accent">
                {siteConfig.brandSeparator}
                {siteConfig.brandSecond}
              </span>
            </a>
            <p className="text-sm text-text-secondary max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-text-secondary mb-4 font-medium">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-text-secondary mb-4 font-medium">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-sm border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-sm border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-sm border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                {/* WhatsApp icon */}
                <svg
                  width="18"
                  height="18"
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
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © {siteConfig.footerYear} {siteConfig.brandName}. All Rights
            Reserved.
          </p>
          <p className="text-xs text-text-muted">
            Crafted with passion & precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
