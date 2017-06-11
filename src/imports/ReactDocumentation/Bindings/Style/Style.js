Style({
  message: '',
  labelColor: 'red',
  labelStyle: 'color: red, font-weight: normal',
  label: {
    color: 'color: red',
    weight: 'font-weight: bold'
  },
  styles: {
    label: {
      color: 'red',
      'font-weight': 'bold'
    },
    button: {
      color: 'blue'
    }
  },
  render(){
    <div class="ui segment">
      <h2 class="ui header">style</h2>
      <a class="anchor active" id="BindingsStyle"></a>
      <p>
        The style binding allows you to change the style attribute of an element.
      </p>
      <pre><code>b="style: { cssProperty: vmProperty }"</code></pre>
      <pre><code>b="style: property"</code></pre>
      <pre><code>b="style: [ properties ]"</code></pre>

      <h3>style - with object</h3>

      <div class="ui segment basic">
        <form class="ui fluid form">
          <div class="field">
            <label b="style: { color: labelColor }">Color for this label:</label>
            <input b="value: labelColor" type="text" />
          </div>
        </form>
      </div>

<pre><code>Example({
  labelColor: 'red',
  render() {
    <div>
      <label b="style: { color: labelColor }">Color for this label:</label>
      <input b="value: labelColor" type="text" />
    </div>
  }
})</code></pre>

      <h3>style - with property</h3>

      <div class="ui segment basic">
        <form class="ui fluid form">
          <div class="field">
            <label b="style: labelStyle">Style for this label:</label>
            <input b="value: labelStyle" type="text" />
          </div>
        </form>
      </div>

<pre><code>Example({
  labelStyle: 'color: red, font-weight: normal',
  render() {
    <div>
      <label b="style: labelStyle">Style for this label:</label>
      <input b="value: labelStyle" type="text" />
    </div>
  }
})</code></pre>

      <h3>style - with array</h3>

      <div class="ui segment basic">
        <form class="ui fluid form">
          <div class="field">
            <label b="style: [ label.color, label.weight ]">This is a red and bold label</label>
          </div>
        </form>
      </div>

<pre><code>Example({
  label: {
    color: 'color: red',
    weight: 'font-weight: bold'
  },
  render() {
    <div>
      <label b="style: [ label.color, label.weight ]">This is a red and bold label</label>
    </div>
  }
})</code></pre>


      <h3>inline styles</h3>

      <p>The style property can also be an object instead of a string. That makes it very handy for inline styles. This way your styles are scoped to the component.</p>
      <div class="ui segment basic">
        <form class="ui fluid form">
          <div class="field">
            <label b="style: styles.label" >This is the label</label>
            <button class="ui button" b="style: styles.button" >The Button</button>
          </div>
        </form>
      </div>

<pre><code>Example({
  styles: {
    label: {
      color: 'red',
      'font-weight': 'bold'
    },
    button: {
      color: 'blue'
    }
  },
  render() {
    <div>
      <label b="style: styles.label" >This is the label</label>
      <button b="style: styles.button" >The Button</button>
    </div>
  }
})</code></pre>

    </div>
  }
});