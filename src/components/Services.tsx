import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import { services } from '@/data/services';
import { fadeUp } from '@/utils/animations';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-bg-secondary">
      <div className="container-main">
        <SectionLabel number="02" text="What We Do" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={1}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-16"
        >
          Our <span className="text-accent">Services.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                custom={i}
                className="group relative bg-bg-card border border-border rounded-sm p-8 hover:border-accent/30 transition-all duration-500 hover:bg-bg-card-hover"
              >
                {/* Number */}
                <p className="text-sm font-bold text-accent mb-4">
                  {service.number}
                </p>

                {/* Icon */}
                <div className="w-10 h-10 rounded-sm bg-accent-dim flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-500">
                  <Icon size={20} className="text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
