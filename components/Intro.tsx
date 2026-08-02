import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-36 md:pb-20 max-w-7xl mx-auto px-6 md:px-12">
      <h1 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight uppercase mb-8">
        Wendy Liu
      </h1>
      <div className="space-y-3 text-stone-600 text-base md:text-lg leading-relaxed max-w-3xl font-medium border-l-2 border-stone-200 pl-6">
        <p>
          Yale SOM MBA with five years across brand, digital product, and strategy at L'Oréal,
          Ruder Finn, and data.ai — turning market data into go-to-market decisions.
        </p>
        <p>
          I build with AI daily, shipping small tools and prompt systems that compress research
          and analysis from days into hours.
        </p>
        <p>
          Outside work: Hyrox racing and 35mm film — endurance and patience, in two forms.
        </p>
        <p>
          Next: a product or growth strategy role where consumer insight and AI leverage meet.
        </p>
      </div>
    </section>
  );
};

export default Intro;
