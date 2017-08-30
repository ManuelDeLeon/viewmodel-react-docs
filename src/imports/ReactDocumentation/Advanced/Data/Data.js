Data({
  render(){
    <div class="ui segment">
      <h2 class="ui header">.data</h2>
      <a class="anchor active" id="AdvancedData"></a>
      <p>
        This method returns a plain javascript object with the values of the viewmodel properties. It will not include function results.
      </p>



      <pre><code>component.data()</code></pre>
<pre><code>Person({
  first: 'Alan',
  last: 'Brito',
  full() {
    return this.first() + ' ' + this.last();
  },
  log() {
    var obj = this.data();
    console.log(obj);
  },
  render() {
    <div>
      <button b="click: log, text: 'Log ' + full" />
    </div>
  }
})</code></pre>

      <p>In this case the log function will output:</p>
      <pre><code>{ first: 'Alan', last: 'Brito' }</code></pre>

<hr />
  <Person />
    </div>
  }
});