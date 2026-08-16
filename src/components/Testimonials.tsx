import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { testimonials } from '@/data/testimonials';
import { fadeUp } from '@/utils/animations';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="container-main">
        <SectionLabel number="06" text="Testimonials" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={1}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-16"
        >
          What Clients <span className="text-accent">Say.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              custom={i}
              className="bg-bg-card border border-border rounded-sm p-8 hover:border-border-hover transition-colors duration-500 flex flex-col"
            >
              {/* Quote Icon */}
              <Quote size={24} className="text-accent/30 mb-6" />

              {/* Quote */}
              <p className="text-text-primary leading-relaxed text-sm md:text-base mb-8 flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-accent-dim flex items-center justify-center">
                    <User size={18} className="text-accent" />
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.type}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
