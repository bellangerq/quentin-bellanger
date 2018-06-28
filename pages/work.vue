<template lang="html">
  <section>
    <h1>{{ title }}</h1>
    <p>{{ intro }}</p>

    <Work
      v-for="(project, index) in projects"
      :key="index"
      :work="project"
    />
  </section>
</template>

<script>
import Work from '~/components/Work.vue'

export default {
  components: {
    Work
  },
  data () {
    return {
      meta: {
        title: "Quentin Bellanger 🎈 | Recent work",
        description: "Some cool stuff I worked on, for clients or for me, as personnal projects."
      },
      title: "Recent work",
      intro: "You can find here cool projects I worked on, for clients or for me, as personal projects.",
      projects: [
        {
          title: "Cactomain",
          subtitle: "No Bullshit Hosting. Hassle-Free. Just Domains.",
          href: "https://cactomain.co",
          src: "cactomain.jpg"
        },
        {
          title: "Neige",
          subtitle: "Minimalist and lightweight Jekyll blog theme.",
          href: "https://neige-theme.com",
          src: "neige.jpg"
        },
        {
          title: "The shorter the bettr",
          subtitle: "Dead simple URL shortener.",
          href: "http://www.shrtbtr.com",
          src: "shrtbtr.jpg"
        }
      ]
    }
  },
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:title', name: 'og:title', content: this.meta.title },
        { hid: 'og:description', name: 'og:description', content: this.meta.description },
        { hid: 'og:url', name: 'og:url', content: `https://quentin-bellanger.com${this.$nuxt.$route.path}` },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.meta.title }
      ]
    }
  }
}
</script>
