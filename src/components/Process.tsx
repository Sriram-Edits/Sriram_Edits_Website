import { motion } from 'framer-motion';
import { Search, FileText, Camera, Film } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { fadeUp } from '@/utils/animations';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the story, goals and audience.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Develop the concept, shots and production plan.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Create',
    description: 'Capture and produce the footage.',
    icon: Camera,
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Edit, color grade and deliver the final film.',
    icon: Film,
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="container-main">
        <SectionLabel number="04" text="How We Work" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={1}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-16"
        >
          From Idea To <span className="text-accent">Final Frame.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                custom={i}
                className="relative group"
              >
                <div className="bg-bg-card border border-border rounded-sm p-8 h-full hover:border-accent/30 transition-all duration-500">
                  {/* Number */}
                  <p className="text-sm font-bold text-accent mb-6">
                    {step.number}
                  </p>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-sm bg-accent-dim flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-500">
                    <Icon size={20} className="text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-border" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
