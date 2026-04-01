import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Factory, Flame, Users, ArrowRight, HelpCircle } from 'lucide-react';
import { ModelStep } from '../types';

interface Props {
  steps: ModelStep[];
}

const iconMap: Record<string, React.ReactNode> = {
  Recycle: <Recycle size={32} />,
  Factory: <Factory size={32} />,
  Flame: <Flame size={32} />,
  Users: <Users size={32} />,
};

const Model: React.FC<Props> = ({ steps }) => {
  return (
    <section id="model" className="py-24 bg-emerald-950 text-white relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="w-96 h-96 bg-emerald-500 rounded-full blur-3xl absolute -top-20 -right-20"></div>
          <div className="w-96 h-96 bg-stone-100 rounded-full blur-3xl absolute -bottom-20 -left-20"></div>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Our Circular Economy Model</h2>
          <p className="text-emerald-200/80 max-w-2xl mx-auto">
            We close the loop on waste, turning a local environmental hazard into a valuable energy resource.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {iconMap[step.iconName] || <HelpCircle size={32} />}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-stone-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
              
              {/* Connector Arrow (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-1/2 z-20 text-emerald-500/50">
                  <ArrowRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Model;