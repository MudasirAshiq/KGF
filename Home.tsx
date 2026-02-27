import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Model from './components/Model';
import Products from './components/Products';
import Stats from './components/Stats';
import Policy from './components/Policy';
import Calorific from './components/Calorific';
import Founder from './components/Founder';
import Contact from './components/Contact';
import { getData } from './services/dataService';
import { AppData } from './types';
import { Loader2 } from 'lucide-react';

const Home: React.FC = () => {
  const [data, setData] = useState<AppData | null>(null);

  useEffect(() => {
    getData().then(setData);
  }, []);

  if (!data) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-stone-100 text-emerald-600">
        <Loader2 className="animate-spin" size={48} />
      </div>
    );
  }

  return (
    <main>
      <Hero />
      <Vision data={data.vision} />
      <Model steps={data.modelSteps} />
      <Products products={data.products} />
      <Stats stats={data.stats} />
      <Policy items={data.policy} />
      <Calorific data={data.calorificData} />
      <Founder founder={data.founder} />
      <Contact 
        email={data.contactEmail} 
        address={data.contactAddress} 
      />
    </main>
  );
};

export default Home;