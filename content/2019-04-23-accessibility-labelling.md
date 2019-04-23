---
title: "Giving elements accessible names"
description: "A simple guide about using basic ARIA attributes to label interactive elements on a webpage for assistive technology."
---

I talked in my previous post about how I [introduced accessibility to my colleagues](https://quentin-bellanger.com/introducing-accessibility). I also gave a list of small tips to get started with <abbr title="Accessibility">a11y</abbr> (accessibility) and one of those was about labelling things. Let's dive deeper into this!

While some people are browsing the web using their eyes, some other are using screen readers. On a webpage, what we can see is sometimes different than what we can ear and we surely perceive things differently depending on our device. For example, screen reader users doesn't literary read a website the same way we browse it by sight.

To make sure that the browsing experience is great with an assistive technology, developers have the responsibility to make sure that every interactive element on a page has a proper name when announced.

## Default behavior

By default, screen readers announce the content encapsulated between tags. Most of the time, we don't have to do anything if our website's markup is well structured and coupled with semantic HTML (and I hope it does!). This is by the way the [first rule of <abbr title="Accessible Rich Internet Applications">ARIA</abbr> (Accessibile Rich Internet Applications)](https://www.w3.org/TR/using-aria/#firstrule):

> If you can use a native HTML element [HTML51] or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so.

Of course there are some cases that require more attention like complex components.

## Using ARIA attributes

When the default behavior is not the expected one, the [WAI-ARIA specification](https://www.w3.org/WAI/standards-guidelines/aria/) provides a set of tools to prevent missing or wrong labelling. HTML attributes can be added to improve the element announcement on screen readers:

- `aria-label`: defines a string value that labels the current element.
- `aria-labelledby`: identifies the element (or elements) that labels the current element. The `id` attribute is used to link element (see the example below).

The [rule to use them](https://www.w3.org/TR/wai-aria/#aria-label) is:

> If the label text is visible on screen, authors should use `aria-labelledby` and should not use `aria-label`.

## Practical example: labelling a card link

Let's say we have a list of cards. Each card contains an image, a title, a description and a "Read more" link with the following markup:

```html
<li>
  <img src="path/to/image.jpg" alt="Some random image alt text" />
  <h2>How to label things?</h2>
  <p>Lorem ipsum dolor sit amet...</p>
  <a href="/card-link">Read more</a>
</li>
```

If a screen reader is reading the list items, it will read for every item the image alt text, title, description and "Read more". The last part is problematic because this text is generic and completely disconnected from each card's topic. There is a lack of context for the screen reader and a lack of understanding for the user. Let's use the ARIA labelling attributes to fix the link name.

### With `aria-label`

```html
<li>
  <img src="path/to/image.jpg" alt="Some random image alt text" />
  <h2>How to label things?</h2>
  <p>Lorem ipsum dolor sit amet...</p>
  <a href="/card-link" aria-label="Follow the tutorial about labelling things">Read more</a>
</li>
```

The link will be announced "**Follow the tutorial about labelling things**". The tag's content is completely ignored in this case.

### With `aria-labelledby`

```html
<li>
  <img src="path/to/image.jpg" alt="Some random image alt text" />
  <h2 id="title">How to label things?</h2>
  <p>Lorem ipsum dolor sit amet...</p>
  <a href="/card-link" aria-hidden="true" aria-labelledby="title">Read more</a>
</li>
```

The link will be announced "**How to label things?**" as it pulls the content from the element with the associated `id`.

*Note: the use of `aria-hidden` makes the "Read more" part invisible for assistive technology so only the title will be announced.*
