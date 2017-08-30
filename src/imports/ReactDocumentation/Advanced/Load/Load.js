Load({
  load: [{first: "FFF"}, {last: "LLLL"}],
  render(){
    <div class="ui segment">
      <h2 class="ui header">.load</h2>
      <a class="anchor active" id="AdvancedLoad"></a>
      <p>
        This method loads a plain javascript object or array of objects into the viewmodel. New properties are appended and existing properties load the new values.
      </p>
     
<pre><code>component.load(obj)</code></pre>
<pre><code>component.load(arrayOfObjects)</code></pre>

      <h3>Example 1</h3>
<pre><code>Person({
  first: '', // starts with only first and it's empty
  loadSampleData() {
    this.load({ first: 'Alan', last: 'Brito' });
    // The component now has the properties 'first' and 'last'
    // { first: 'Alan', last: 'Brito' }
  },
  render() {
    <div />
  }
})</code></pre>

      <h3>Example 2</h3>
      <p>You can also load multiple objects when you define your component. Each of them can define their own autorun(s), onCreated, onRendered, and onDestroyed, as well as other hooks like share and mixin.</p>
<pre><code>import { person, address} from './common';
Person({
  created() {
    this.load([person, address]);
  },
  render() {
    <div />
  }
})</code></pre>

      <p>The last example can be simplified a bit:</p>
<pre><code>import { person, address} from './common';
Person({
  load: [person, address],
  render() {
    <div />
  }
})</code></pre>
    </div>
  }
});