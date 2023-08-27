// ========== ExpressJS ==========
const express = require("express");
const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/contact-me.html");
});

app.get("*", (req, res) => {
  res.status(404).sendFile(__dirname + "/404.html");
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});

// ========== Vanilla NodeJS ==========

// const http = require("http");
// const fs = require("fs");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });

//     if (req.url === "/") {
//       html = fs.readFileSync("./index.html");
//     } else if (req.url === "/contact-me") {
//       html = fs.readFileSync("./contact-me.html");
//     } else if (req.url === "/about") {
//       html = fs.readFileSync("./about.html");
//     } else {
//       html = fs.readFileSync("./404.html");
//     }

//     res.end(html);
//   })
//   .listen(8080);
