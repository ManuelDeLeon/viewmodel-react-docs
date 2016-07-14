ReactDocumentation({
  rendered() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  },
  render(){
    <div class="ui two column centered grid" style="width: 1024px">
      <div id="react-menu" class="four wide column" >
        <Menu />
      </div>
      <div class="twelve wide column" style="width: 740px">
        <div class="ui segment">
          <h1 class="ui header red">ViewModel for React Preview</h1>
          <p>
            This page is the preview documentation of the React version of ViewModel. It's not released yet and there's no ETA.
          </p>
        </div>
        
        <Basics />
        <Advanced />
        <Bindings />
      </div>
    </div>
  }
});