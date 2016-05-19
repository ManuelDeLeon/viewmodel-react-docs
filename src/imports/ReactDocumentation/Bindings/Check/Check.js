Check({
  showRed: false,
  coloradoChecked: false,
  states: [],
  render(){
    <div class="ui segment">
      <h2 class="ui header">check</h2>
      <a class="anchor active" id="BindingsCheck"></a>
      <p>
        The check binding links a check'able form control - i.e., a checkbox (input type='checkbox') or a radio button (input type='radio') - with a property on your component.
      </p>
      <pre><code>b="check: property"</code></pre>
      <p>
        The value of a group of checkboxes or radios can be obtained/set with the group binding:
      </p>
      <pre><code>b="group: property"</code></pre>

      <hr />
        <h3>Checkboxes - single</h3>

        <div class="ui segment">

          <form class="ui form">
            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox" b="check: showRed" />
                <label>Red</label>
              </div>
            </div>
            <a class="ui button" b="class: { red: showRed }">The Button</a>
          </form>

        </div>

<pre><code>Example({
  showRed: false,
  render() {
    <div>
      <input b="check: showRed" type="checkbox" /> <label>Red</label>
      <button b="class: { red: showRed }" >The Button</button>
    </div>
  }
})</code></pre>

      <hr />
        <h3>Checkboxes - Multiple</h3>

        <div class="ui segment">

          <form class="ui form">
            <div class="field">
              <div class="ui checkbox">
                <input id="XXX" type="checkbox" b="group: states, check: coloradoChecked" value="Colorado" />
                <label>Colorado</label>
              </div>
            </div>
            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox" b="group: states" value="New York" />
                <label>New York</label>
              </div>
            </div>
            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox" b="group: states" value="Florida" />
                <label>Florida</label>
              </div>
            </div>
            Selected: <label class="ui label" b="text: states.join(' - '), class: { red: coloradoChecked }" />
          </form>

        </div>

<pre><code>Example({
  coloradoChecked: false,
  states: [],
  render() {
    <div>
      <input b="group: states, check: coloradoChecked" value="Colorado" type="checkbox" />
      <label>Colorado</label>

      <input type="checkbox" b="group: states" value="New York" />
      <label>New York</label>

      <input type="checkbox" b="group: states" value="Florida" />
      <label>Florida</label>

      Selected: <label b="text: states.join(' - '), class: { red: coloradoChecked }" />
    </div>
  }
})</code></pre>

    </div>
  }
});