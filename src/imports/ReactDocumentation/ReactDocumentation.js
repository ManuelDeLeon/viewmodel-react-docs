ReactDocumentation({
  rendered() {
    $("pre code").each(function(i, block) {
      $(block).addClass("language-javascript");
      Prism.highlightElement(block);
    });
    const hash = window.location.hash;
    window.location.hash = hash + "X";
    window.location.hash = hash;
  },
  render() {
    <div class="ui two column centered grid" style="width: 1024px">
      <div id="react-menu" class="four wide column">
        <Menu />
      </div>
      <div class="twelve wide column" style="width: 740px">
        <Logo />
        <Introduction />
        <Basics />
        <Advanced />
        <Bindings />
      </div>
    </div>;
  }
});
