import express from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = '0.0.0.0';

// Enable Gzip/Brotli compression for ultra-fast asset delivery
app.use(compression({
  threshold: 1024,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  }
}));

// Performance & Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// High-performance caching for hashed Next.js static assets (1 year immutable)
app.use('/_next/static', express.static(path.join(__dirname, '_next/static'), {
  maxAge: '365d',
  immutable: true
}));

// Media caching for project images and assets (7 days)
app.use('/src/assets', express.static(path.join(__dirname, 'src/assets'), {
  maxAge: '7d'
}));

// Serve remaining static assets with default caching
app.use(express.static(__dirname, {
  maxAge: '1h'
}));

// Fallback placeholder for missing project images
app.get('/projects/:name', (req, res, next) => {
  const filePath = path.join(__dirname, 'projects', req.params.name);
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  
  // Return clean modern SVG placeholder for missing project preview images
  const label = req.params.name.replace(/\.(png|jpg|jpeg|webp)$/i, '').replace(/[-_]/g, ' ');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340">
    <rect width="600" height="340" fill="#0f172a"/>
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#818cf8" stop-opacity="0.1"/>
      </linearGradient>
    </defs>
    <rect width="600" height="340" fill="url(#g)"/>
    <circle cx="300" cy="140" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <path d="M288 140l8 8 16-16" stroke="#38bdf8" stroke-width="3" fill="none" stroke-linecap="round"/>
    <text x="300" y="220" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#f8fafc" text-anchor="middle" text-transform="capitalize">${label}</text>
    <text x="300" y="248" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle">Xer0byte Project Preview</text>
  </svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
});

// Fallback for preview.jpg
app.get('/preview.jpg', (req, res) => {
  const filePath = path.join(__dirname, 'preview.jpg');
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#0b0f19"/>
    <text x="600" y="315" font-family="system-ui, sans-serif" font-size="48" font-weight="bold" fill="#38bdf8" text-anchor="middle">Xer0byte</text>
    <text x="600" y="375" font-family="system-ui, sans-serif" font-size="24" fill="#94a3b8" text-anchor="middle">AI, Web &amp; Engineering Solutions</text>
  </svg>`;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
});

// Serve Next.js optimized images directly from disk
app.get('/_next/image', (req, res) => {
  let imgUrl = req.query.url;
  if (imgUrl) {
    imgUrl = decodeURIComponent(imgUrl);
    const cleanPath = imgUrl.startsWith('/') ? imgUrl.slice(1) : imgUrl;
    const filePath = path.join(__dirname, cleanPath);
    if (fs.existsSync(filePath)) {
      return res.sendFile(filePath);
    }
  }
  res.status(404).end();
});

// Single Page Application routing fallback with no-cache for index.html
app.get('*', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Resilient process handlers
process.on('uncaughtException', (err) => {
  console.error('[Process] Uncaught Exception:', err?.message || err);
});

process.on('unhandledRejection', (reason) => {
  console.error('[Process] Unhandled Rejection:', reason);
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
