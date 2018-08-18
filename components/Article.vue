<template lang="html">
  <article role="article">
    <time :datetime="article.date">{{ article.date }}</time>
    <nuxt-link :to="article.route">
      <h2>{{ article.title }}</h2>
    </nuxt-link>
    <p>{{ article.description }}</p>
  </article>
</template>

<script>
import dateHelpers from '@/mixins/date'

export default {
  mixins: [dateHelpers],
  props: ['article']
}
</script>

<style lang="scss" scoped>
article {
  margin: 50px 0;

  a {
    display: inline-block;
    text-decoration: none;

    h2 {
      margin: 0;
    }
  }

  p {
    margin: 0;
  }
}
</style>
