import { useMemo, useState } from "react";
import FilterBar from "../components/FilterBar";
import EmptyState from "../components/EmptyState";
import { NoLogsIllustration } from "../components/Illustrations";
import Icon from "../components/Icon";

function LogsPage({ infra }) {
  const { logs, clearLogs } = infra;

  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("ALL");

  const filtered = useMemo(() => {
    return logs.filter((log) => {
      const matchesSearch =
        search.trim() === "" || log.message.toLowerCase().includes(search.toLowerCase());
      const matchesLevel = level === "ALL" || log.level === level;

      return matchesSearch && matchesLevel;
    });
  }, [logs, search, level]);

  return (
    <>
      <div className="page-heading">
        <div>
          <h1>System Logs</h1>
          <p>Complete infrastructure event stream.</p>
        </div>

        <button className="secondary-button" onClick={clearLogs}>
          <Icon name="trash-2" size={13} />
          Clear Logs
        </button>
      </div>

      <div className="panel logs-page">
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="Search log messages..."
          filters={[
            {
              label: "level",
              value: level,
              onChange: setLevel,
              options: ["ALL", "INFO", "SUCCESS", "ERROR", "CRITICAL"],
            },
          ]}
        />

        {logs.length === 0 ? (
          <EmptyState
            illustration={<NoLogsIllustration />}
            message="No logs available. Create an incident to generate logs."
          />
        ) : filtered.length === 0 ? (
          <div className="empty-state">No logs match your filters.</div>
        ) : (
          filtered.map((log, index) => (
            <div className="full-log-row" key={index}>
              <span>{log.time}</span>
              <b className={`log-${log.level.toLowerCase()}`}>{log.level}</b>
              <p>{log.message}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default LogsPage;
