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
      title: 'Quentin Bellanger',
      meta: [
        { hid: 'description', property: 'description', name: 'description', content: 'I am a front-end web developer focused on building accessible, inclusive and user-friendly websites.' },
        { hid: 'og:title', property: 'og:title', name: 'og:title', content: 'Quentin Bellanger' },
        { hid: 'og:description', property: 'og:description', name: 'og:description', content: 'I am a front-end web developer focused on building accessible, inclusive and user-friendly websites.' },
        { hid: 'og:type', property: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', name: 'og:url', content: 'https://quentin-bellanger.com' }
      ]
    }
  }
}
</script>
