import React from 'react';
import { BarChart2, Network, Newspaper, Star, ArrowUpRight } from 'lucide-react';

const tools = [
  {
    name: "Tweet Content Analyzer",
    description: "Strategic analytics tool to evaluate tweet performance and content patterns — helping brands make data-driven decisions faster.",
    link: "https://tweet-analysis-zy9m.vercel.app/",
    icon: <BarChart2 size={22} />,
  },
  {
    name: "AI Sphere",
    description: "Interactive network visualization mapping relationships among the top 51 AI influencers on X, with sentiment analysis and an AI chatbot.",
    link: "https://ai-sphere-indol.vercel.app/",
    icon: <Network size={22} />,
  },
  {
    name: "Video to Newsletter",
    description: "Transforms YouTube interviews and podcast transcripts into publication-ready newsletter drafts with tone controls and export.",
    link: "https://github.com/wendylzh6/ai-newsletter-gen",
    icon: <Newspaper size={22} />,
  },
  {
    name: "Review Intelligence",
    description: "Aggregates customer reviews to surface pain points and auto-generates personalized outreach emails — turning feedback into sales enablement.",
    link: "https://review-intelligence-delta.vercel.app/",
    icon: <Star size={22} />,
  },
];

const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-4 uppercase">Project</h2>
          <p className="text-stone-400 text-base leading-relaxed">
            Tools I built to accelerate exploration, automate research, and unlock faster decisions.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, idx) => (
            <a
              key={idx}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-stone-50 border border-stone-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="p-2.5 bg-stone-100 text-stone-700 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                  {tool.icon}
                </div>
                <ArrowUpRight size={16} className="text-stone-300 group-hover:text-stone-900 transition-colors" />
              </div>
              <h3 className="text-base font-display font-bold text-stone-900 mb-2">
                {tool.name}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed flex-grow">
                {tool.description}
              </p>
              <span className="mt-5 text-[10px] uppercase tracking-widest font-bold text-stone-400 group-hover:text-stone-900 transition-colors flex items-center gap-1">
                Launch <ArrowUpRight size={10} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
