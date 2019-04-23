<template lang="html">
  <div id="site">
    <div class="container">
      <header-section />
      <main role="main">
        <nuxt />
      </main>
      <footer-section />
    </div>
  </div>
</template>

<script>
import headerSection from '@/components/header-section'
import footerSection from '@/components/footer-section'
export default {
  components: { headerSection, footerSection }
}
</script>
