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
        title: 'J\'ai une passion pour le développement web et crée des sites Internet en indépendant.',
        paragraphs: [
          "Bonjour, je suis Quentin, curieux développeur web front-end basé à Laval. Minimaliste, j'aime les choses simples, écrire, le basket-ball et l'eSport.",
          "Depuis avril 2018, je propose mes services de développeur web en tant qu'indépendant. Si vous êtes une entreprise, une association ou un particulier intéressé, consultez la liste des services que je propose pour en savoir plus."
        ],
        recommendation: {
          text: "Quentin est un très bon développeur enthousiaste, prêt à partager son expérience. Pragmatique et n'ayant pas peur des défis, il a toujours en tête l'expérience de l'utilisateur final. C'est un plaisir de travailler avec lui.",
          author: "David Miotti, développeur chez Muxu.Muxu",
          source: "https://www.linkedin.com/in/bellangerq/"
        },
        link: {
          text: "Voir mes services",
          href: "/services",
          title: "Consulter la liste de mes services"
        }
      }
    }
  }
</script>
