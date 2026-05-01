import React from 'react';
import { Leaf, Twitter, Linkedin, Instagram, ArrowUpRight, MessageCircle, Phone, Smartphone } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Need a slight delay to allow the home page to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contact-footer" className="bg-stone-900 text-stone-400 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-6">
              <img 
                src="/KASHMIR GREEN FUEL.png" 
                alt="KGF Logo" 
                className="w-[180px] md:w-[230px] h-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Pioneering the green energy revolution in Kashmir through sustainable biomass utilization and community empowerment.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => handleNavClick('vision')} className="hover:text-emerald-400 transition-colors">Vision</button></li>
              <li><button onClick={() => handleNavClick('products')} className="hover:text-emerald-400 transition-colors">Products</button></li>
              <li><button onClick={() => handleNavClick('stats')} className="hover:text-emerald-400 transition-colors">Impact</button></li>
              <li><button onClick={() => handleNavClick('founder')} className="hover:text-emerald-400 transition-colors">Founder</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
               <li><Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
               <li><Link to="/terms-of-service" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              <li><span className="text-stone-500 cursor-default">Rajbagh, Kashmir, J&K</span></li>
              <li><a href="tel:+919906259906" className="text-stone-500 hover:text-emerald-400 transition-colors flex items-center gap-2">
                <Smartphone size={14} className="text-emerald-500" /> +91 99062 59906
              </a></li>
              <li><a href="tel:01942313200" className="text-stone-500 hover:text-emerald-400 transition-colors flex items-center gap-2">
                <Phone size={14} className="text-emerald-500" /> 0194-2313200
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Kashmir Green Fuel. All rights reserved.</p>
          <div className="mt-8 md:mt-0 flex items-center justify-center md:justify-end gap-3 group/credits">
            <span className="text-stone-500 font-medium text-xs tracking-wide">DESIGNED BY</span>
            <div className="flex items-center gap-2.5 px-4 py-2 bg-stone-800/40 border border-stone-700/50 rounded-full hover:bg-stone-800/80 hover:border-orange-500/50 transition-all duration-300 group/badge cursor-pointer">
              <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center transform group-hover/badge:rotate-[15deg] transition-transform duration-300">
                <span className="text-white font-bold text-xs leading-none tracking-tighter">{'<>'}</span>
              </div>
              <span className="font-bold text-sm tracking-wider">
                <span className="text-stone-400 group-hover/badge:text-white transition-colors duration-300">Code</span>
                <span className="text-orange-500">FONS</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;