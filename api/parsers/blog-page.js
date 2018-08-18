import parseMeta from './meta'

export default function (entry) {
  const meta = parseMeta(entry.fields.meta)
  const {
    title,
    intro
  } = entry.fields

  return {
    title,
    intro,
    meta
  }
}
