import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const isAdmin = location.pathname === '/admin';
  const isHome = location.pathname === '/';
  // Use dark background if not on home (pages usually have white bg, so nav needs to be distinct)
  const isOtherPage = !isHome && !isAdmin;

  const navClasses = scrolled || isAdmin || isOtherPage
    ? 'bg-stone-900/95 backdrop-blur-md py-4 shadow-lg' 
    : 'bg-transparent py-6';

  const textClasses = scrolled || isAdmin || isOtherPage
    ? 'text-white'
    : 'text-white'; // Hero has dark overlay, so white is good. But sticky needs contrast.

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${navClasses}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white group-hover:bg-emerald-400 transition-colors">
            <Leaf size={24} />
          </div>
          <span className={`text-2xl font-bold tracking-tighter ${textClasses}`}>
            KGF
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {!isAdmin && isHome && navLinks.map((link) => (
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

          {!isAdmin && !isHome && (
             <Link 
               to="/"
               className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-emerald-400 ${
                'text-stone-300'
              }`}
             >
               Home
             </Link>
          )}
          
          {isAdmin && (
            <Link to="/" className="flex items-center gap-2 text-xs text-stone-400 hover:text-white transition-colors border border-stone-600 px-3 py-1 rounded-full">
               <Leaf size={12}/>
               View Site
            </Link>
          )}

          {!isAdmin && (
            <button
              onClick={() => isHome ? scrollToSection('model') : (window.location.href = '/#/model')}
              className="px-6 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
            >
              Explore Model
            </button>
          )}
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
          {!isAdmin && isHome && navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-stone-300 hover:text-emerald-400 text-lg font-medium text-left w-full"
            >
              {link.name}
            </button>
          ))}
          {!isAdmin && !isHome && (
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-emerald-400 text-lg font-medium"
            >
              Home
            </Link>
          )}
           {isAdmin && (
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white text-sm mt-4 flex items-center gap-2"
            >
              Back to Site
            </Link>
           )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;