import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Work from './pages/Work.tsx';
import School from './pages/School.tsx';
import Interests from './pages/Interests.tsx';
import AIEfficiency from './pages/AIEfficiency.tsx';

// ScrollToTop component to handle scroll restoration
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-stone-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/*" element={<Work />} />
            <Route path="/school" element={<School />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/ai-resources" element={<AIEfficiency />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;