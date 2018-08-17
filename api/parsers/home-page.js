import parseMeta from './meta'

export default function (entry) {
  const meta = parseMeta(entry.fields.meta)
  const {
    title,
    description,
    paragraph1,
    paragraph2,
    quoteContent,
    quoteAuthor,
    quoteSource,
    buttonContent,
    buttonTitle,
    buttonLink,
  } = entry.fields

  return {
    meta,
    title,
    description,
    paragraph1,
    paragraph2,
    quoteContent,
    quoteAuthor,
    quoteSource,
    buttonContent,
    buttonTitle,
    buttonLink,
  }
}
