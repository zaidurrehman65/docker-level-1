import Icon from "./Icon";

function Topbar() {
  return (
    <header className="topbar">
      <span className="topbar-title">
        <Icon name="activity" size={14} />
        Infrastructure Disaster Lab
      </span>

      <div className="user-badge">
        <Icon name="user" size={15} />
      </div>
    </header>
  );
}

export default Topbar;
