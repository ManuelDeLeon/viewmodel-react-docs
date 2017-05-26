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
      <a class="anchor active" id="AdvancedRef"></a>
      <p>
        The ref attribute gives you a way to interact with an html element or sub-component without resorting to selectors. When you reference a component you get a hold of the component instance. This allows you to use sub-components as controls/widgets.
      </p>
      <pre><code>ref="propertyName"</code></pre>
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

      <p>You can also use ref to format controls with Javascript. Here's a dropdown using Semantic UI.</p>
      <hr/>
      <CreditCard />
      <hr/>
<pre><code>CreditCard({
  creditCard: '',
  rendered(){
    $(this.refs.creditCardDropdown).dropdown();
  },
  render(){
    <form>
      <div class="field">
        <label b="text: 'Selected: ' + creditCard" />
      </div>
      <div class="field">
        <label>Card Type</label>
        <div class="ui selection dropdown" ref="creditCardDropdown">
          <input b="value: creditCard" type="hidden" name="card[type]" />
          <div class="default text">Type</div>
          <i class="dropdown icon"></i>
          <div class="menu">
            <div class="item" data-value="visa">
              <i class="visa icon"></i>
              Visa
            </div>
            <div class="item" data-value="amex">
              <i class="amex icon"></i>
              American Express
            </div>
            <div class="item" data-value="discover">
              <i class="discover icon"></i>
              Discover
            </div>
          </div>
        </div>
      </div>
    </form>
  }
})</code></pre>

    </div>
  }
});