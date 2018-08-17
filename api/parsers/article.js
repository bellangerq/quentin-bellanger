import parseMeta from './meta'

export default function (entry) {
  const meta = parseMeta(entry.fields.meta)
  const {
    title,
    description,
    body,
    route
  } = entry.fields

  return {
    title,
    description,
    body,
    route,
    meta
  }
}
