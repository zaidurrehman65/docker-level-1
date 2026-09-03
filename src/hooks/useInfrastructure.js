import { useState } from "react";
import { serviceInfo, incidentCatalog } from "../data/infrastructure";

// All simulation state and actions live here. This is a 1:1 extraction of
// the original App.jsx logic (same behavior, same function names) so pulling
// it out of the component does not change how the simulation works.
export function useInfrastructure() {
  const [services, setServices] = useState({
    api: "HEALTHY",
    database: "HEALTHY",
    nginx: "HEALTHY",
  });

  const [incident, setIncident] = useState(null);
  const [logs, setLogs] = useState([]);
  const [history, setHistory] = useState([]);

  const [settings, setSettings] = useState({
    simulationMode: "Development",
    autoRecovery: false,
    criticalOnly: false,
  });

  const addLog = (level, message) => {
    const time = new Date().toLocaleTimeString();

    setLogs((prev) => [
      {
        time,
        level,
        message,
      },
      ...prev,
    ]);
  };

  const createIncident = () => {
    const availableIncidents = incidentCatalog.filter((item) => {
      if (settings.criticalOnly) {
        return item.severity === "CRITICAL";
      }

      return true;
    });

    const random =
      availableIncidents[Math.floor(Math.random() * availableIncidents.length)];

    setServices((prev) => ({
      ...prev,
      [random.service]: "DOWN",
    }));

    const now = Date.now();

    const newIncident = {
      id: now,
      ...random,
      status: "ACTIVE",
      createdAt: new Date().toLocaleTimeString(),
      createdAtTs: now,
    };

    setIncident(newIncident);
    setHistory((prev) => [newIncident, ...prev]);

    addLog("INFO", "Incident detected");
    addLog("ERROR", `${serviceInfo[random.service].name}: ${random.message}`);
    addLog("CRITICAL", `${serviceInfo[random.service].name} is DOWN`);

    if (settings.autoRecovery) {
      setTimeout(() => {
        setServices((prev) => ({
          ...prev,
          [random.service]: "HEALTHY",
        }));

        addLog("SUCCESS", `${serviceInfo[random.service].name} automatically recovered`);

        const recoveredAtTs = Date.now();

        setHistory((prev) =>
          prev.map((item) =>
            item.id === newIncident.id
              ? {
                  ...item,
                  status: "RECOVERED",
                  recoveredAt: new Date().toLocaleTimeString(),
                  recoveredAtTs,
                }
              : item
          )
        );

        setIncident(null);
      }, 3000);
    }
  };

  const recoverService = () => {
    if (!incident) return;

    setServices((prev) => ({
      ...prev,
      [incident.service]: "HEALTHY",
    }));

    addLog("SUCCESS", `${serviceInfo[incident.service].name} recovered successfully`);

    const recoveredAtTs = Date.now();

    setHistory((prev) =>
      prev.map((item) =>
        item.id === incident.id
          ? {
              ...item,
              status: "RECOVERED",
              recoveredAt: new Date().toLocaleTimeString(),
              recoveredAtTs,
            }
          : item
      )
    );

    setIncident(null);
  };

  const clearLogs = () => setLogs([]);

  const clearHistory = () => {
    setHistory([]);
    setIncident(null);
  };

  const resetEnvironment = () => {
    setServices({
      api: "HEALTHY",
      database: "HEALTHY",
      nginx: "HEALTHY",
    });

    setIncident(null);
    setLogs([]);
    setHistory([]);

    addLog("INFO", "Infrastructure environment reset");
  };

  const healthyCount = Object.values(services).filter(
    (status) => status === "HEALTHY"
  ).length;

  const downCount = Object.values(services).filter(
    (status) => status === "DOWN"
  ).length;

  const activeIncidents = history.filter((item) => item.status === "ACTIVE").length;

  const recoveredIncidents = history.filter(
    (item) => item.status === "RECOVERED"
  ).length;

  // Mean time to recovery, computed from real recorded timestamps of
  // resolved incidents only (no invented numbers).
  const resolvedDurations = history
    .filter((item) => item.status === "RECOVERED" && item.createdAtTs && item.recoveredAtTs)
    .map((item) => item.recoveredAtTs - item.createdAtTs);

  const mttrSeconds =
    resolvedDurations.length > 0
      ? Math.round(
          resolvedDurations.reduce((sum, ms) => sum + ms, 0) /
            resolvedDurations.length /
            1000
        )
      : null;

  return {
    services,
    incident,
    logs,
    history,
    settings,
    setSettings,
    createIncident,
    recoverService,
    clearLogs,
    clearHistory,
    resetEnvironment,
    healthyCount,
    downCount,
    activeIncidents,
    recoveredIncidents,
    mttrSeconds,
  };
}
