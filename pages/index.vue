<template lang="html">
  <section>
    <h1>{{ homePage.title }}</h1>

    <p>{{ homePage.paragraph1 }}</p>
    <p>{{ homePage.paragraph2 }}</p>

    <blockquote :cite="homePage.quoteSource">
      <p>"{{ homePage.quoteContent }}" <span>{{ homePage.quoteAuthor }}</span></p>
    </blockquote>

    <nuxt-link :to="homePage.buttonLink" class="cta" :title="homePage.buttonTitle">{{ homePage.buttonContent }}</nuxt-link>

  </section>
</template>

<script>
  export default {
    computed: {
      homePage () {
        return this.$store.state.content.homePage
      }
    },
    head () {
      return {
        title: this.homePage.meta.title,
        meta: [
          { hid: 'description', name: 'description', content: this.homePage.meta.description },
          { hid: 'og:title', name: 'og:title', content: this.homePage.meta.title },
          { hid: 'og:description', name: 'og:description', content: this.homePage.meta.description },
          { hid: 'og:url', name: 'og:url', content: "https://quentin-bellanger.com" },
          { hid: 'og:type', name: 'og:type', content: 'website' },
          { hid: 'twitter:title', name: 'twitter:title', content: this.homePage.meta.title }
        ]
      }
    }
  }
</script>
