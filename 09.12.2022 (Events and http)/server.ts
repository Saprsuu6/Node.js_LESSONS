const http = require("http");
const fs = require("fs");
const PORT = 3000;

http
  .createServer((request, responce) => {
    fs.readFile("pages/index.html", (err, data) => {
      if (err) responce.write(err);
      responce.write(data);
      responce.end();
    });

    //responce.end("<h1>Welcome to NodeJS</h1>");
  })
  .listen(PORT, () => {
    console.log(`Server been started + http://localhost:${PORT}...`);
  });
