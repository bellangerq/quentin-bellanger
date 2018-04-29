<template lang="html">
  <section>
    <h1>{{ title }}</h1>

    <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>

    <blockquote :cite="recommendation.source">
      <p>"{{ recommendation.text }}" <cite>{{ recommendation.author }}</cite></p>
    </blockquote>

    <nuxt-link :to="link.href" class="cta" :title="link.title">{{ link.text }}</nuxt-link>
  </section>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        title: 'I have a passion for web development and create websites as a freelancer.',
        paragraphs: [
          "Hi! I'm Quentin, a curious front-end web developer based in Laval, France. As a minimalist, I like simple things, writing, basket-ball and eSport.",
          "Since April 2018, I offer my services in web development as a freelancer. If you're a company, an association or an individual looking for a website, feel free to contact me."
        ],
        recommendation: {
          text: "Quentin is a very strong and enthusiastic web developer, ready to share his experience. Pragmatic, not afraid of challenges, he is always thinking about the end user experience. It is a pleasure to work with him. Definitely someone you should work with.",
          author: "David Miotti, web developper at Muxu.Muxu",
          source: "https://www.linkedin.com/in/bellangerq/"
        },
        link: {
          text: "Contact me",
          href: "mailto:hello@quentin-bellanger.com?subject=Hi%20Quentin!",
          title: "Send me an email"
        }
      }
    },
    layout: 'en',
    head () {
      return {
        title: 'Quentin Bellanger 🎈 | Freelance web developer',
        meta: [
          { hid: 'og:description', property: 'og:description', content: 'I have a passion for web development and create websites as a freelancer.' }
        ]
      }
    }
  }
</script>
