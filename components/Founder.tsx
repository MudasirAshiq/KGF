import React from 'react';
import { motion } from 'framer-motion';
import { Founder as FounderType } from '../types';
import { MapPin, Linkedin } from 'lucide-react';

interface Props {
  founder: FounderType;
}

const Founder: React.FC<Props> = ({ founder }) => {
  return (
    <section id="founder" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex flex-col md:flex-row items-start gap-12 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3 flex-shrink-0"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-stone-200">
                 {/* Placeholder for founder image */}
                 <img 
                   src="https://picsum.photos/seed/founder2/800/1000" 
                   alt={founder.name}
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 />
              </div>
            </motion.div>

            <div className="w-full md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                    <h3 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">{founder.role}</h3>
                    {founder.linkedin && (
                      <a 
                        href={founder.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-stone-500 hover:text-[#0077b5] transition-colors text-sm font-medium"
                      >
                        <Linkedin size={18} />
                        LinkedIn Profile
                      </a>
                    )}
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">{founder.name}</h2>
                <div className="h-1 w-20 bg-emerald-500 mb-8"></div>
                <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed mb-8 text-justify">
                  {founder.bio}
                </p>
                
                <div className="flex items-center gap-3 text-stone-500 font-medium">
                  <MapPin size={20} className="text-emerald-500" />
                  <span>{founder.address}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;