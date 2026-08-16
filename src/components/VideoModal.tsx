import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Project } from '@/data/projects';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [project, handleEsc]);

  const isYouTube = (url: string) =>
    url.includes('youtube.com') || url.includes('youtu.be');
  const isVimeo = (url: string) => url.includes('vimeo.com');

  const getEmbedUrl = (url: string): string | null => {
    if (isYouTube(url)) {
      const match = url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/
      );
      return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : null;
    }
    if (isVimeo(url)) {
      const match = url.match(/vimeo\.com\/(\d+)/);
      return match ? `https://player.vimeo.com/video/${match[1]}?autoplay=1` : null;
    }
    return null;
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Video: ${project.title}`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              aria-label="Close video modal"
            >
              <X size={28} />
            </button>

            {/* Video */}
            <div className="relative aspect-[9/16] bg-bg-card rounded-sm overflow-hidden border border-border">
              {project.videoUrl ? (
                (() => {
                  const embedUrl = getEmbedUrl(project.videoUrl);
                  if (embedUrl) {
                    return (
                      <iframe
                        src={embedUrl}
                        title={project.title}
                        className="w-full h-full"
                        loading="lazy"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    );
                  }
                  return (
                    <video
                      src={project.videoUrl}
                      controls
                      className="w-full h-full object-cover"
                      poster={project.thumbnail || undefined}
                    />
                  );
                })()
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-accent border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                  </div>
                  <p className="text-text-secondary text-sm">
                    Video not yet added
                  </p>
                  <p className="text-text-muted text-xs">
                    Add a video URL to the project data
                  </p>
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="mt-4 flex flex-col items-center text-center gap-2">
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-accent">
                  {project.number} — {project.category}
                </p>
                <h3 className="text-xl font-bold mt-1">{project.title}</h3>
              </div>
              <p className="text-sm text-text-secondary max-w-sm mx-auto">
                {project.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
