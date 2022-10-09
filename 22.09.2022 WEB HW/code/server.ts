var https = require("https");
var fs = require("fs");
var url = require("url");
var path = require("path");
var PORT = 3000;
const {parse} = require("querystring");

var server = https.createServer();

server.on("request", function (req, res) {
    const pathUrl = url.parse(req.url).pathname;
    console.log(req.url);

    if (req.url.match(".css$")){
        const fileStream = fs.createReadStream('../view/' + req.url);
        res.writeHead(200, {"Content-Type" : "text/css"})
        fileStream.pipe(res);
    }

    switch(pathUrl)
    {
        case '/':
            fs.readFile('../view/index.html', (err,data)=>{
                if (err) throw err;
                else res.end(data);
            })
            break;
        case "/create":
            if (req.method = 'POST'){
                var body = "";

                req.on('data', (chunk) => {
                    body += chunk;
                })

                req.on('end', ()=>{
                    res.write(parse(body).file);
                    res.end();
                })
            }

            else{
                const query = url.parse(req.url, true).query;
                console.log(`Name: ${query.email}. Surename: ${query.psw}`)
                fs.readFile("../view/success.html", (err,data)=>{
                    if (err) throw err;
                    else res.end(data);
                })
            }

            break;
    }
});

server.listen(PORT, function () {
    console.log(`Server has been started http://localhost:${PORT}`);
});