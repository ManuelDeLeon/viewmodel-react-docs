Global({
  render(){
    <div class="ui segment">
      <h2 class="ui header">global</h2>
      <a class="anchor active" id="AdvancedGlobal"></a>
      <p>
        You can add properties and methods to ALL view models via:
      </p>
<pre><code>ViewModel.global({
  // properties and methods
})</code></pre>

      <p>
        Except for rare cases the use of globals should be reserved for logging and debugging. In most cases you should use a <a href="#AdvancedMixin">mixin</a> or a <a href="#AdvancedShare">share</a> instead.
      </p>
    </div>
  }
});