Text({
  message: 'Can it be <b>bold</b>?',
  render(){
    <div class="ui segment">
      <h2 class="ui header">text</h2>
      <a class="anchor active" id="BindingsText"></a>
      <p>
        The text binding causes the html element to display the text returned by the given function/property.
      </p>
      <pre><code>b="text: property"</code></pre>

      <h3>text demo</h3>

      <div class="ui segment basic">
        <form class="ui fluid form">
          <div class="inline field">
            <input b="value: message" type="text" placeholder="Type something" />
            <label b="text: message" class="ui label" />
          </div>
        </form>
      </div>

<pre><code>Example({
  message: 'Can it be <b>bold</b>?',
  render() {
    <input b="value: message" placeholder="Type something" />
    <label b="text: message" />
  }
})</code></pre>
    </div>
  }
})