import Icon from "./Icon";
import StatusPill from "./StatusPill";

function ServiceCard({ service, status }) {
  const healthy = status === "HEALTHY";

  return (
    <div className={`service-card ${healthy ? "" : "service-card-down"}`}>
      <div className="service-top">
        <div className="service-icon">
          <Icon name={service.icon} size={20} />
        </div>

        <StatusPill value={status} />
      </div>

      <h3>{service.name}</h3>
      <p>{service.description}</p>

      <div className="service-details">
        <div>
          <span>Port</span>
          <strong>{service.port}</strong>
        </div>

        <div>
          <span>Type</span>
          <strong>{service.type}</strong>
        </div>

        <div>
          <span>Uptime</span>
          <strong>{healthy ? "99.98%" : "0.00%"}</strong>
        </div>
      </div>

      <div className={`service-footer ${healthy ? "" : "problem"}`}>
        {healthy ? "Service operating normally" : "Service requires attention"}
      </div>
    </div>
  );
}

export default ServiceCard;
