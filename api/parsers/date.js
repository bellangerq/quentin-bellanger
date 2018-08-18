export default function (entry) {
  const locale = 'en-us'
  return new Date(entry).toLocaleString(locale, { month: "long", year: "numeric", day: "2-digit" })
}
