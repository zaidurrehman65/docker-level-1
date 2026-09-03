// Small hand-built icon set. Everything is inline SVG so it renders
// identically everywhere with zero network requests and no icon library
// dependency.

const paths = {
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  "alert-triangle": (
    <>
      <path d="M12 3.5 21 19H3L12 3.5Z" />
      <path d="M12 9.5v4" />
      <path d="M12 16.5h.01" />
    </>
  ),
  list: (
    <>
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3 6h.01" />
      <path d="M3 12h.01" />
      <path d="M3 18h.01" />
    </>
  ),
  activity: <path d="M3 12h4l2.5-7L14 19l2.5-7H21" />,
  settings: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
    </>
  ),
  server: (
    <>
      <rect x="3.5" y="4" width="17" height="6.5" rx="1.4" />
      <rect x="3.5" y="13.5" width="17" height="6.5" rx="1.4" />
      <path d="M7 7.2h.01M7 16.7h.01" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="4.5" r="2.2" />
      <circle cx="5" cy="18.5" r="2.2" />
      <circle cx="19" cy="18.5" r="2.2" />
      <path d="M12 6.7v4.3M12 11l-5.6 5.6M12 11l5.6 5.6" />
    </>
  ),
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.2 12.3 2.6 2.6 5-5.3" />
    </>
  ),
  "x-circle": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m9 9 6 6M15 9l-6 6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.2V12l3.2 2" />
    </>
  ),
  "refresh-cw": (
    <>
      <path d="M20 8.5A8 8 0 0 0 6.3 5.3L4 7.5" />
      <path d="M4 3.5v4h4" />
      <path d="M4 15.5a8 8 0 0 0 13.7 3.2L20 16.5" />
      <path d="M20 20.5v-4h-4" />
    </>
  ),
  "trash-2": (
    <>
      <path d="M4.5 6.5h15" />
      <path d="M9 6.5V4.8c0-.7.6-1.3 1.3-1.3h3.4c.7 0 1.3.6 1.3 1.3v1.7" />
      <path d="M6.5 6.5 7.3 20a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-13.5" />
      <path d="M10.3 10.8v6.4M13.7 10.8v6.4" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="m20 20-4.6-4.6" />
    </>
  ),
  "chevron-down": <path d="m5.5 8.5 6.5 6.5 6.5-6.5" />,
  zap: <path d="M12.5 2 4 14h6.5L11 22l8.5-12H13z" />,
  shield: <path d="M12 2.8 4.5 5.8v5.4c0 5 3.2 8.6 7.5 10 4.3-1.4 7.5-5 7.5-10V5.8L12 2.8Z" />,
  user: (
    <>
      <circle cx="12" cy="8.2" r="3.5" />
      <path d="M4.8 20c0-3.9 3.2-6.5 7.2-6.5s7.2 2.6 7.2 6.5" />
    </>
  ),
  filter: <path d="M4 5h16l-6 7.2v6l-4 2v-8L4 5Z" />,
  "arrow-right": <path d="M4.5 12h15M13 5.5 19.5 12 13 18.5" />,
  "wifi-off": (
    <>
      <path d="M3 3l18 18" />
      <path d="M9.5 9.5a7.5 7.5 0 0 1 8.7 1.2M5.8 12.7A11.5 11.5 0 0 1 8.5 10.6" />
      <path d="M2.3 8.3A15.9 15.9 0 0 1 6 5.7" />
      <path d="M18 8.3c.7.5 1.3 1 1.9 1.7" />
      <path d="M12 19.2h.01" />
    </>
  ),
  inbox: (
    <>
      <path d="M4 12h4.2l1.4 2.8h4.8L15.8 12H20" />
      <path d="M4 12 6 4.7A1.5 1.5 0 0 1 7.4 3.5h9.2a1.5 1.5 0 0 1 1.4 1.2L20 12v6a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 18Z" />
    </>
  ),
};

function Icon({ name, size = 18, className = "", strokeWidth = 1.7 }) {
  const content = paths[name];

  if (!content) return null;

  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}

export default Icon;
