const CardChip = ({icon, description}) => (
  <div className="card-chip">
      <div className="card-container">
        <div className="card-content">
        <div className="icon"> <i className={`fa ${icon}`} aria-hidden="true"></i></div>
        <div className="chip-description">{description}</div>
        </div>
      </div>
  </div>
)