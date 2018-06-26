<template lang="html">
  <section>
    <h1>{{ title }}</h1>
    <p>{{ intro }}</p>

    <Post v-for="(post, index) in posts" :key="index" :post="post"></Post>
  </section>
</template>

<script>
import Post from '~/components/Post.vue'

export default {
  data() {
    return {
      meta: {
        title: 'Quentin Bellanger 🎈 | Blog',
        description: "I like to write about the following topics: CSS, Jamstack, Vuejs, JavaScript, HTML, side projects... Happy reading."
      },
      title: 'Blog',
      intro: "I like to write about the following topics: CSS, Jamstack, Vuejs, JavaScript, HTML, side projects... Happy reading."
    }
  },
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
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:title', name: 'og:title', content: this.meta.title },
        { hid: 'og:description', name: 'og:description', content: this.meta.description },
        { hid: 'og:url', name: 'og:url', content: `https://quentin-bellanger.com${this.$nuxt.$route.path}` },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.meta.title }
      ]
    }
  },
  components: {
    Post
  }
}
</script>
