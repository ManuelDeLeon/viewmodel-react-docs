ViewModel.share({
  colorSelection: {
    selectedColor: ''
  }
})

SharedState({
  render(){
    <div class="ui segment">
      <h2 class="ui header">Shared State</h2>
      <a class="anchor active" id="BasicsSharedState"></a>
      <p>
        Most of the time you want to keep your components isolated but there are cases when two components need to shared some piece of state. The typical example is a master-detail view. In that case you can create a shared bucket of state which will be shared by two or more components.
      </p>

      <p>For example, let's create two components, one that displays a list of colors and another that displays information about the selected color:</p>

<pre><code>ViewModel.share({
  colorSelection: {
    selectedColor: ''
  }
})</code></pre>

<pre><code>Colors({
  share: 'colorSelection',
  colors: [ 'red', 'green', 'blue' ],
  render(){
    <ul>
      <li b="repeat: colors, text: repeatObject, click: selectedColor(repeatObject)" />
    </ul>
  }
})</code></pre>

<pre><code>ColorDetail({
  share: 'colorSelection',
  render() {
  <div>
  Color: <span b="text: selectedColor, style: { color: selectedColor }" />
  </div>
}
});</code></pre>

      <p>They both share the property selectedColor so when Colors changes the selected color (a click on a list item) ColorDetail picks up the change and displays the information about the color selected.</p>

      <hr/>
      <h3>Result:</h3>
      <Colors />
      <ColorDetail />
    </div>
  }
});