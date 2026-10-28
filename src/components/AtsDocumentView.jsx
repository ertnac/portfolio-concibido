import React from 'react';
import { Mail, Phone, MapPin, Copy, Printer, Check } from 'lucide-react';

export const AtsDocumentView = ({ resumeData, searchQuery, onCopy, copiedField }) => {
  // Helper function to highlight matching search keywords
  const highlightText = (text) => {
    if (!text) return '';
    if (!searchQuery || !searchQuery.trim()) return text;
    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-pink-200 dark:bg-pink-500/40 text-inherit rounded-xs px-0.5 font-semibold">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6 print:p-0">
      {/* ATS Sheet Container - Mimics physical executive resume sheet */}
      <div className="ats-container bg-white dark:bg-zinc-900 border border-pink-200/80 dark:border-zinc-800 rounded-2xl shadow-xl shadow-pink-100/50 p-8 sm:p-12 md:p-14 text-zinc-900 dark:text-zinc-100 transition-colors">
        
        {/* ===== HEADER SECTION ===== */}
        <header className="mb-6">
          <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-6">
            <div className="space-y-1.5 flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-sans">
                {highlightText(resumeData.name)}
              </h1>

              {/* Contact Details Stack */}
              <div className="pt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 font-sans">
                {/* Phone */}
                <div className="flex items-center gap-2 group">
                  <span className="font-medium">{highlightText(resumeData.contact.phone)}</span>
                  <button
                    onClick={() => onCopy(resumeData.contact.phone, 'phone')}
                    className="no-print opacity-0 group-hover:opacity-100 p-0.5 text-pink-400 hover:text-pink-600 dark:hover:text-zinc-200 transition-opacity cursor-pointer"
                    title="Copy phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-pink-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 group">
                  <a
                    href={`mailto:${resumeData.contact.email}`}
                    className="hover:underline hover:text-pink-600 dark:hover:text-pink-400 font-medium"
                  >
                    {highlightText(resumeData.contact.email)}
                  </a>
                  <button
                    onClick={() => onCopy(resumeData.contact.email, 'email')}
                    className="no-print opacity-0 group-hover:opacity-100 p-0.5 text-pink-400 hover:text-pink-600 dark:hover:text-zinc-200 transition-opacity cursor-pointer"
                    title="Copy email"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-pink-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Address */}
                <div className="flex items-center gap-2 group">
                  <span>{highlightText(resumeData.contact.address)}</span>
                  <button
                    onClick={() => onCopy(resumeData.contact.address, 'address')}
                    className="no-print opacity-0 group-hover:opacity-100 p-0.5 text-pink-400 hover:text-pink-600 dark:hover:text-zinc-200 transition-opacity cursor-pointer"
                    title="Copy address"
                  >
                    {copiedField === 'address' ? <Check className="w-3.5 h-3.5 text-pink-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Top Right: Print button + Headshot photo */}
            <div className="flex sm:flex-col items-end justify-between sm:justify-start gap-4 shrink-0">
              <div className="no-print">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-pink-50 hover:bg-pink-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-pink-700 dark:text-zinc-200 transition-colors border border-pink-200 dark:border-zinc-700 cursor-pointer shadow-2xs"
                  title="Print ATS Formatted Resume"
                >
                  <Printer className="w-3.5 h-3.5 text-pink-600" />
                  <span>Print PDF</span>
                </button>
              </div>

              {/* Portrait Photo */}
              <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-md overflow-hidden border-2 border-pink-200 dark:border-zinc-700 shadow-xs bg-white dark:bg-zinc-800 shrink-0">
                <img
                  src={resumeData.photo || "/profile.jpg"}
                  alt={resumeData.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Divider */}
        <hr className="border-t border-pink-300 dark:border-zinc-700 mb-6" />

        {/* ===== OBJECTIVE SECTION ===== */}
        <section className="mb-7 avoid-break">
          <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-2 font-sans">
            OBJECTIVE
          </h2>
          <div>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-800 dark:text-zinc-200 text-justify">
              {highlightText(resumeData.objective)}
            </p>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-t border-pink-200 dark:border-zinc-700 mb-6" />

        {/* ===== PROJECTS SECTION ===== */}
        <section className="mb-7">
          <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-4 font-sans">
            PROJECTS
          </h2>
          <div className="space-y-6">
            {resumeData.projects.map((project) => (
              <article key={project.id} className="avoid-break space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white">
                    {highlightText(project.title)}
                  </h3>
                </div>

                <ul className="list-disc list-outside ml-5 space-y-1 text-sm sm:text-base text-zinc-800 dark:text-zinc-200 pt-0.5">
                  {project.highlights.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {highlightText(bullet)}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="border-t border-pink-200 dark:border-zinc-700 mb-6" />

        {/* ===== EDUCATION SECTION ===== */}
        <section className="mb-7 avoid-break">
          <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-4 font-sans">
            EDUCATION
          </h2>
          <div className="space-y-5">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white">
                    {highlightText(edu.degree)}
                  </div>
                  <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 sm:text-right shrink-0">
                    {edu.period}
                  </div>
                </div>
                <div className="text-sm text-zinc-700 dark:text-zinc-300">
                  {highlightText(edu.institution)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="border-t border-pink-200 dark:border-zinc-700 mb-6" />

        {/* ===== SKILLS SECTION ===== */}
        <section className="avoid-break">
          <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-3 font-sans">
            SKILLS
          </h2>
          <div className="space-y-2.5 text-sm sm:text-base text-zinc-800 dark:text-zinc-200">
            {resumeData.skillCategories.map((cat) => (
              <div key={cat.name} className="leading-relaxed">
                <span className="font-bold text-zinc-950 dark:text-white">
                  {highlightText(cat.name)}:
                </span>{' '}
                {cat.type === 'list' ? (
                  <ul className="list-disc list-outside ml-5 space-y-1 mt-1.5 text-zinc-800 dark:text-zinc-200">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="leading-relaxed">
                        {highlightText(skill)}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {cat.prefix && <span>{highlightText(cat.prefix)}</span>}
                    {cat.skills.map((skill, sIdx) => (
                      <React.Fragment key={skill}>
                        <span className="inline-block">{highlightText(skill)}</span>
                        {sIdx < cat.skills.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
