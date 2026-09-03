import { serviceInfo } from "../data/infrastructure";
import StatCard from "../components/StatCard";
import ServiceCard from "../components/ServiceCard";
import StatusPill from "../components/StatusPill";
import EmptyState from "../components/EmptyState";
import { NoLogsIllustration, NoHistoryIllustration, TopologyDiagram } from "../components/Illustrations";
import Icon from "../components/Icon";

function DashboardPage({ infra }) {
  const {
    services,
    incident,
    logs,
    history,
    settings,
    createIncident,
    recoverService,
    healthyCount,
    downCount,
    activeIncidents,
    recoveredIncidents,
  } = infra;

  return (
    <>
      <div className="page-heading">
        <div>
          <h1>Infrastructure Dashboard</h1>
          <p>Monitor and manage your simulated production environment.</p>
        </div>

        <div className="mode-badge">● Simulation Mode</div>
      </div>

      <div className="metrics-grid">
        <StatCard label="Total Services" value={3} hint="Infrastructure components" />
        <StatCard
          label="Healthy"
          value={healthyCount}
          hint="Services operational"
          tone="green"
        />
        <StatCard label="Services Down" value={downCount} hint="Requires attention" tone="red" />
        <StatCard
          label="Active Incidents"
          value={activeIncidents}
          hint="Currently unresolved"
          tone="orange"
        />
      </div>

      <div className="dashboard-split">
        <div>
          <div className="section-title">
            <h2>Infrastructure Status</h2>
            <p>Current health of your services</p>
          </div>

          <div className="services-grid">
            {Object.keys(serviceInfo).map((key) => (
              <ServiceCard
                key={key}
                serviceKey={key}
                service={serviceInfo[key]}
                status={services[key]}
              />
            ))}
          </div>
        </div>

        <div className="panel topology-panel">
          <div className="section-title">
            <h2>Service Topology</h2>
            <p>Live health of the request path</p>
          </div>

          <TopologyDiagram services={services} />
        </div>
      </div>

      <div className="action-card">
        <div>
          <h2>Test Your Infrastructure</h2>
          <p>Create a simulated production incident and practice troubleshooting and recovery.</p>
        </div>

        <button onClick={createIncident}>
          <Icon name="zap" size={14} />
          Create Random Incident
        </button>
      </div>

      {incident && (
        <div className="incident-alert">
          <div>
            <StatusPill value={incident.severity} />
            <h2>{incident.type}</h2>
            <p>
              {serviceInfo[incident.service].name} — {incident.message}
            </p>
          </div>

          {!settings.autoRecovery && (
            <button onClick={recoverService}>Recover Service</button>
          )}
        </div>
      )}

      <div className="bottom-grid">
        <div className="panel">
          <div className="panel-header">
            <div>
              <h2>System Logs</h2>
              <p>Latest infrastructure events</p>
            </div>
          </div>

          <div className="logs">
            {logs.length === 0 ? (
              <EmptyState
                illustration={<NoLogsIllustration />}
                message="No events recorded yet."
              />
            ) : (
              logs.slice(0, 6).map((log, index) => (
                <div className="log-row" key={index}>
                  <span>{log.time}</span>
                  <b className={`log-${log.level.toLowerCase()}`}>{log.level}</b>
                  <p>{log.message}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="panel statistics-panel">
          <h2>Incident Statistics</h2>

          <div className="stat-row">
            <span>Total Incidents</span>
            <strong>{history.length}</strong>
          </div>

          <div className="stat-row">
            <span>Active</span>
            <strong className="orange-text">{activeIncidents}</strong>
          </div>

          <div className="stat-row">
            <span>Recovered</span>
            <strong className="green-text">{recoveredIncidents}</strong>
          </div>
        </div>
      </div>

      <div className="panel history-panel">
        <div className="panel-header">
          <div>
            <h2>Incident History</h2>
            <p>Previous infrastructure incidents</p>
          </div>
        </div>

        {history.length === 0 ? (
          <EmptyState
            illustration={<NoHistoryIllustration />}
            message="No incidents yet. Create one to start testing."
          />
        ) : (
          <div className="history-list">
            {history.map((item) => (
              <div className="history-row" key={item.id}>
                <div>
                  <strong>{item.type}</strong>
                  <span>{serviceInfo[item.service].name}</span>
                </div>

                <StatusPill value={item.status} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default DashboardPage;
