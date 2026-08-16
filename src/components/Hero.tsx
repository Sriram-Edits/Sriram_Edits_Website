import { motion } from 'framer-motion';
import { openWhatsApp } from '@/utils/whatsapp';
import { siteConfig } from '@/config/siteConfig';
import { fadeUp, slideInRight } from '@/utils/animations';

export default function Hero() {
  const scrollToWork = () => {
    const el = document.querySelector('#work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* 
        ✅ TO ADD A BACKGROUND VIDEO LOOP:
        1. Place your MP4 file in /public/ (e.g. /public/bg-video.mp4)
        2. Change the bgVideo variable below from "" to "/bg-video.mp4"
      */}
      {(() => {
        const bgVideo = '/bg.mp4'; // ← Points to public/bg.mp4
        if (bgVideo) {
          return (
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                disableRemotePlayback
                className="w-full h-full object-cover opacity-60"
              >
                <source src={`${import.meta.env.BASE_URL}${bgVideo.replace(/^\//, '')}`} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/60 to-bg" />
            </div>
          );
        }
        return null;
      })()}

      {/* Background Glow */}
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[100px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
        }}
      />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-accent-dim border border-accent/20 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-accent">
                Video Editor & Production
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tighter mb-6"
            >
              We Turn
              <br />
              <span className="text-accent">Moments</span> Into
              <br />
              Stories.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-base md:text-lg text-text-secondary leading-relaxed max-w-lg mb-10"
            >
              We create cinematic visuals, engaging social content and powerful
              stories for brands, creators and people who want their moments to
              stand out.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToWork}
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg font-semibold px-7 py-3.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 text-sm cursor-pointer"
              >
                View Our Work
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
              <button
                onClick={() =>
                  openWhatsApp(siteConfig.whatsappMessages.hero)
                }
                className="group inline-flex items-center gap-2 border border-border hover:border-border-hover text-text-primary font-semibold px-7 py-3.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 text-sm cursor-pointer"
              >
                Let's Talk
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right — Editor Photo */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative max-w-sm mx-auto lg:ml-auto lg:mr-0 w-full"
          >
            <div className="relative aspect-square rounded-full overflow-hidden border border-border bg-bg-card group">
              {/* 
                ✅ TO ADD YOUR PHOTO:
                1. Place your image in /public/images/ (e.g. /public/images/editor.jpg)
                2. Change the src below from "" to "/images/editor.jpg"
              */}
              {(() => {
                const editorPhoto = '/image.jpeg'; // ← Points to public/image.jpeg
                if (editorPhoto) {
                  return (
                    <img
                      src={`${import.meta.env.BASE_URL}${editorPhoto.replace(/^\//, '')}`}
                      alt="Videographer portrait"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  );
                }
                return (
                  <div className="absolute inset-0 bg-gradient-to-br from-bg-card via-bg-secondary to-bg flex items-center justify-center">
                    {/* Subtle grid */}
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                      }}
                    />
                    {/* Placeholder icon */}
                    <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
                      <div className="w-24 h-24 rounded-full border-2 border-accent/20 flex items-center justify-center bg-accent/5">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent/50">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <p className="text-xs tracking-[0.15em] uppercase text-text-muted">
                        Add your photo
                      </p>
                    </div>
                    {/* Subtle glow */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
                  </div>
                );
              })()}

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-bg/20 to-transparent pointer-events-none" />
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
