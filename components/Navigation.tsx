import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vision', id: 'vision' },
    { name: 'Model', id: 'model' },
    { name: 'Products', id: 'products' },
    { name: 'Impact', id: 'stats' },
    { name: 'Founder', id: 'founder' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
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
    setIsOpen(false);
  };

  const isHome = location.pathname === '/';
  const isOtherPage = !isHome;

  const navClasses = scrolled || isOtherPage
    ? 'bg-stone-900/95 backdrop-blur-md py-3 shadow-lg' 
    : 'bg-transparent py-5';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${navClasses}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => scrollToSection('top')} className="relative h-12 w-[180px] md:w-[230px] group cursor-pointer">
          <img 
            src="/KASHMIR GREEN FUEL.png" 
            alt="Kashmir Green Fuel Logo" 
            className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-auto object-contain transition-transform group-hover:scale-105"
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-emerald-400 cursor-pointer ${
                scrolled || isOtherPage ? 'text-stone-300' : 'text-stone-100'
              }`}
            >
              {link.name}
            </button>
          ))}
          
          <button
            onClick={() => scrollToSection('model')}
            className="px-6 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
          >
            Explore Model
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-stone-900 border-t border-stone-800 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-stone-300 hover:text-emerald-400 text-lg font-medium text-left w-full"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;