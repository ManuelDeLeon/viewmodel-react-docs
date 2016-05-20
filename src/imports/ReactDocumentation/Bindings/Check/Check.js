Check({
  showRed: false,
  coloradoChecked: false,
  states: [],
  colorSelected: '',
  blueSelected: false,

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
                <input type="checkbox" b="group: states, check: coloradoChecked" value="Colorado" />
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

      <hr />
        <h3>Radios</h3>

        <div class="ui segment">

          <form class="ui form">
            <div class="field">
              <div class="ui radio">
                <input value="red" name="color" b="group: colorSelected" type="radio" />
                <label>Red</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio">
                <input value="blue" name="color" b="group: colorSelected, check: blueSelected" type="radio" />
                <label>Blue</label>
              </div>
            </div>
            <label>The color is: <span b="text: colorSelected, style: { color: colorSelected }" ></span></label>
            {this.blueSelected() ?
              <label b="if: blueSelected"> - Blue Selected</label>
              : null
            }
          </form>

        </div>

<pre><code>Example({
  colorSelected: '',
  blueSelected: false,
  render() {
    <div>
      <input value="red" b="group: colorSelected" name="color" type="radio" />
      <label>Red</label>

      <input value="blue" b="group: colorSelected, check: blueSelected" name="color" type="radio" />
      <label>Blue</label>

      <label>The color is: <span b="text: colorSelected, style: { color: colorSelected }" ></span></label>
      <label b="if: blueSelected"> - Blue Selected</label>
    </div>
  }
})</code></pre>

    </div>
  }
});