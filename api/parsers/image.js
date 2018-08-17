export default function (entry) {
  if (!entry || !entry.fields || !entry.fields.file || !entry.fields.title)
    return { src: null, alt: null }
  const src = entry.fields.file.url
  const alt = entry.fields.title
  return { src, alt }
}
