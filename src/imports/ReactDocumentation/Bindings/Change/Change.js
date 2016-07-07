Change({
  message: '',
  show: false,
  render(){
    <div class="ui segment">
      <h2 class="ui header">change</h2>
      <a class="anchor active" id="BindingsChange"></a>
      <p>
        The change binding executes a function when the value of the bound property changes.
      </p>
      <pre><code>b="change: function"</code></pre>
      
      <h3>change demo</h3>

      <div class="ui segment basic">
        <div class="ui grid">
          <div class="eight wide column">
            <div class="ui fluid input">
              <input type="text" b="value: message, enter: show(true), change: show(false)" placeholder="Type something and press enter" />
            </div>
          </div>
          <div class="four wide column">
            <label class="ui label" b="if: show">
              ENTER!
            </label>
          </div>
        </div>
      </div>

<pre><code>Example({
  message: '',
  show: false,
  render() {
    <div>
      <input b="value: message, enter: show(true), change: show(false)" />
      <label b="if: show">ENTER!</label>
    </div>
  }
})</code></pre>
    </div>
  }
});