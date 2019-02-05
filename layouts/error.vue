<template>
  <div>
    <header>
      <hyper-link href="/">Quentin Bellanger</hyper-link>
      <h1>Oops! This page doesn't exist</h1>
    </header>
    <main>
      <p>Sorry for the inconvenience, please go back to the <hyper-link href="/">homepage</hyper-link>.</p>
    </main>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Error page - Quentin Bellanger',
      meta: [
        { hid: 'description', name: 'description', content: "description" },
        { hid: 'og:title', name: 'og:title', content: "Error page - Quentin Bellanger" },
        { hid: 'og:description', name: 'og:description', content: "description" },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', name: 'og:url', content: `https://quentin-bellanger.com${this.$nuxt.$route.path}` }
      ]
    }
  }
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
}

main {
  p {
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
