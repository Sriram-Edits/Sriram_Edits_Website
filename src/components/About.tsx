import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import { fadeUp, slideInRight } from '@/utils/animations';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-main">
        <SectionLabel number="01" text="About" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-8"
            >
              Creativity Meets
              <br />
              <span className="text-accent">Precision.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={2}
              className="text-text-secondary leading-relaxed text-base md:text-lg mb-6"
            >
              Great video isn't just about recording footage. It's about
              capturing emotion, creating atmosphere and telling a story people
              remember.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={3}
              className="text-text-secondary leading-relaxed text-base md:text-lg mb-6"
            >
              We combine technical expertise with creative vision to produce
              films that are polished, impactful and unforgettable. Every
              project is treated as a unique story that deserves attention to
              detail and cinematic quality.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={4}
              className="text-text-secondary leading-relaxed text-base md:text-lg"
            >
              From weddings to brand films, from events to social campaigns —
              we approach every shoot with the same commitment to visual
              excellence.
            </motion.p>
          </div>

          {/* Right Card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="flex items-start"
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-2xl border border-white/10 rounded-2xl p-8 md:p-12 w-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] group hover:border-white/20 transition-all duration-700">
              {/* Subtle background glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -z-10 group-hover:bg-accent/20 transition-colors duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-px w-8 bg-accent shadow-[0_0_8px_rgba(var(--color-accent),0.8)]" />
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white/95">
                    Our Approach
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base ml-12">
                  Every project begins with understanding the story, audience and
                  emotion behind the footage. We listen before we shoot, plan
                  before we edit, and always deliver with purpose.
                </p>

                <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="flex items-center gap-4 mb-5">
                  <div className="h-px w-8 bg-accent shadow-[0_0_8px_rgba(var(--color-accent),0.8)]" />
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white/95">
                    Our Promise
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base ml-12">
                  A final product you're genuinely proud to share. No generic
                  templates, no rushed edits — just thoughtful, cinematic work
                  that represents your vision.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
