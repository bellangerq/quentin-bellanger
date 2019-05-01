# Quentin Bellanger

<img src="/static/icon.png" width="16"> My personal website and blog: https://quentin-bellanger.com.

## Development

```sh
# Install dependencies
npm install

# Run local server
npm run dev

# Generate static project
npm run generate
```

## Scripts

### Create a new post

```sh
npm run post -- create-new-post 2019-05-01
# This would create `content/2019-05-01-create-new-post.md`
```

If no date is provided, today's date is used.

## Deployment

The site is hosted on [Netlify](https://netlify.com) and is deployed every time a commit is pushed on `master` branch.

## Todo

### Features
- Add something to illustrate error page
- About page
- RSS feed

### Fixes
- Meta image
- Theme switcher
