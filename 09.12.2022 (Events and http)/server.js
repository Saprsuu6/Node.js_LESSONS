var http = require("http");
var fs = require("fs");
var PORT = 3000;
http
    .createServer(function (request, responce) {
    fs.readFile("pages/index.html", function (err, data) {
        if (err)
            responce.write(err);
        responce.write(data);
        responce.end();
    });
    //responce.end("<h1>Welcome to NodeJS</h1>");
})
    .listen(PORT, function () {
    console.log("Server been started + http://localhost:".concat(PORT, "..."));
});
