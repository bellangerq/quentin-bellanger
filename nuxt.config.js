module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Quentin Bellanger 🎈 | Front-end developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#5090ff' },

      // Facebook
      { name: 'og:site_name', content: 'Quentin Bellanger' },
      { name: 'og:image', content: 'https://quentin-bellanger.com/og.png' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: 'https://quentin-bellanger.com/og.png' },
      { name: 'twitter:widgets:theme', content: 'light' },
      { name: 'twitter:widgets:link-color', content: '#5090ff' },
      { name: 'twitter:widgets:border-color', content: '#5090ff' },
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
    'nuxtent',
    '@nuxtjs/pwa'
  ],
  /*
  ** Manifest
  */
  manifest: {
    'name': "Quentin Bellanger \n Front-end developer",
    'short_name': "Quentin B.",
    'start_url': '/?app=true',
    'display': 'standalone',
    'orientation': 'portrait',
    'theme_color': '#5090ff',
    'background_color': '#fff',
    'icons': [{
      'src': '@/static/icon.png',
      'sizes': '512x512',
      'type': 'image/png'
    }]
  },
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
