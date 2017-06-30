Children({
	render() {
		<div class="ui segment">
			<h2 class="ui header">.children</h2>
			<a class="anchor active" id="AdvancedChildren"></a>
			<p>
	      You can access the children components (directly below the current one) with the `children` property.
			</p>
			<hr />

			<div class="ui relaxed list">

				<div class="item">
					<i class="pointing right icon"></i>
					<div class="content">
						<div class="header">Without parameters</div>
						It returns all components directly underneath the current one.
						<pre><code>component.children()</code></pre>
					</div>
				</div>

				<div class="item">
					<i class="pointing right icon"></i>
					<div class="content">
						<div class="header">With a string</div>
						With a string .children returns all components directly below the current one that are of the given template.
						<pre><code>component.children('componentName')</code></pre>
					</div>
				</div>

				<div class="item">
					<i class="pointing right icon"></i>
					<div class="content">
						<div class="header">With a function</div>
						You can pass a function that takes a component and returns a boolean value. .children will return all sub components that return true when processed by the function.
						<pre><code>component.children(child => child.property() === 1 )</code></pre>
					</div>
				</div>

			</div>
			<hr/>
			<h3>Example:</h3>
			<pre><code>Parent({
	people: [
		{ name: "Alan" },
		{ name: "Brito" }
	],
	logChildren() {
		var all = this.children();
		console.log(all); // 3 components

		var persons = this.children('Person');
		console.log(persons); // 2 components

		var alan = this.children(child => child.name && child.name() === 'Alan');
		console.log(alan); // 1 component
	},
	render() {
		<div>
			<Person b="repeat: people" />
			<Control />
			<button b="click: logChildren">Log Children</button>
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