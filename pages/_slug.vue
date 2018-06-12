<template lang="html">
  <article>
    <h1>{{ post.title }}</h1>
    <div v-html="post.body"></div>
  </article>
</template>

<script>
export default {
  i18n: false,
  asyncData ({ app, route }) {
    return app.$content('/').get(route.path)
    .then(post => {
      return {
        post: post
      }
    })
    .catch(console.error)
  },
  head () {
    return {
      title: this.post.title,
      meta: [
        { name: 'og:title', content: this.post.title },
        { name: 'og:description', content: this.post.description },
        { name: 'description', content: this.post.description },
        { name: 'og:type', content: 'article' },
        { name: 'twitter:title', content: this.post.title }
      ]
    }
  }
}
</script>
