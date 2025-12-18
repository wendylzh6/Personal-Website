import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants.ts';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Projects', path: '/school' },
    { name: 'Interests', path: '/interests' },
    { name: 'Efficiency', path: '/ai-resources' },
  ];

  const headerClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
    isScrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-stone-100 py-4' : 'bg-transparent py-6'
  }`;

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Name / Logo */}
        <NavLink to="/" className="text-xl tracking-tighter font-display font-bold text-stone-900 hover:opacity-70 transition-opacity z-50 uppercase">
          Wendy Liu
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs uppercase tracking-widest font-bold transition-colors duration-300 ${
                  isActive ? 'text-stone-900 border-b-2 border-stone-900 pb-1' : 'text-stone-400 hover:text-stone-900'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="flex items-center gap-5 ml-4 border-l border-stone-200 pl-8">
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-900 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-stone-400 hover:text-stone-900 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-stone-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-out md:hidden ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-3xl font-display font-extrabold uppercase tracking-tighter ${isActive ? 'text-stone-900' : 'text-stone-300'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="flex gap-8 mt-12 pt-8 border-t border-stone-100">
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-900 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-stone-400 hover:text-stone-900 transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;