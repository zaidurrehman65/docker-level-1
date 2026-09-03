// Every status/severity value in the app maps to one of six tones, so
// color always means the same thing everywhere: healthy, warning, error,
// critical, recovered, offline.
const toneMap = {
  HEALTHY: "healthy",
  DOWN: "critical",
  ACTIVE: "warning",
  RECOVERED: "recovered",
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
  CRITICAL: "critical",
  OFFLINE: "offline",
};

function StatusPill({ value, label }) {
  const tone = toneMap[value] || "info";

  return (
    <span className={`status-pill tone-${tone}`}>
      <span className="status-dot" />
      {label || value}
    </span>
  );
}

export default StatusPill;
