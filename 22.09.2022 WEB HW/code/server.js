var http = require("http");
var fs = require("fs");
var url = require("url");
var PORT = 3000;
var server = http.createServer();
server.on("request", function (req, res) {
    var pathUrl = url.parse(req.url).pathname;
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
            var query = url.parse(req.url, true).query;
            console.log("Name: ".concat(query.email, ". Surename: ").concat(query.psw));
            fs.readFile("../view/success.html", function (err, data) {
                if (err)
                    throw err;
                else
                    res.end(data);
            });
            break;
    }
});
server.listen(PORT, function () {
    console.log("Server has been started http://localhost:".concat(PORT));
});
