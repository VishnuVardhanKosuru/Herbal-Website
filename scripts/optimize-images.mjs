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
const QUALITY = 90;

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

  await sharp(file).webp({ quality: QUALITY, effort: 6 }).toFile(out);

  const originalSize = (await stat(file)).size;
  const webpSize = (await stat(out)).size;

  if (webpSize >= originalSize) {
    await rm(out);
    skipped++;
    continue;
  }

  before += originalSize;
  after += webpSize;
  count++;
}

const mb = (n) => (n / 1024 / 1024).toFixed(2);
console.log(`${count} images: ${mb(before)} MB -> ${mb(after)} MB WebP (${skipped} kept as original)`);
