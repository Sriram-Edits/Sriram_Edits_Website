import { motion } from 'framer-motion';
import { Heart, Aperture, Lightbulb, CheckCircle } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { fadeUp } from '@/utils/animations';

const reasons = [
  {
    icon: Heart,
    title: 'Real Stories',
    description:
      'We focus on authentic moments and meaningful storytelling.',
  },
  {
    icon: Aperture,
    title: 'Cinematic Quality',
    description:
      'Professional editing, color, sound and visual direction.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Approach',
    description:
      'Every project receives a unique visual treatment.',
  },
  {
    icon: CheckCircle,
    title: 'Reliable Delivery',
    description:
      'Clear communication and professional project delivery.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-main">
        <SectionLabel number="05" text="Why Us" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={1}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-16"
        >
          Why Choose <span className="text-accent">Us.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden border border-border">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                custom={i}
                className="bg-bg-card p-8 md:p-10 group hover:bg-bg-card-hover transition-colors duration-500"
              >
                <div className="w-10 h-10 rounded-sm bg-accent-dim flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-500">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
