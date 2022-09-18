const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const statusCode = 200;
  let filePath;
  let contentType;
  let contents;

  if (req.url.startsWith("/static")) {
    const [, , path, , extension] = req.url.split(/(static\/|\.)/);
    filePath = `./assets/${path}.${extension}`;
    switch (extension) {
      case "jpg":
        contentType = "image/jpeg";
        break;
      case "css":
        contentType = "text/css";
        break;
    }
  } else {
    filePath = "./index.html";
    contentType = "text/html";
  }

  contents = fs.readFileSync(filePath);
  res.statusCode = statusCode;
  res.setHeader("Content-Type", contentType);
  res.end(contents);
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
