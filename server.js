const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const port = Number(process.env.PORT || 3000);
const root = __dirname;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
};

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = mimeTypes[ext] || "application/octet-stream";

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Archivo no encontrado");
      return;
    }

    res.writeHead(200, { "Content-Type": type });
    res.end(content);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`);
  const cleanPath = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  const requestedPath = cleanPath || "index.html";
  const filePath = path.resolve(root, requestedPath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Acceso denegado");
    return;
  }

  fs.stat(filePath, (error, stats) => {
    if (!error && stats.isFile()) {
      sendFile(res, filePath);
      return;
    }

    sendFile(res, path.join(root, "index.html"));
  });
});

server.listen(port, () => {
  console.log(`Terapeutas Tantricas listo en http://localhost:${port}`);
});
