ValidatingControls({
	render() {
		<div class="ui segment">
			<h2 class="ui header">Validating Controls</h2>
			<a class="anchor active" id="AdvancedValidatingControls"></a>
			<p>
				You have multiple options for validating the state of your controls.
      </p>

			<h4>Validation logic is on the control</h4>
			<p>In this case you use the ref binding to check if the control is in a valid state or not:</p>
<pre><code>Parent({
	nameIsValid() {
		return this.name.valid();
	},
	render(){
		<TextBox b="ref: name" />
	}
})

TextBox({
	text: ViewModel.property.string.notBlank,
	render() {
		<input b="value: text" />
	}
})</code></pre>
			
			<h4>Validation logic is on the parent</h4>
			<p>If the logic is in the component who uses the control you can pass the properties (with validation) to the control:</p>
<pre><code>Parent({
	name: ViewModel.property.string.notBlank,
	nameIsValid() {
		return this.name.valid();
	},
	render(){
		<TextBox text={this.name} />
	}
})

TextBox({
	text: '', // No validation
	render() {
		<input b="value: text" />
	}
})</code></pre>
		</div>
	}
});