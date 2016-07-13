BindingObject({
  render(){
    <div class="ui segment">
      <h2 class="ui header">Binding Object</h2>
      <a class="anchor active" id="BindingsBindingObject"></a>
      <p>
        A binding object tells ViewModel how it should bind UI elements to the component. It has the following structure:
      </p>
      <pre><code>{
  name: 'value',
  bind: function(bindArg) {

  },
  priority: 10,
  selector: 'input[type=text]',
  bindIf: function(bindArg) {

  },
  events: {
    'change': function(bindArg, event) {

    }
  },
  autorun: function(bindArg, computation) {

  }
}</code></pre>

      <pre><i class="star icon"></i> Required    <i class="empty star icon"></i> Optional    <i class="half star icon"></i> At least one of these is required</pre>

      <div class="ui relaxed list">

        <div class="item">
          <i class="star icon"></i>
          <div class="content">
            <div class="header">name</div>
            Binding name. It is the key used when specifying a bind. For example, in the code
<pre><code>b="visible: isVisible"</code></pre>
            there is only one binding of the name 'visible'.
          </div>
        </div>

        <div class="item">
          <i class="empty star icon"></i>
          <div class="content">
            <div class="header">priority</div>
            The binding with the highest priority wins. The default priority for a binding is 1. You can change this starting number if you have bindings of the same name. Note that adding a 'bindIf' and 'selector' will each increment the priority by 1. For example, a binding with a 'bindIf' has priority of 2. If you set the starting priority to 10, a binding with a 'bindIf' will then have priority of 11.
<pre><code>{
  name: 'value',
  priority: 10
}</code></pre>
      </div>
    </div>

    <div class="item">
      <i class="empty star icon"></i>
      <div class="content">
      <div class="header">selector</div>
      You can filter which elements will be bound by specifying a CSS selector. In the following example only the input elements of type "text" will be bound:
<pre><code>{
  name: 'value',
  selector: 'input[type=text]'
}</code></pre>
      </div>
      </div>

      <div class="item">
      <i class="empty star icon"></i>
      <div class="content">
      <div class="header">bindIf</div>
      You can filter which elements will be bound with a function that receives a <a href="#BindingsBindingArgument">bindingArgument</a> parameter. In the following example the bind will only be applied if the binding also has a 'value' key:
<pre><code>{
  name: 'enterKey',
  bindIf: function(bindArg, event) {
    return bindArg.bindObject.value
  }
}</code></pre>
      </div>
      </div>

      <div class="item">
      <i class="half star icon"></i>
      <div class="content">
      <div class="header">bind</div>
      ViewModel calls this function when the object is bound. It receives a <a href="#BindingsBindingArgument">bindingArgument</a> parameter. For example:
<pre><code>{
  name: 'if',
  bind: function(bindArg) {
    if ( bindArg.getVmValue() ) {
      bindArg.element.show();
    } else {
      bindArg.element.hide();
    }
  }
}</code></pre>
      </div>
      </div>

      <div class="item">
      <i class="half star icon"></i>
      <div class="content">
      <div class="header">events</div>
      As a convenience you can specify an event map for the element. The functions receive an event object and a <a href="#BindingsBindingArgument">bindingArgument</a> parameter. For Example:
<pre><code>{
  name: 'value',
  selector: 'input[type=text]',
  events: {
    'change': function(bindArg, event) {
      console.log("Input changed");
    },
    'keypress': function(bindArg, event) {
      console.log("You pressed a key");
    }
  }
}</code></pre>
    This is the same as doing:
<pre><code>{
  name: 'value',
  selector: 'input[type=text]',
  bind: function(bindArg) {
    bindArg.element.bind('change', function(event) {
      console.log("Input changed");
    });
    bindArg.element.bind('keypress', function(event) {
      console.log("You pressed a key");
    });
  }
}</code></pre>
    </div>
    </div>

    <div class="item">
      <i class="half star icon"></i>
      <div class="content">
      <div class="header">autorun</div>
      As a convenience you can specify a function that will rerun when the dependencies change. The function receive a <a href="http://docs.meteor.com/api/tracker.html#tracker_computation" target="_blank">computation object</a> and a <a href="#BindingsBindingArgument">bindingArgument</a> parameter. For Example:
<pre><code>{
  name: 'text',
  autorun: function(bindArg, computation) {
    bindArg.element.text(bindArg.getVmValue());
  }
}</code></pre>
  This is the same as writing:
<pre><code>{
  name: 'text',
  bind: function(bindArg) {
    bindArg.autorun(function() {
      bindArg.element.text(bindArg.getVmValue());
    });
  }
}</code></pre>

  </div>
  </div>

  </div>

    </div>
  }
});