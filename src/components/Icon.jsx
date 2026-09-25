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
  ),
  'arrow-right': (
    <path d="M5 12h14M13 6l6 6-6 6" />
  ),
  'arrow-up-right': (
    <path d="M7 17 17 7M8 7h9v9" />
  ),
  download: (
    <>
      <path d="M12 4v11M7 10l5 5 5-5" />
      <path d="M5 20h14" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.6-1.3 5.6-6a4.7 4.7 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.4 11.4 0 0 0-6 0C6.8 2.5 5.8 2.8 5.8 2.8a4.3 4.3 0 0 0-.1 3.2A4.7 4.7 0 0 0 4.4 9.2c0 4.6 2.9 5.7 5.6 6a3 3 0 0 0-.8 2.3V21" />
  ),
  'map-pin': (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
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
