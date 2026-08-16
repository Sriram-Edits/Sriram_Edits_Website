import { motion } from 'framer-motion';

const tools = [
  { name: "DaVinci Resolve", icon: "/DaVinci_Resolve_Studio.png" },
  { name: "Premiere Pro", icon: "/premiere-pro.png" },
  { name: "CapCut", icon: "/65e77f639d1a5-CapCut.png" },
];

export default function ToolsMarquee() {
  return (
    <section className="w-full py-16 bg-bg border-y border-border flex justify-center z-10">
      <div className="container-main flex flex-col items-center">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-text-muted mb-10 text-center">
          Tools Used
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {tools.map((tool, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]"
            >
              <img src={`${import.meta.env.BASE_URL}${tool.icon.replace(/^\//, '')}`} alt={tool.name} loading="lazy" className="h-8 w-8 md:h-10 md:w-10 object-contain drop-shadow-md" />
              <span className="text-sm md:text-base font-bold uppercase tracking-[0.15em] text-text-primary">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
