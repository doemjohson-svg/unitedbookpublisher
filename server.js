const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain'
};

const blockedUserAgents = /httrack|winhttrack|webcopier|teleport|offline explorer|website copier/i;

const server = http.createServer((req, res) => {
  const ua = req.headers['user-agent'] || '';
  if (blockedUserAgents.test(ua)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('403 Forbidden: Offline site copiers are blocked.');
  }

  let decodedUrl = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(BASE_DIR, decodedUrl);

  // Redirect removed pages: customer-reviews & case-study
  if (decodedUrl.includes('customer-reviews') || decodedUrl.includes('case-study')) {
    res.writeHead(301, { 'Location': '/' });
    return res.end();
  }

  // If path ends with .html, redirect to clean URL
  if (decodedUrl.endsWith('.html')) {
    const cleanUrl = decodedUrl.replace(/\.html$/, '') || '/';
    res.writeHead(301, { 'Location': cleanUrl });
    return res.end();
  }

  // If path is a directory, look for index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // If file doesn't exist, try adding .html (clean URL support)
  if (!fs.existsSync(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    }
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found: ' + req.url);
  }
});

server.listen(PORT, () => {
  console.log('=========================================');
  console.log('  United Book Publisher Local Server     ');
  console.log('  Clean URLs & HTTrack Protection Active ');
  console.log('  Running at: http://localhost:' + PORT);
  console.log('=========================================');
});
