import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, Project } from '../constants.ts';

const RoleCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex flex-col h-full bg-white p-10 rounded-sm shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-stone-100 transition-all duration-300 hover:shadow-xl group">
      {/* Company Logo - Large Circle */}
      <div className="flex justify-center mb-10">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white border border-stone-100 flex items-center justify-center p-8 overflow-hidden shadow-sm">
          <img
            src={project.image}
            alt={project.company}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-display font-extrabold text-stone-900 mb-1 tracking-tight uppercase">
          {project.company}
        </h2>
        <div className="flex flex-col items-center gap-1">
          <p className="text-stone-500 font-medium text-sm">{project.title}</p>
          <div className="flex items-center gap-2 mt-2">
            {project.website && (
              <a 
                href={project.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-stone-300 hover:text-stone-900 transition-colors"
              >
                Website <ArrowUpRight size={10} />
              </a>
            )}
            <span className="text-stone-200 text-xs">|</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-stone-300">{project.period}</span>
          </div>
        </div>
      </div>

      {/* Role Summary & Bullet Points */}
      <div className="flex-grow space-y-6">
        <div className="border-t border-stone-100 pt-6">
           <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold mb-3 italic">Role Summary</p>
           <p className="text-stone-700 text-sm leading-relaxed font-medium">
             {project.summary}
           </p>
        </div>

        <ul className="space-y-4 pt-4 border-t border-stone-50">
          {project.whatIDid.map((bullet, idx) => {
            const parts = bullet.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={idx} className="flex gap-3 text-sm text-stone-600 leading-relaxed">
                <span className="text-stone-300 mt-1.5">•</span>
                <span>
                  {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-bold text-stone-900">{part}</strong> : part)}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const Work: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-6 uppercase whitespace-nowrap">Professional Experience</h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            I have worked with brands, financial institutions, and agencies to deliver results proven by data and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((p) => (
            <RoleCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;