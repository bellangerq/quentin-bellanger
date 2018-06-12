---
title: "How static websites empower front-end developers"
description: "Learn more about the benefits of the JAMstack way of building websites for front-end developers"
---

As a front-end developer, I never really enjoyed back-end stuff: managing databases, monitoring servers, updating software versions... Despite some people think all this stuff is necessary for any website to work, it's not always the case. I recently drove deeper into static websites, JAMstack and all that cool stuff. I firstly enjoyed it because it reminded me the first websites I was building with good old HTML & CSS (nope, no JS at this time!). But I was especially captivated by their power and surprised that they are still called "static".

## Not so static websites

Static websites are so called because they are build with standard markup (often HTML or Markdown), API and client-side JavaScript. Which is the definition of [JAMstack](https://jamstack.org/ "JAMstack: Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup"). On top of that, the idea is to call external services by plugging APIs in order to delegate work and to *[outsource complexity](https://www.slideshare.net/BrianDouglas27/civic-hacking-on-the-jamstack)*. So you can focus on front-end side while the back-end is managed by external services and still offers rich features like:

- Contact form,
- Payment service,
- Content management system,
- Search,
- Online store...

That's why the name is quite confusing. The only difference with *dynamic* websites lies in the architecture. While a dynamic website is made with a front-end, a database and a server, a static website will only have a front-end part and external services plugged in.

## Seamless development experience

Like Lego building, static websites are made of bricks which add features (like the ones listed above) and make a website more dynamic. This "no back-end" environment and the separation of concerns between the micro-services and the client allows front-end developer to completely focus on their part.

> While this architecture doesn't require knowledge in server side languages, developers still need a basic understanding of client-side JavaScript which is often required to play with APIs.

From coding to deployment, the whole experience of static website is easy. I mean **really**. You just have to choose a simple hosting solution which offers you to host basic HTML, CSS & JavaScript (Surge, GitHub pages, Now...), generate your local project and push it online. You can even skip the last part as some static site generators are connected to GitHub and automatically deploy when you're pushing your code.

Another advantage (among many others like security, speed, cost or SEO) of building static websites is that it gives freelancers the ability to build stuff from A to Z. You're no longer dependent on any back-end developer nor you need to put your hand in back-end code. It's a huge benefit when the majority of clients want the ability to edit the content of their website. Set up a headless CMS and you're done!

## A growing ecosystem

As it's a new trend, there are more and more players that help the JAMstack community to grow. The three main pillars of this modern architecture are:

- **Static site generators**: some are here since many years (Jekyll, Middleman...) and some other are quite new (Hugo, Gatsby...). Many of those are only dedicated to create static websites while others come from popular front-end frameworks like Nuxt (Vuejs) or Next (React). But the wide range of SSG is constantly growing to gives developers the comfort to choose their favorite stack.
- **Microservices**: to help developers making more versatile and complete websites, companies are opening their features by creating rich pluggable APIs. It allows static websites to compete with traditional websites in terms of feature because they can now provide rich components.
- **Developers**: as every new trend, it gains a lot of traction among developers. Even if I think it's rarely adopted for big websites and is more reserved for corporate websites for now, the idea of building powerful web apps with the JAMstack is growing.

I'm still discovering step by step this ecosystem. I started with my own website which is a static website generated from a Nuxt project. And now I'm building a Jekyll blog with a custom theme which will be connected to a headless CMS. I love it so far!

React to this post on [Twitter](https://twitter.com/bellanger_q)!
