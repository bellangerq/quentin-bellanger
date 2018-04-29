<template lang="html">
  <section>
    <h1>{{ title }}</h1>
    <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
    <div class="cards">
      <WorkCard
        v-for="reference in references"
        :reference="reference"
        :key="reference.id"
      />
    </div>
  </section>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
import WorkCard from '~/components/WorkCard.vue'

export default {
  data() {
    return {
      title: "Quelques réalisations issues de projets clients et personnels",
      paragraphs: [
        "Ayant le soucis du détail, j'apporte beaucoup d'attention au produit pour un résultat bien fini. Je prends également plus de plaisir à travailler pour des projets en lesquels je crois. Voici le résultat :"
      ]

    }
  },
  head () {
    return {
      meta: [
        { hid: 'og:description', property: 'og:description', content: 'Quelques réalisations de sites Internet issues de projets clients et personnels.' }
      ]
    }
  },
  components: {
    WorkCard
  },
  computed: mapState([
    'references'
  ])
}
</script>

<style lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
