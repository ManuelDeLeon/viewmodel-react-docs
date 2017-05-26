Loops({
  people: [
    { id: 1, firstName: 'A', lastName: 'B' },
    { id: 2, firstName: 'C', lastName: 'D' }
  ],
  render(){
    <div class="ui segment">
      <h2 class="ui header">Loops</h2>
      <a class="anchor active" id="BasicsLoops"></a>
      <p>
        Let's say you have the following List component:
      </p>
<pre><code>List({
  colors: [
    { id: 1, color: "Red" },
    { id: 2, color: "Green"},
    { id: 3, color: "Blue"}
  ],
  render(){
    <ul>
      // Add list item for each entry in colors
    </ul>
  }
})</code></pre>

      <p>And also the following ListItem component:</p>

<pre><code>ListItem({
  color: '',
  render() {
    <li b="text: color, style: { color: color }" />
  }
});</code></pre>

      <p>
        You can add the list items with a map:
      </p>
<pre><code>List({
  colors: [
    { id: 1, color: "Red" },
    { id: 2, color: "Green"},
    { id: 3, color: "Blue"}
  ],
  render(){
    <ul>
      {this.colors().map( function(color) {
        return <ListItem {...color} key={color.id} />
      })}
    </ul>
  }
})</code></pre>

      <p>
        Or you can just use the repeat binding to make things more readable:
      </p>
<pre><code>List({
  colors: [
    { id: 1, color: "Red" },
    { id: 2, color: "Green"},
    { id: 3, color: "Blue"}
  ],
  render(){
    <ul>
      <ListItem b="repeat: colors, key: id" />
    </ul>
  }
})</code></pre>

      <hr/>
      <h3>Result:</h3>
      <List />

    </div>
  }
});