Installing({
  render(){
    <div class="ui segment">
      <h2 class="ui header">Installing</h2>
      <a class="anchor active" id="BasicsInstalling"></a>
      <p>
        To install ViewModel you need the Babel plugin:
      </p>
      <pre><code>npm i --save-dev viewmodel-react-plugin</code></pre>

      <p>The runtime library:</p>
      <pre><code>npm i --save viewmodel-react</code></pre>

      <p>And update your babel configuration to use the plugin. The Babel configuration is usually in the .babelrc file but can also be in the Babel section of package.json</p>
<pre><code>{
  "presets": ["es2015", "react"],
  "plugins": [ "viewmodel-react-plugin" ]
}</code></pre>

      <p>Note: As of now ViewModel doesn't work with Babel's preset "stage-0".</p>
    </div>
  }
});