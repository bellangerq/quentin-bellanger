<template lang="html">
  <section>
    <h1>{{ $t('blog.title') }}</h1>
    <p>{{ $t('blog.intro') }}</p>

    <Post v-for="(post, index) in posts" :key="index" :post="post"></Post>
  </section>
</template>

<script>
import Post from '~/components/Post.vue'

export default {
  asyncData ({ app }) {
    return app.$content('/').getAll()
    .then(res => {
      return {
        posts: res
      }
    })
    .catch(console.error)
  },
  head () {
    return {
      title: this.$t('blog.meta.title'),
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.$t('blog.meta.title') },
        { hid: 'og:description', property: 'description', content: this.$t('blog.meta.description') },
        { hid: 'description', property: 'description', content: this.$t('blog.meta.description') }
      ]
    }
  },
  components: {
    Post
  }
}
</script>
