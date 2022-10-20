const https = require("https");
const fs = require("fs");
const options = {
  hostname: "localhost",
  port: 3001,
  method: "GET",
  ca: fs.readFileSync("./keys/localhost+1.pem"),
};
const req = https
  .request(options, (res) => {
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  })
  .on("error", (e) => {
    console.error(e);
  });
req.end();
