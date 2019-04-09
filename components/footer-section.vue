<template>
  <footer role="contentinfo">
    <ul>
      <li><hyper-link href="https://twitter.com/bellanger_q">Twitter</hyper-link></li>
      <li><hyper-link href="https://github.com/bellangerq">GitHub</hyper-link></li>
      <li><hyper-link href="#">Subscribe</hyper-link></li>
    </ul>
    <p>Website built with <hyper-link href="https://nuxtjs.org/">Nuxt.js</hyper-link> and hosted on <hyper-link href="https://www.netlify.com/">Netlify</hyper-link>.</p>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  margin: 3rem 0;

  ul {
    display: flex;

    li {
      font-size: 1rem;
      padding: 0;

      &::before {
        display: none;
      }

      & + li {
        margin: 0 0 0 1rem;

        &::before {
          display: block;
          height: 0.25rem;
          left: -0.6rem;
          position: absolute;
          top: 0.7rem;
          width: 0.25rem;
        }
      }
    }
  }

  a {
    color: var(--color-main-base);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 1rem;
  }
}
</style>
