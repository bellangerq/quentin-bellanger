<template>
  <article>
    <div v-html="post.body" class="body" />
  </article>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss" scoped>
article {
  border-bottom: 0.25rem solid rgba($color-black, 0.05);
  border-top: 0.25rem solid rgba($color-black, 0.05);
  margin-top: 3rem;
  padding: 3rem 0;

  /deep/ .body {
    p + * {
      margin-top: 1rem;
    }

    a {
      color: $color-main;
      transition: color 0.2s ease-in-out;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
