import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export const Toast = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-4 py-3 rounded-2xl shadow-xl shadow-pink-200/50 dark:shadow-none border border-pink-200 dark:border-zinc-800 text-sm font-medium animate-in fade-in slide-in-from-bottom-5 duration-200">
      <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" />
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-pink-400 hover:text-pink-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors cursor-pointer"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
