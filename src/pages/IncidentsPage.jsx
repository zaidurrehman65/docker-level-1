import { useMemo, useState } from "react";
import { serviceInfo } from "../data/infrastructure";
import StatCard from "../components/StatCard";
import StatusPill from "../components/StatusPill";
import FilterBar from "../components/FilterBar";
import EmptyState from "../components/EmptyState";
import { NoHistoryIllustration } from "../components/Illustrations";
import Icon from "../components/Icon";

function IncidentsPage({ infra }) {
  const { history, createIncident, activeIncidents, recoveredIncidents } = infra;

  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  const filtered = useMemo(() => {
    return history.filter((item) => {
      const matchesSearch =
        search.trim() === "" ||
        item.type.toLowerCase().includes(search.toLowerCase()) ||
        serviceInfo[item.service].name.toLowerCase().includes(search.toLowerCase());

      const matchesSeverity = severity === "ALL" || item.severity === severity;
      const matchesStatus = status === "ALL" || item.status === status;

      return matchesSearch && matchesSeverity && matchesStatus;
    });
  }, [history, search, severity, status]);

  return (
    <>
      <div className="page-heading">
        <div>
          <h1>Incidents</h1>
          <p>Track production incidents and recovery operations.</p>
        </div>

        <button className="primary-button" onClick={createIncident}>
          <Icon name="zap" size={13} />
          Create Incident
        </button>
      </div>

      <div className="metrics-grid">
        <StatCard label="Total Incidents" value={history.length} />
        <StatCard label="Active" value={activeIncidents} tone="orange" />
        <StatCard label="Recovered" value={recoveredIncidents} tone="green" />
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2>Incident List</h2>
            <p>All simulated production incidents</p>
          </div>
        </div>

        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="Search by incident or service..."
          filters={[
            {
              label: "severity",
              value: severity,
              onChange: setSeverity,
              options: ["ALL", "INFO", "WARNING", "ERROR", "CRITICAL"],
            },
            {
              label: "status",
              value: status,
              onChange: setStatus,
              options: ["ALL", "ACTIVE", "RECOVERED"],
            },
          ]}
        />

        {history.length === 0 ? (
          <EmptyState
            illustration={<NoHistoryIllustration />}
            message="No incidents available."
          />
        ) : filtered.length === 0 ? (
          <div className="empty-state">No incidents match your filters.</div>
        ) : (
          <div className="incident-table">
            <div className="incident-row incident-row-head">
              <span>Incident</span>
              <span>Severity</span>
              <span className="incident-time">Created</span>
              <span>Status</span>
            </div>

            {filtered.map((item) => (
              <div className="incident-row" key={item.id}>
                <div>
                  <strong>{item.type}</strong>
                  <span>{serviceInfo[item.service].name}</span>
                </div>

                <StatusPill value={item.severity} />

                <span className="incident-time">{item.createdAt}</span>

                <StatusPill value={item.status} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default IncidentsPage;
