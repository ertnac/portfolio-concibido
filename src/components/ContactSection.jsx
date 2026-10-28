import React from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';

export const ContactSection = ({ personal, onCopy, copiedField }) => {
  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-[#fff4f7] to-rose-50/70 dark:from-zinc-900 dark:to-zinc-950 text-zinc-950 dark:text-white p-8 sm:p-14 lg:p-16 border border-pink-200/90 dark:border-zinc-800 shadow-2xl shadow-pink-100/70 dark:shadow-none overflow-hidden">
          {/* Subtle background ambient light */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-pink-300/30 dark:bg-pink-900/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-800/80 border border-pink-200 dark:border-zinc-700/80 text-pink-700 dark:text-pink-300 text-xs font-mono shadow-xs shadow-pink-100/40">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>Get in Touch</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
              Let's connect and build together.
            </h2>

            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              Whether you are looking for an IT intern, software developer, technical writer, or want to explore collaborative opportunities, my inbox is always open.
            </p>

            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* Email Card */}
              <button
                onClick={() => onCopy(personal.contact.email, 'contact-email')}
                className="group p-5 rounded-2xl bg-white dark:bg-zinc-900/90 border border-pink-200/80 dark:border-zinc-800 hover:border-pink-400 dark:hover:border-zinc-700 text-left transition-all cursor-pointer shadow-xs shadow-pink-100/30 hover:shadow-md hover:shadow-pink-100/50"
              >
                <div className="flex items-center justify-between text-xs text-pink-700 dark:text-pink-400 font-mono">
                  <span>EMAIL ADDRESS</span>
                  {copiedField === 'contact-email' ? (
                    <span className="text-pink-600 dark:text-pink-400 flex items-center gap-1 font-bold">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-pink-400 dark:text-zinc-500 group-hover:text-pink-600 transition-colors" />
                  )}
                </div>
                <div className="mt-2 text-sm sm:text-base font-semibold text-zinc-950 dark:text-white break-all">
                  {personal.contact.email}
                </div>
              </button>

              {/* Phone Card */}
              <button
                onClick={() => onCopy(personal.contact.phone, 'contact-phone')}
                className="group p-5 rounded-2xl bg-white dark:bg-zinc-900/90 border border-pink-200/80 dark:border-zinc-800 hover:border-pink-400 dark:hover:border-zinc-700 text-left transition-all cursor-pointer shadow-xs shadow-pink-100/30 hover:shadow-md hover:shadow-pink-100/50"
              >
                <div className="flex items-center justify-between text-xs text-pink-700 dark:text-pink-400 font-mono">
                  <span>PHONE NUMBER</span>
                  {copiedField === 'contact-phone' ? (
                    <span className="text-pink-600 dark:text-pink-400 flex items-center gap-1 font-bold">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-pink-400 dark:text-zinc-500 group-hover:text-pink-600 transition-colors" />
                  )}
                </div>
                <div className="mt-2 text-sm sm:text-base font-semibold text-zinc-950 dark:text-white">
                  {personal.contact.phone}
                </div>
              </button>
            </div>

            {/* Direct Mail CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${personal.contact.email}?subject=Hello ${personal.shortName || personal.name} - Opportunity Inquiry`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-bold text-xs sm:text-sm transition-transform hover:-translate-y-0.5 shadow-lg shadow-pink-200/60 active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-mono px-3 py-2 rounded-xl bg-white/70 dark:bg-zinc-800/50 border border-pink-100 dark:border-zinc-700/50">
                <MapPin className="w-3.5 h-3.5 text-pink-500" />
                <span>{personal.location}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
