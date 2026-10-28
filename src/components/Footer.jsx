import React from 'react';
import { ArrowUp, FileText, Heart } from 'lucide-react';

export const Footer = ({ personal, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="no-print border-t border-pink-200/70 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/50 backdrop-blur-sm py-12 text-zinc-600 dark:text-zinc-400 text-xs">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-semibold text-zinc-900 dark:text-zinc-200 text-sm">
            {personal.name}
          </span>
          <p className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} — Built with React & Tailwind CSS</span>
            <Heart className="w-3 h-3 text-pink-400 fill-pink-400 inline" />
          </p>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={onOpenResume}
            className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-pink-500" />
            <span>ATS Resume Sheet</span>
          </button>

          <button
            onClick={scrollToTop}
            className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors flex items-center gap-1 font-medium cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-pink-500" />
          </button>
        </div>

      </div>
    </footer>
  );
};
