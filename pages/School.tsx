
import React from 'react';
import { SCHOOL_PROJECTS } from '../constants';
import { FileText, ArrowUpRight } from 'lucide-react';

const School: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-20 border-b border-stone-200 pb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-4 uppercase">Projects</h1>
        <p className="text-stone-500 text-lg max-w-2xl font-medium leading-relaxed">
          Strategic research, market analysis, and product launch presentations developed during my academic career.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {SCHOOL_PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col cursor-pointer"
          >
            {/* Card Visual / Thumbnail */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-stone-100 border border-stone-100 mb-6 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="w-full h-full flex items-center justify-center p-8 bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${project.id === 'square-ipo-analysis' ? 'object-contain scale-75' : 'object-cover'}`}
                />
              </div>
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/[0.02] transition-colors duration-300" />
              
              {/* Overlay Indicator */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                <ArrowUpRight size={18} className="text-stone-900" />
              </div>

              {/* Deck Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-stone-900/90 backdrop-blur-md px-3 py-1.5 rounded-sm">
                <FileText size={14} className="text-white" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-white">Project Deck</span>
              </div>
            </div>

            {/* Metadata */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-4 bg-stone-400" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">
                  {project.course}
                </p>
              </div>
              <h2 className="text-xl font-display font-bold text-stone-900 leading-tight group-hover:text-stone-600 transition-colors mb-3">
                {project.title}
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 font-medium">
                {project.description}
              </p>
              
              <div className="mt-6 flex items-center gap-2 text-stone-900 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                View Presentation <ArrowUpRight size={12} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default School;
