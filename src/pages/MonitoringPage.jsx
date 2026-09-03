import { serviceInfo } from "../data/infrastructure";
import Icon from "../components/Icon";
import MiniBarChart from "../components/MiniBarChart";

function MonitoringPage({ infra }) {
  const { services, activeIncidents, recoveredIncidents, mttrSeconds, healthyCount, downCount } =
    infra;

  const availabilityPct = Math.round((healthyCount / 3) * 100);

  return (
    <>
      <div className="page-heading">
        <div>
          <h1>Monitoring</h1>
          <p>Infrastructure health and availability metrics, derived from the current simulation state.</p>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <span>Fleet Availability</span>
          <strong className={availabilityPct === 100 ? "green-text" : "red-text"}>
            {availabilityPct}%
          </strong>
          <small>{healthyCount} of 3 services healthy</small>
        </div>

        <div className="metric-card">
          <span>Services Down</span>
          <strong className="red-text">{downCount}</strong>
          <small>Currently unavailable</small>
        </div>

        <div className="metric-card">
          <span>Mean Time To Recovery</span>
          <strong>{mttrSeconds !== null ? `${mttrSeconds}s` : "—"}</strong>
          <small>{mttrSeconds !== null ? "Average across recovered incidents" : "No recovered incidents yet"}</small>
        </div>
      </div>

      <div className="monitor-grid">
        {Object.keys(serviceInfo).map((key) => {
          const healthy = services[key] === "HEALTHY";

          return (
            <div className="monitor-card" key={key}>
              <div className={`monitor-circle ${healthy ? "" : "monitor-circle-down"}`}>
                <Icon name={healthy ? "check-circle" : "x-circle"} size={26} />
              </div>

              <h2>{serviceInfo[key].name}</h2>

              <strong className={healthy ? "green-text" : "red-text"}>
                {healthy ? "Operational" : "Down"}
              </strong>

              <div className="monitor-metric">
                <span>Availability</span>
                <b>{healthy ? "99.98%" : "0.00%"}</b>
              </div>

              <div className="monitor-metric">
                <span>Response</span>
                <b>{healthy ? "24 ms" : "Timeout"}</b>
              </div>
            </div>
          );
        })}
      </div>

      <div className="panel chart-panel">
        <div className="section-title">
          <h2>Incident Outcomes</h2>
          <p>Active vs. recovered incidents in this session</p>
        </div>

        <MiniBarChart
          bars={[
            { label: "Active", value: activeIncidents, tone: "warning" },
            { label: "Recovered", value: recoveredIncidents, tone: "healthy" },
          ]}
        />
      </div>
    </>
  );
}

export default MonitoringPage;
