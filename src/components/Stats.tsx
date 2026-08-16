import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';
import { fadeUp } from '@/utils/animations';

export default function Stats() {
  return (
    <section className="py-16 md:py-20 border-t border-b border-border">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {siteConfig.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
              className="text-center md:text-left"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-accent mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-text-secondary tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
