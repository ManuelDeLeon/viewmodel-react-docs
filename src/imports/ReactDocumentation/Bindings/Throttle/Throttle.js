Throttle({
  message: '',
  render(){
    <div class="ui segment">
      <h2 class="ui header">throttle</h2>
      <a class="anchor active" id="BindingsThrottle"></a>
      <p>
        The throttle binding causes the element to delay updating the view model by the given milliseconds. The updates are throttled, which means that if another update occurs before time, the clock will reset. This is particularly useful when you want to know when someone has stopped typing.
      </p>
      <pre><code>b="throttle: property"</code></pre>
      
      <h3>throttle demo</h3>

      <div class="ui segment basic">
        <form class="ui fluid form">
          <div class="inline field">
            <input b="value: message, throttle: 1000" type="text" placeholder="Type something" />
            <label b="text: message" class="ui label" />
          </div>
        </form>
      </div>

<pre><code>Example({
  message: '',
  render() {
    <div>
      <input b="value: message, throttle: 1000" placeholder="Type something" />
      <label b="text: message" />
    </div>
  }
})</code></pre>
    </div>
  }
});