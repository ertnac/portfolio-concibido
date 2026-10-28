import React, { useState, useEffect } from 'react';
import './assets/index.css';
import { portfolioData } from './data/portfolioData';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutEducationSection } from './components/AboutEducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  // Initialize theme (default to light mode so the luminous light-pink theme is active)
  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const shouldBeDark = savedTheme === 'dark';
    setIsDarkMode(shouldBeDark);
  }, []);

  // Synchronize <html> class with theme state
  useEffect(() => {
    if (!isMounted) return;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, isMounted]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  const handleCopy = (text, fieldIdentifier) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldIdentifier);
      showToast(`Copied "${text}" to clipboard`);
      setTimeout(() => setCopiedField(null), 2400);
    }
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#fff6f8] dark:bg-zinc-950 flex items-center justify-center">
        <div className="text-pink-400 font-mono text-xs animate-pulse">
          Loading portfolio...
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#fff6f8] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-pink-200 selection:text-pink-900 transition-colors duration-200 overflow-x-hidden">
      
      {/* Delicate Ambient Pink & White Luminous Background Lights */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200/40 dark:bg-pink-950/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-rose-100/60 dark:bg-rose-950/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-[32rem] h-[32rem] bg-pink-100/50 dark:bg-pink-950/15 rounded-full blur-3xl" />
      </div>

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          personal={portfolioData.personal}
          onOpenResume={() => setResumeModalOpen(true)}
          onCopy={handleCopy}
          copiedField={copiedField}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <ProjectsSection projects={portfolioData.projects} />

        <SkillsSection
          skills={portfolioData.skills}
          onCopy={handleCopy}
          copiedField={copiedField}
        />

        <AboutEducationSection
          education={portfolioData.education}
          personal={portfolioData.personal}
        />

        <ContactSection
          personal={portfolioData.personal}
          onCopy={handleCopy}
          copiedField={copiedField}
        />
      </main>

      {/* Clean Minimalist Footer */}
      <Footer
        personal={portfolioData.personal}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* ATS Resume Modal for Quick Preview & Printing */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onCopy={handleCopy}
        copiedField={copiedField}
      />

      {/* Copy Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
};

export default App;
