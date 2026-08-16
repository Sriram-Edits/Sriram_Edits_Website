import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from './SectionLabel';
import PortfolioCard from './PortfolioCard';
import VideoModal from './VideoModal';
import { projects, categories } from '@/data/projects';
import type { Project, ProjectCategory } from '@/data/projects';
import { fadeUp } from '@/utils/animations';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <>
      <section id="work" className="py-24 md:py-32">
        <div className="container-main">
          <SectionLabel number="03" text="Portfolio" />

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={1}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-12"
          >
            Selected <span className="text-accent">Work.</span>
          </motion.h2>

          {/* Filters */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={2}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs tracking-[0.1em] uppercase px-4 py-2 rounded-sm border transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-accent text-bg border-accent font-semibold'
                    : 'bg-transparent text-text-secondary border-border hover:border-border-hover hover:text-text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, i) => (
                <PortfolioCard
                  key={project.id}
                  project={project}
                  index={i}
                  onSelect={setSelectedProject}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <p className="text-text-secondary text-center py-16">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
