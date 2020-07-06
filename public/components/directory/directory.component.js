class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: hotelsData,
    };
  }
  render() {
    return (
      <div className="directory">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <CardItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
