import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Work from './pages/Work.tsx';
import School from './pages/School.tsx';
import Interests from './pages/Interests.tsx';
import AIEfficiency from './pages/AIEfficiency.tsx';
import { SECTIONS } from './constants.ts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-stone-50">
      <Header />
      <main className="flex-grow">
        <section id={SECTIONS[0].id} className="scroll-mt-24">
          <AIEfficiency />
        </section>
        <section id={SECTIONS[1].id} className="scroll-mt-24">
          <School />
        </section>
        <section id={SECTIONS[2].id} className="scroll-mt-24">
          <Work />
        </section>
        <section id={SECTIONS[3].id} className="scroll-mt-24">
          <Interests />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
