<template lang="html">
  <div class="work-card">
    <img :src="imgPath(reference.img)" :alt="reference.title">
    <a :href="reference.url" :title="reference.title" target="_blank">
      {{ reference.title }}
    </a>
    <span class="subtitle">{{ reference.subtitle }}</span>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['reference'],
  methods: {
    imgPath (imageName) {
      return require(`~/assets/images/${imageName}`)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/stylesheets/vars.scss';

.work-card {
  margin: 20px 0 0 0;
  width: 100%;

  img {
    width: 100%;
  }

  a {
    color: $color-black;
    display: inline-block;
    margin: 10px 0 5px 0;
    text-decoration: none;

    &:focus,
    &:hover {
      color: $color-main-dark;
    }
  }

  .subtitle {
    color: darken($color-white, 20%);
    display: block;
    font-size: 12px;
    text-transform: uppercase;
  }

  @media(min-width: 650px) {
    margin: 40px 20px 0 0;
    width: calc(50% - 20px);

    &:nth-child(even) {
      margin: 40px 0 0 20px;
    }
  }
}
</style>
