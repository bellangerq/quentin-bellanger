<template lang="html">
  <section>
    <h1>{{ $t('homepage.title') }}</h1>

    <p v-for="(paragraph, index) in $t('homepage.paragraphs')" :key="index">{{ paragraph }}</p>

    <blockquote :cite="$t('homepage.quote.source')">
      <p>"{{ $t('homepage.quote.content') }}" <cite>{{ $t('homepage.quote.author') }}</cite></p>
    </blockquote>

    <nuxt-link :to="localePath('services')" class="cta" :title="$t('homepage.button.title')">{{ $t('homepage.button.content') }}</nuxt-link>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        title: this.$t('homepage.meta.title'),
        meta: [
          { name: 'og:title', content: this.$t('homepage.meta.title') },
          { name: 'og:description', content: this.$t('homepage.meta.description') },
          { name: 'description', content: this.$t('homepage.meta.description') },
          { name: 'twitter:title', content: this.$t('homepage.meta.title') },
        ]
      }
    }
  }
</script>
