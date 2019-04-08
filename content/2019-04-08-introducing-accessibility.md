---
title: "Feedbacks on introducing accessibility to my teammates"
description: "I'm sharing my process and struggles I encountered on introducing accessibility to my dev team. There are also easy tips to get started."
---

Accessibility isn't an easy task to setup within a team. In fact it even doesn't only rely on the development team but also on the design one. It's a general mindset to adopt in a company.

I had the opportunity to introduce my colleagues at [Muxu.Muxu](https://muxumuxu.com) to the accessibility basics as my knowledge in this area  was increasing and I wanted to share some insights, my experience and easy practices (mostly dev oriented) to adopt.

Note: <abbr title="Accessibility">a11y</abbr> will refer to "accessibility" through this blog post. It's a [numeronym](https://a11yproject.com/posts/a11y-and-other-numeronyms/).

## Hello, I'm a11y!

The first part of my quest was to introduce what a11y is before going into further actions. I talked to my colleagues and told them that I was learning a11y and wanted to make them (developers, designers but also the rest of the team) aware of it.

Luckily, this company cares about people that make and use the web and we shared common values so they gladly helped me in my task by allowing me to spend time on this and by offering me to buy books about it (like "[Inclusive design patterns](https://shop.smashingmagazine.com/products/inclusive-design-patterns)").

I started from scratch with an text document listing some tips to start implementing a11y into websites we were crafting. It was simple stuff, nothing too complex: just the basics that covered maybe 80% of the job (see the following list). Enough for a beginning and for a small team of 3 developers.

Once that document was detailed enough, my job was basically a day-to-day follow-up: giving hints and tips, commenting pull requests with possible improvements, answering questions, providing help when needed and sharing articles with good practices.

To summarize:
- The wish to start educating about a11y.
- A web accessibility checklist for developers.
- PR comments on making code more a11y friendly.
- Articles and tips shared in Slack.
- A presence to help and answer questions.

## The struggles

The success of this quest was moderate. It could have been much better even if I know that this kind of job takes a lot of time. The whole team has to be fully involved on the entire projects lifetime to make it a successful story. Even if some automatisms started to grow on the development team, we encounter some obstacles:

- Education is key and I think I should have made things more official. Starting with a keynote to explain what accessibility is and to set concrete goals to reach for both design and dev teams. This would have result in more involved teammates.

- For every project, accessibility wasn't considered from the beginning and the design phase was therefore not taking into account a11y potential issues (small text, lack of contrast, bad UX patterns...). And once design was sold, we couldn't go back.

- I sometimes had the feeling of being boring and insistent because I was always making sure we were delivering a11y friendly websites but it wasn't the priority of everyone. When the level of involvment is different for everyone, it's hard to find a middle ground.

- Accessibility is not something that sells. Clients doesn't really care about it and thus spending time on it is worthless. Convincing clients was and is difficult, especially for marketing websites (our core business) that value more design over accessibility.

## Start small

However, it's still relatively easy to produce accessible code when you don't have a strong knowledge of it. You have to start small and iterate, step by step. The best way to get started is to apply small changes here and there and habits will start to grow. I compiled 7 examples which, in my experience, have the best ease/efficiency ratio to level up the accessibility of a website:

1. **Use semantic HTML**: having a document structured with semantic and native tags provides built-in features and a better browser support. This works for the website's structure with landmarks (`<header>`, `<main>`, `<footer>`...) but also for text content (`<time>`, `<abbr>`, `<blockquote>`...). They provide a better context to the content. Also avoid over-engineering elements like `<select>` and prefer native tags.

2. **Label inputs**: form inputs can't live without their associated labels. They also need to be linked with the `for` and `id` attributes. With this in mind, your forms will have a proper markup and behave way better.

3. **Provide alternative text**: every image in your website must have an `alt` attribute. It provides a way for screen readers to *read* the image and tell the user what it is about. It can sometimes be blank but the attribute must be present: `alt=""`. [Read more about how using the `alt` text properly](https://a11yproject.com/posts/alt-text/).

3. **Make focus styles visible**: when you hit tab, the focused element must always be visible. Make sure you don't have this in your CSS: `*:focus { outline: none }`. By default, browsers add their own focus styles but you can override it and add your own.

4. **Add a skip link**: provide a way to skip the navigation when using the <kbd>tab</kbd> key to browse your website so keyboard users can directly jump to the main content of the page.

6. **Don't invert links and buttons**: remember that buttons (`<button>`) are for in-page actions (opening a menu, toggling dark mode...) while links (`<a>`) take you to another place with a different URL (different page, anchor or website).

7. **Check that content is readable**: the font size is not too small (above 14 pixels), not too thin and the colors (background and foreground) have sufficient contrast. Check it with one of the many online tools.
