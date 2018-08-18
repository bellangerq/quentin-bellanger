import parseMeta from './meta'
import parseDate from './date'

export default function (entry) {
  const meta = parseMeta(entry.fields.meta)
  const date = parseDate(entry.sys.createdAt)
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
    meta,
    date
  }
}
