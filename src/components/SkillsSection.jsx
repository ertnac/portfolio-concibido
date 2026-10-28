import React from 'react';
import { 
  Copy, 
  Check, 
  Code2, 
  Server, 
  Terminal, 
  Sparkles
} from 'lucide-react';
import { TechIcon } from './TechIcon';

const BENTO_CONFIG = {
  "Programming Skills": {
    title: "Programming & Web",
    description: "Core languages, web technologies, scripting, and relational queries",
    icon: Code2,
    span: "lg:col-span-2 md:col-span-2",
    accent: "text-pink-600 dark:text-pink-400 bg-pink-50/80 dark:bg-pink-950/50 border-pink-200/70 dark:border-pink-800/40",
    glow: "bg-pink-300/20",
    badge: "Core Technical",
    footerNote: "Practical proficiency in C#, JavaScript, HTML, CSS, PHP, and MySQL."
  },
  "Development Tools": {
    title: "Development Tools",
    description: "Code editors, local Apache & MySQL environments, and workspace tools",
    icon: Terminal,
    span: "lg:col-span-1 md:col-span-1",
    accent: "text-rose-600 dark:text-rose-400 bg-rose-50/80 dark:bg-rose-950/50 border-rose-200/70 dark:border-rose-800/40",
    glow: "bg-rose-300/20",
    badge: "Toolchain"
  },
  "Core Competencies": {
    title: "System & Domain Focus",
    description: "Software engineering, database architecture, and technical documentation",
    icon: Server,
    span: "lg:col-span-1 md:col-span-1",
    accent: "text-pink-600 dark:text-pink-400 bg-pink-50/80 dark:bg-pink-950/50 border-pink-200/70 dark:border-pink-800/40",
    glow: "bg-pink-300/20",
    badge: "Specialization"
  },
  "Organizational Skills": {
    title: "Organizational & Professional Strengths",
    description: "Self-motivation, rapid learning, time management, and proactive adaptability",
    icon: Sparkles,
    span: "lg:col-span-2 md:col-span-2",
    accent: "text-pink-600 dark:text-pink-400 bg-pink-50/80 dark:bg-pink-950/50 border-pink-200/70 dark:border-pink-800/40",
    glow: "bg-pink-300/20",
    badge: "Workplace Strengths"
  }
};

export const SkillsSection = ({ skills, onCopy, copiedField }) => {
  const orderedKeys = ['Programming Skills', 'Development Tools', 'Core Competencies', 'Organizational Skills'];
  
  const allKeys = [
    ...orderedKeys.filter(k => skills[k]),
    ...Object.keys(skills).filter(k => !orderedKeys.includes(k))
  ];

  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2 border-b border-pink-200/70 dark:border-zinc-800/80 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-pink-600 dark:text-pink-400">
            <span>02 // Technologies & Stack</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Technical Competencies
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
                Programming languages, development software, and key strengths applied to build dependable software solutions.
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800/80 text-pink-700 dark:text-pink-400 text-xs font-mono border border-pink-200/70 dark:border-zinc-700/60 shrink-0 self-start sm:self-auto shadow-xs shadow-pink-100/40">
              <Copy className="w-3.5 h-3.5 text-pink-500" />
              <span>Click chip to copy</span>
            </div>
          </div>
        </div>

        {/* Bento Box Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allKeys.map((key) => {
            const items = skills[key] || [];
            const config = BENTO_CONFIG[key] || {
              title: key,
              description: "Specialized competencies",
              icon: Terminal,
              span: "lg:col-span-1 md:col-span-1",
              accent: "text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-zinc-800",
              glow: "bg-pink-300/15",
              badge: "General"
            };

            const Icon = config.icon;

            return (
              <div
                key={key}
                className={`relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900/60 border border-pink-100 dark:border-zinc-800/80 p-7 sm:p-8 flex flex-col justify-between hover:border-pink-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-pink-200/40 dark:hover:shadow-zinc-950/80 group ${config.span}`}
              >
                {/* Ambient Bento Glow Effect */}
                <div 
                  className={`absolute -top-16 -right-16 w-48 h-48 rounded-full ${config.glow} blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
                />

                <div className="space-y-6 relative z-10">
                  {/* Bento Header */}
                  <div className="flex items-start justify-between gap-4 border-b border-pink-100 dark:border-zinc-800/80 pb-4">
                    <div className="flex items-start gap-3.5">
                      <div className={`p-2.5 rounded-2xl border ${config.accent} shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-zinc-950 dark:text-white tracking-tight flex items-center gap-2">
                          {config.title}
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                          {config.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-pink-50/80 dark:bg-zinc-800 text-pink-800 dark:text-pink-300 border border-pink-200/60 dark:border-zinc-700/60">
                        {items.length} items
                      </span>
                      {config.badge && (
                        <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider text-pink-600/70 dark:text-pink-400/70 font-semibold">
                          {config.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bento Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {items.map((skill) => {
                      const isCopied = copiedField === skill;
                      return (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => onCopy(skill, skill)}
                          aria-label={`Copy ${skill}`}
                          className="group/chip inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-[#fffafd] hover:bg-pink-50/80 dark:bg-zinc-800/70 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-pink-100 dark:border-zinc-700/80 hover:border-pink-300 transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-95 text-left"
                        >
                          <TechIcon name={skill} className="w-3.5 h-3.5 shrink-0" />
                          <span>{skill}</span>
                          {isCopied ? (
                            <Check className="w-3 h-3 text-pink-600 dark:text-pink-400 shrink-0" />
                          ) : (
                            <Copy className="w-3 h-3 text-zinc-400 opacity-0 group-hover/chip:opacity-100 transition-opacity shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Bento Footer Note */}
                {config.footerNote && (
                  <div className="pt-6 mt-6 border-t border-pink-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs text-pink-700 dark:text-pink-300 font-mono relative z-10">
                    <Sparkles className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                    <span>{config.footerNote}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
