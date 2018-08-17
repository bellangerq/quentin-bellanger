<template lang="html">
  <section>
    <h1>{{ workPage.title }}</h1>
    <p>{{ workPage.intro }}</p>

    <Project
      v-for="(project, index) in workPage.projects"
      :key="index"
      :project="project"
    />
  </section>
</template>

<script>
import Project from '~/components/Project.vue'

export default {
  components: {
    Project
  },
  computed: {
    workPage () {
      return this.$store.state.content.workPage
    }
  },
  head () {
    return {
      title: this.workPage.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.workPage.meta.description },
        { hid: 'og:title', name: 'og:title', content: this.workPage.meta.title },
        { hid: 'og:description', name: 'og:description', content: this.workPage.meta.description },
        { hid: 'og:url', name: 'og:url', content: `https://quentin-bellanger.com${this.$nuxt.$route.path}` },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.workPage.meta.title }
      ]
    }
  }
}
</script>
