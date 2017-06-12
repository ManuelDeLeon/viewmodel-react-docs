Share({
  people: [
    { name: "Alan" },
    { name: "Brito" },
    { name: "Cordon" }
  ],
  render(){
    <div class="ui segment">
      <h2 class="ui header">share</h2>
      <a class="anchor active" id="AdvancedShare"></a>
      <p>
        You can share state between components with the share property. To do so you must specify the parts to share via ViewModel.share. In the following example we're creating two objects we can share between components (car and road).
      </p>
<pre><code>ViewModel.share({
  car: {
    color: 'red',
    speed: 55,
    accelerate: function() {
      var speed = this.speed();
      this.speed( speed + 10 );
    }
  },
  road: {
    lanes: 4
  }
});</code></pre>

      <p>
        Now we can share these elements between components. In the following example the adult component will have all the properties and methods from car and road. Teenager will have the properties and methods of car. The most important thing is that all instances of adult and teenager will share the properties color and speed (from car). That means if any of them change their speed, the other components will pick up on the changes (they're sharing the property after all).
      </p>

<pre><code>Adult({
  share: [ 'car', 'road' ],
  render() { <div /> }
})</code></pre>

<pre><code>Teenager({
  share: 'car',
  render() { <div /> }
})</code></pre>

      <h3>Lifecycle hooks</h3>
      <p>
        You can supply multiple <a href="#AdvancedAutorun">autorun</a>, <a href="#AdvancedCreated">created</a>, <a href="#AdvancedRendered">rendered</a>, and <a href="#AdvancedDestroyed">destroyed</a> functions with <a href="#AdvancedShare">share</a>, <a href="#AdvancedMixin">mixin</a>, <a href="#AdvancedLoad">load</a>, or in the component itself.
      </p>
      <p>
        For example if you want a share to execute a function after the template is created (one that uses the share of course), you can do:
      </p>

<pre><code>ViewModel.share({
  clock: {
    initialTime: new Date(),
    created() {
      this.initialTime( new Date() );
    }
  }
});</code></pre>

<pre><code>Example({
  share: 'clock',
  render() { <div /> }
})</code></pre>

      <h3>share demo</h3>
      <p>
        In this example each Person component has its own name but they all share the same address.
      </p>
      <div class="ui list">
        {this.people().map((p, i) => {
          return <Person {...p} key={i} />
        })}
      </div>

<pre><code>ViewModel.share({
  house: {
    address: '123 Main St.'
  }
})</code></pre>
<pre><code>Example({
  people: [
    { name: "Alan" },
    { name: "Brito" },
    { name: "Cordon" }
  ],
  render() {
    <div class="ui list">
      {this.people().map((p, i) => {
        return <Person {...p} key={i} />
      })}
    </div>
  }
})</code></pre>

<pre><code>Person({
  share: 'house',
  render() {
    <div class="item">
      <input type="text" b="value: name">
      <input type="text" b="value: address">
    </div>
  }
})</code></pre>
    </div>
  }
});