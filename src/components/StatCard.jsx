function StatCard({ label, value, hint, tone }) {
  return (
    <div className="metric-card">
      <span>{label}</span>
      <strong className={tone ? `${tone}-text` : ""}>{value}</strong>
      {hint && <small>{hint}</small>}
    </div>
  );
}

export default StatCard;
