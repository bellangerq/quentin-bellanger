<template lang="html">
  <div class="container">
    <a href="#content">Skip navigation</a>
    <Header/>
    <main role="main">
      <nuxt id="content"/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/vars.scss';

.container > a {
  background: $color-white;
  left: -1000px;
  padding: 20px;
  position: absolute;
  top: -1000px;
  z-index: 1;

  &:focus {
    left: 10px;
    top: 10px;
  }
}
</style>
