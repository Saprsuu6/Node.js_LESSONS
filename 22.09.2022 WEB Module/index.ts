var http = require("http");
var fs = require("fs");
var url = require("url");
var PORT = 3000;

var server = http.createServer();

server.on("request", function (req, res) {
    console.log("Request...");

    const pathUrl = url.parse(req.url).pathname;
    switch(pathUrl)
    {
        case '/':
            fs.readFile('./index.html', (err,data)=>{
                if (err) throw err;
                else res.end(data);
            })
            break;
        case "/create":
            const query = url.parse(req.url).query;
            res.write(`Name: ${query.firstname}. Surename: ${query.lastname}`)
            res.end();
            break;
    }
});

server.listen(PORT, function () {
    console.log(`Server has been started http://localhost:${PORT}`);
});