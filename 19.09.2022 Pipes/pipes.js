var http = require("http");
var fs = require("fs");
var PORT = 3000;
var server = http.createServer();
server.on('request', function (req, res) {
    res.writeHead(200, {
        'Content-type': 'text-plain'
    });
    var readStream = fs.createReadStream("test.txt");
    readStream.pipe(res);
    readStream.on('error', function (err) {
        console.error(err);
        res.statusCode = 404;
        res.end();
    });
    req.on('aborted', function () {
        console.log('aborted');
        readStream.destroy();
    });
    // readStream.on('data', (chunk) =>{
    //     const result = res.write(chunk);
    //     if (result === false){
    //         readStream.pause();
    //         res.once('drain', () =>{
    //             readStream.resume();
    //         })
    //     }
    // })
    readStream.on('end', function () {
        res.end();
        readStream.destroy();
    });
});
server.listen(PORT, function () { return console.log("Server http://localhost:".concat(PORT)); });
