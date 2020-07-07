const today = new Date().toISOString().substring(0, 10);

const countries = [{value: "", text: "Todos los países"}, {value: "Argentina", text: "Argentina"}, 
{value: "Brasil", text: "Brasil"}, {value: "Chile", text: "Chile"}, {value: "Uruguay", text: "Uruguay"}];

const prices = [{value: '', text: 'Cualquier precio'}, {value: 1, text: '$'}, {value: 2, text: '$$'}, {value: 3, text: '$$$'}, {value: 4, text: '$$$$'}];

const rooms = [{value: '', text: 'Cualquier tamaño'}, {value: 'Hotel pequeño', text: 'Hotel pequeño'}, 
{value: 'Hotel mediano', text: 'Hotel mediano'}, {value: 'Hotel grande', text: 'Hotel grande'}];



const Header = ({handleChangeSelect, handleChangeDate}) => (
  <div className="header">
    <header className="container">
      <div className="content-header">
        <h1>Hoteles</h1>
        <p>desde el <strong> martes, 1 de enero 2019</strong> hasta <strong> miercoles, 1 de enero 2019</strong></p>
      </div>
      <div className="content-filter">
          <InputDate handleChange={handleChangeDate}  name="availabilityFrom"  value={today} icon="fa-sign-in"></InputDate>
          <InputDate  handleChange={handleChangeDate} name="availabilityTo"  icon="fa-sign-out"></InputDate>
          <InputSelect handleChange={handleChangeSelect} options={countries} name="country"  icon="fa-globe" ></InputSelect>
          <InputSelect handleChange={handleChangeSelect} options={prices} name="price" icon="fa-usd" ></InputSelect>
          <InputSelect handleChange={handleChangeSelect} options={rooms} name="rooms" icon="fa-bed" ></InputSelect>
      </div>
    </header>
  </div>
);