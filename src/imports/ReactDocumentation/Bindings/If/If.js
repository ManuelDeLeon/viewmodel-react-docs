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

        TODO: wrap element that has if binding with a jsx if/ternary
        <label id="XXX" class="ui red label XXX" >It's SO on!</label>
      </div>

      <div>
        <label class="A" b="if: itsOn">B</label>
      </div>

<pre><code>Example({
  itsOn: false,
  render() {
    <div>
      <input b="value: message" placeholder="Type something" />
      <label b="text: message" />
    </div>
  }
})</code></pre>
    </div>
  }
})