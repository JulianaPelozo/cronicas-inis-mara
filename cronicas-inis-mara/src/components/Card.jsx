export function ClaCard({ nome, elemento, lema }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{nome}</h3>
        <span className="card-badge">{elemento}</span>
      </div>
      <div className="card-divider" />
      <div className="card-content">
        <p className="card-lema">{lema}</p>
      </div>
    </div>
  );
}

export function PersonagemCard({ nome, cla, magia, status }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{nome}</h3>
        <span className="card-badge">{status}</span>
      </div>
      <div className="card-divider" />
      <div className="card-stats">
        <div className="stat-row">
          <span className="stat-label">Clã</span>
          <span className="stat-value">{cla}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Magia</span>
          <span className="stat-value">{magia}</span>
        </div>
      </div>
    </div>
  );
}