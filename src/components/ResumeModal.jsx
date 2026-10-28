import React from 'react';
import { X, Printer, FileText } from 'lucide-react';
import { AtsDocumentView } from './AtsDocumentView';
import { resumeData } from '../data/resumeData';

export const ResumeModal = ({ isOpen, onClose, onCopy, copiedField }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl shadow-pink-200/30 border border-pink-200/90 dark:border-zinc-800 flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-pink-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 border border-pink-200/60">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                ATS Formatted Resume Sheet
              </h3>
              <p className="text-[11px] text-pink-700/80 dark:text-zinc-400">
                Machine-readable & formatted for corporate ATS scanners
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Scrollable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#fff6f8]/70 dark:bg-zinc-950/60">
          <AtsDocumentView
            resumeData={resumeData}
            searchQuery=""
            onCopy={onCopy}
            copiedField={copiedField}
          />
        </div>
      </div>
    </div>
  );
};
