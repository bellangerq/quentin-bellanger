---
title: "Generate anchor links with Markdown content"
description: "An easy helper function to programmatically generate anchor links on page headings. Useful for JAMstack with static Markdown."
---

One of the oldest feature of the web are links. They allow you to navigate through pages of the web. But some of them let you jump through different section of a website: they are anchor links. They are built the same way except that their `href` attribute ends with a hash symbol followed by a string (e.g. #some-anchor) and must match with the corresponding section's `id` they jump to. You can read more [about how anchor links work here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).

I'm really interested and work a lot with [JAMstack](https://jamstack.org) websites where content is often written in Markdown which is a great way for non-technical people to write content in a technical environment. But one common pitfall I run through while working with Markdown is the inability to automatically create anchor links on headings in blog posts. So I made a short JavaScript function to fix this.

## Slugify helper

To make anchor links working, we first have to create a slug for every heading we've got. It will be the glue that will associate the hyperlink's  `href`  and the section's `id` (like said above).

Each heading's link on the page will have its own slug. There are tons of packages on npm to do this but I prefer the solution of doing my custom helper: it's lightweight, tailored for my needs and doesn't depend on someone else's code. Here is it:

```javascript
const slugify = str => {
  return str.
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^0-9a-z.-]/g, '')
}
```

It takes a string and returns it in small letters, without spaces or special characters and words are separated with dashes (e.g. "Hello world!" would give "hello-world").

## Insert the markup

What we will be doing is inserting HTML code (a `<a>`) and adding an attribute to the heading element.

Let's query the page for every needed headings (on this blog it is only `h2` and `h3`) and for each:

  1. Set the slug with the previously defined `slugify()` function.
  2. Insert a link tag next to the title with `insertAdjacentHTML()`.
  3. Set an `id` attribute to the heading matching the slug.

```javascript
const generateAnchorLinks = headings => {
  headings.forEach(h => {
    const slug = slugify(h.innerText)
    h.insertAdjacentHTML('beforeend', `<a href="#${slug}" class="anchor">#</a>`)
    h.setAttribute('id', slug)
  })
}
```

Then you just have to run this function when the page loads.

## Progressive enhancement

As this solution relies on JavaScript to work, users with JavaScript disabled won't be able to benefit this feature. An alternative solution would be to manually write the links in Markdown.

```markdown
[Lorem ipsum dolor sit amet](#lorem-ipsum)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan malesuada auctor. Nulla sollicitudin porttitor tincidunt. Nullam aliquet, lacus ut luctus euismod, ex lacus iaculis neque, eget suscipit quam nulla viverra mi.
```

Headings would be rendered this way (I think the rendering should vary depending on the Markdown interpreter):

```html
<h2 id="lorem-ipsum">
  <a href="#lorem-ipsum">Lorem ipsum dolor sit amet</a>
</h2>
```

For a concrete example, you can read my [blog's source code on GitHub](https://github.com/bellangerq/quentin-bellanger/blob/master/components/article/post.vue#L23) (it is written in VueJS but easily understandable).