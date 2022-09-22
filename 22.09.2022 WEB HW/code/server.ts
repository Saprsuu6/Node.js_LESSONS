var http = require("http");
var fs = require("fs");
var url = require("url");
var PORT = 3000;

var server = http.createServer();

server.on("request", function (req, res) {
    const pathUrl = url.parse(req.url).pathname;

    switch(pathUrl)
    {
        case '/':
            fs.readFile('../view/index.html', (err,data)=>{
                if (err) throw err;
                else res.end(data);
            })
            break;
        case "/create":
            const query = url.parse(req.url, true).query;
            console.log(`Name: ${query.email}. Surename: ${query.psw}`)
            fs.readFile("../view/success.html", (err,data)=>{
                if (err) throw err;
                else res.end(data);
            })
            break;
    }
});

server.listen(PORT, function () {
    console.log(`Server has been started http://localhost:${PORT}`);
});