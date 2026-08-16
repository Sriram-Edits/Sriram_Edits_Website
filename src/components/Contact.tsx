import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Mail, MapPin } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { siteConfig } from '@/config/siteConfig';
import { openWhatsApp, getWhatsAppUrl } from '@/utils/whatsapp';
import { fadeUp } from '@/utils/animations';

const contactItems = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    onClick: () => openWhatsApp(siteConfig.whatsappMessages.general),
    href: undefined as string | undefined,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@sriram.edit_6376',
    onClick: undefined as (() => void) | undefined,
    href: siteConfig.instagramUrl,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    onClick: undefined as (() => void) | undefined,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: siteConfig.location,
    onClick: undefined as (() => void) | undefined,
    href: undefined as string | undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-secondary">
      <div className="container-main">
        <SectionLabel number="07" text="Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
            >
              Let's Create
              <br />
              <span className="text-accent">Something.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={2}
              className="text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-md"
            >
              Have a project in mind? We'd love to hear about it. Reach out
              through WhatsApp for the fastest response.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={3}
            >
              <a
                href={getWhatsAppUrl(siteConfig.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                Start A Conversation
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right — Contact Items */}
          <div className="flex flex-col gap-0">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-30px' }}
                  custom={i}
                  className="flex items-center gap-5 p-5 border-b border-border hover:bg-bg-card transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-accent-dim flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary tracking-[0.1em] uppercase mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium group-hover:text-accent transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              );

              if (item.onClick) {
                return (
                  <button
                    key={item.label}
                    onClick={item.onClick}
                    className="text-left cursor-pointer"
                  >
                    {content}
                  </button>
                );
              }
              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                );
              }
              return <div key={item.label}>{content}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
