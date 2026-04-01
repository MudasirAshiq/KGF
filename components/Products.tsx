import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { Package, CheckCircle2, X } from 'lucide-react';

interface Props {
  products: Product[];
}

const Products: React.FC<Props> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-24 bg-stone-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mt-2">Sustainable Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl p-8 shadow-xl shadow-stone-200/50 border border-stone-100 flex flex-col hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-stone-100 rounded-xl flex items-center justify-center text-stone-800 mb-6 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                <Package size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-stone-800 mb-3">{product.title}</h3>
              <p className="text-stone-500 mb-8 flex-grow line-clamp-3">{product.description}</p>
              
              <ul className="space-y-3 mb-8">
                {product.features.slice(0, 2).map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-stone-600">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {feature}
                  </li>
                ))}
                {product.features.length > 2 && (
                   <li className="text-xs text-stone-400 pl-7 italic">+ {product.features.length - 2} more features</li>
                )}
              </ul>
              
              <div className="mt-auto pt-6 border-t border-stone-100">
                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-3 rounded-lg border border-emerald-600 text-emerald-700 font-medium hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 max-w-lg w-full shadow-2xl relative z-10 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
               <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Package size={32} />
              </div>

              <h3 className="text-3xl font-serif text-stone-900 mb-4">{selectedProduct.title}</h3>
              <div className="h-1 w-20 bg-emerald-500 mb-6"></div>
              
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                {selectedProduct.description}
              </p>
              
              <div className="bg-stone-50 rounded-2xl p-6 mb-8">
                <h4 className="font-bold text-stone-900 mb-4 uppercase text-sm tracking-wider flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  Product Features
                </h4>
                <ul className="space-y-4">
                  {selectedProduct.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => setSelectedProduct(null)}
                className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
              >
                Close Details
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;