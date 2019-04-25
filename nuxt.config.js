module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#c2185b' },

      // Facebook
      { property: 'og:site_name', name: 'og:site_name', content: 'Quentin Bellanger' },
      { property: 'og:image', name: 'og:image', content: '/og.png' },
      { property: 'og:image:width', name: 'og:image:width', content: '1200' },
      { property: 'og:image:height', name: 'og:image:height', content: '630' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/og.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  loading: false,
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
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  }
}
