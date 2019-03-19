---
title: 'Creating a first ready-to-use custom element'
description: "A short introduction to custom elements to show how it's possible to build a simple and reusable component in a Vanilla JS environment."
---

The idea of this post, in addition to learn something new, is to be a quick introduction to custom elements for people who have never tried it and to show how to create a custom element really easily without diving deep into more advanced notions like Shadow <abbr title="Document Object Model">DOM</abbr> or lifecycle callbacks.

The example element will be a subscription form (input + label + alert). If you wanna jump directly to the code, head up to the [GitHub repository](https://github.com/bellangerq/subscribe-form).

## Definition and registration

While the <abbr title="Hypertext Markup Language">HTML</abbr> reference defines a plenty of tags (`<p>`, `<input>`, `<section>`...), you can create custom ones (such as `<subscribe-form>` or `<yo-lo>`) thanks to the [web components <abbr title="Application Programming Interface">API</abbr>](https://www.webcomponents.org/). It allows a more modular and reusable code like components in modern frameworks (Vue, React...). They behave like standard HTML tags and are defined like this:

```javascript
class SubscribeForm extends HTMLElement {
	/* definition, attributes, methods... */
}

window.customElements.define('subscribe-form', SubscribeForm)
```

A custom element is a JavaScript class which is defined inside the window custom elements registry.

## Content and behaviour

In a nutshell, the custom element `<subscription-form>` is a labelled input, a button and an alert box (see the markup in the code below).

Inside the `constructor() {}` object, you have to call `super()` (required by the custom elements spec). Then, you basically do what you want. In this example, I start by retrieving attributes (with fallbacks in case they are not provided) and then I define the markup for the tag:

```javascript
constructor() {
  super()

  this.name = this.getAttribute('name') || 'email'
  this.label = this.getAttribute('label') || 'Email'
  this.type = 'email'
  this.placeholder = this.getAttribute('placeholder') || ''

  this.innerHTML = `
    <form>
      <label for="${this.name}">${this.label}</label>
      <input type="${this.type}" required aria-required="true" id="${this.name}" placeholder="${this.placeholder}">
      <input type="submit" value="Subscribe" />
    </form>
    <div role="alert" hidden class="success">
      <p>You successfuly subscribed!</p>
      <button role="button" aria-label="Close">
        &times;
      </button>
    </div>
  `
}
```
_Note: `this` refers to the custom element itself._

Then the custom element has to be call in the HTML page with its attributes (don't forget to link the JavaScript file). Note that custom elements must contain a dash and can't be self closing.

```html
<subscribe-form required="true" name="email" label="Your email" placeholder="eg: john@doe.com"></subscribe-form>
```

Styling a custom element doesn't require extra knowledge. In fact it only needs a standard tag selector in <abbr title="Cascading Style Sheet">CSS</abbr>: `subscribe-form {color: blue}`.

To have a preview of what the code does, clone the [GitHub repository](https://github.com/bellangerq/subscribe-form) and open `index.html` in a browser ([see the browser support](https://caniuse.com/#feat=custom-elementsv1)).

## Going further

As expected, this component only scratches the surface of custom elements capabilities. Indeed, everything here is done inside the `constructor()` object and I played neither with the Shadow DOM nor with lifecycle callbacks which are powerful features to build custom elements. But this code already provides the ability to build reusable, autonomous and flexible components through a website.

Here are links about custom elements that I found useful while writing this article:

- [Custom Elements v1: Reusable Web Components](https://developers.google.com/web/fundamentals/web-components/customelements),
- [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements),
- [Removing jQuery from GitHub.com frontend](https://github.blog/2018-09-06-removing-jquery-from-github-frontend/),
- [An introduction to Custom Elements](https://dev.to/jamesrweb/an-introduction-to-custom-elements-5327),
- [Bruck: a prototyping system built with web components](https://github.com/Heydon/bruck).
