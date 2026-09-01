import React from 'react';
import { SCHOOL_PROJECTS } from '../constants.ts';
import { FileText, ArrowUpRight } from 'lucide-react';

const SchoolSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-4 uppercase">Work Sample</h2>
          <p className="text-stone-400 text-base leading-relaxed">
            Strategic research, market analysis, and product launch work from my academic career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {SCHOOL_PROJECTS.map((project) => (
            <a
              key={project.id}
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-white border border-stone-100 mb-5 transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="w-full h-full flex items-center justify-center p-6 bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 ${
                      project.id === 'square-ipo-analysis' ? 'object-contain scale-75' : 'object-cover'
                    }`}
                  />
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-stone-900/90 px-3 py-1.5">
                  <FileText size={12} className="text-white" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white">Deck</span>
                </div>
                <div className="absolute top-3 right-3 bg-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={16} className="text-stone-900" />
                </div>
              </div>

              {/* Metadata */}
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-2">
                {project.course}
              </p>
              <h3 className="text-lg font-display font-bold text-stone-900 leading-tight group-hover:text-stone-600 transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolSection;
