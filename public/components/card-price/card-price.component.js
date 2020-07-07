const CardPrice = ({price}) => (
    <div className="card-price  center flex">
        <div className="price-container  center flex">
            {
               [...Array(4)].map((num, index)=> {
                   return <i key={index} className={`fa fa-usd ${index + 1 <= price ? "active" : ""}`}  aria-hidden="true"></i>
               })
            }
        </div>
    </div>
)