<template lang="html">
  <section>
    <h1>{{ title }}</h1>

    <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>

    <blockquote :cite="quote.source">
      <p>"{{ quote.content }}" <span>{{ quote.author }}</span></p>
    </blockquote>

    <nuxt-link to="/services" class="cta" :title="button.title">{{ button.content }}</nuxt-link>

  </section>
</template>

<script>
  export default {
    data() {
      return {
        meta: {
          title: 'Quentin Bellanger 🎈 | Freelance web developer',
          description: "I have a passion for web development and create websites as a freelancer."
        },
        title: "I have a passion for web development and create websites as a freelancer.",
        paragraphs: [
          "Hi! I'm Quentin, a curious front-end web developer based in Laval, France. As a minimalist, I like simple things, writing, basket-ball and eSport.",
          "Since April 2018, I offer my services in web development as a freelancer. If you're a company, an association or an individual looking for a website, feel free to contact me."
        ],
        quote: {
          author: "David Miotti, web developper at Muxu.Muxu",
          content: "Quentin is a very strong and enthusiastic web developer, ready to share his experience. Pragmatic, not afraid of challenges, he is always thinking about the end user experience. It is a pleasure to work with him. Definitely someone you should work with.",
          source: "https://www.linkedin.com/in/bellangerq/"
        },
        button: {
          content: "See my services",
          title: "See the list of my services"
        }
      }
    },
    head () {
      return {
        title: this.meta.title,
        meta: [
          { hid: 'description', name: 'description', content: this.meta.description },
          { hid: 'og:title', name: 'og:title', content: this.meta.title },
          { hid: 'og:description', name: 'og:description', content: this.meta.description },
          { hid: 'og:url', name: 'og:url', content: "https://quentin-bellanger.com" },
          { hid: 'og:type', name: 'og:type', content: 'website' },
          { hid: 'twitter:title', name: 'twitter:title', content: this.meta.title }
        ]
      }
    }
  }
</script>
