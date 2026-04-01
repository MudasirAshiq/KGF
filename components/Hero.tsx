import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/forestfog/1920/1080"
          alt="Kashmir Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="text-emerald-400 font-bold tracking-widest text-sm uppercase mb-4">
            Sustainable Bio-Energy
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8">
            Clean Energy from <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-600">
              Kashmir's Heart
            </span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
            We transform local wood waste into high-efficiency fuel, driving a circular economy that preserves our forests and powers our future.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() => scrollToSection('model')}
              className="px-8 py-4 bg-emerald-600 text-white rounded-full text-lg font-semibold hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2"
            >
              Explore Our Model
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-stone-500 text-stone-300 rounded-full text-lg font-semibold hover:bg-stone-800 hover:text-white transition-all flex items-center justify-center"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-400 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;