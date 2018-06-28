<template lang="html">
  <section>
    <h1>{{ title }}</h1>
    <p>{{ intro }}</p>
    <div>
      <h2>{{ types.title }}</h2>
      <p>{{ types.intro }}</p>
      <ul>
        <li v-for="(service, index) in types.items" :key="index">
          <strong>{{ service.title }}</strong> : {{ service.content }}
        </li>
      </ul>
    </div>
    <div>
      <h2>{{ features.title }}</h2>
      <p>{{ features.intro }}</p>
      <ul class="splitted">
        <li v-for="(feature, index) in features.items" :key="index">
          {{ feature }}
        </li>
      </ul>
    </div>
    <div>
      <h2>{{ advantages.title }}</h2>
      <p>{{ advantages.intro }}</p>
      <ul>
        <li v-for="(advantage, index) in advantages.items" :key="index">
          <strong>{{ advantage.title }}</strong> : {{ advantage.content }}
        </li>
      </ul>
    </div>
    <div>
      <h2>{{ cta.title }}</h2>
      <p v-html="cta.intro"></p>
      <a
        :href="cta.link.href"
        :title= "cta.link.title"
        class="cta"
      >
        {{ cta.link.content }}
      </a>
    </div>
  </section>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  data() {
    return {
      meta: {
        title: 'Quentin Bellanger 🎈 | Services',
        description: "Are you looking for a freelance developer for your next web project?"
      },
      title: "Are you looking for a freelance developer for your next web project?",
      intro: "Here are the different types of projects and services that I propose. You will also find more information on how I work.",
      types: {
        title: "Types of projects",
        intro: "Depending on your project, you may need different types of services. Each project is different and unique but here are the main examples of services:",
        items: [
          {
            title: "Static website",
            content: "a website with few pages, ideal to introduce yourself or to showcase your company or association."
          },
          {
            title: "Blog",
            content: "a dynamic website allowing you to regulary publish new content, the perfecto solution for a news website."
          },
          {
            title: "E-commerce",
            content: "an online shop to promote your products catalogue and to start selling on Internet."
          },
          {
            title: "Landing page",
            content: "a micro website of one page, a simple and quick option to promote a marketing campaign of to showcase a product."
          }
        ]
      },
      features: {
        title: "Included in every project",
        intro: "Whatever your project is, I make sure to respect the standards of web development. These features are not optional but included in your project:",
        items: [
          "Mobile version",
          "Search engine optimization",
          "Security (HTTPS)",
          "Speed and performance",
          "Accessibility",
          "User experience"
        ]
      },
      advantages: {
        title: "Working together",
        intro: "In order for each project to take place in the best conditions, I make sure to respect some principles:",
        items: [
          {
            title: "Transparency",
            content: "I want to create and maintain a relationship of trust throughout the life of the project (and even after!) to be completely honest and transparent about the choices made in the realization of the latter."
          },
          {
            title: "Empathy",
            content: "I do my best to put myself in the user's place to help you make the right choices in the realization of your project in terms of design and user experience."
          },
          {
            title: "Methodology",
            content: "I work methodically by providing the client all the necessary tools and supports needed to follow the progress of his project in the best way."
          },
          {
            title: "Passion",
            content: "if I chose to be independent, it's because I like to create and have the freedom to choose my projects. Which means that I work a lot with passion."
          }
        ]
      },
      cta: {
        title: "Seems interesting to you?",
        intro: "Let's get in touch! Click the button below and explain your project and your needs in few lines. I'll get back to you as soon as possible. Have a nice day 🎈",
        link: {
          href: "mailto:hello@quentin-bellanger.com?subject=Hi%20Quentin%21",
          content: "Contact me",
          title: "Contact me"
        }
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
        { hid: 'og:url', name: 'og:url', content: `https://quentin-bellanger.com${this.$nuxt.$route.path}` },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.meta.title }
      ]
    }
  }
}
</script>
