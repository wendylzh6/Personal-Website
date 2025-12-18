import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 flex flex-col">
      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold leading-tight text-stone-900 mb-8">
          Strategist. Creator. <br />
          <span className="text-stone-400 font-normal">Product Mind.</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed">
          I bridge the gap between complex data and human-centric design.
        </p>
      </section>

      {/* Visual Navigation Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:min-h-[850px]">

          {/* Professional Experience */}
          <Link
            to="/work"
            className="md:col-span-8 relative group overflow-hidden rounded-sm block min-h-[400px] md:h-auto bg-stone-900"
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
              alt="Professional Experience - Minimalist Structure"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-70 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <div>
                <span className="text-white/80 uppercase tracking-widest text-xs font-semibold mb-2 block">01</span>
                <h2 className="text-white text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter shadow-sm">Professional Experience</h2>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-4 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <ArrowRight size={28} />
              </div>
            </div>
          </Link>

          {/* Sidebar Column */}
          <div className="md:col-span-4 flex flex-col gap-6">

            {/* School Projects */}
            <Link
              to="/school"
              className="relative group overflow-hidden rounded-sm flex-1 bg-stone-200 min-h-[260px]"
            >
              <img
                src="https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=800&auto=format&fit=crop"
                alt="Projects - Minimalist Geometry"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="text-stone-900/40 uppercase tracking-widest text-[10px] font-bold mb-1 block">02</span>
                <h2 className="text-stone-900 text-2xl font-display font-extrabold uppercase tracking-tighter">Projects</h2>
              </div>
            </Link>

            {/* Interests */}
            <Link
              to="/interests"
              className="relative group overflow-hidden rounded-sm flex-1 bg-stone-100 min-h-[260px]"
            >
               <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
                alt="Interests - Minimal Fitness Form"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-80"
              />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="text-stone-900/40 uppercase tracking-widest text-[10px] font-bold mb-1 block">03</span>
                <h2 className="text-stone-900 text-2xl font-display font-extrabold uppercase tracking-tighter">Interests</h2>
              </div>
            </Link>

            {/* Efficiency */}
            <Link
              to="/ai-resources"
              className="relative group overflow-hidden rounded-sm flex-1 bg-stone-900 min-h-[260px]"
            >
               <img
                src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop"
                alt="Efficiency Tech - Dark Geometric Grid"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="text-white/60 uppercase tracking-widest text-[10px] font-bold mb-1 block">04</span>
                <h2 className="text-white text-2xl font-display font-extrabold uppercase tracking-tighter shadow-sm">Efficiency</h2>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;