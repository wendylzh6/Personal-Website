import React, { useState } from 'react';
import { Sparkles, Zap, Copy, ExternalLink, ChevronDown, ChevronUp, Check, Code, BarChart2, ArrowUpRight, Network } from 'lucide-react';

const PromptCard: React.FC<{ 
  prompt: { title: string; category: string; description: string; content: string } 
}> = ({ prompt }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-sm p-8 hover:shadow-md transition-shadow group">
      <div className="flex justify-between items-start mb-4 gap-4">
        <div>
          <h3 className="text-xl font-display font-bold text-stone-900">{prompt.title}</h3>
          <span className="text-[10px] uppercase tracking-widest font-bold text-stone-500 bg-stone-100 px-2 py-1 rounded-sm mt-2 inline-block">
            {prompt.category}
          </span>
        </div>
        <button 
          className={`flex items-center gap-2 px-3 py-1.5 rounded-sm text-[10px] uppercase tracking-widest font-bold transition-all ${
            copied 
              ? 'bg-green-50 text-green-600 border border-green-100' 
              : 'bg-stone-900 text-white hover:bg-stone-800'
          }`}
          onClick={handleCopy}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied!' : 'Copy the Prompt'}
        </button>
      </div>
      
      <p className="text-stone-500 text-sm mb-6 font-medium leading-relaxed">
        {prompt.description}
      </p>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-stone-400 hover:text-stone-900 transition-colors mb-4"
      >
        {isExpanded ? (
          <><ChevronUp size={14} /> Hide Prompt Content</>
        ) : (
          <><ChevronDown size={14} /> View Prompt Content</>
        )}
      </button>

      {isExpanded && (
        <div className="bg-stone-50 p-6 rounded-sm border border-stone-100 font-mono text-xs text-stone-700 leading-relaxed whitespace-pre-wrap animate-in fade-in slide-in-from-top-2 duration-300">
          {prompt.content}
        </div>
      )}
    </div>
  );
};

