const today = new Date().getFullYear() + '-' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '-' + ('0' + new Date().getDate()).slice(-2);

const countries = [{value: "", text: "Todos los países"}, {value: "Argentina", text: "Argentina"}, 
{value: "Brasil", text: "Brasil"}, {value: "Chile", text: "Chile"}, {value: "Uruguay", text: "Uruguay"}];

const prices = [{value: '', text: 'Cualquier precio'}, {value: 1, text: '$'}, {value: 2, text: '$$'}, {value: 3, text: '$$$'}, {value: 4, text: '$$$$'}];

const rooms = [{value: '', text: 'Cualquier tamaño'}, {value: 'Hotel pequeño', text: 'Hotel pequeño'}, 
{value: 'Hotel mediano', text: 'Hotel mediano'}, {value: 'Hotel grande', text: 'Hotel grande'}];

const months = [
  "enero", "febrero", "marzo",
  "abril", "mayo", "junio", "julio",
  "agosto", "septiembre", "octubre",
  "noviembre", "diciembre"
]

const days = [
  "domingo", "lunes", "martes", "miercoles",
  "jueves", "viernes", "sabado"
]

const formatDate = (dateT) => {
  const date = new Date(dateT.replace(/-/g, '\/'));
  const numberDay = date.getDate();
  const day = date.getDay();
  const month = date.getMonth();
  const yyy = date.getFullYear();
  return `${days[day]}, ${numberDay} de ${months[month]} ${yyy}`
  return true;
}

const Header = ({handleChangeSelect, handleChangeDate, availabilityFrom, availabilityTo}) => (
  <div className="header">
    <header className="container">
      <div className="content-header">
        <h1>Hoteles</h1>
        <p> 
        {availabilityFrom ? <span>desde el <strong>{formatDate(availabilityFrom)} </strong></span>: null } 
        { availabilityTo ? <span>hasta <strong>{formatDate(availabilityTo)}</strong></span> : null }
        </p>
      </div>
      <div className="content-filter">
          <InputDate handleChange={handleChangeDate}  name="availabilityFrom"  icon="fa-sign-in"></InputDate>
          <InputDate  handleChange={handleChangeDate} name="availabilityTo"  icon="fa-sign-out"></InputDate>
          <InputSelect handleChange={handleChangeSelect} options={countries} name="country"  icon="fa-globe" ></InputSelect>
          <InputSelect handleChange={handleChangeSelect} options={prices} name="price" icon="fa-usd" ></InputSelect>
          <InputSelect handleChange={handleChangeSelect} options={rooms} name="rooms" icon="fa-bed" ></InputSelect>
      </div>
    </header>
  </div>
);