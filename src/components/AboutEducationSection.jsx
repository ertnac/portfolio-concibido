import React from 'react';
import { Compass, GraduationCap } from 'lucide-react';

export const AboutEducationSection = ({ education, personal }) => {
  return (
    <section id="education" className="py-16 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2 border-b border-pink-200/70 dark:border-zinc-800/80 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-pink-600 dark:text-pink-400">
            <span>03 // Academic & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Education & Journey
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            My foundational training in Information Technology, programming methodologies, and scientific problem solving.
          </p>
        </div>

        {/* Narrative & Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Bio statement */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-base font-bold text-zinc-950 dark:text-white font-mono flex items-center gap-2">
              <Compass className="w-4 h-4 text-pink-500" />
              <span>Academic Drive</span>
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              A dedicated IT student seeking to apply and expand technical knowledge in software development, database management, and web applications. Passionate about learning new technologies, programming skills, and to solve real-world problems with hands-on practice.
            </p>
          </div>

          {/* Education cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl bg-white dark:bg-zinc-900/60 border border-pink-100 dark:border-zinc-800/80 p-6 sm:p-7 space-y-3 hover:border-pink-300 dark:hover:border-zinc-700 transition-all shadow-sm shadow-pink-100/40 hover:shadow-xl hover:shadow-pink-200/40 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-pink-50/80 dark:bg-zinc-800 text-pink-900 dark:text-pink-200 border border-pink-200/60 self-start">
                      {item.period}
                    </span>
                    {item.status && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-pink-50 dark:bg-pink-950/70 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800 self-start">
                        <GraduationCap className="w-3.5 h-3.5 text-pink-500" />
                        <span>{item.status}</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-zinc-950 dark:text-white">
                      {item.degree}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-pink-600 dark:text-pink-400 mt-0.5">
                      {item.institution}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
