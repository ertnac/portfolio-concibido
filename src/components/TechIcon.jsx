import React from 'react';

export const TechIcon = ({ name, className = "w-3.5 h-3.5" }) => {
  const normalized = name.toLowerCase().trim();

  // React / React Native
  if (normalized.includes('react')) {
    return (
      <svg className={`${className} text-cyan-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg className={`${className} text-blue-500`} viewBox="0 0 24 24" fill="currentColor">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#3178C6" />
        <path d="M7 9h6m-3 0v8M14.5 14.5c.5.5 1.5.8 2.5.5s1.2-.8 1.2-1.3c0-1.2-2.7-1-2.7-2.7 0-1 .8-1.8 2.2-1.8 1 0 1.8.3 2.3.7l-.6 1.3c-.4-.3-1-.5-1.7-.5s-1 .3-1 .8c0 1.1 2.7 1 2.7 2.7 0 1.1-.9 2-2.4 2-1.2 0-2.2-.4-2.8-1l.6-1.7z" stroke="#fff" strokeWidth="1.2" fill="none" />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg className={`${className} text-amber-400`} viewBox="0 0 24 24" fill="currentColor">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#F7DF1E" />
        <path d="M9 11v6c0 1-.5 1.5-1.5 1.5H6M13.5 17c.5.8 1.3 1.2 2.3 1.2 1.3 0 2.2-.8 2.2-1.8 0-1.2-1-1.6-2-2.1l-.6-.3c-.8-.4-1.3-.8-1.3-1.6 0-.9.8-1.6 1.9-1.6.8 0 1.5.3 1.9.9l-1 1.2c-.2-.4-.5-.6-1-.6-.4 0-.7.3-.7.6 0 .4.3.7.8.9l.6.3c1.2.6 1.8 1.2 1.8 2.2 0 1.3-1 2.2-2.5 2.2-1.4 0-2.3-.7-2.7-1.7l1.3-.9z" stroke="#000" strokeWidth="1.2" fill="none" />
      </svg>
    );
  }

  // Prisma
  if (normalized.includes('prisma')) {
    return (
      <svg className={`${className} text-emerald-600 dark:text-emerald-400`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.63 2.1a1 1 0 0 0-1.26 0L3.5 8.4a1 1 0 0 0-.4.8v9.6a1 1 0 0 0 .5.87l8 4.62a1 1 0 0 0 1 0l8-4.62a1 1 0 0 0 .5-.87V9.2a1 1 0 0 0-.4-.8l-7.87-6.3zm-.63 2.15l6.4 5.12-6.4 3.7-6.4-3.7 6.4-5.12zM4.9 10.3l6.1 3.52v7.42L4.9 17.6v-7.3zm8.1 10.94V13.82l6.1-3.52v7.3l-6.1 3.64z" fill="#0C344B" />
      </svg>
    );
  }

  // PostgreSQL
  if (normalized.includes('postgres')) {
    return (
      <svg className={`${className} text-sky-600 dark:text-sky-400`} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" fill="#336791" />
        <path d="M9 9c0-1.5 1.5-2 3-2s3 .5 3 2v6c0 1-1 2-2 2h-2c-1 0-2-1-2-2V9z" fill="#fff" />
      </svg>
    );
  }

  // Supabase
  if (normalized.includes('supabase')) {
    return (
      <svg className={`${className} text-emerald-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.6 2.1c-.8-.9-2.3-.4-2.4.9l-.6 8.3h8.3c1.3 0 1.9 1.6.9 2.4L8.7 22.8c-.8.8-2.2.3-2.3-.9l.7-8.3H-1.5c-1.3 0-2-1.6-.9-2.4L13.6 2.1z" fill="#3ECF8E" />
      </svg>
    );
  }

  // Capacitor
  if (normalized.includes('capacitor')) {
    return (
      <svg className={`${className} text-sky-500`} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="#119EFF" />
        <path d="M7 12a5 5 0 0 1 8.5-3.5l1.4-1.4A7 7 0 1 0 19 12h-2a5 5 0 0 1-10 0z" fill="#ffffff" />
      </svg>
    );
  }

  // SQLite
  if (normalized.includes('sqlite')) {
    return (
      <svg className={`${className} text-sky-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 2.5c4.69 0 8 1.48 8 2s-3.31 2-8 2-8-1.48-8-2 3.31-2 8-2zm8 13c0 .52-3.31 2-8 2s-8-1.48-8-2v-2.3c2.09 1.42 5.09 2.3 8 2.3s5.91-.88 8-2.3v2.3zm0-4.5c0 .52-3.31 2-8 2s-8-1.48-8-2v-2.3c2.09 1.42 5.09 2.3 8 2.3s5.91-.88 8-2.3v2.3z" fill="#003B57" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes('docker')) {
    return (
      <svg className={`${className} text-sky-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 8.5V7h-2v1.5h2zm-2.5 0V7H8.5v1.5h2zm-2.5 0V7H6v1.5h2zm7.5 0V7h-2v1.5h2zm-2.5 2.5V9.5h-2V11h2zm-2.5 0V9.5H8.5V11h2zm-2.5 0V9.5H6V11h2zm7.5 0V9.5h-2V11h2zm-2.5 2.5V12h-2v1.5h2zm-2.5 0V12H8.5v1.5h2zm-2.5 0V12H6v1.5h2zm13.5-3.5c-.3-1.6-1.5-2.2-2.3-2.3-.3-.8-.9-1.5-1.7-1.8l-.8-.4-.4.8c-.5 1-1.1 1.7-2 2-1.2.4-3 .3-4.5.3H3.8c-.8 0-1.5.4-1.9 1.1-.3.6-.3 1.5 0 2.2.4.8 1.1 1.3 2 1.3h.8v.5c0 3.3 2.7 6 6 6h6.3c4.2 0 7.8-2.9 8.2-7.2.1-.6 0-1.1-.2-1.7z" fill="#2496ED" />
      </svg>
    );
  }

  // Zustand
  if (normalized.includes('zustand')) {
    return (
      <svg className={`${className} text-amber-500`} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" fill="#443E38" />
        <circle cx="9" cy="10" r="1.5" fill="#fff" />
        <circle cx="15" cy="10" r="1.5" fill="#fff" />
        <path d="M9 14.5c1 1.2 5 1.2 6 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // Laravel
  if (normalized.includes('laravel')) {
    return (
      <svg className={`${className} text-red-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8-3 1.7L9 6l3-1.8zM5 8.4l6 3.4v6.9l-6-3.3V8.4zm8 10.3v-6.9l6-3.4v7l-6 3.3z" fill="#FF2D20" />
      </svg>
    );
  }

  // PHP
  if (normalized.includes('php')) {
    return (
      <svg className={`${className} text-indigo-400`} viewBox="0 0 24 24" fill="currentColor">
        <rect width="20" height="14" x="2" y="5" rx="3" fill="#777BB4" />
        <text x="5" y="15" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">PHP</text>
      </svg>
    );
  }

  // Apache
  if (normalized.includes('apache')) {
    return (
      <svg className={`${className} text-red-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.8 2.5c-.8 2.1-2 4.2-3.4 6-1.5 2-3.3 3.8-5.2 5.3-.8.6-1.7 1.2-2.6 1.7-.5.3-1 .5-1.5.8l.9.6c1-.6 2-1.3 2.9-2.1 2.2-1.8 4.1-3.9 5.6-6.3 1.3-2 2.2-4.1 2.8-6.3l.5.3zM8.3 18.2c-.7.5-1.4 1-2.1 1.4-.4.2-.8.5-1.2.7l.7.5c.7-.5 1.5-1 2.2-1.6.3-.3.6-.5.9-.8l-.5-.2zm-3.5 2.5c-.7.4-1.4.8-2 1.3l.6.5c.8-.5 1.6-1 2.4-1.6l-1-.2z" fill="#D22128" />
        <path d="M12.4 8.7C10.7 11.2 8.7 13.5 6.4 15.4c-.6.5-1.3 1-2 1.5l.8.6c1-.6 1.9-1.3 2.8-2.1 2-1.8 3.8-3.9 5.1-6.2l-.7-.5z" fill="#9C2053" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes('node')) {
    return (
      <svg className={`${className} text-emerald-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" fill="#5FA04E" />
        <path d="M12 6.5l5 3v5l-5 3-5-3v-5l5-3z" fill="#fff" />
      </svg>
    );
  }

  // Express.js
  if (normalized.includes('express')) {
    return (
      <svg className={`${className} text-zinc-700 dark:text-zinc-300`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8M12 8l4 4-4 4" />
      </svg>
    );
  }

  // MySQL
  if (normalized.includes('mysql')) {
    return (
      <svg className={`${className} text-sky-600`} viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="7" rx="8" ry="3" fill="#00758F" />
        <path d="M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" stroke="#F29111" strokeWidth="2" fill="none" />
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" stroke="#00758F" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  // Firebase / Firestore
  if (normalized.includes('firebase') || normalized.includes('firestore')) {
    return (
      <svg className={`${className} text-amber-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 17.5L7 3l3.5 6.5-6 8zm15 0L17 7.5l-2.5 5 5 5zm-9.5-6L12 7l2 4.5-4 0zM12 21l-7.5-3.5 7.5-14 7.5 14L12 21z" fill="#FFA611" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg className={`${className} text-cyan-400`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C15 11.8 16.5 13 20 13c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C17 7.2 15.5 6 12 6zM6 13c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C9 18.8 10.5 20 14 20c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C11 14.2 9.5 13 6 13z" fill="#38BDF8" />
      </svg>
    );
  }

  // Nativewind
  if (normalized.includes('nativewind')) {
    return (
      <svg className={`${className} text-teal-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h12a4 4 0 1 0-4-4" />
        <path d="M2 17h16a3 3 0 1 0-3-3" />
      </svg>
    );
  }

  // Leaflet
  if (normalized.includes('leaflet')) {
    return (
      <svg className={`${className} text-emerald-600`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" fill="#199900" />
      </svg>
    );
  }

  // HTML / HTML5
  if (normalized === 'html' || normalized === 'html5') {
    return (
      <svg className={`${className} text-orange-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 3l1.8 15.6L12 21l6.2-2.4L20 3H4zm13.3 4.2l-.3 3.2H8.4l.2 2.2h8.3l-.6 6.3-4.3 1.2-4.3-1.2-.3-3.2h2.2l.2 1.5 2.2.6 2.2-.6.3-2.6H8l-.5-5.2h10l-.2-2.2H6.8L6.4 5.2h11.1l-.2 2z" fill="#E34F26" />
      </svg>
    );
  }

  // CSS / CSS3
  if (normalized === 'css' || normalized === 'css3') {
    return (
      <svg className={`${className} text-blue-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 3l1.8 15.6L12 21l6.2-2.4L20 3H4zm13.3 4.2l-.3 3.2H8.4l.2 2.2h8.3l-.6 6.3-4.3 1.2-4.3-1.2-.3-3.2h2.2l.2 1.5 2.2.6 2.2-.6.3-2.6H8l-.5-5.2h10l-.2-2.2H6.8L6.4 5.2h11.1l-.2 2z" fill="#1572B6" />
      </svg>
    );
  }

  // HTML2PDF / PDF
  if (normalized.includes('pdf')) {
    return (
      <svg className={`${className} text-rose-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z" fill="#E2574C" />
      </svg>
    );
  }

  // Axios
  if (normalized.includes('axios')) {
    return (
      <svg className={`${className} text-violet-500`} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" fill="#5A29E4" />
        <path d="M8 12l4-4 4 4M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }

  // Resend
  if (normalized.includes('resend')) {
    return (
      <svg className={`${className} text-zinc-800 dark:text-zinc-200`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 5h18v14H3V5zm2 2v1.5l7 4.5 7-4.5V7H5zm14 10V9.8l-7 4.5-7-4.5V17h14z" />
      </svg>
    );
  }

  // Vite
  if (normalized.includes('vite')) {
    return (
      <svg className={`${className} text-purple-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3 6.5l9 15.5 9-15.5L12 2z" fill="#646CFF" />
        <path d="M11 5l-4 2 5 9 5-9-4-2v4h-2V5z" fill="#FFD62E" />
      </svg>
    );
  }

  // Expo
  if (normalized.includes('expo')) {
    return (
      <svg className={`${className} text-zinc-900 dark:text-white`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 19L12 4l8 15H4zm8-10.5L7.5 17h9L12 8.5z" />
      </svg>
    );
  }

  // Git
  if (normalized === 'git' || normalized.includes('git ') || normalized.includes('github')) {
    return (
      <svg className={`${className} text-orange-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.7 10.3l-8-8c-.4-.4-1.1-.4-1.5 0l-1.9 1.9 2.5 2.5c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l2.4 2.4c.5-.2 1.1-.1 1.5.3.6.6.6 1.6 0 2.2-.6.6-1.6.6-2.2 0-.4-.4-.5-1-.3-1.5L13.6 9.5v5.3c.2.2.4.4.4.8 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.6.4-.8V9.4c-.2-.2-.4-.4-.4-.8 0-.5.2-.9.5-1.2L8.5 4.9 2.3 11.1c-.4.4-.4 1.1 0 1.5l8 8c.4.4 1.1.4 1.5 0l9.9-9.9c.4-.4.4-1.1 0-1.4z" fill="#F05032" />
      </svg>
    );
  }

  // XAMPP
  if (normalized.includes('xampp')) {
    return (
      <svg className={`${className} text-amber-600`} viewBox="0 0 24 24" fill="currentColor">
        <rect width="18" height="18" x="3" y="3" rx="3" fill="#FB7A24" />
        <path d="M7 7l10 10M17 7L7 17" stroke="#fff" strokeWidth="2.5" />
      </svg>
    );
  }

  // Electron
  if (normalized.includes('electron')) {
    return (
      <svg className={`${className} text-cyan-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="2.5" fill="#47848F" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
      </svg>
    );
  }

  // Python
  if (normalized.includes('python')) {
    return (
      <svg className={`${className} text-blue-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3V5h6v1.5H7.5S4 6.2 4 10.3c0 4.1 3.1 3.9 3.1 3.9h1.8v-2.3c0-1.7 1.4-3.1 3.1-3.1h4.6c1.3 0 2.3-1 2.3-2.3V4.3C18.9 3 15 2 11.9 2zm-1.8 1.9c.5 0 .9.4.9.9 0 .5-.4.9-.9.9-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9z" fill="#387EB8" />
        <path d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3V19h-6v-1.5h7.5s3.5.3 3.5-3.8c0-4.1-3.1-3.9-3.1-3.9h-1.8v2.3c0 1.7-1.4 3.1-3.1 3.1H7.4c-1.3 0-2.3 1-2.3 2.3v2.5C5.1 21 9 22 12.1 22zm1.8-1.9c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9.5 0 .9.4.9.9 0 .5-.4.9-.9.9z" fill="#FFE052" />
      </svg>
    );
  }

  // C#
  if (normalized.includes('c#') || normalized.includes('csharp')) {
    return (
      <svg className={`${className} text-purple-600`} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="#9B4993" />
        <text x="5" y="16" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">C#</text>
      </svg>
    );
  }

  // VS Code
  if (normalized.includes('vs code') || normalized.includes('vscode')) {
    return (
      <svg className={`${className} text-sky-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 2.5l4 2v15l-4 2-9-7.5 9-11.5zm-5 9.5L5 6 2.5 8l6 4-6 4L5 18l7.5-6z" fill="#007ACC" />
      </svg>
    );
  }

  // Default fallback code icon
  return (
    <svg className={`${className} text-zinc-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
