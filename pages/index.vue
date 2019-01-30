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
        { hid: 'description', name: 'description', content: 'I am a front-end web developer based in Laval, France. The main focus of my work is to build accessible, inclusive and user-friendly web interfaces for people I like to work with' },
        { hid: 'og:title', name: 'og:title', content: 'Quentin Bellanger' },
        { hid: 'og:description', name: 'og:description', content: 'I am a front-end web developer based in Laval, France. The main focus of my work is to build accessible, inclusive and user-friendly web interfaces for people I like to work with' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', name: 'og:url', content: 'https://quentin-bellanger.com' }
      ]
    }
  }
}
</script>
