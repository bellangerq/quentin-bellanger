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
        { hid: 'description', name: 'description', content: this.post.description },
        { hid: 'og:title', name: 'og:description', content: this.post.description },
        { hid: 'og:description', name: 'og:title', content: this.post.title },
        { hid: 'og:url', name: 'og:url', content: `https://quentin-bellanger.com${this.$nuxt.$route.path}` },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.post.title }
      ]
    }
  }
}
</script>
