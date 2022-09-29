var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var PORT = 3000;
var parse = require("querystring").parse;
var server = http.createServer();
server.on("request", function (req, res) {
    var pathUrl = url.parse(req.url).pathname;
    console.log(req.url);
    if (req.url.match(".css$")) {
        var fileStream = fs.createReadStream('../view/' + req.url);
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);
    }
    switch (pathUrl) {
        case '/':
            fs.readFile('../view/index.html', function (err, data) {
                if (err)
                    throw err;
                else
                    res.end(data);
            });
            break;
        case "/create":
            if (req.method = 'POST') {
                var body = "";
                req.on('data', function (chunk) {
                    body += chunk;
                });
                req.on('end', function () {
                    res.write(parse(body).file);
                    res.end();
                });
            }
            else {
                var query = url.parse(req.url, true).query;
                console.log("Name: ".concat(query.email, ". Surename: ").concat(query.psw));
                fs.readFile("../view/success.html", function (err, data) {
                    if (err)
                        throw err;
                    else
                        res.end(data);
                });
            }
            break;
    }
});
server.listen(PORT, function () {
    console.log("Server has been started http://localhost:".concat(PORT));
});
