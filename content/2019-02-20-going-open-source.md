---
title: 'Going open source for the first time'
description: "After one year working with Vue.js, I am glad to announce that I'm launching my first Open Source Software project!"
---

After few years working in web development, I am glad to announce that I'm launching my first open source project: [hyper-link](https://github.com/muxumuxu/hyper-link).

## Long story short

I started working with Vue.js when I joined [Muxu.Muxu](https://muxumuxu.com/), one year ago. The chosen stack was Nuxt.js, a Vue.js framework. The benefit of using the same stack on every website is that you can easily catch pieces of code that could be improved.

To avoid code duplication and headaches, my colleague David created a small helper to automatically handle different types of link (`<nuxt-link>` and `<a>`) and we started to use it internally. It was working well but limited to the ecosystem of tools we were using and thus not really sharable.

As a developer, you always know that you are never alone when you encounter a bug or an issue. That's why I suggested to open source this little helper so other people could use it. After we brought some improvements and made it universal for all Vue.js users, it was published on GitHub and npm to first be tried internally.

## Introducing hyper-link

hyper-link is a Vue.js component that aims to simplify the use of link tags by providing a universal hypertext link helper. You basically don't have to worry about using either the `<router-link>` or the `<a>` tag to create links. It's really easy to use and outputs the correct tag depending on the provided attributes.

- The code and documentation are available on [GitHub](https://github.com/muxumuxu/hyper-link).
- The component is ready to be used on production websites: `npm install @muxumuxu/hyper-link`.
- As it is my first open source experience, feedbacks and contributions are more than welcome!

On a more personal level, I'm so happy I could launch this project! It took me more time to just publishing it than to build it. It was quite hard to overcome the fear of doing things in a wrong way. I would like to thank [David](https://twitter.com/davidmiotti) who helped me in building and publishing this little package and [Sacha](https://twitter.com/sachadso) for sharing with me his experience and a lot of good advices about <abbr title="Open Source Software">OSS</abbr>.
