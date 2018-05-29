<template lang="html">
  <article>
    <time :datetime="post.date">{{ moment(post.date).format('MMMM Do YYYY') }}</time>
    <nuxt-link :to="post.permalink">
      <h2>{{ post.title }}</h2>
    </nuxt-link>
    <p>{{ post.description }}</p>
  </article>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      moment
    }
  },
  props: ['post']
}
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/vars.scss';
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
