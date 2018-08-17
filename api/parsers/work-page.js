import parseMeta from './meta'
import parseProject from './project'

export default function (entry) {
  const meta = parseMeta(entry.fields.meta)
  const projectsEntries = entry.fields.projects
  const projects = projectsEntries.map(parseProject)
  const {
    title,
    intro
  } = entry.fields

  return {
    meta,
    title,
    intro,
    projects
  }
}
