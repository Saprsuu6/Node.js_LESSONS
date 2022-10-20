const https = require("https");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3001;

const server = https.createServer(
  {
    key: fs.readFileSync("./keys/localhost+1-key.pem"),
    cert: fs.readFileSync("./keys/localhost+1.pem"),
  },
  (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
  }
);

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});
