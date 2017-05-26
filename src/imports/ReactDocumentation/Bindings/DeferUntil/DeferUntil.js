DeferUntil({
  show: false,
  render(){
    <div class="ui segment">
      <h2 class="ui header">if</h2>
      <a class="anchor active" id="BindingsDeferUntil"></a>
      <p>
        If you're using WebPack you can use the deferUntil binding to defer the loading of a component on the client until a certain condition is true. This is a very convenient way to split a large application by major components.
      </p>
      <pre><code>b="deferUntil: property"</code></pre>

      <p>In the following example the component Hello won't be loaded on the client until the user ticks the checkbox (making "show" to be true).</p>

<pre><code>Hello({
  render(){
    <h1>Hello</h1>
  }
})

Example({
  show: false,
  render() {
    <div>
      <input b="check: show" type="checkbox" /> Show Greeting
      <Hello b="deferUntil: show" />
    </div>
  }
})</code></pre>
    </div>
  }
})