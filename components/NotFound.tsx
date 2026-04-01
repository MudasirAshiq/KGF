import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 text-center px-6 pt-20">
      <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
        <Leaf size={40} />
      </div>
      <h1 className="text-8xl font-serif text-stone-900 mb-2 font-bold opacity-20">404</h1>
      <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">Page Not Found</h2>
      <p className="text-xl text-stone-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/30"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;