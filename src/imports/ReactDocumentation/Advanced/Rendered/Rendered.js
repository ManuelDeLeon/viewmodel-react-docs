Rendered({
  render(){
    <div class="ui segment">
      <h2 class="ui header">rendered</h2>
      <a class="anchor active" id="AdvancedRendered"></a>
      <p>
        The rendered function will run after the component has been rendered on the page and all bindings have been applied. This is particularly useful to setup custom js controls.
      </p>
<pre><code>Example({
  rendered() {
    // Do Something
  },
  render() {
    <div />
  }
})</code></pre>

      <p>
        To add multiple rendered methods you can use an array of functions.
      </p>

<pre><code>Example({
  name: '',
  age: 0,
  rendered: [
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

      <h3>rendered - example</h3>
<pre><code>Example({
  rendered(){
    $(this.nameInput).makeFancy()
  },
  render() {
    <input b="value: name, ref: nameInput" />
  }
})</code></pre>

    </div>
  }
});