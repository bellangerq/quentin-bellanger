<template lang="html">
  <div class="project">
    <a :href="project.link" target="_blank" rel="noopener" :alt="project.title + ': ' + project.description">
      <img @load="loadImg" :data-src="project.image.src" :alt="project.title + ': ' + project.description">
    </a>
    <h2>{{ project.title }}</h2>
    <h3>{{ project.description }}</h3>
  </div>
</template>

<script>
export default {
  props: ['project'],
  methods: {
    setImgSrc() {
      const images = document.querySelectorAll('[data-src]')
      images.forEach(image => {
        image.setAttribute('src', image.getAttribute('data-src'))
      })
    },
    loadImg() {
      event.target.removeAttribute('data-src')
    }
  },
  mounted() {
    this.setImgSrc()
  }
}
</script>

<style lang="scss" scoped>
.project {
  margin-bottom: 40px;

  a {
    background: $color-main;
    box-shadow: 0 2px 2px 0 rgba($color-black, 0.10);
    display: block;
    transition: box-shadow 0.3s ease-in-out;
    width: 100%;

    @media (min-width: 650px) {
      min-height: 300px;
    }

    &:hover {
      box-shadow: 0 2px 2px 0 rgba($color-black, 0.20);
    }

    img {
      border-radius: $radius;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;

      &[data-src] {
        opacity: 0;
      }
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
