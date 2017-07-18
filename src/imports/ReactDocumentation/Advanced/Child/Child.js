Child({
	render() {
		<div class="ui segment">
			<h2 class="ui header">.child</h2>
			<a class="anchor active" id="AdvancedChild"></a>
			<p>
				Same as .children but returns the first component found.
      </p>

			<hr/>
			<h3>Example:</h3>
			<pre><code>Parent({
	people: [
		{ name: "Alan" },
		{ name: "Brito" }
	],
	logSingles() {
		const control = this.child('Control');
		console.log("control", control);

		var firstPerson = this.child('Person');
		console.log("firstPerson", firstPerson);

		var brito = this.child(child => child.name && child.name() === 'Brito');
		console.log("brito", brito);
	},
	render() {
		<div>
			<Person b="repeat: people" />
			<Control />
			<button type="button" b="click: logSingles">Log Children</button>
		</div>
	}
})</code></pre>
<pre><code>Person({
	name: '',
	render() {
		<div b="text: name" />
	}
})</code></pre>
<pre><code>Control({
	render() {
		<div>Control</div>
	}
})</code></pre>
			<Parent />

		</div>
	}
});