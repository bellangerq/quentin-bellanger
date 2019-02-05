<template>
  <header>
    <hyper-link href="/">Quentin Bellanger</hyper-link>
    <h1>{{ title }}</h1>
    <time :datetime="date">{{ formatDate(date) }}</time>
  </header>
</template>

<script>
import dateHelpers from '@/mixins/date'
export default {
  props: ['title', 'date'],
  mixins: [dateHelpers]
}
</script>

<style lang="scss" scoped>
header {
  margin: 3rem 0 1rem;

  a {
    color: $color-main;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: $weight-black;
    margin-bottom: 1.5rem;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: rgba($color-main, 0.3);
    }
  }

  time {
    display: block;
    font-style: italic;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
}
</style>
