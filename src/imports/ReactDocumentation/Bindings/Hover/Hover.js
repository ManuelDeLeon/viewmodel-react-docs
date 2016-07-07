Hover({
  hovering: false,
  render(){
    <div class="ui segment">
      <h2 class="ui header">hover</h2>
      <a class="anchor active" id="BindingsHover"></a>
      <p>
        It sets the bound property to true when the mouse is over the element and false when it's not.
      </p>
      <pre><code>b="hover: property"</code></pre>

      <h3>hover demo</h3>

      <div class="ui segment basic">
        <button class="ui button" b="hover: hovering, class: { blue: hovering }">Hover over me</button>
      </div>

<pre><code>Example({
  hovering: false,
  render() {
    <div>
      <button b="hover: hovering, class: { blue: hovering }">Hover over me</button>
    </div>
  }
})</code></pre>
    </div>
  }
})