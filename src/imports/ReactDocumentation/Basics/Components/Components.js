Components({
  render(){
    <div class="ui segment">
      <h2 class="ui header">Components</h2>
      <a class="anchor active" id="BasicsComponents"></a>
      <p>
        This is the basic structure of a component:
      </p>
<pre><code>Person({
  render() {
    <label>Hello World</label>
  }
})</code></pre>
      <p>
        When you use the Person component it displays "Hello World". As with any other component, the render method must have one (and only one) root element. They're normal React components so you can use them in your existing React applications.
      </p>

      <p>
        So let's say you have the following components:
      </p>
<pre><code>src/App.js</code></pre>
<pre><code>App({
  render() {
    <div>

    </div>
  }
})</code></pre>

<pre><code>src/Person/Person.js</code></pre>
<pre><code>Person({
  render() {
    <label>Hello World</label>
  }
})</code></pre>

      <p>
        To use Person in App you can import the component as usual:
      </p>
<pre><code>src/App.js</code></pre>
<pre><code>import { Person } from './Person/Person';
App({
  render() {
    <div>
      <Person />
    </div>
  }
})</code></pre>

      <p>
        ViewModel has one convention, if the component is located in a sub-folder of the same name (like Person) then you can omit the import:
      </p>
<pre><code>src/App.js</code></pre>
<pre><code>App({
  render() {
    <div>
      <Person />
    </div>
  }
})</code></pre>

      <hr/>
      <h3>Result:</h3>
      <Person />

    </div>
  }
});