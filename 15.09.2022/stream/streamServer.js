var http = require("http");
var fs = require("fs");
var PORT = 3000;
var server = http.createServer();
server.on('request', function (req, res) {
    res.writeHead(200, {
        'Content-type': 'text-plain'
    });
    var readStream = fs.createReadStream("doc.txt");
    readStream.on('data', function (chunk) {
        var result = res.write(chunk);
        if (result === false) {
            readStream.pause();
            res.once('drain', function () {
                readStream.resume();
            });
        }
    });
    readStream.on('end', function () {
        res.end();
        readStream.destroy();
    });
});
server.listen(PORT, function () { return console.log("Server http://localhost:".concat(PORT)); });
