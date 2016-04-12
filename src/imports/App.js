App({
  created(){
    console.log("Created")
  },
  rendered() {
    console.log("rendered App")
    hljs.initHighlightingOnLoad()
  },
  render(){
    <div>
      <div>
        <ReactDocumentation />
      </div>
    </div>
  }
});