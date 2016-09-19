Controls({

  render(){
    <div class="ui segment">
      <h2 class="ui header">Controls</h2>
      <a class="anchor active" id="BasicsControls"></a>
      <p>
        You can treat any sub-component as a control. For example, let's say you have the following DefaultInput component:
      </p>

<pre><code>DefaultInput({
  label: '',
  placeholder: '',
  text: '',
  render(){
    <div class="field">
      <label b="text: label" />
      <input type="text" b="value: text" placeholder={this.placeholder()} />
    </div>
  }
});</code></pre>

      <p>You can then treat it as a control of another component and access its properties and methods via the refs collection:</p>

<pre><code>Form({
  logName() {
    console.log( this.refs.name.text() );
  },
  render(){
    <form class="ui form" style="width: 40%">
      <DefaultInput ref="name" label="Name:" placeholder="Your name" />
      <button type="button" b="click: logName">Log Name</button>
      <label b="text: refs.name.text" />
    </form>
  }
});</code></pre>

      <hr/>
      <h3>Result:</h3>
      <Form />
    </div>
  }
});