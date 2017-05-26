Autorun({
  render(){
    <div class="ui segment">
      <h2 class="ui header">autorun</h2>
      <a class="anchor active" id="AdvancedAutorun"></a>
      <p>
        You can tell ViewModel to rerun a method if any of the properties/dependencies change. In the following example ViewModel will rerun the autorun method every time the name changes, thus logging it to the console:
      </p>
<pre><code>Example({
  name: '',
  autorun: function(computation) {
    console.log("The name is now: " + this.name());
  }
  render() {
    <div />
  }
})</code></pre>

      <p>
        To add multiple autoruns you can use an array of functions.
      </p>

<pre><code>Example({
  name: '',
  age: 0,
  autorun: [
    function() {
      console.log("The name is now: " + this.name());
    },
    function() {
      console.log("The age is now: " + this.age());
    }
  ],
  render() {
    <div />
  }
})</code></pre>

    </div>
  }
});