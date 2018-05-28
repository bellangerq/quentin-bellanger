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
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        { hid: 'og:description', property: 'description', content: this.post.description },
        { hid: 'description', property: 'description', content: this.post.description }
      ]
    }
  }
}
</script>
