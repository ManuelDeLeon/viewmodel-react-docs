Testing({
  render(){
    <div class="ui segment">
      <h2 class="ui header">Testing</h2>
      <a class="anchor active" id="BasicsTesting"></a>
      <p>
        As with everything, testing with ViewModel is meant to be painless. You don't have to make brittle snapshots that need to be approved whenever you make a small change. You also don't have to test all permutations of your UI to get good coverage.
      </p>
      <p>With ViewModel you test 2 things:</p>
      <ol>
        <li>The component's properties and methods work correctly.</li>
        <li>The bindings map to the right properties and methods.</li>
      </ol>
      <p>The idea is that if your code is working and the bindings are in place, then you don't have to go through all permutations when you perform your user tests with Selenium (or whatever else you use). Your tests are also less brittle because minor changes in the markup don't break your tests.</p>

      <p>Let's say you have the following component:</p>
      <hr/>
      <Person />
      <hr/>

<pre><code>Person({
  firstName: ViewModel.property.string.notBlank,
  lastName: ViewModel.property.string.notBlank,
  fullName() {
    return this.firstName() + ' ' + this.lastName();
  },
  render() {
    <form class="ui form" style="width: 40%">
      <div class="field">
        <label>First Name:</label>
        <input type="text" b="value: firstName" />
      </div>
      <div class="field">
        <label>Last Name:</label>
        <input type="text" b="value: lastName" />
      </div>
      <div class="field">
        <label b="text: 'Hello ' + fullName" />
      </div>
      <button class="ui blue button" b="click: reset, enable: valid">Reset Fields</button>
    </form>
  }
})</code></pre>
    </div>
  }
});