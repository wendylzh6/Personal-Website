import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-36 md:pb-20 max-w-7xl mx-auto px-6 md:px-12">
      <h1 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight uppercase mb-8">
        Wendy Liu
      </h1>
      <div className="space-y-3 text-stone-600 text-base md:text-lg leading-relaxed max-w-3xl font-medium border-l-2 border-stone-200 pl-6">
        <p>
          I'm a digital strategy and growth professional working across beauty, technology,
          media, and entrepreneurship.
        </p>
        <p>
          I've led cross-functional digital initiatives at L'Oréal, built data-driven growth
          strategies, managed global projects, and run content, community, and event programs.
        </p>
        <p>
          I do my best work in fast-paced, collaborative teams — combining analytical thinking,
          creativity, and execution.
        </p>
      </div>
    </section>
  );
};

export default Intro;
