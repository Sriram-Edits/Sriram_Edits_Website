import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/animations';

interface SectionLabelProps {
  number: string;
  text: string;
}

export default function SectionLabel({ number, text }: SectionLabelProps) {
  return (
    <motion.p
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="text-xs font-medium tracking-[0.25em] uppercase text-text-secondary mb-6"
    >
      <span className="text-accent">{number}</span>
      <span className="mx-2">—</span>
      {text}
    </motion.p>
  );
}
