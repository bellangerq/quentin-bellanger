<template lang="html">
  <div class="container">
    <EnHeader/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script type="text/javascript">
import EnHeader from '~/components/EnHeader.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    EnHeader,
    Footer
  }
}
</script>
