Installing({
  render(){
    <div class="ui segment">
      <h2 class="ui header">Installing</h2>
      <a class="anchor active" id="BasicsInstalling"></a>
      <p>
        To use ViewModel you need the runtime library and Babel plugin:
      </p>
      <pre><code>npm i --save viewmodel-react viewmodel-react-plugin</code></pre>

      <p>And update your babel configuration to use the plugin. The Babel configuration is usually in the .babelrc file but can also be in the Babel section of package.json</p>
<pre><code>{
  "presets": ["es2015", "react"],
  "plugins": [ "viewmodel-react-plugin" ]
}</code></pre>
    </div>
  }
});