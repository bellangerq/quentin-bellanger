import { createClient } from 'contentful'
import parseHomePage from './parsers/home-page'
import parseWorkPage from './parsers/work-page'
import parseBlogPage from './parsers/blog-page'
import parseMeta from './parsers/meta'
import parseArticle from './parsers/article'

const contentful = createClient({
  space: process.env.contentful_space,
  accessToken: process.env.contentful_access_token
})

export default function (locale) {
  return contentful.getEntries().then(entries => {
    const find = contentTypeid => entries.items.find(e => e.sys.contentType.sys.id === contentTypeid)
    const homePage = parseHomePage(find('homePage'))
    const workPage = parseWorkPage(find('workPage'))
    const blogPage = parseBlogPage(find('blogPage'))

    const articlesEntries = entries.items.filter(e => e.sys.contentType.sys.id === 'article')
    const articles = articlesEntries.map(parseArticle)

    return {
      homePage,
      workPage,
      blogPage,
      articles
    }
  })
}
