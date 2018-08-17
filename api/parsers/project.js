import parseImage from './image'

export default function (entry) {
  const image = parseImage(entry.fields.image)
  const {
    title,
    description,
    link
  } = entry.fields

  return {
    title,
    description,
    link,
    image
  }
}
