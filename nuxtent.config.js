const Prism = require('prismjs')
const loadLanguages = require('prismjs/components/index.js')
loadLanguages(['ruby', 'sass', 'bash', 'markdown', 'yaml', 'json'])

module.exports = {
  content: {
    page: '/_slug',
    permalink: ':slug',
    isPost: true,
    generate: ['get', 'getAll']
  },
  parsers: {
    md: {
      extend(config) {
        config.highlight = (code, lang) => {
          return `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)}</code></pre>`
        }
      }
    }
  },
  api: function(isStatic) {
    return {
      baseURL: 'http://localhost:3000',
      browserBaseURL: isStatic ? 'https://quentin-bellanger-2019.netlify.com/' : ''
    }
  }
}
