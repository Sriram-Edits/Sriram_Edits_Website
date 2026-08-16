import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import type { Project } from '@/data/projects';
import { fadeUp } from '@/utils/animations';

interface PortfolioCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function PortfolioCard({
  project,
  index,
  onSelect,
}: PortfolioCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      custom={index}
      className="group cursor-pointer"
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      aria-label={`View project: ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[9/16] bg-bg-card rounded-sm overflow-hidden border border-border group-hover:border-accent/30 transition-all duration-500">
        {project.thumbnail ? (
          <img
            src={`${import.meta.env.BASE_URL}${project.thumbnail.replace(/^\//, '')}`}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          /* Placeholder */
          <div className="w-full h-full bg-gradient-to-br from-bg-card via-bg-secondary to-bg-card flex items-center justify-center relative">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
              }}
            />
            <div className="text-center relative z-10">
              <p className="text-6xl font-extrabold text-accent/10">
                {project.number}
              </p>
            </div>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <Play size={22} className="text-accent ml-0.5" fill="currentColor" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] tracking-[0.2em] uppercase text-accent bg-bg/70 backdrop-blur-sm px-3 py-1 rounded-sm border border-accent/20">
            {project.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4">
        <p className="text-xs text-text-secondary tracking-[0.1em] uppercase mb-1">
          <span className="text-accent">{project.number}</span> —{' '}
          {project.category}
        </p>
        <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary mt-1">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
