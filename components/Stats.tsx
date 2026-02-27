import React from 'react';
import { motion } from 'framer-motion';
import { Stat } from '../types';

interface Props {
  stats: Stat[];
}

const Stats: React.FC<Props> = ({ stats }) => {
  return (
    <section id="stats" className="py-20 bg-stone-900 text-white border-y border-stone-800">
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(stats.length, 4)} gap-8 divide-y md:divide-y-0 divide-stone-800`}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="py-8 md:py-0 px-4 text-center border-stone-800 lg:border-r last:border-r-0"
            >
              <div className="text-5xl md:text-6xl font-serif text-emerald-400 font-bold mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-stone-400 uppercase tracking-widest text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-stone-400 italic">
            "Every ton of wood waste we process prevents methane emissions and reduces the reliance on traditional coal heating in the valley."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;