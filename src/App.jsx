import { useState } from "react";
import "./App.css";

import { useInfrastructure } from "./hooks/useInfrastructure";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardPage from "./pages/DashboardPage";
import ServicesPage from "./pages/ServicesPage";
import IncidentsPage from "./pages/IncidentsPage";
import LogsPage from "./pages/LogsPage";
import MonitoringPage from "./pages/MonitoringPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const infra = useInfrastructure();

  const renderPage = () => {
    switch (currentPage) {
      case "Services":
        return <ServicesPage infra={infra} />;
      case "Incidents":
        return <IncidentsPage infra={infra} />;
      case "System Logs":
        return <LogsPage infra={infra} />;
      case "Monitoring":
        return <MonitoringPage infra={infra} />;
      case "Settings":
        return <SettingsPage infra={infra} />;
      default:
        return <DashboardPage infra={infra} />;
    }
  };

  return (
    <div className="app">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="main-content">
        <Topbar />
        {renderPage()}

        <footer>Infrastructure Disaster Lab • DevOps Practice Environment</footer>
      </main>
    </div>
  );
}

export default App;
