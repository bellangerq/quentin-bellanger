<template lang="html">
  <article role="article">
    <time :datetime="post.date">{{ postDate(post.date) }}</time>
    <nuxt-link :to="post.permalink">
      <h2>{{ post.title }}</h2>
    </nuxt-link>
    <p>{{ post.description }}</p>
  </article>
</template>

<script>
export default {
  methods: {
    postDate (date) {
      const locale = 'en-us'
      return new Date(date).toLocaleString(locale, { month: "long", year: "numeric", day: "2-digit" })
    }
  },
  props: ['post']
}
</script>

<style lang="scss" scoped>
article {
  margin: 50px 0;

  time {
    color: $color-black-light;
    display: block;
    font-size: 0.8em;
    text-transform: uppercase;
  }

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
