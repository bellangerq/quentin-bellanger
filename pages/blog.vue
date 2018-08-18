<template lang="html">
  <section>
    <h1>{{ blogPage.title }}</h1>
    <p>{{ blogPage.intro }}</p>

    <Article v-for="(article, index) in articles" :key="index" :article="article"></Article>

  </section>
</template>

<script>
import Article from '~/components/Article.vue'

export default {
  components: {
    Article
  },
  computed: {
    blogPage () {
      return this.$store.state.content.blogPage
    },
    articles () {
      return this.$store.state.content.articles
    }
  },
  head () {
    return {
      title: this.blogPage.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.blogPage.meta.description },
        { hid: 'og:title', name: 'og:title', content: this.blogPage.meta.title },
        { hid: 'og:description', name: 'og:description', content: this.blogPage.meta.description },
        { hid: 'og:url', name: 'og:url', content: `https://quentin-bellanger.com${this.$nuxt.$route.path}` },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.blogPage.meta.title }
      ]
    }
  }
}
</script>
