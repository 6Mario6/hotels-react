const InputDate = ({icon, handleChange , value, name}) => (
    
  <div className="container-date">
    <i className={`fa ${icon}`} aria-hidden="true"></i>
    <input 
    defaultValue={value}
    name={name} onChange={handleChange}  className="input-date" type="date"></input>
  </div>
);
