BindingArgument({
  render(){
    <div class="ui segment">
      <h2 class="ui header">Binding Argument</h2>
      <a class="anchor active" id="BindingsBindingArgument"></a>
      <p>
        When you add a custom binding, ViewModel will provide you with a binding argument that has the following structure:
      </p>
      <pre><code>{
  component: React Component,
  element: HTML Element,
  elementBind: Bind Object,
  bindName: String,
  bindValue: String/Object,
  getVmValue: Function,
  setVmValue: Function,
  autorun: Function
}</code></pre>

<div class="ui relaxed list">

      <div class="item">
        <i class="pointing right icon"></i>
        <div class="content">
          <div class="header">component</div>
          The React component instance bound to the html element.
        </div>
      </div>

      <div class="item">
        <i class="pointing right icon"></i>
        <div class="content">
          <div class="header">element</div>
          The HTML element the binding applies to. For example, in:
<pre><code><input type="text" b="value: name" /></code></pre>
          The element property will hold a reference to the 'input'.
        </div>
      </div>

      <div class="item">
        <i class="pointing right icon"></i>
        <div class="content">
          <div class="header">elementBind</div>
          The whole bind object of the element. This is useful if you need to check other bindings on the element.
          With:
<pre><code><input type="text" b="value: name, returnKey: submit" /></code></pre>
          The elementBind property will be the following object:
<pre><code>{
  value: 'name',
  returnKey: 'submit'
}</code></pre>
        </div>
      </div>

      <div class="item">
        <i class="pointing right icon"></i>
        <div class="content">
          <div class="header">bindName</div>
          The name of the bind that it's being worked on. This is only useful to override the default bind. You usually know the name of the bind because you have to specify the name of the bind when you add a new one. For example, with:
<pre><code><input type="text" b="value: name" /></code></pre>
          The bindName is 'value'.
        </div>
      </div>

      <div class="item">
        <i class="pointing right icon"></i>
        <div class="content">
          <div class="header">bindValue</div>
          The value of the bind that it's being worked on. This is the same as calling `elementBind[bindName]`. For example, with:
<pre><code><p b="text: name"></p></code></pre>
          The bindValue is 'name'.
        </div>
      </div>

      <div class="item">
        <i class="pointing right icon"></i>
        <div class="content">
          <div class="header">getVmValue</div>
          Returns the view model property for the bindValue. For example, with:
<pre><code><p b="if: !show"></p></code></pre>
          getVmValue will take care of extraction the value of viewmodel[bindValue] (minus the !) and then negating it.
          <p><b>You should always extract values from the view model using getVmValue</b></p>
        </div>
      </div>

      <div class="item">
        <i class="pointing right icon"></i>
        <div class="content">
          <div class="header">setVmValue</div>
          <p>Like getVmValue, it helps you set values on the viewmodel. It takes care of the paths for you.</p>
          <p><b>You should always set view model values using setVmValue</b></p>
        </div>
      </div>

      <div class="item">
        <i class="pointing right icon"></i>
        <div class="content">
          <div class="header">autorun</div>
          A <a href="http://docs.meteor.com/#/full/tracker_autorun" target="_blank">Tracker.autorun</a> that is automatically stopped when the template is destroyed.

        </div>
      </div>

    </div>

    </div>
  }
});