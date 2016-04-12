Declaring({
  render(){
    <div class="ui segment">
      <h2 class="ui header">Declaring</h2>
      <a class="anchor active" id="bindingsDeclaring"></a>
      <p>
        Bindings are declared with the template helper `b`. It is the generic flavor which you will use almost all the time. It allows you to access all bindings and events available to the element. Here are a few examples:
      </p>
      <p>To bind the value of the input box to the property 'name' of the view model:</p>
      <pre><code><input b="value: name" /></code></pre>
      <p>To show the greeting if the 'showGreeting' property is true:</p>
      <pre><code><p b="text: greeting, if: showGreeting" /></code></pre>


    </div>
  }
});