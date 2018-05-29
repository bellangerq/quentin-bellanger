<template lang="html">
  <article>
    <nuxt-link :to="post.permalink">
      <h2>{{ post.title }}</h2>
    </nuxt-link>
    <small>{{ post.date }}</small>
    <p>{{ post.description }}</p>
  </article>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss" scoped>
</style>
