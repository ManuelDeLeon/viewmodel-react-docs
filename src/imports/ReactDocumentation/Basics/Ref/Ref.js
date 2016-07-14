Ref({
  show: false,
  autorun: function() {
    const show = this.show();

    // Set a property on a child component (a control so to speak)
    this.refs.blueLabel.show(show);

    // Manipulate an html element directly
    if ( show ) {
      this.refs.redLabel.style.display = 'block';
    } else {
      this.refs.redLabel.style.display = 'none';
    }
  },
  render(){
    <div class="ui segment">
      <h2 class="ui header">ref</h2>
      <a class="anchor active" id="MiscRef"></a>
      <p>
        The ref attribute gives you a way to interact with an html element without resorting to selectors. This is a built in React feature. When you reference a component you get a hold of the component instance.
      </p>
      <pre><code>ref="elementName"</code></pre>
      <pre><code>this.refs.elementName</code></pre>

      <h3>ref demo</h3>

      <div class="ui segment basic">
        <div class="ui grid">
          <div class="four wide column">
            <a b="toggle: show" class="ui button"> Toggle Label</a>
          </div>
          <div class="four wide column">
            <label ref="redLabel" class="ui red label" >Referencing an element</label>
          </div>
          <div class="four wide column">
            <BlueLabel ref="blueLabel" />
          </div>
        </div>
      </div>

<pre><code>Example({
  show: false,
  autorun: function() {
    const show = this.show();

    // Set a property on a child component (a control so to speak)
    this.refs.blueLabel.show(show);

    // Manipulate an html element directly
    if ( show ) {
      this.refs.redLabel.style.display = 'block';
    } else {
      this.refs.redLabel.style.display = 'none';
    }
  },
  render() {
    <div>
      <a b="toggle: show" class="ui button"> Toggle Label</a>
      <label ref="redLabel" class="ui red label" >Referencing an element</label>
      <BlueLabel ref="blueLabel" />
    </div>
  }
});

BlueLabel({
  show: false,
  render(){
    <label b="if: show" class="ui blue label">
      Referencing a sub component
    </label>
  }
});</code></pre>
    </div>
  }
});