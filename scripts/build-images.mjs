// Turns the original hero PNG (exported from the design canvas) into web sizes.
// Run with `npm run images` whenever assets-src/hero-couple.png changes.
import sharp from 'sharp'

const src = 'assets-src/hero-couple.png'

await sharp(src).resize({ width: 1400 }).webp({ quality: 82 }).toFile('src/assets/hero-couple.webp')
await sharp(src)
  .resize({ width: 1400 })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('src/assets/hero-couple.jpg')
await sharp(src)
  .resize({ width: 1200, height: 630, fit: 'cover', position: 'attention' })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('public/og-image.jpg')

console.log('Images written.')
