<template>
  <div>
    <hero />
    <lost />
  </div>
</template>

<script>
import hero from '@/components/error/hero'
import lost from '@/components/error/lost'
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
  },

  components: { hero, lost }
}
</script>

<style lang="scss" scoped>
p {
  a {
    color: var(--color-main-base);
    transition: color 0.2s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
