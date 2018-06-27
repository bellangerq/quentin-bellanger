<template lang="html">
  <div class="container">
    <section>
      <h1>{{ title }}</h1>
      <p>{{ intro }}</p>
      <nuxt-link to="/" class="cta" :title="button.title">{{ button.content }}</nuxt-link>
    </section>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['error'],
  data() {
    return {
      meta: {
        title: `Quentin Bellanger 🎈 | Error ${this.error.statusCode}`,
        description: "The page you're looking for doesn't exist. Go back to the homepage."
      },
      title: `Error ${this.error.statusCode}`,
      intro: "Oops! The page you're looking for doesn't exist. Go back to the homepage.",
      button: {
        content: "To the homepage",
        title: "Go back to the homepage"
      }
    }
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
  }
}
</script>