const AIEfficiency: React.FC = () => {
  const builtTools = [
    {
      name: "Tweet Content Analyzer",
      description: "A strategic analytics tool to evaluate tweet performance and content patterns, helping brands accelerate data-driven decision making.",
      link: "https://tweet-analysis-zy9m.vercel.app/",
      icon: <BarChart2 size={24} />
    },
    {
      name: "AI Sphere",
      description: "An interactive 3D network visualization mapping relationships among the top 51 AI influencers on X and LinkedIn, with sentiment analysis and an AI chatbot to guide exploration.",
      link: "https://ai-sphere-indol.vercel.app/",
      icon: <Network size={24} />
    }
  ];

  const prompts = [
    {
      title: "Source and Explore New Companies",
      category: "VC Sourcing",
      description: "A systemic approach to discover and track new deals leveraging inbound leads, accelerator demos, and industry networks.",
      content: `Role & Persona
You are a Seasoned Venture Capital Partner responsible for creating and maintaining a robust pipeline of early- to growth-stage startups.

Scenario & Objectives
You want to systematize the way you discover and track new deals—leveraging inbound leads, accelerator demos, industry conferences, university incubators, and warm introductions from founders. The goal is to create a repeatable pipeline to ensure you don't miss hidden gems.

Instructions
1. Sourcing Channels: Identify the top channels you'll focus on (accelerator demo days, scouting networks, targeted LinkedIn outreach).
2. Qualification Criteria: Define the verticals, check sizes, or stage preferences that fit your fund's thesis.
3. CRM & Deal Flow Tracking: Outline how you'll capture leads, set follow-up reminders, and maintain visibility on each potential deal.
4. Timeline & Metrics: Establish pipeline metrics (e.g., monthly deal inflow, acceptance ratio to due diligence) to track progress.

Output Requirements
• Present the strategy in structured paragraphs.
• Include a short bullet list of Key Deal Sourcing Metrics to monitor.
• End with a final paragraph explaining how you'll refine the system (feedback loops, periodic reviews).`,
    },
    {
      title: "Market Sizing Research",
      category: "Market Analysis",
      description: "Thorough TAM/SAM/SOM analysis and competitor benchmarking for startups in specific sectors.",
      content: `Prompt: You are an experienced Market Research Lead in a VC firm with a background in Management Consulting, known for thorough TAM analysis and competitor benchmarking.

Scenario & Objectives
You're evaluating a startup in [xxx], aiming to quantify its addressable market and see how it compares to direct and indirect competitors.

Instructions
1. TAM, SAM, SOM Definitions: Clarify total addressable, serviceable addressable, and serviceable obtainable markets for the startup's offering.
2. Data Gathering: Aggregate industry data, public comps, or third-party research to approximate market potential.
3. Competitive Positioning: Map out direct vs. indirect players, analyzing product features, funding, or notable strategic advantages.
4. Moat Analysis: Suggest whether the startup has unique IP, a network effect, or first-mover advantage that differentiates it.

Output Requirements
• Present the market analysis in paragraphs, referencing data sources.
• Provide a bullet list of Competitive Differentiators & Gaps.
• End with a final paragraph rating the opportunity (small, medium, or large TAM) and how quickly the startup might capture share.`,
    },
    {
      title: "Evaluate and Research An Early-Stage Company",
      category: "Technical Due Diligence",
      description: "Assess product feasibility, code quality, and the realism of engineering timelines for technical assessment.",
      content: `Role & Persona
You are a Technical Advisor to a VC fund, assessing product feasibility, code quality, and the realism of engineering timelines.

Scenario & Objectives
The startup claims a cutting-edge tech stack or IP. You must validate whether it's truly innovative, scalable, and well-built.

Before You Begin
I will attach the company's technical documentation, product roadmaps, or architecture diagrams. If available, I'll also share a segment of the codebase or engineering notes.

Instructions
1. Tech Stack Review: Summarize the languages, frameworks, and hosting solutions used. Are they well-suited for the problem domain?
2. Scalability & Reliability: Check if the architecture can handle user growth or large data volumes.
3. IP & Proprietary Tech: Determine whether the startup has unique algorithms, patents, or significant dev overhead.
4. Development Timeline: Evaluate the engineering roadmap—are deadlines realistic given the team size and complexity?

Output Requirements
• Deliver the analysis in paragraphs referencing any notable code or architecture patterns.
• Include a bullet list of Potential Tech Risks.
• End with a final paragraph suggesting whether the tech is a genuine competitive advantage or easily replicated.`,
    }
  ];

  const resources = [
    { name: "Ben's Bites", use: "Daily AI Newsletter", link: "https://bensbites.beehiiv.com/" },
    { name: "The AI Valley", use: "AI Tools & News", link: "https://www.theaivalley.com/" },
    { name: "Lenny's Podcast", use: "Product & Growth", link: "https://www.youtube.com/@LennysPodcast" },
    { name: "TBPN Live", use: "The Best Podcast Network", link: "https://www.youtube.com/@TBPNLive" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-16 border-b border-stone-200 pb-8">
        <div className="flex items-center gap-3 text-stone-500 mb-4">
          <Sparkles size={20} />
          <span className="uppercase tracking-widest text-sm font-bold">AI & Efficiency</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6">Scaling Output</h1>
        <p className="text-stone-600 text-lg max-w-2xl leading-relaxed font-medium">
          I believe in leveraging AI not to replace thought, but to accelerate exploration. 
          Here is a collection of my daily drivers—prompts that unlock clarity and tools that keep me moving fast.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Content Column */}
        <div className="lg:col-span-8">
          
          {/* Engineering & Tools Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-2 uppercase tracking-wide">
              <Code size={24} className="text-stone-400" />
              Engineering & Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {builtTools.map((tool, idx) => (
                <a 
                  key={idx}
                  href={tool.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white border border-stone-200 p-8 rounded-sm hover:shadow-lg transition-all duration-300 group block flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-stone-100 rounded-sm text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                      {tool.icon}
                    </div>
                    <ExternalLink size={18} className="text-stone-300 group-hover:text-stone-900 transition-colors" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-display font-bold text-stone-900 mb-3 group-hover:text-stone-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-stone-500 text-sm font-medium leading-relaxed mb-6">
                      {tool.description}
                    </p>
                  </div>

                  <span className="text-[10px] uppercase tracking-widest font-bold text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-1 self-start group-hover:border-stone-900 transition-all">
                    Launch Tool <ArrowUpRight size={10} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Prompt Library Section */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-2 uppercase tracking-wide">
              <Zap size={24} className="text-stone-400" />
              Prompt Library
            </h2>
            <div className="space-y-8">
              {prompts.map((prompt, idx) => (
                <PromptCard key={idx} prompt={prompt} />
              ))}
            </div>
          </div>
        </div>

        {/* Tools Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <h2 className="text-2xl font-display font-bold mb-8 uppercase tracking-wide">My Resources</h2>
            <ul className="space-y-4">
              {resources.map((resource, idx) => (
                <li key={idx} className="flex items-center justify-between group border-b border-stone-100 pb-4 last:border-0">
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full">
                    <div>
                      <span className="block font-bold text-stone-900 text-sm uppercase tracking-tight">{resource.name}</span>
                      <span className="text-xs text-stone-500 uppercase tracking-widest font-bold">{resource.use}</span>
                    </div>
                    <ExternalLink size={16} className="text-stone-300 group-hover:text-stone-900 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 bg-stone-900 text-stone-300 p-8 rounded-sm">
                <p className="font-display font-bold text-xl mb-4 text-white leading-tight">"AI is a bicycle for the mind."</p>
                <p className="text-sm font-medium">
                    Leveraging these tools allows me to spend less time on the 'what' and 'how', and more time on the 'why'.
                </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AIEfficiency;