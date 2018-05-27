<template lang="html">
  <section>
    <h1>{{ $t('homepage.title') }}</h1>

    <p v-for="(paragraph, index) in $t('homepage.paragraphs')" :key="index">{{ paragraph }}</p>

    <blockquote :cite="$t('homepage.quote.source')">
      <p>"{{ $t('homepage.quote.content') }}" <cite>{{ $t('homepage.quote.author') }}</cite></p>
    </blockquote>

    <nuxt-link :to="localePath('services')" class="cta" :title="$t('homepage.button.title')">{{ $t('homepage.button.content') }}</nuxt-link>
  </section>
</template>
