import React from 'react';
import { Leaf, Twitter, Linkedin, Instagram, ArrowUpRight, MessageCircle, Phone, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact-footer" className="bg-stone-900 text-stone-400 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-6">
              <Leaf className="text-emerald-500" />
              <span className="text-xl font-bold tracking-tighter">KGF</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Pioneering the green energy revolution in Kashmir through sustainable biomass utilization and community empowerment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-400 transition-colors"><Twitter size={20} /></a>
              <a href="https://www.linkedin.com/in/aamir-latief-wani-2020415b/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Instagram size={20} /></a>
              <a href="https://wa.me/919015312345" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" title="WhatsApp Us">
                <svg size={20} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#vision" className="hover:text-emerald-400 transition-colors">Vision</a></li>
              <li><a href="/#products" className="hover:text-emerald-400 transition-colors">Products</a></li>
              <li><a href="/#impact" className="hover:text-emerald-400 transition-colors">Impact</a></li>
              <li><a href="/#founder" className="hover:text-emerald-400 transition-colors">Founder</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
               <li><Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
               <li><Link to="/terms-of-service" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              <li><span className="text-stone-500 cursor-default">Rajbagh, Kashmir, J&K</span></li>
              <li>
                <a href="tel:9906259906" className="text-stone-500 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <PhoneCall size={14} className="text-emerald-500" /> +91 99062 59906
                </a>
              </li>
              <li>
                <a href="tel:01942313200" className="text-stone-500 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Phone size={14} className="text-emerald-500" /> 0194-2313200
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-stone-800 border border-stone-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="bg-emerald-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2">
                Subscribe <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Kashmir Green Fuel. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Sustainability.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;