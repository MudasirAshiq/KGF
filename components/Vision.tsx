import React from 'react';
import { motion } from 'framer-motion';
import { Vision as VisionType } from '../types';

interface Props {
  data: VisionType;
}

const Vision: React.FC<Props> = ({ data }) => {
  return (
    <section id="vision" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-700 font-bold tracking-widest text-xs uppercase mb-4 block">
              Our Vision
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">
              {data.headline}
            </h2>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="relative"
          >
            <div className="absolute -left-8 -top-8 text-9xl text-stone-200 font-serif opacity-50 select-none">"</div>
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light relative z-10">
              {data.content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;