import React from 'react';

interface SectionShellProps {
  id: string;
  index: number;
  label: string;
  tone: 'light' | 'muted';
  children: React.ReactNode;
}

const TONES: Record<SectionShellProps['tone'], string> = {
  light: 'bg-stone-50',
  muted: 'bg-white'
};

const SectionShell: React.FC<SectionShellProps> = ({ id, index, label, tone, children }) => {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-stone-200 ${TONES[tone]}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20">
        <div className="flex items-baseline gap-6 border-b border-stone-200 pb-4">
          <span className="text-4xl md:text-5xl font-display font-extrabold text-stone-200 leading-none">
            {String(index).padStart(2, '0')}
          </span>
          <span className="text-[11px] uppercase tracking-[0.35em] font-bold text-stone-900">
            {label}
          </span>
        </div>
      </div>
      {children}
    </section>
  );
};

export default SectionShell;
