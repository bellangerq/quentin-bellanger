module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.js',
      flag: 'en.png'
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      name: 'Français',
      file: 'fr.js',
      flag: 'fr.png'
    }
  ],
  defaultLocale: 'en',
  strategy: 'prefix_except_default',
  lazy: true,
  seo: true,
  langDir: 'i18n/',
  vueI18n: {
    fallbackLocale: 'en'
  }
}
