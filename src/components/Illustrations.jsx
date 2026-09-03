// Hand-built SVG illustrations used for empty states and small decorative
// moments. No external image files, so nothing to break later.

export function NoIncidentsIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="illustration" aria-hidden="true">
      <rect x="20" y="20" width="120" height="80" rx="10" className="ill-panel" />
      <rect x="34" y="36" width="60" height="8" rx="4" className="ill-line" />
      <rect x="34" y="52" width="92" height="8" rx="4" className="ill-line" />
      <rect x="34" y="68" width="40" height="8" rx="4" className="ill-line" />
      <circle cx="118" cy="82" r="18" className="ill-badge" />
      <path
        d="M110 82.5 116 88.5 128 74.5"
        fill="none"
        className="ill-check"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NoLogsIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="illustration" aria-hidden="true">
      <rect x="26" y="16" width="108" height="90" rx="8" className="ill-panel" />
      <rect x="40" y="32" width="80" height="6" rx="3" className="ill-line" />
      <rect x="40" y="46" width="60" height="6" rx="3" className="ill-line" />
      <rect x="40" y="60" width="70" height="6" rx="3" className="ill-line" />
      <rect x="40" y="74" width="45" height="6" rx="3" className="ill-line" />
      <circle cx="40" cy="35" r="2.6" className="ill-dot" />
      <circle cx="40" cy="49" r="2.6" className="ill-dot" />
      <circle cx="40" cy="63" r="2.6" className="ill-dot" />
      <circle cx="40" cy="77" r="2.6" className="ill-dot" />
    </svg>
  );
}

export function NoHistoryIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="illustration" aria-hidden="true">
      <circle cx="80" cy="58" r="38" className="ill-panel" />
      <path
        d="M80 40v20l14 8"
        fill="none"
        className="ill-check"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Small three-node topology graphic for the dashboard, colored by the
// live health of each service (green = healthy, red = down).
export function TopologyDiagram({ services }) {
  const color = (key) => (services[key] === "HEALTHY" ? "var(--ok)" : "var(--crit)");

  return (
    <svg viewBox="0 0 320 130" className="topology" aria-hidden="true">
      <path d="M160 30 L70 100" className="topology-edge" />
      <path d="M160 30 L250 100" className="topology-edge" />

      <g>
        <circle cx="160" cy="30" r="20" fill={color("api")} className="topology-node" />
        <text x="160" y="34" textAnchor="middle" className="topology-label">API</text>
      </g>

      <g>
        <circle cx="70" cy="100" r="20" fill={color("database")} className="topology-node" />
        <text x="70" y="104" textAnchor="middle" className="topology-label">DB</text>
      </g>

      <g>
        <circle cx="250" cy="100" r="20" fill={color("nginx")} className="topology-node" />
        <text x="250" y="104" textAnchor="middle" className="topology-label">Nginx</text>
      </g>
    </svg>
  );
}
