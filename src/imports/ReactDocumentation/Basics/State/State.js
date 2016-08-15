State({
  render(){
    <div class="ui segment">
      <h2 class="ui header">State</h2>
      <a class="anchor active" id="BasicsState"></a>
      <p>
        A component is displayed on the page depending on its state. The state of a component is store in its properties. Let's add some state to Person:
      </p>
<pre><code>Person({
  firstName: 'Alan',
  lastName: 'Brito',
  render() {
    <label>Hello { this.firstName() + ' ' + this.lastName() }</label>
  }
})</code></pre>

      <p>
        Here we're using interpolation to get the full name. By the way, properties are converted into functions. To get a value you call the "property" with empty parenthesis [ this.firstName() ]. To set a value pass it as a parameter [ this.firstName( 'New Name' ) ]. For more on this see <a href="#BasicsProperties">Properties</a>.
      </p>

      <p>
        Another way of writing it is to use the <a href="#BindingsText">text binding</a> on the label:
      </p>
<pre><code>Person({
  firstName: 'Alan',
  lastName: 'Brito',
  render() {
    <label b="text: 'Hello ' + firstName + ' ' + lastName" />
  }
})</code></pre>

      <p>
        A small string concatenation is fine but it can get messy so let's move it to a function:
      </p>
<pre><code>Person({
  firstName: 'Alan',
  lastName: 'Brito',
  fullName() {
    return this.firstName() + ' ' + this.lastName();
  },
  render() {
    <label b="text: 'Hello ' + fullName" />
  }
})</code></pre>

      <p>
        This is all good but we're always displaying the same name. One way to change this is to pass the name as a parameter to the component:
      </p>

<pre><code>App({
  render() {
    <div>
      <Person firstName="Alan" lastName="Brito" />
    </div>
  }
})</code></pre>

      <p>
        Of course the component itself can change its state. Let's change Person a little bit so we can edit the name:
      </p>

<pre><code>Person({
  firstName: '',
  lastName: '',
  fullName() {
    return this.firstName() + ' ' + this.lastName();
  },
  render() {
    <div>
      First Name: <input b="value: firstName" />
      Last Name: <input b="value: lastName" />
      <label b="text: 'Hello ' + fullName" />
    </div>
  }
})</code></pre>

      <p>
        Here we're using the <a href="#BindingsValue">value binding</a> to bind the value of the input boxes with the first and last name properties.
      </p>

      <hr/>
      <h3>Result:</h3>
      <Person />

    </div>
  }
});