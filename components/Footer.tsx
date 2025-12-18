import React from 'react';
import { CONTACT_INFO } from '../constants.ts';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 px-6 md:px-12 border-t border-stone-200 mt-20 bg-stone-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="text-xl font-medium tracking-tight mb-2">Wendy Liu</h3>
          <p className="text-stone-500 text-sm whitespace-nowrap overflow-hidden text-ellipsis">
            Crafting digital products with strategy and intention.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors group"
          >
            <Linkedin size={18} />
            <span className="text-sm font-medium">LinkedIn</span>
            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors group"
          >
            <Mail size={18} />
            <span className="text-sm font-medium">Email</span>
            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-100 text-xs text-stone-400 flex justify-between">
        <span>© {new Date().getFullYear()} Wendy Liu</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;