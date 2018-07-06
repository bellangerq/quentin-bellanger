---
title: 'How to avoid using front-end libraries'
description: 'Exploiting existing tools and creating custom helpers can help dealing with the drawbacks of importing external code.'
---

It's very tempting when working on a web project to import [*insert external library*] to do [*insert task*]. It often gives developers the ability to save time relying on external code instead of doing manually something. But it has drawbacks.

## Dependencies everywhere

What it means to rely on every possible external library? It means you're dependent. It's never enjoyable to know that your app or website doesn't only rely on you, but also on other people's work. If they change, you must react, often quickly in order not to break something. We may think it's a safe call to use the more stable libraries or frameworks but you never know what can happen.

As your app grows, the dependencies folder also does (`node_modules` or equivalent). And we all know how it can become the heaviest thing in the world. In terms of performance, it's probably not the best deal to overload it. Especially when we import a whole library to just use a specific function or to tweak it to fit our needs.

Independence, performance, I would also add comfort: that's why it's important to think twice before running another `npm install awesome-library`.With several developers working on a project, it's never pleasing making the installation part a tricky thing with many dependencies to deal with.

## Exploit existing technologies

Today's existing web technologies provide a wide range of useful (and sometimes unknown) tools. Developers can create rich content and features only relying on the base web stack: HTML, CSS, JavaScript. Here are some examples that can save time and lines of code:

- With semantic markup elements powered by HTML5, web components now have a meaning and are given superpowers.  `<div>`s should now be replaced by smarter and structuring elements like `<main>`, `<aside>`, `<section>`...
- CSS can be hacked in many ways and can go beyond its original styling duty: pseudo-element `::before` and `::after` to insert content, `count` property to iterate over elements, `box-shadow` to create complex border effects...
- The modern web brings [a lot of new APIs](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) (some are still WIP): offline storage, device access, web sockets, drag and drop... The list of these browser-native features is long but none of them requires external code. All you need is JavaScript!

## Create your own tools

Your app is **your** app, styled by **you**. Don't import a CSS library (Bootstrap, Foundation...). Create your own CSS components, your own helper classes but only the ones you really use. CSS libraries come with tons of default styles you don't need. By doing that, you make sure 100% of your codebase is important and you're in control of your style (dealing with external stylesheets is a pain, isn't it `!important`?).

To bounce back on the fact that we often use a small part of imported libraries, why you couldn't create your own JavaScript helper functions as well? Lodash or jQuery come with handy methods that could be made with Vanilla JavaScript (See: [You Might Not Need jQuery](http://youmightnotneedjquery.com/)).

The most important part is that your code will be tailored for you to fit with your app. This leads to:

- A simpler and concise documentation of the project,
- A better understanding of what your app is made of,
- A seamless knowledge handover between team members.

## Conclusion

Of course, this post reflects my opinion based on my experience. I tend to use as few external libraries as possible in order to really make my code mine without thinking about dependencies.

It really depends on the project and everything that is gravitating around: deadlines, budget, team... But the libraries themselves make the choice important: some are up to date with a large and reactive team behind, others are outdated and no more maintained. What's your take on this?
