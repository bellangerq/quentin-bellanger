module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#c2185b' },

      // Facebook
      { name: 'og:site_name', content: 'Quentin Bellanger' },
      { name: 'og:image', content: '/og.png' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/og.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  loading: { color: '#c2185b' },

  css: [
    { src: '@/assets/stylesheets/main.scss', lang: 'scss'},
    { src: '@/assets/stylesheets/prism.css', lang: 'css'}
  ],
  modules: [
    'nuxtent',
    '@nuxtjs/pwa',
    ['nuxt-sass-resources-loader', '@/assets/stylesheets/main.scss']
  ],
  mixins: ['date'],
  manifest: {
    'name': "Quentin Bellanger \n Front-end developer",
    'short_name': "@bellanger_q",
    'start_url': '/?app=true',
    'display': 'standalone',
    'orientation': 'portrait',
    'theme_color': '#c2185b',
    'background_color': '#fff',
    'icons': [{
      'src': '@/static/icon.png',
      'sizes': '512x512',
      'type': 'image/png'
    }]
  },
  plugins: [
    { src: '~plugins/ga', ssr: false },
    { src: '~plugins/hyper-link', ssr: true }
  ],
  build: {
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
  }
}
