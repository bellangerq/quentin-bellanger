<template lang="html">
  <div>
    <main role="main">
      <nuxt />
    </main>
    <footer-section />
  </div>
</template>

<script>
import footerSection from '@/components/footer-section'
export default {
  components: { footerSection }
}
</script>
