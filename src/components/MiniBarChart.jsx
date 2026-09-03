// A small dependency-free bar chart. Bars are proportional to the values
// passed in - there is no invented/random data here, only whatever the
// caller computed from real simulation state.
function MiniBarChart({ bars, height = 120 }) {
  const max = Math.max(1, ...bars.map((b) => b.value));

  return (
    <div className="mini-chart" style={{ height }}>
      {bars.map((bar) => {
        const barHeight = Math.max(4, (bar.value / max) * (height - 28));

        return (
          <div className="mini-chart-col" key={bar.label}>
            <span className="mini-chart-value">{bar.value}</span>
            <div
              className={`mini-chart-bar tone-${bar.tone || "info"}`}
              style={{ height: barHeight }}
            />
            <span className="mini-chart-label">{bar.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default MiniBarChart;
