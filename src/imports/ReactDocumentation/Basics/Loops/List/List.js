List({
  items: [ 'one', 'two', 'three' ],
  selected: 'one',
  render(){
    <ul>
      {this.items().map( (item, i) =>
        <ListItem text={item} key={i} />
      )}
    </ul>
  }
});