Attributes({
  title: 'Hover over me',
  titleText: '',
  placeholderText: 'Set the title here',
  render(){
    <div class="ui segment">
      <h2 class="ui header">attributes</h2>
      <a class="anchor active" id="BasicsAttributes"></a>
      <p>
        You can specify the value of an attribute with React's interpolation:
      </p>
      <pre><code>attribute={this.property()}</code></pre>
      
      <h3>attributes demo</h3>

      <div class="ui segment basic">
        <form class="ui fluid form">
          <div class="inline field">
            <input title={this.title()} b="value: title" type="text"  />
          </div>
        </form>
      </div>

<pre><code>Example({
  title: 'Hover over me',
  render() {
    <div>
      <input title={this.title()} b="value: title" type="text"  />
    </div>
  }
})</code></pre>

      <h3>attributes configuration</h3>
      <p>Another option is to tell ViewModel about attributes you want to use as bindings. You do this in the .babelrc file, adding the "attributes" option to the "viewmodel-react-plugin":</p>
<pre><code>{
  "presets": ["es2015", "react"],
  "plugins": [
    ["viewmodel-react-plugin", {
      "attributes": [ "title", "placeholder" ]
    }]
  ]
}</code></pre>

      <p>The attributes option takes an array of strings with the attributes you want to use as bindings. In this case we allow "title" and "placeholder" to be used as bindings.</p>

      <div class="ui segment basic">
        <form class="ui fluid form">
          <div class="inline field">
            <input b="value: titleText, title: titleText, placeholder: placeholderText" type="text"  />
          </div>
        </form>
      </div>

<pre><code>Example({
  titleText: '',
  placeholderText: 'Set the title here',
  render() {
    <div>
  <input b="value: titleText, title: titleText, placeholder: placeholderText" type="text"  />
    </div>
  }
})</code></pre>
    </div>
  }
});