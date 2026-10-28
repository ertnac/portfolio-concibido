import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Database,
  Layers,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  Calendar,
  Briefcase,
  Search,
  Filter,
  ArrowUpRight,
  ShieldCheck,
  MonitorSmartphone,
  Server
} from 'lucide-react';

export const InteractiveWebView = ({ resumeData, onSwitchToDoc, onCopy, copiedField, searchQuery, setSearchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Category filter for projects
  const filteredProjects = resumeData.projects.filter((project) => {
    const matchesSearch =
      !searchQuery ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'fullstack') return project.technologies.includes('Node.js') || project.technologies.includes('React Native');
    if (selectedCategory === 'backend') return project.technologies.includes('Laravel') || project.technologies.includes('PHP');
    if (selectedCategory === 'mobile') return project.technologies.includes('React Native') || project.technologies.includes('Expo');
    return true;
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-16">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-900/90 dark:via-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 md:p-16 shadow-xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{resumeData.status}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
              {resumeData.name}
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-indigo-600 dark:text-indigo-400">
              {resumeData.title}
            </p>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
              {resumeData.objective}
            </p>

            {/* Contact quick badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-zinc-600 dark:text-zinc-300">
              <button
                onClick={() => onCopy(resumeData.contact.email, 'email')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors border border-zinc-200/80 dark:border-zinc-700/80 font-medium text-xs"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>{resumeData.contact.email}</span>
                {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
              </button>

              <button
                onClick={() => onCopy(resumeData.contact.phone, 'phone')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors border border-zinc-200/80 dark:border-zinc-700/80 font-medium text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <span>{resumeData.contact.phone}</span>
                {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80 font-medium text-xs text-zinc-600 dark:text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>San Pablo City, Laguna</span>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <button
                onClick={onSwitchToDoc}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <Layers className="w-4 h-4" />
                <span>View ATS Resume Sheet</span>
              </button>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>Print / Download PDF</span>
              </button>

              <a
                href={`mailto:${resumeData.contact.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 shadow-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Email Directly</span>
              </a>
            </div>
          </div>

          {/* ATS Readiness & Quick Summary Card */}
          <div className="w-full md:w-80 shrink-0 bg-white dark:bg-zinc-800/90 rounded-2xl p-6 border border-zinc-200/90 dark:border-zinc-700 shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-700/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span className="font-bold text-sm text-zinc-900 dark:text-white">ATS Resume Score</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold font-mono">
                99/100
              </span>
            </div>

            <div className="mt-4 space-y-3 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex justify-between items-center py-1">
                <span>Format Standard</span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-200 font-mono">Clean Single-Col</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Keyword Readability</span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-200 font-mono">100% Machine Clean</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Featured Systems</span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-200 font-mono">3 Full Projects</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Education Level</span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-200 font-mono">BSIT (In Progress)</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-700/80">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 italic">
                Optimized for modern corporate ATS parsers (Workday, Greenhouse, Lever, Taleo).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ATS KEYWORD SEARCH & FILTER BAR ===== */}
      <section className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ATS Recruiter Search: e.g. React, Laravel, TypeScript, CRUD, MySQL..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 border border-zinc-200 dark:border-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fullstack', label: 'Full Stack' },
              { id: 'backend', label: 'Backend/Laravel' },
              { id: 'mobile', label: 'Mobile/React Native' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === tab.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Tag pills */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="font-medium mr-1">Popular Keywords:</span>
          {['React', 'TypeScript', 'Node.js', 'Laravel', 'React Native', 'MySQL', 'Firebase', 'CRUD', 'Offline-ready'].map((kw) => (
            <button
              key={kw}
              onClick={() => setSearchQuery(kw)}
              className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border border-zinc-200/60 dark:border-zinc-700/60 font-mono text-[11px]"
            >
              #{kw}
            </button>
          ))}
        </div>
      </section>

      {/* ===== FEATURED PROJECTS SECTION ===== */}
      <section id="projects" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide uppercase">
              <Briefcase className="w-4 h-4" />
              <span>Project Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white mt-1">
              Production & Engineered Systems
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Showing {filteredProjects.length} of {resumeData.projects.length} verified projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold font-mono">
                    <Calendar className="w-3 h-3" />
                    <span>{project.year}</span>
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mt-0.5">
                    {project.role}
                  </p>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2">
                  {project.description}
                </p>

                {/* Highlights / Responsibilities */}
                <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Key ATS Contributions:
                  </span>
                  <ul className="mt-2 space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => setSearchQuery(tech)}
                      className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 hover:text-indigo-600 transition-colors"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TECHNICAL SKILLS MATRIX ===== */}
      <section id="skills" className="space-y-6">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide uppercase border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <Code2 className="w-4 h-4" />
          <span>Core Competencies & Stack</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resumeData.skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 shadow-sm hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm text-zinc-950 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  {category.name}
                </h3>
                <span className="text-[11px] font-mono text-zinc-400">
                  {category.skills.length} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => {
                      setSearchQuery(skill);
                      onCopy(skill, skill);
                    }}
                    title="Click to filter by this skill & copy"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-50 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80 hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <span>{skill}</span>
                    {copiedField === skill ? (
                      <Check className="w-3 h-3 text-emerald-500" />
                    ) : null}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== EDUCATION & CREDENTIALS ===== */}
      <section id="education" className="space-y-6">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide uppercase border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <GraduationCap className="w-4 h-4" />
          <span>Academic Background</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-semibold">
                    {edu.period}
                  </span>
                  {edu.honors && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                      ★ {edu.honors}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                    {edu.institution}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT & CONNECT SECTION ===== */}
      <section id="contact" className="rounded-3xl bg-zinc-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>Direct Hiring & Collaboration Channel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to connect or collaborate with Shanaya?
          </h2>

          <p className="text-base text-zinc-300 leading-relaxed">
            I am currently open to IT internships, software development, database, and technical documentation roles. Feel free to copy my details or send an email directly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <button
              onClick={() => onCopy(resumeData.contact.email, 'email-card')}
              className="flex flex-col items-start p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors text-left group"
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-zinc-400 font-medium">Email Address</span>
                {copiedField === 'email-card' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-500 group-hover:text-white" />}
              </div>
              <span className="text-sm font-semibold text-white mt-1 break-all">
                {resumeData.contact.email}
              </span>
            </button>

            <button
              onClick={() => onCopy(resumeData.contact.phone, 'phone-card')}
              className="flex flex-col items-start p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors text-left group"
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-zinc-400 font-medium">Phone Number</span>
                {copiedField === 'phone-card' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-500 group-hover:text-white" />}
              </div>
              <span className="text-sm font-semibold text-white mt-1">
                {resumeData.contact.phone}
              </span>
            </button>

            <div className="flex flex-col items-start p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-left">
              <span className="text-xs text-zinc-400 font-medium">Location</span>
              <span className="text-sm font-semibold text-white mt-1">
                San Pablo City, Laguna
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={`mailto:${resumeData.contact.email}?subject=Job Opportunity / Inquiry for Shanaya T. Concibido`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Compose Email Now</span>
            </a>

            <button
              onClick={onSwitchToDoc}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-sm border border-zinc-700 transition-colors"
            >
              <Layers className="w-4 h-4" />
              <span>Switch to Document View</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
