---
title: "Using Node and npm to automate writing workflow"
description: "Node comes with a lot of useful built-in modules. I use the filesystem API to enhance my writing workflow by automatically create Markdown files as blog posts."
---

I recently read [an article on Sparkbox's blog](https://seesparkbox.com/foundry/use_node_fs_instead_of_javascript_dependencies_to_scaffold_files) about using the Node `fs` module to automate file creation on a project instead of using Yeoman or any other scaffolding tool. It has the advantage of having 0 dependencies and also to precisely fit your needs.

As a front-end developer, I don't often have the opportunity to work with Node but this kind of script can upgrade my development and writing workflow. I tried to find a usage to experiment it.

## The need

On my blog, the content is written in Markdown in the `content` folder. For each new article, I manually create a file with the following name: a slug followed by the current date (e.g. `some-slug-2019-05-09.md`). I use YAML front matter to add some meta data to every article like the title and the description. I have to write them on each file:

```yaml
---
title: "Lorem ipsum dolor sit amet"
description: "Vestibulum interdum ex aliquet nisi fermentum, vitae luctus purus finibus. Duis sem nunc, aliquam at pretium sed, hendrerit sit amet eros."
---
```

To sum it up, I need to:

1. Create a new Markdown (`.md`) file.
2. Set its name to `some-slug-YYYY-MM-DD.md`.
3. Add the default front matter data on top of it.

We want to be able to run it from the command line like this: `node scripts/add-post.js some-slug 2019-05-09` and the job gets done automatically.

## Create the script

I start by creating a `scripts` folder with a  `add-post.js` file. Then I require the Node module allowing us to play with the file system. It is really straightforward:

```javascript
const fs = require('fs')
```

The [`fs` module](https://nodejs.org/api/fs.html) comes with a handy `writeFileSync` function that allows you to create a file in a folder and to fill it with default content. It takes two arguments: the file path and the content inside the file. We create a `generatePost()` function that takes two parameters, a slug and a date, to build the path string.

```javascript
function generatePost(slug, date) {
  fs.writeFileSync(
    `./content/${date}-${slug}.md`,
    "Lorem ipsum dolor sit amet"
  )
}
```

Next, we have to retrieve the needed parameters (a date and a slug). We can get those from the command line. Assuming the command is `node scripts/add-post.js some-slug 2019-05-09`, we can extract them like this:

```javascript
const args = process.argv.slice(2) // Here, `slice()` is used to remove default but useless params. Try logging `process.argv`.
const slug = args[0] // "some-slug"
const publishingDate = args[1] // "2019-05-09"
```

Then at the end of the script, we call the function with the arguments:

```javascript
generatePost(slug, publishingDate)
```

You can find the full script [on my GitHub profile](https://github.com/bellangerq/quentin-bellanger/blob/master/scripts/add-post.js). Apart from the main function, I added some extra code like validations, logs and errors management.

## Bind it to npm

What's great is that you can bind this long command to an npm script like you would do `npm run dev` to start your server. It avoid us to always type the path of the script and to give an appropriate name like `npm run post`.

Add the script to the `package.json` file:
```json
"scripts": {
  "post": "node scripts/add-post.js"
}
```
To use it, we have to provide parameters (date and slug). How does it work with an npm command? Use the double dash (`--`) to separate the params passed to the command itself and the params passed to the script:

```shell
npm run post -- some-slug 2019-05-09
```

In this example, what's comes after the double dash will be interpreted as the script params. There you go!

Even if this case does not saved me hours of my time, it still a good example of what can be done with built-in Node modules to create custom helpers. I wish I can find other good use cases for front-end developers!