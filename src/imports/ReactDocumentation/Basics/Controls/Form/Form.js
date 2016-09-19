Form({
  logName() {
    console.log( this.refs.name.text() );
  },
  render(){
    <form class="ui form" style="width: 40%">
      <DefaultInput ref="name" label="Name:" placeholder="Your name" />
      <button type="button" class="ui button" b="click: logName">Log Name</button>
      <label b="text: refs.name.text" />
    </form>
  }
});