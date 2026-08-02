import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail } from 'lucide-react';
import { CONTACT_INFO, SECTIONS } from '../constants.ts';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
    setActiveSection(id);
  };

  const scrollToTop = (event: React.MouseEvent) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', window.location.pathname);
  };

  // Honour a deep link such as /#work on first load
  useEffect(() => {
    const id = window.location.hash.replace('#', '');
    if (!id) return;
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ block: 'start' });
  }, []);

  const headerClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
    isScrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-stone-100 py-4' : 'bg-white/70 backdrop-blur-sm py-6'
  }`;

  return (
    <>
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Name / Logo */}
        <a
          href="#"
          onClick={scrollToTop}
          className="text-xl tracking-tighter font-display font-bold text-stone-900 hover:opacity-70 transition-opacity z-50 uppercase"
        >
          Wendy Liu
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => scrollToSection(e, section.id)}
              className={`text-xs uppercase tracking-widest font-bold transition-colors duration-300 ${
                activeSection === section.id
                  ? 'text-stone-900 border-b-2 border-stone-900 pb-1'
                  : 'text-stone-400 hover:text-stone-900'
              }`}
            >
              {section.name}
            </a>
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
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </header>

      {/* Mobile Nav Overlay — sibling of <header> so `fixed` resolves against the
          viewport rather than the backdrop-filtered header */}
        <div
          className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-out md:hidden ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => scrollToSection(e, section.id)}
              className={`text-3xl font-display font-extrabold uppercase tracking-tighter ${
                activeSection === section.id ? 'text-stone-900' : 'text-stone-300'
              }`}
            >
              {section.name}
            </a>
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
    </>
  );
};

export default Header;
