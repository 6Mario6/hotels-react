const Directory = ({sections}) => (
  <div className="directory">
  {sections.map(({ id, ...otherSectionProps }) => (
    <CardItem key={id} {...otherSectionProps} />
  ))}
</div>
)