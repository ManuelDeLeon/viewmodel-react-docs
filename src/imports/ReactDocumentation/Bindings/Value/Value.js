Value({
  render(){
    <div class="ui segment">
      <h2 class="ui header">value</h2>
      <a class="anchor active" id="BindingsValue"></a>
      <p>
        The value binding links the associated DOM element’s value with a property on your view model. This is typically useful with form elements such as input, select and textarea.
      </p>
      <pre><code>b="value: property"</code></pre>
      
      <h3>value - input type text</h3>

      <div class="ui segment basic">
        <form class="ui fluid form">
          <div class="inline field">
            <input b="value: message" type="text" placeholder="Type something" />
            <label b="text: message" class="ui label" />
          </div>
        </form>
      </div>

<pre><code>Example({
  render() {
    <input b="value: message" placeholder="Type something" />
    <label b="text: message" />
  }
})</code></pre>
    </div>
  }
})