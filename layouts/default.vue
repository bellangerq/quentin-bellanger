<template lang="html">
  <div id="site">
    <header-section />
    <main role="main">
      <nuxt />
    </main>
    <footer-section />
  </div>
</template>

<script>
import headerSection from '@/components/header-section'
import footerSection from '@/components/footer-section'
export default {
  components: { headerSection, footerSection }
}
</script>
