import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Intro from './components/Intro.tsx';
import SectionShell from './components/SectionShell.tsx';
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
        <Intro />
        <SectionShell id={SECTIONS[0].id} index={1} label={SECTIONS[0].name} tone="light">
          <AIEfficiency />
        </SectionShell>
        <SectionShell id={SECTIONS[1].id} index={2} label={SECTIONS[1].name} tone="muted">
          <School />
        </SectionShell>
        <SectionShell id={SECTIONS[2].id} index={3} label={SECTIONS[2].name} tone="light">
          <Work />
        </SectionShell>
        <SectionShell id={SECTIONS[3].id} index={4} label={SECTIONS[3].name} tone="muted">
          <Interests />
        </SectionShell>
      </main>
      <Footer />
    </div>
  );
};

export default App;
