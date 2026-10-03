// Runs before `npm run build`: refuses to publish while any [PLACEHOLDER] is left
// in the site's copy (spec FR-6). Use `npm run build:draft` to build anyway.
import { readFileSync } from 'node:fs'

const file = 'src/content.ts'
const lines = readFileSync(file, 'utf8').split('\n')
const found = []

lines.forEach((line, i) => {
  if (line.trim().startsWith('*') || line.trim().startsWith('//')) return
  for (const m of line.matchAll(/\[[A-Z][A-Z ']+\]/g)) found.push(`  ${file}:${i + 1}  ${m[0]}`)
})

if (found.length) {
  console.error(`\n✋ ${found.length} placeholder(s) still need your words before publishing:\n`)
  console.error(found.join('\n'))
  console.error('\nFill them in src/content.ts, or run `npm run build:draft` for a test build.\n')
  process.exit(1)
}
console.log('✓ No placeholders left.')
