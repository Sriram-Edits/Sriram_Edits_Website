import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingPlans } from '@/data/pricing';
import SectionLabel from './SectionLabel';
import { fadeUp, staggerContainer } from '@/utils/animations';


const formatPrice = (price: string) => {
  return price.split(/(₹)/g).map((part, index) => {
    if (part === '₹') {
      return (
        <span key={index} className="text-[0.65em] font-bold opacity-80 mr-0.5 relative -top-[0.1em]">
          ₹
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0A0A0A] text-white">
      <div className="container-main">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Choose your <br className="hidden md:block" />
            <span className="text-accent">editing plan.</span>
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="text-lg text-gray-400"
          >
            Flexible pricing for individual reels and monthly content requirements.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              className={`relative flex flex-col p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted 
                  ? 'border-accent bg-[#111111]' 
                  : 'border-white/10 bg-[#111111] hover:border-white/20'
              }`}
            >
              {/* Plan Label */}
              <div className="mb-6">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">
                  {plan.label}
                </span>
              </div>

              {/* Title & Price */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`font-black tracking-tight whitespace-nowrap ${
                    plan.price.length > 8 ? 'text-3xl lg:text-4xl' : 'text-4xl lg:text-5xl'
                  }`}>
                    {formatPrice(plan.price)}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-500 font-medium">
                  {plan.priceSuffix}
                </div>
              </div>

              {/* Features */}
              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="w-5 h-5 shrink-0 text-accent" strokeWidth={3} />
                      <span className="pt-0.5">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`w-full text-center py-4 px-6 rounded-full font-bold text-sm transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-accent text-black opacity-90 hover:opacity-100 hover:bg-accent-hover'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
