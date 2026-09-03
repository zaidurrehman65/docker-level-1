import Icon from "../components/Icon";

function SettingsPage({ infra }) {
  const { settings, setSettings, clearLogs, clearHistory, resetEnvironment } = infra;

  return (
    <>
      <div className="page-heading">
        <div>
          <h1>Settings</h1>
          <p>Configure your Infrastructure Disaster Lab.</p>
        </div>
      </div>

      <div className="settings-grid">
        <div className="panel settings-section">
          <div className="settings-heading">
            <div>
              <h2>Simulation Configuration</h2>
              <p>Control how incidents behave.</p>
            </div>
          </div>

          <div className="setting-item">
            <div>
              <strong>Simulation Mode</strong>
              <span>Choose the environment used by the simulator.</span>
            </div>

            <select
              value={settings.simulationMode}
              onChange={(e) =>
                setSettings((prev) => ({ ...prev, simulationMode: e.target.value }))
              }
            >
              <option>Development</option>
              <option>Staging</option>
              <option>Production</option>
            </select>
          </div>

          <div className="setting-item">
            <div>
              <strong>Auto Recovery</strong>
              <span>Automatically recover failed services after 3 seconds.</span>
            </div>

            <button
              className={`toggle ${settings.autoRecovery ? "on" : ""}`}
              onClick={() =>
                setSettings((prev) => ({ ...prev, autoRecovery: !prev.autoRecovery }))
              }
            >
              <span></span>
            </button>
          </div>

          <div className="setting-item">
            <div>
              <strong>Critical Incidents Only</strong>
              <span>Only generate CRITICAL severity incidents.</span>
            </div>

            <button
              className={`toggle ${settings.criticalOnly ? "on" : ""}`}
              onClick={() =>
                setSettings((prev) => ({ ...prev, criticalOnly: !prev.criticalOnly }))
              }
            >
              <span></span>
            </button>
          </div>
        </div>

        <div className="panel settings-section">
          <div className="settings-heading">
            <div>
              <h2>Environment Controls</h2>
              <p>Manage simulation data.</p>
            </div>
          </div>

          <button className="settings-action" onClick={clearLogs}>
            <span>
              <Icon name="list" size={16} />
            </span>

            <div>
              <strong>Clear System Logs</strong>
              <small>Remove all generated infrastructure logs.</small>
            </div>
          </button>

          <button className="settings-action" onClick={clearHistory}>
            <span>
              <Icon name="trash-2" size={16} />
            </span>

            <div>
              <strong>Clear Incident History</strong>
              <small>Remove all previous incident records.</small>
            </div>
          </button>

          <button className="settings-action danger" onClick={resetEnvironment}>
            <span>
              <Icon name="refresh-cw" size={16} />
            </span>

            <div>
              <strong>Reset Environment</strong>
              <small>Restore services and clear simulation data.</small>
            </div>
          </button>
        </div>
      </div>

      <div className="panel environment-status">
        <h2>Current Environment</h2>

        <div className="environment-grid">
          <div>
            <span>Mode</span>
            <strong>{settings.simulationMode}</strong>
          </div>

          <div>
            <span>Auto Recovery</span>
            <strong>{settings.autoRecovery ? "Enabled" : "Disabled"}</strong>
          </div>

          <div>
            <span>Incident Filter</span>
            <strong>{settings.criticalOnly ? "Critical Only" : "All Severities"}</strong>
          </div>

          <div>
            <span>Environment Status</span>
            <strong className="green-text">Operational</strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsPage;
