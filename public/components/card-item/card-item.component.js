const CardItem = ({ photo, slug, name, description, city, country, rooms, price }) => (
    <div className="card-item">
        <img className="img-item" src={photo} alt={slug}></img>
        <div className="content">
            <h1 className="title">{name}</h1>
            <p className="description">{description}</p>

            <div className="flex">
                <CardChip
                    icon="fa-map-marker"
                    description={`${country}, ${city}`}
                ></CardChip>
                <CardChip
                    icon="fa-bed"
                    description={`${rooms} Habitaciones`}
                ></CardChip>
                <CardPrice price={price} ></CardPrice>
            </div>
        </div>
        <CardButton title="Reservar"></CardButton>
    </div>
);
