class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: hotelsData,
      availabilityFrom: "",
      availabilityTo: "",
      country: "",
      price: "",
      rooms: "",
    };
  }

  handleChangeSelect = event => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  }

  handleChangeDate = event => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  }

  filterCountry = (sectionCountry, stateCountry ) => (
    sectionCountry.toLowerCase().includes(stateCountry.toLowerCase())
  )

  filterPrice = (sectionPrice, statePrice ) => (
    `${sectionPrice}`.includes(statePrice)
  )

  filterRooms = (sectionRooms, stateRooms ) => {
    switch (stateRooms) {
      case 'Hotel pequeño':
        return sectionRooms <= 10;
      case 'Hotel mediano':
        return sectionRooms > 10 && sectionRooms <= 20;
      case 'Hotel grande':
        return sectionRooms > 20;
      default:
        return true;
    }
  }

  filterDate(availability, availabilityState) {
    let formatDate =this.dateString(new Date(availability));
    return formatDate.includes(availabilityState);
  }

  dateString(date) {
    return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
  }

  render() {
    const {sections ,country, price, rooms, availabilityFrom, availabilityTo} = this.state;
    const filteredHotels = sections.filter(hotel => 
      {
        return this.filterCountry(hotel.country, country) &&
               this.filterPrice(hotel.price, price) && 
               this.filterRooms(hotel.rooms, rooms) && 
               this.filterDate(hotel.availabilityFrom,  availabilityFrom) && 
               this.filterDate(hotel.availabilityTo,  availabilityTo)
      }
    );
    return (
      <div>
        <Header 
        availabilityFrom = {availabilityFrom}
        availabilityTo = {availabilityTo}
        handleChangeDate={this.handleChangeDate} 
        handleChangeSelect={this.handleChangeSelect}></Header>
        <Directory sections={filteredHotels}></Directory>
      </div>
    );
  }
}
