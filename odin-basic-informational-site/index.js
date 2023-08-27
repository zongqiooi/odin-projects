const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
      html = fs.readFileSync("./index.html");
    } else if (req.url === "/contact-me") {
      html = fs.readFileSync("./contact-me.html");
    } else if (req.url === "/about") {
      html = fs.readFileSync("./about.html");
    } else {
      html = fs.readFileSync("./404.html");
    }

    res.end(html);
  })
  .listen(8080);
