import React from 'react';
import { motion } from 'framer-motion';
import { PolicyItem } from '../types';
import { FileText } from 'lucide-react';

interface Props {
  items: PolicyItem[];
}

const Policy: React.FC<Props> = ({ items }) => {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-full pointer-events-none">
        <div className="w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-2 block">
            Government Initiatives
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Bioenergy Policy in J&K</h2>
          <p className="text-stone-400">
            KGF aligns with the region's strategic roadmap for a sustainable, self-reliant energy future.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-stone-800 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-[17px] md:-translate-x-1/2 w-8 h-8 rounded-full bg-stone-900 border-2 border-emerald-500 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </div>

                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 p-6 rounded-2xl hover:bg-stone-800 transition-colors">
                    <span className="text-emerald-400 font-bold text-sm tracking-widest mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;