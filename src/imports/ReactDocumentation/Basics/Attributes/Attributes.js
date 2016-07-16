Attributes({
  title: 'Hover over me',
  render(){
    <div class="ui segment">
      <h2 class="ui header">attributes</h2>
      <a class="anchor active" id="BasicsAttributes"></a>
      <p>
        You can specify the value of an attribute with React's native interpolation:
      </p>
      <pre><code>attribute={this.property()}</code></pre>
      
      <h3>attributes demo</h3>

      <div class="ui segment basic">
        <form class="ui fluid form">
          <div class="inline field">
            <input title={this.title()} b="value: title" type="text"  />
          </div>
        </form>
      </div>

<pre><code>Example({
  title: 'Hover over me',
  render() {
    <div>
      <input title={this.title()} b="value: title" type="text"  />
    </div>
  }
})</code></pre>
    </div>
  }
});