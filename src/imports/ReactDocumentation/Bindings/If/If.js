If({
  itsOn: false,
  render(){
    <div class="ui segment">
      <h2 class="ui header">if</h2>
      <a class="anchor active" id="BindingsIf"></a>
      <p>
        The if binding causes the html element to appear on screen or not, depending on the value of the bound property.
      </p>
      <pre><code>b="if: property"</code></pre>

      <h3>if demo</h3>

      <div class="ui segment basic">
        <input b="check: itsOn" type="checkbox" /> Is it on? &nbsp;&nbsp;
        <label class="ui red label" b="if: itsOn">It's SO on!</label>
      </div>

<pre><code>Example({
  itsOn: false,
  render() {
    <div>
      <input b="check: itsOn" type="checkbox" /> Is it on?
      <label b="if: itsOn" class="ui red label">It's SO on!</label>
    </div>
  }
})</code></pre>
    </div>
  }
})