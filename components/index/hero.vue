<template>
  <div class="hero">
    <div class="title">
      <img src="../../assets/images/pp.jpg" alt="Quentin" />
      <h1>Quentin Bellanger</h1>
    </div>
    <p>I am a front-end web developer based in Laval, France. The main focus of my work is to build accessible, inclusive and user-friendly web interfaces for people I like to work with. I've collaborate on diverse projects such as <hyper-link href="https://todoist.com/templates/">Todoist</hyper-link>, <hyper-link href="http://cfoconnect.eu">Spendesk</hyper-link> or <hyper-link href="https://help.payfit.tech/hc/fr/">Payfit</hyper-link>. You can find some of my work on <hyper-link href="https://github.com/bellangerq">GitHub</hyper-link> and drop me a line on <hyper-link href="https://twitter.com/bellanger_q">Twitter</hyper-link>. Otherwise I am a minimalist and I enjoy gaming, eSport, writing and basketball.</p>
  </div class="hero">
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  .title {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    img {
      border-radius: 50%;
      background: var(--color-main-base);
      height: 3rem;
      margin-right: 2rem;
      width: 3rem;
    }
  }

  p {
    a {
      color: var(--color-main-base);

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
