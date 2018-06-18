---
title: 'Writing semantic quotes for the web'
description: 'On how to build structured and meaningful quotations of the web thanks to semantic HTML5 tags.'
---

As I am browsing the web, I'm often noticing myself inspecting websites' source code (I guess it's a web developer OCD...). I notice that many quotes on the web are losing their  meaning: they are reduced to simple `<p>` tags. Let's see how developers should emphasize their original nature.

## Reminder: semantic is cool

A semantic HTML helps to communicate with the browser in order to give it additional information and a better context about what's inside a web page. It gives elements a meaning. This way, browsers can handle components and tags differently and render them the way they should be rendered. It also adds native keyboard navigation and screen readers points of reference ([more on semantic and accessibility](https://24ways.org/2017/accessibility-through-semantic-html/)) which helps a lot to empower web accessibility.

This behavior is managed by browsers and therefore is different in every browser and dependent of how they are implementing new HTML features. Some new elements (I think of `<input type="color">` or `<details>` and `<summary>`) can save developers hours of far-fetched JavaScript or CSS code to reproduce their behavior. But be sure to check [CanIUse](https://caniuse.com/) to know the support across browsers.

## Semantic quotes

Back to our subject, there are two ways to create semantic quotes on the internet. Back to our subject, there are two ways to create semantic quotes on the internet. Let's consider [this Codepen](https://codepen.io/bellangerq/pen/MXmGKw) I made with the two quoting strategies detailed below:

<p data-height="600" data-theme-id="0" data-slug-hash="MXmGKw" data-default-tab="result" data-user="bellangerq" data-embed-version="2" data-pen-title="Quote" class="codepen">See the Pen <a href="https://codepen.io/bellangerq/pen/MXmGKw/">Quote</a> by Quentin Bellanger (<a href="https://codepen.io/bellangerq">@bellangerq</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### The `<blockquote>` tag

This is the most popular one. It wraps the quote inside a `<blockquote>` tag and takes an optional `cite` attribute whose value is the source of the quote. This tag should be used to emphasize **long quotes**. Inside the `<blockquote>`, a good practice is to wrap the quote's content in a `<p>` tag. Here is a full example:

```html
<blockquote cite="https://www.brainyquote.com/quotes/michael_jordan_127660">
	<p>I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.</p>
	<span>Michael Jordan</span>
</blockquote>
```

Learn more about the `<blockquote>` tag on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote).

### The `<q>` tag

This one is preferred for short quotes or parts of a long quote. The quote should be wrapped inside the `<q>` tag which is itself inside a text tag (`<p>` for example). As for the previous one, the short quote tag can have a `cite` attribute with the quote's source. This is how it should be implemented:

```html
<p>As the famous scientist <span>Albert Einstein</span> once said, <q cite="https://www.brainyquote.com/quotes/albert_einstein_103652">Everything should be made as simple as possible, but not simpler.</q> and as a minimalist I can't agree more.</p>
```

Learn more about the `<q>` tag on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q).

## Key points to remember

- Wrap long quotes inside `<blockquote>`.
- Use `<q>` for short quotes inside a `<p>` tag.
- Add `cite` attribute for both if there is a source.

The quotation elements are a small part among many other semantic tags like `<nav>`, `<aside>`, `<time>` and they are dedicated to emphasize a special type of content (navigation, side content, date...). The capabilities of modern web provided by HTML5 gives us superpowers to structure a web page and make components semantic. As a learning exercise, I suggest you to get lost in the MDN documentation to discover some new tags or attributes. Try it out!
