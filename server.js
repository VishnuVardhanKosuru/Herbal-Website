import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DIST = path.join(__dirname, 'dist');

const ONE_YEAR = 31536000;

app.use(
  express.static(DIST, {
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      // index.html must always be revalidated so new deploys are picked up.
      if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-cache');
        return;
      }
      // Vite emits content-hashed filenames into /assets, so they can be cached forever.
      if (filePath.includes(`${path.sep}assets${path.sep}`)) {
        res.setHeader('Cache-Control', `public, max-age=${ONE_YEAR}, immutable`);
        return;
      }
      // Everything else in public/ (images, fonts, icons) keeps a long but revalidated TTL.
      res.setHeader('Cache-Control', `public, max-age=${ONE_YEAR}`);
    },
  })
);

app.get('*', (req, res) => {
  if (req.path.match(/\.(jpe?g|png|webp|svg|gif|ico|css|js)$/i)) {
    return res.status(404).send('Not found');
  }
  res.setHeader('Cache-Control', 'no-cache');
  res.sendFile(path.join(DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
