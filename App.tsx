import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import WorkSection from './pages/Work.tsx';
import SchoolSection from './pages/School.tsx';
import ImpactSection from './pages/AIEfficiency.tsx';
import InterestsSection from './pages/Interests.tsx';
import { CONTACT_INFO } from './constants.ts';
import { Linkedin, Mail } from 'lucide-react';

const App: React.FC = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-stone-50">
      <Header />
      <main className="flex-grow">

        {/* Hero */}
        <section id="home" className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-14 border-b border-stone-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Left: photo + name */}
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-stone-100 shadow-sm shrink-0">
                <img src="/headshot.jpg" alt="Wendy Liu" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tighter text-stone-900 leading-tight">
                  Wendy Liu
                </h1>
              </div>
            </div>

            {/* Right: bio + CTAs */}
            <div>
              <p className="text-sm md:text-base text-stone-500 leading-relaxed mb-6">
                I'm a growth marketer who likes figuring out what makes people pay attention, take action, and ultimately buy. My experience spans digital strategy, e-commerce, partnerships, and growth — especially drawn to fast-moving environments where I can test ideas, talk to customers, and turn insights into results.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToWork}
                  className="bg-stone-900 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-stone-700 transition-colors duration-200"
                >
                  View My Work
                </button>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-stone-400 hover:text-stone-900 transition-colors text-sm font-medium"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-1.5 text-stone-400 hover:text-stone-900 transition-colors text-sm font-medium"
                >
                  <Mail size={15} /> {CONTACT_INFO.email}
                </a>
              </div>
            </div>

          </div>
        </section>

        <ImpactSection />
        <WorkSection />
        <SchoolSection />
        <InterestsSection />

      </main>
      <Footer />
    </div>
  );
};

export default App;
