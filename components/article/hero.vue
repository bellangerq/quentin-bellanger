<template lang="html">
  <div class="hero">
    <h1>{{ title }}</h1>
    <time :datetime="date">{{ formatDate(date) }}</time>
  </div class="hero">
</template>

<script>
import dateHelpers from '@/mixins/date'
export default {
  props: ['title', 'date'],
  mixins: [dateHelpers]
}
</script>

<style lang="scss" scoped>
.hero {
  margin-bottom: 1rem;

  time {
    display: block;
    font-style: italic;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
}
</style>
