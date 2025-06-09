const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const server = http.createServer((req, res) => {
  // Get the URL path
  let filePath;
  
  // Handle routes
  switch(req.url) {
    case '/':
      filePath = path.join(__dirname, 'index.html');
      break;
    case '/about':
      filePath = path.join(__dirname, 'about.html');
      break;
    case '/contact-me':
      filePath = path.join(__dirname, 'contact-me.html');
      break;
    default:
      filePath = path.join(__dirname, '404.html');
      res.statusCode = 404;
  }

  // Read the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // If there's an error reading the file, serve 404
      fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
        if (err) {
          // If even the 404 page fails to load
          res.writeHead(500);
          res.end('Error loading page');
          return;
        }
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      });
      return;
    }

    // Success
    res.writeHead(res.statusCode || 200, { 'Content-Type': 'text/html' });
    res.end(content, 'utf-8');
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
}); 