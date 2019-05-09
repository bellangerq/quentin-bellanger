const fs = require('fs')

const args = process.argv.slice(2)
const slug = args[0]
const publishingDate = args[1]

const dateRegex = /^\d{4}-\d{2}-\d{2}$/

const date = new Date()
const today = `${date.getFullYear().toString()}-${(date.getMonth() + 1).toString().padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`

function generatePost(slug, date) {
  date = date || today

  if (!date.match(dateRegex)) {
    console.log("Date must be in the following format: YYYY-MM-DD.")
    return
  }

  if (!slug) {
    console.log("Provide a valid slug.")
    return
  }

  fs.writeFileSync(
    `./content/${date}-${slug}.md`,
    "---\ntitle: \"\"\ndescription: \"\"\n---\n\nStart writing here..."
  )

  console.log(`Successfully created \`content/${date}-${slug}.md\`!`)
}

generatePost(slug, publishingDate)