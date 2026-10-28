import React from 'react';
import { Mail, Phone, MapPin, Copy, Check, FileText, Sun, Moon } from 'lucide-react';

export const Hero = ({
  personal,
  onOpenResume,
  onCopy,
  copiedField,
  isDarkMode,
  toggleDarkMode
}) => {
  return (
    <section className="relative w-full pt-12 sm:pt-20 pb-12 sm:pb-16">

      {/* ===== FULL-WIDTH PROFILE HEADER SECTION ===== */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* Top Profile Header: Avatar + Name/Role on left, Buttons on right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-pink-200/70 dark:border-zinc-800/80">

          {/* Left: Round Avatar + Name & Role */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">

            {/* Round Avatar with User's Photo */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-white dark:border-zinc-800 ring-4 ring-pink-200/80 dark:ring-zinc-700 bg-white dark:bg-zinc-900 shadow-xl shadow-pink-100/70 dark:shadow-none overflow-hidden flex items-center justify-center relative">
                <img
                  src="/profile.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Name & Role */}
            <div className="space-y-1 pb-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                {personal.name}
              </h1>

              <p className="text-sm sm:text-base md:text-lg font-semibold text-pink-600 dark:text-pink-400">
                {personal.title}
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-end pb-1">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-pink-200/60 hover:-translate-y-0.5 cursor-pointer active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 text-pink-950 dark:text-zinc-100 font-bold text-xs sm:text-sm border border-pink-200/80 dark:border-zinc-800 hover:border-pink-300 hover:bg-pink-50/60 dark:hover:bg-zinc-850 transition-all shadow-xs shadow-pink-100/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-pink-500" />
              <span>Resume</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-200 bg-white dark:bg-zinc-900 hover:bg-pink-50/60 dark:hover:bg-zinc-850 border border-pink-200/80 dark:border-zinc-800 transition-colors shadow-xs shadow-pink-100/40 cursor-pointer"
              aria-label="Toggle theme"
              title="Toggle dark / light theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Narrative & Contact Details */}
        <div className="pt-6 space-y-5">
          {/* Bio paragraph */}
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl font-normal">
            {personal.bio}
          </p>

          {/* Quick contact tags */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-zinc-900 border border-pink-100 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 shadow-xs shadow-pink-100/30">
              <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
              <span>{personal.location}</span>
            </div>

            {/* Email quick copy */}
            <button
              onClick={() => onCopy(personal.contact.email, 'hero-email')}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-zinc-900 border border-pink-100 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-pink-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all group cursor-pointer shadow-xs shadow-pink-100/30"
            >
              <Mail className="w-4 h-4 text-pink-400 shrink-0" />
              <span>{personal.contact.email}</span>
              {copiedField === 'hero-email' ? (
                <Check className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>

            {/* Phone quick copy */}
            <button
              onClick={() => onCopy(personal.contact.phone, 'hero-phone')}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-zinc-900 border border-pink-100 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-pink-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all group cursor-pointer shadow-xs shadow-pink-100/30"
            >
              <Phone className="w-4 h-4 text-pink-400 shrink-0" />
              <span>{personal.contact.phone}</span>
              {copiedField === 'hero-phone' ? (
                <Check className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
