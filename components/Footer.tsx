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
            <div className="flex gap-4">
              <a href="https://wa.me/919015312345" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" title="WhatsApp Us">
                <svg size={20} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
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
              <li><a href="https://wa.me/919015312345" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-emerald-400 transition-colors flex items-center gap-2">
                <MessageCircle size={14} className="text-emerald-500" /> +91 90153 12345
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Kashmir Green Fuel. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center justify-center md:justify-end gap-2">
             <p className="text-white">Designed by</p>
             <a 
               href="https://www.quantafons.in/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center gap-1.5 px-2 py-1 bg-stone-800/50 rounded-lg hover:bg-stone-800 transition-colors cursor-pointer group/q"
             >
               <img 
                 src="/quantafons_logo.jpg" 
                 alt="QuantaFons" 
                 className="h-5 w-auto rounded-sm group-hover/q:scale-105 transition-transform"
               />
               <span className="font-bold text-stone-300 tracking-tight">QuantaFons</span>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;