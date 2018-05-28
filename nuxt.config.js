const i18n = require('./i18n')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Quentin Bellanger 🎈 | Développeur web freelance',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#5090ff' },

      // Facebook
      { hid: 'og:site_name', property: 'og:site_name', content: 'Quentin Bellanger' },
      { hid: 'og:title', property: 'og:title', content: 'Quentin Bellanger 🎈 | Développeur web freelance' },
      { hid: 'og:image', property: 'og:image', content: 'https://quentin-bellanger.com/og.png' },
      { hid: 'og:url', property: 'og:url', content: 'https://quentin-bellanger.com' },
      { hid: 'og:description', property: 'og:description', content: 'J\'ai une passion pour le développement web et crée des sites Internet en indépendant.' },

      // Twitter
      { hid: 'twitter:title', property: 'twitter:site', content: '@bellanger_q' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:image', property: 'twitter:image', content: 'https://quentin-bellanger.com/og.png' },
      { hid: 'twitter:widgets:theme', property: 'twitter:widgets:theme', content: 'light' },
      { hid: 'twitter:widgets:link-color', property: 'twitter:widgets:link-color', content: '#5090ff' },
      { hid: 'twitter:widgets:border-color', property: 'twitter:widgets:border-color', content: '#5090ff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#5090ff' },

  css: [
    { src: '@/assets/stylesheets/vars.scss', lang: 'scss'},
    { src: '@/assets/stylesheets/typo.scss', lang: 'scss'},
    { src: '@/assets/stylesheets/common.scss', lang: 'scss'},
    { src: '@/assets/stylesheets/prism.css', lang: 'css' }
  ],
  /*
  ** Modules
  */
  modules: [
    ['nuxt-i18n', i18n],
    'nuxtent'
  ],
  /*
  ** Plugins
  */
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    middleware: ['routeGuard']
  }
}
