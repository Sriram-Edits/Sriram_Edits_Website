import { motion } from 'framer-motion';
import { openWhatsApp } from '@/utils/whatsapp';
import { siteConfig } from '@/config/siteConfig';
import { fadeUp } from '@/utils/animations';

export default function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[120px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
        }}
      />

      <div className="container-main relative z-10 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
        >
          Have A Story
          <br />
          <span className="text-accent">To Tell?</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={1}
          className="text-text-secondary text-base md:text-lg max-w-lg mx-auto mb-10"
        >
          Let's turn your idea into something worth watching.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={2}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={() =>
              openWhatsApp(siteConfig.whatsappMessages.cta)
            }
            className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-bg font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5 text-sm cursor-pointer"
          >
            Start A Project
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
          <button
            onClick={() =>
              openWhatsApp(siteConfig.whatsappMessages.general)
            }
            className="group inline-flex items-center justify-center gap-2 border border-border hover:border-border-hover text-text-primary font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5 text-sm cursor-pointer"
          >
            WhatsApp Us
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
