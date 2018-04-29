<template lang="html">
  <section>
    <h1>{{ title }}</h1>
    <p>{{ intro }}</p>
    <div class="services">
      <h2>{{ services.title }}</h2>
      <p>{{ services.intro }}</p>
      <ul>
        <li v-for="(service, index) in services.items" :key="index">
          <strong>{{ service.title }}</strong> : {{ service.content }}
        </li>
      </ul>
    </div>
    <div class="features">
      <h2>{{ features.title }}</h2>
      <p>{{ features.intro }}</p>
      <ul class="splitted">
        <li v-for="(feature, index) in features.items" :key="index">
          {{ feature }}
        </li>
      </ul>
    </div>
    <div class="advantages">
      <h2>{{ advantages.title }}</h2>
      <p>{{ advantages.intro }}</p>
      <ul>
        <li v-for="(advantage, index) in advantages.items" :key="index">
          <strong>{{ advantage.title }}</strong> : {{ advantage.content }}
        </li>
      </ul>
    </div>
    <div class="interested">
      <h2>{{ cta.title }}</h2>
      <p>{{ cta.intro }}</p>
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
      title: "Vous chercher un développeur freelance pour votre projet web ?",
      intro: "Voici les différents types de projets et les services que je propose. Vous trouverez également plus d'information sur ma manière de travailler.",
      services: {
        title: "Typologies de projets",
        intro: "Selon votre projet, vous pouvez avoir besoin de différents types de service. Chaque projet est différent et unique mais voici les principaux exemples de prestations :",
        items: [
          {
            title: "Site vitrine",
            content: "un site de quelques pages, idéal pour vous présenter vous ou mettre en avant votre entreprise ou association."
          },
          {
            title: "Blog",
            content: "un site dynamique permettant la publication de contenu de manière régulière, la solution parfaite pour une section actualités."
          },
          {
            title: "E-commerce",
            content: "un site marchand pour migrer votre catalogue de produits existant en version web afin de commencer à vendre sur internet."
          },
          {
            title: "Landing page",
            content: "un micro-site d'une page, une option simple et rapide pour promouvoir une campagne marketing ou mettre en avant un produit."
          }
        ]
      },
      features: {
        title: "Inclu dans tous les projets",
        intro: "Quel que soit votre projet, je m'assure de respecter les standards du développement web. Ces fonctionnalités ne sont pas optionnelles mais incluses dans votre projet :",
        items: [
          "Version mobile",
          "Référencement (SEO)",
          "Sécurité (HTTPS)",
          "Rapidité et performance",
          "Accessibilité",
          "Expérience utilisateur"
        ]
      },
      advantages: {
        title: "Travailler ensemble",
        intro: "Afin que chaque projet se déroule dans les meilleures conditions, je fais en sorte de respecter quelques principes :",
        items: [
          {
            title: "Transparence",
            content: "je tiens a créer et garder une relation de confiance tout au long de la vie du projet (et même après !) afin d'être totalement honnête et transparent sur les choix pris dans la réalisation de ce dernier."
          },
          {
            title: "Empathie",
            content: "j'essaie au maximum de me mettre à la place de l'utilisateur pour vous aider à faire les bons choix dans la réalisation de votre projet en matière de design et d'expérience."
          },
          {
            title: "Méthodologie",
            content: "je travaille de manière méthodique en apportant au client tous les outils et supports adéquats pour suivre l'évolution de son projet de la meilleure manière."
          },
          {
            title: "Passion",
            content: "si j'ai choisi d'être indépendant, c'est pour la passion de créer et la liberté de choisir mes projets. Ce qui signifie que je travaille beaucoup par passion et mets du coeur à l'ouvrage."
          }
        ]
      },
      cta: {
        title: "L'offre vous intéresse ?",
        intro: "Prenons contact, expliquez moi votre projet ainsi que vos besoins et vos envies et je reviendrai vers vous le plus vite possible. Bonne journée 🎈",
        link: {
          href: "https://quentin-bellanger.typeform.com/to/XqqHm1",
          content: "Contactez-moi",
          title: "Contactez-moi"
        }
      }
    }
  },
  head () {
    return {
      meta: [
        { hid: 'og:description', property: 'og:description', content: 'Je crée des sites Internet sur mesure en tant que développeur web indépendant.' }
      ]
    }
  }
}
</script>
