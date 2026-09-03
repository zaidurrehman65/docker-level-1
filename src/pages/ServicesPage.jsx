import { serviceInfo } from "../data/infrastructure";
import ServiceCard from "../components/ServiceCard";
import StatusPill from "../components/StatusPill";

function ServicesPage({ infra }) {
  const { services, healthyCount, downCount } = infra;

  return (
    <>
      <div className="page-heading">
        <div>
          <h1>Services</h1>
          <p>Detailed status of infrastructure services.</p>
        </div>

        <div className="mode-badge">● Live Simulation</div>
      </div>

      <div className="service-summary">
        <div>
          <span>Total Services</span>
          <strong>3</strong>
        </div>

        <div>
          <span>Healthy</span>
          <strong className="green-text">{healthyCount}</strong>
        </div>

        <div>
          <span>Down</span>
          <strong className="red-text">{downCount}</strong>
        </div>
      </div>

      <div className="services-page-grid">
        {Object.keys(serviceInfo).map((key) => (
          <ServiceCard
            key={key}
            serviceKey={key}
            service={serviceInfo[key]}
            status={services[key]}
          />
        ))}
      </div>

      <div className="panel service-info-panel">
        <h2>Infrastructure Overview</h2>

        <div className="info-table">
          <div className="info-row info-head">
            <span>Service</span>
            <span>Status</span>
            <span>Port</span>
            <span>Role</span>
          </div>

          {Object.keys(serviceInfo).map((key) => (
            <div className="info-row" key={key}>
              <span>{serviceInfo[key].name}</span>
              <span>
                <StatusPill value={services[key]} />
              </span>
              <span>{serviceInfo[key].port}</span>
              <span>{serviceInfo[key].description}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
