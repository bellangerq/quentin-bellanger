<template lang="html">
  <div class="project">
    <a :href="work.href" target="_blank" rel="noopener">
      <img :src="imgPath(work.src)" :alt="work.title + ': ' + work.subtitle">
    </a>
    <h2>{{ work.title }}</h2>
    <h3>{{ work.subtitle }}</h3>
  </div>
</template>

<script>
export default {
  props: ['work'],
  methods: {
    imgPath (imageName) {
      return require(`~/assets/images/${imageName}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/vars.scss';

.project {
  margin-bottom: 40px;

  a {
    box-shadow: 0 2px 2px 0 rgba($color-black, 0.10);
    display: block;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 2px 2px 0 rgba($color-black, 0.20);
    }
  }

  h2 {
    font-size: 1.2em;
    margin: 20px 0 0;
  }

  h3 {
    color: $color-black-light;
    font-size: 1em;
    font-weight: normal;
    margin: 10px 0 0;
  }
}
</style>
