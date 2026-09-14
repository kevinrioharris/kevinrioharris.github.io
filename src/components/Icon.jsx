import React from 'react';

const base = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};

const ICONS = {
  zap: (
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  ),
  'trending-up': (
    <>
      <path d="M3 17 9.5 10.5 14 15l7-7" />
      <path d="M15 8h6v6" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11a8 8 0 0 0-14.9-4M4 5v5h5" />
      <path d="M4 13a8 8 0 0 0 14.9 4M20 19v-5h-5" />
    </>
  ),
  tree: (
    <>
      <path d="M12 2 7 9h3l-4 6h4v5h4v-5h4l-4-6h3Z" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="9" width="16" height="11" rx="2" />
      <path d="M12 9V5m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M8 14h.01M16 14h.01M9 18h6" />
    </>
  ),
  'graduation-cap': (
    <>
      <path d="m2 9 10-5 10 5-10 5-10-5Z" />
      <path d="M6 11v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
      <path d="M22 9v6" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </>
  ),
  moon: (
    <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
  ),
  medal: (
    <>
      <circle cx="12" cy="15" r="6" />
      <path d="m9 10-3-6h3l3 6M15 10l3-6h-3l-3 6" />
      <path d="M12 12v6" />
    </>
  )
};

const Icon = ({ name, className, ...props }) => {
  const path = ICONS[name];
  if (!path) return null;
  return (
    <svg {...base} className={className} aria-hidden="true" focusable="false" {...props}>
      {path}
    </svg>
  );
};

export default Icon;
