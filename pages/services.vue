<template lang="html">
  <section>
    <h1>{{ $t('services.title') }}</h1>
    <p>{{ $t('services.intro') }}</p>
    <div>
      <h2>{{ $t('services.types.title') }}</h2>
      <p>{{ $t('services.types.intro') }}</p>
      <ul>
        <li v-for="(service, index) in $t('services.types.items')" :key="index">
          <strong>{{ service.title }}</strong> : {{ service.content }}
        </li>
      </ul>
    </div>
    <div>
      <h2>{{ $t('services.features.title') }}</h2>
      <p>{{ $t('services.features.intro') }}</p>
      <ul class="splitted">
        <li v-for="(feature, index) in $t('services.features.items')" :key="index">
          {{ feature }}
        </li>
      </ul>
    </div>
    <div>
      <h2>{{ $t('services.advantages.title') }}</h2>
      <p>{{ $t('services.advantages.intro') }}</p>
      <ul>
        <li v-for="(advantage, index) in $t('services.advantages.items')" :key="index">
          <strong>{{ advantage.title }}</strong> : {{ advantage.content }}
        </li>
      </ul>
    </div>
    <div>
      <h2>{{ $t('services.cta.title') }}</h2>
      <p v-html="$t('services.cta.intro')"></p>
      <a
        :href="$t('services.cta.link.href')"
        :title= "$t('services.cta.link.title')"
        class="cta"
      >
        {{ $t('services.cta.link.content') }}
      </a>
    </div>
  </section>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  head () {
    return {
      title: this.$t('services.meta.title'),
      meta: [
        { name: 'og:title', content: this.$t('services.meta.title') },
        { name: 'og:description', content: this.$t('services.meta.description') },
        { name: 'description', content: this.$t('services.meta.description') }
      ]
    }
  }
}
</script>
