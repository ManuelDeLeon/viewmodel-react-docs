QuickAnswers({
  render(){
    <div class="ui segment">
      <h2 class="ui header">Quick Answers</h2>
      <a class="anchor active" id="IntroductionQuickAnswers"></a>

      <h3 class="ui header">What is this?</h3>
      <p>
        ViewModel for React is a thin layer on top of React to work with as little boilerplate and ceremonies as possible.
      </p>

      <h3 class="ui header">Who's this for?</h3>
      <p>
        This is for people who like the view model way of developing UIs (think Angular, Knockout, Aurelia, etc.) but don't like the boilerplate and ceremonies that usually go with those libraries and frameworks.
      </p>

      <h3 class="ui header">Who isn't this for?</h3>
      <p>
        You'll probably hate this library if you identify with the following statements:
      </p>
      <ul>
        <li>No Redux?  Blasphemy!</li>
        <li>State on the component?  Sacrilege!</li>
        <li>Bindings?  Get away from me Satan!</li>
      </ul>

      <h3 class="ui header">Why React?</h3>
      <p>
        React does less than other frameworks so it's easier to take JSX and build a DSL on top of it (removing all the boilerplate).
      </p>

      <h3 class="ui header">What's the problem?</h3>
      <p>
        I feel like view layers are needlessly bloated and complex. More often than not you're doing things, not because your application requires it, but because the framework does. I like to read and write code relevant to my applications, not a framework. ViewModel is an attempt to eliminate anything that isn't "your code".
      </p>

      <h3 class="ui header">I've read bindings are evil, why are you using them?</h3>
      <p>
        A binding is only a shortcut for a ceremonious task. There's nothing evil, magical, or mystical about them. Let's take a simple example from JavaScript. You could write the following:
      </p>
      <pre><code>i = i + 2;</code></pre>
      <p>
        Or you could write:
      </p>
      <pre><code>i += 2;</code></pre>
      <p>
        The += assignment operator is analogous to a binding in ViewModel. It's a shortcut and you don't have to use it if you don't want to. Is it wrong to use the += operator? Is it too much "magic"? Should JavaScript had implemented it in the first place? There are plenty of people who think JS would be better off without it (JS already provides a way to add numbers with +).
      </p>
      <p>
        Back to ViewModel. Even though bindings are completely optional (you don't have to use a single one if you don't want to), if you object to them then you'll probably hate ViewModel anyway. That's because ViewModel built entirely around the idea of removing needless ceremonies and eliminating boilerplate.
      </p>

      <h3 class="ui header">What does the code look like?</h3>
<pre><code>Hello({
  render() {
    <h1>Hello World!</h1>
  }
})</code></pre>

      <h3 class="ui header">Aren't you missing a few things in there?</h3>
      <p>
        Nope. That's all you need to create a Hello component that displays "Hello World!". Notice there's only one thing which isn't "your code" and that's the render keyword. I could have removed that one too for components that don't have state, but in my tests I found it annoying to go back and wrap everything in a render method if the component required a state later on.
      </p>

      <h3 class="ui header">How does that work?</h3>
      <p>
        The viewmodel-react-plugin for Babel adds the crust React requires. So our Hello component file gets transpiled into:
      </p>
<pre><code>import React from 'react';

export class Hello extends React.Component {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}</code></pre>

      <h3 class="ui header">How about an echo example?</h3>
<pre><code>Echo({
  message: '',
  render() {
    <div>
      <input b="value: message" />
      <label b="text: message"></label>
    </div>
  }
});</code></pre>

      <h3 class="ui header">Does it work with SSR?</h3>
      <p>
        Yes. It transpiles the b="" attributes/bindings into idiomatic React code. For example, if you write:
      </p>
<pre><code><p b="if: show">Hi</p></code></pre>
      <p>
        The Babel plugin transpiles it into:
      </p>
<pre><code>{ this.state.show ? <p>Hi</p> : null }</code></pre>

      <h3 class="ui header">Is it just syntactic sugar?</h3>
      <p>
        Syntactic sugar is nice but it's far from being what reduces your code the most. It's all the ceremonies, complex patterns, and runarounds you don't have to deal with anymore. To give an example, one of the UI boogeymen is state that is shared between two or more components. The two most common ways of dealing with this situation are:
      </p>
      <p>1) Let components reference one another so they can get the state they need. The problem here is that you want to share a banana but you end up sharing the gorilla holding the banana, and keeping track of the entire gorilla tribe, just in case that gorilla passes the banana to someone else.</p>
      <p>2) Store the entire state of the application in a central place. You no longer need to keep track of the gorillas, but now you need a jeep, a machete, and know your way through the entire jungle just to share a banana.</p>

      <p>ViewModel takes the simple approach of only sharing the state that needs to be shared. Components don't reference one another, you keep the shared state to a minimum, and components are explicit about which state can be modified by someone else. It works like this:</p>

      <p>First define a container (house) for the state that needs to be shared (address)</p>
<pre><code>ViewModel.share({
  house: {
    address: ''
  }
})</code></pre>

      <p>Declare that a component will share the house properties with other components:</p>
<pre><code>ComponentA({
  share: 'house',
  render() {
    <input b="value: address" />
  }
})/code></pre>

<pre><code>ComponentB({
  share: 'house',
  render() {
    <div b="text: address" />
  }
})</code></pre>

      <p>Now components A and B have access to the same address and nothing else. You use them as normal and treat address as just another property of the components.</p>
    </div>
  }
});