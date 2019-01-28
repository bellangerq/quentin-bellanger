<template>
  <section>
    <article v-for="post in posts" :key="post.title">
      <h2>
        <hyper-link :href="post.permalink">{{ post.title }}</hyper-link>
      </h2>
      <time :datetime="post.date">{{ formatDate(post.date) }}</time>
      <p>{{ post.description}}</p>
    </article>
  </section>
</template>

<script>
import dateHelpers from '@/mixins/date'
export default {
  props: ['posts'],
  mixins: [dateHelpers]
}
</script>

<style lang="scss" scoped>
section {
  border-bottom: 0.25rem solid rgba($color-black, 0.05);
  border-top: 0.25rem solid rgba($color-black, 0.05);
  margin: 3rem auto 0;
  max-width: 47rem;
  padding: 3rem 0;

  article {
    & + article {
      margin-top: 3rem;
    }

    h2 {
      color: $color-main;
      margin-bottom: 0;

      a:hover {
        text-decoration: underline;
      }
    }

    time {
      display: block;
      font-style: italic;
      line-height: 1.5;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
