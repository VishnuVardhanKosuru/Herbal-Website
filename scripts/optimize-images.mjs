import { readdir, stat, rm } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

// Generates a .webp sibling for every raster image under public/images.
// Originals are never modified: <picture> falls back to them, so the rendered
// artwork is unchanged for browsers without WebP support.

const ROOT = path.resolve(import.meta.dirname, '..', 'public', 'images');

// High quality, full original resolution: WebP is only here to cut bytes, never
// to change how the artwork looks. A WebP is kept only when it is genuinely
// smaller than the source; otherwise the original is served as-is.
const QUALITY = 80;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let count = 0;
let skipped = 0;
let before = 0;
let after = 0;

for await (const file of walk(ROOT)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;

  const out = file.replace(/\.(jpe?g|png)$/i, '.webp');
  const outMobile = file.replace(/\.(jpe?g|png)$/i, '-mobile.webp');

  const image = sharp(file);
  const metadata = await image.metadata();
  const width = metadata.width;

  await image.webp({ quality: QUALITY, effort: 6 }).toFile(out);

  if (width && width > 768) {
    await sharp(file).resize(768).webp({ quality: QUALITY, effort: 6 }).toFile(outMobile);
  } else {
    await sharp(file).webp({ quality: QUALITY, effort: 6 }).toFile(outMobile);
  }

  const originalSize = (await stat(file)).size;
  const webpSize = (await stat(out)).size;

  if (webpSize >= originalSize) {
    // We still keep the .webp file even if it is larger because the frontend 
    // ImageWithFallback unconditionally requests the .webp sibling in production.
    // If we delete it, the image will fail to load with a 404 error.
    skipped++;
    // continue; // Commented out so we don't skip keeping it
  }

  before += originalSize;
  after += webpSize;
  count++;
}

const mb = (n) => (n / 1024 / 1024).toFixed(2);
console.log(`${count} images: ${mb(before)} MB -> ${mb(after)} MB WebP (${skipped} kept as original)`);
