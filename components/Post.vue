<template lang="html">
  <article role="article">
    <time :datetime="post.date">{{ formatDate(post.date) }}</time>
    <nuxt-link :to="post.permalink">
      <h2>{{ post.title }}</h2>
    </nuxt-link>
    <p>{{ post.description }}</p>
  </article>
</template>

<script>
import dateHelpers from '@/mixins/date'

export default {
  mixins: [dateHelpers],
  props: ['post']
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
