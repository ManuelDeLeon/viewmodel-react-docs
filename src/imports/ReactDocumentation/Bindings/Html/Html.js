Html({
  message: 'Can it be a <strike>strike</strike>?',
  render(){
    <div class="ui segment">
      <h2 class="ui header">html</h2>
      <a class="anchor active" id="BindingsHtml"></a>
      <p>
        The text binding causes the html element to display the html returned by the given function/property.
      </p>
      <pre><code>b="html: property"</code></pre>

      <h3>text demo</h3>

      <div class="ui segment basic">
        <form class="ui fluid form">
          <div class="inline field">
            <input b="value: message" type="text" placeholder="Type something" style="width: 250px" />
            <label b="html: message" class="ui label" />
          </div>
        </form>
      </div>

<pre><code>Example({
  message: 'Can it be a <strike>strike</strike>?',
  render() {
    <div>
      <input b="value: message" placeholder="Type something" />
      <label b="html: message" />
    </div>
  }
})</code></pre>
    </div>
  }
})