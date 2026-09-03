import Icon from "./Icon";
import { navigation } from "../data/infrastructure";

function Sidebar({ currentPage, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <Icon name="shield" size={20} />
        </div>

        <div>
          <h2>Disaster Lab</h2>
          <span>DevOps Simulator</span>
        </div>
      </div>

      <nav>
        <p className="nav-title">MAIN MENU</p>

        {navigation.map((item) => (
          <button
            key={item.name}
            className={`nav-item ${currentPage === item.name ? "active" : ""}`}
            onClick={() => onNavigate(item.name)}
          >
            <Icon name={item.icon} size={17} />
            {item.name}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="environment">
          <span className="online-dot"></span>

          <div>
            <strong>Simulation Environment</strong>
            <small>All systems connected</small>
          </div>
        </div>

        <div className="version">v2.2 • Development</div>
      </div>
    </aside>
  );
}

export default Sidebar;
