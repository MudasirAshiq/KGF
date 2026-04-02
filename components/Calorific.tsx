import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { CalorificItem } from '../types';

interface Props {
  data: CalorificItem[];
}

const Calorific: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-stone-600">Loading energy data...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-2 block">
              Energy Efficiency
            </span>
            <h2 className="text-4xl font-serif text-stone-900 mb-6">
              Understanding <br/>Calorific Value
            </h2>
            <p className="text-stone-600 text-lg mb-6 leading-relaxed">
              Why choose pellets? While coal burns hot, it pollutes. Firewood is inefficient and destroys forests.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              KGF Pellets offer the perfect balance: <strong>High calorific value</strong> (clean heat), <strong>low ash content</strong>, and <strong>zero net carbon emissions</strong>. It's the smart choice for Kashmir's winters.
            </p>
          </motion.div>
        </div>

        <div className="lg:w-1/2 w-full">
          <h3 className="text-center text-sm font-bold text-stone-400 uppercase tracking-wider mb-8">Calorific Value (kcal/kg)</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%" minWidth={0}>
              <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={100} tick={{fill: '#57534e', fontSize: 14}} tickLine={false} axisLine={false}/>
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar dataKey="value" barSize={40} radius={[0, 10, 10, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calorific;