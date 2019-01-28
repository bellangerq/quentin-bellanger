<template lang="html">
  <div>
    <hero />
    <thoughts :posts="posts" />
  </div>
</template>

<script>
import hero from '@/components/index/hero'
import thoughts from '@/components/index/thoughts'
export default {
  asyncData ({ app }) {
    return app.$content('/').getAll()
    .then(res => {
      return { posts: res }
    })
    .catch(console.error)
  },
  components: { hero, thoughts },
  head () {
    return {
      title: 'Blog of Quentin Bellanger',
      meta: [
        { hid: 'description', name: 'description', content: "description" },
        { hid: 'og:title', name: 'og:title', content: "Blog of Quentin Bellanger" },
        { hid: 'og:description', name: 'og:description', content: "description" },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', name: 'og:url', content: "https://quentin-bellanger.com" }
      ]
    }
  }
}
</script>
