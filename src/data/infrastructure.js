// Static reference data for the simulated infrastructure.
// Keeping this separate from component/state logic makes it easy to see
// exactly what the "environment" looks like, and to extend later.

export const serviceInfo = {
  api: {
    name: "API Server",
    description: "Handles application API requests",
    icon: "server",
    port: "8080",
    type: "Compute",
  },
  database: {
    name: "Database",
    description: "Stores and manages application data",
    icon: "database",
    port: "5432",
    type: "Data store",
  },
  nginx: {
    name: "Nginx",
    description: "Reverse proxy and web server",
    icon: "network",
    port: "80",
    type: "Networking",
  },
};

// Catalog of incidents that can be randomly triggered.
// Severity values are restricted to the standard SRE scale:
// INFO / WARNING / ERROR / CRITICAL.
export const incidentCatalog = [
  {
    type: "API Crash",
    service: "api",
    message: "Connection refused",
    severity: "CRITICAL",
  },
  {
    type: "Database Failure",
    service: "database",
    message: "Database connection timeout",
    severity: "CRITICAL",
  },
  {
    type: "Nginx Failure",
    service: "nginx",
    message: "502 Bad Gateway",
    severity: "ERROR",
  },
];

export const navigation = [
  { name: "Dashboard", icon: "grid" },
  { name: "Services", icon: "layers" },
  { name: "Incidents", icon: "alert-triangle" },
  { name: "System Logs", icon: "list" },
  { name: "Monitoring", icon: "activity" },
  { name: "Settings", icon: "settings" },
];
