<template lang="html">
  <div>
    <hero :title="post.title" :date="post.date" />
    <post :post="post" />
  </div>
</template>

<script>
import hero from '@/components/article/hero'
import post from '@/components/article/post'
export default {
  asyncData ({ app, route, error }) {
    return app.$content('/').get(route.path)
    .then(post => {
      return {
        post: post
      }
    })
    .catch(e => {
      error({ statusCode: 404 })
    })
  },
  components: { hero, post },
  head () {
    return {
      title: `${this.post.title} - Quentin Bellanger`,
      meta: [
        { hid: 'description', property: 'description', name: 'description', content: this.post.description },
        { hid: 'og:title', property: 'og:title', name: 'og:title', content: `${this.post.title} - Quentin Bellanger` },
        { hid: 'og:description', property:'og:description', name: 'og:description', content: this.post.description },
        { hid: 'og:type', property: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', name: 'og:url', content: `https://quentin-bellanger.com${this.post.permalink}` }
      ]
    }
  }
}
</script>
