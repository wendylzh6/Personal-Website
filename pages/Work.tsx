import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, Project } from '../constants.ts';

const RoleCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex flex-col h-full bg-white p-8 border border-stone-100 transition-all duration-300 hover:shadow-lg group">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <div className="w-36 h-36 rounded-full bg-white border border-stone-100 flex items-center justify-center p-6 overflow-hidden">
          <img
            src={project.image}
            alt={project.company}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-display font-extrabold text-stone-900 mb-1 tracking-tight uppercase">
          {project.company}
        </h2>
        <p className="text-stone-500 font-medium text-sm">{project.title}</p>
        <div className="flex items-center justify-center gap-3 mt-2">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-stone-400 hover:text-stone-900 transition-colors"
            >
              Website <ArrowUpRight size={10} />
            </a>
          )}
          <span className="text-stone-200 text-xs">|</span>
          <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">{project.period}</span>
        </div>
      </div>

      {/* Summary & Bullets */}
      <div className="flex-grow space-y-4 border-t border-stone-100 pt-6">
        <p className="text-stone-600 text-sm leading-relaxed">{project.summary}</p>
        <ul className="space-y-3">
          {project.whatIDid.map((bullet, idx) => {
            const parts = bullet.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={idx} className="flex gap-3 text-sm text-stone-500 leading-relaxed">
                <span className="text-stone-300 mt-1.5 shrink-0">•</span>
                <span>
                  {parts.map((part, i) =>
                    i % 2 === 1 ? <strong key={i} className="font-semibold text-stone-800">{part}</strong> : part
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const WorkSection: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-4 uppercase">Work</h2>
          <p className="text-stone-400 text-base leading-relaxed">
            Across brands, financial institutions, and agencies — delivering results grounded in data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p) => (
            <RoleCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
