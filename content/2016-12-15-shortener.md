---
title: 'The shorter the bettr: my first Ruby on Rails project'
description: 'Here is what I learnt building this bit.ly like web app.'
featured_image: 'input.jpg'
---

Since I’ve moved from marketer to web developer (*already 5 months*), I’m still looking for a specialization. Web development is split between front-end and back-end where many technologies compete against each other in both sides. Add to this all the frameworks that exist. It’s hard to find your path and to decide what you really want to do.

A thing is sure: I do want to learn more! I’m more into front-end development but I’m also huge fan of Ruby on Rails. So I decided to create a small web app on this framework: [The shorter the bettr](http://www.shrtbtr.com). It’s an really simple URL shortener.

### Dead simple URL shortener

It’s basically a bit.ly app, nothing more. Just paste a long URL into the link input, click and you’ll have a prettier and shorter link to share.

There are just 3 pages:

- The first one to shorten a given URL,
- Another to get your shortened URL,
- And a last one just accessible for me to see a list of all the shortened links.

![](https://cdn-images-1.medium.com/max/2818/1*xmzSx_sJptzhLR-K9FjWAQ.png)

### What did I use?

To create this app I used **Ruby and Rails** based of course on **Ruby**. This is a really attractive language because its syntax is very clean. It’s also known to be easy to learn so why not?

Here are the **main gems** I used (*as well as those already in Rails*):

- [haml](https://github.com/haml/haml): even if (*in my opinion*) it’s hard to master, I love the clean syntax. It divide at least by 2 the HTML code quantity.
- [will_paginate](https://github.com/mislav/will_paginate): a very easy to use pagination gem to split long lists of items into pages.
- [dotenv](https://github.com/bkeepers/dotenv): in order to load environment variable in your .env file (*to store sensitive information*).

See my [Gemfile](https://github.com/bellangerq/the-shorter-the-better/blob/master/Gemfile) to get the full list of my gems.

To deploy my app, I tried **Heroku** which was the obvious choice for an Rails app. It was the first time I used it and it went well! The hardest part was to replace SQlite3 by PostgreSQL (*because Heroku doesn’t support SQlite*). The rest is quite easy to set up and well documented.

And of course, the whole **app source code is available on [Github](https://github.com/bellangerq/the-shorter-the-better)**. If you want to take a look, it’s here:
[the-shorter-the-better](https://github.com/bellangerq/the-shorter-the-better).

### How does it work?

**Before I explain**: I’m far from being a Ruby on Rails expert, I’m still learning the framework. If you have questions or improvement’s suggestions, feel free to ask in comments.*

#### Model

The Ruby on Rails structure of the app is very light: I just have one model (shorteners) in my database and it takes 3 attributes:

- given_url: this is the link the user will submit. Its presence and format are validated server side (*as well as client side*).
- slug: this will be the final part of the shortened link, a string of 6 concatenated characters generated with: `self.slug = 6.times.map { [*’0'..’9', *’a’..’z’].sample }.join`.
- count: this is only a stat counter which will be incremented every time a user visit a shortened link (*see later*).

#### Controller

I also have only one controller with the classic new, create, show and index views. I added a custom method redirect_to in order to take care of the redirection on the short link.

Every time a new given_url is submitted in the form, a new slug is created and associated with the given_url.

I also created a custom controller for error pages. It allows me to customize them instead of having the default error page. This isn’t the most important thing but I think it can makes the difference (*note that it took me something like 20 minutes*). I just followed [this nice tutorial](https://mattbrictson.com/dynamic-rails-error-pages).

#### Routes

The short URL is based on the concatenation of the domain name and the slug. The structure of the short URL is set in routes.rb:

```ruby
# domain name + slug = short URL
get "/:slug" => "shorteners#redirect", as: :s
```

I also added setup errors routes and set my root URL to the main controller new action.

I’d recommend any new developer interested in learning Rails (*or not*) to try to create a web application. While my programming skills are increasing day by day, building this app taught me a lot (*even if there are still many things I need to know to feel comfortable*):

- Setup from A to Z a simple Ruby on Rails app,
- Store environment variables and use it in my app,
- Deploy on an Heroku server,
- Create my own scripts for repetitive tasks (*local server, deploy…*),
- It increased my knowledge in Ruby language and HAML syntax.

In case you have questions or suggestions, feel free to ask in comment (*or [write me an email](mailto:hello@quentin-bellanger.fr) or [ping me on Twitter](http://www.twitter.com/bellanger_q)*). For those who want to take a deeper look at the code, check the Github repository.
