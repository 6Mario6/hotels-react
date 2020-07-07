const InputSelect = ({handleChange, icon, options, name }) => (
  <div className="container-select">
    <i className={`fa ${icon}`} aria-hidden="true"></i>
    <select
    name = {name}
    onChange={handleChange} 
    className="input-select">

    {options.map(({value, text}, index) => (
    <option key={index} value={value}>{text}</option>
    ))}

    </select>
    <i className="fa fa-angle-down" aria-hidden="true"></i>
  </div>
);
