import { createClient } from 'contentful'
import parseHomePage from './parsers/home-page'
import parseWorkPage from './parsers/work-page'
import parseBlogPage from './parsers/blog-page'
import parseMeta from './parsers/meta'

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

    return {
      homePage,
      workPage,
      blogPage
    }
  })
}
