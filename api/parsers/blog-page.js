import parseMeta from './meta'
import parseArticle from './article'

export default function (entry) {
  const meta = parseMeta(entry.fields.meta)
  const articlesEntries = entry.fields.articles
  const articles = articlesEntries.map(parseArticle)
  const {
    title,
    intro
  } = entry.fields

  return {
    title,
    intro,
    articles,
    meta
  }
}
