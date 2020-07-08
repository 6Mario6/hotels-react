const Directory = ({sections}) => (
  <div className="directory">
  {
   sections.length > 0 ? sections.map(({ id, ...otherSectionProps }) => (
    <CardItem key={id} {...otherSectionProps} />
  )) : <div className="message"> <p>No se encuentran resultados de Hoteles</p></div>
  }
</div>
)