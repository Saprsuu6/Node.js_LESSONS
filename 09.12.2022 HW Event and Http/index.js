"use strict";
exports.__esModule = true;
var http = require("http");
var url = require("url");
var PORT = 3000;
var routing_1 = require("./routing");
var listeners_1 = require("./listeners");
http
    .createServer(function (request, responce) {
    var urlParts = url.parse(request.url);
    console.log(urlParts.pathname);
    listeners_1.myEvent.emit("request");
    switch (urlParts.pathname) {
        case "/":
            (0, routing_1.homepage)(request, responce);
            break;
        case "/about":
            (0, routing_1.about)(request, responce);
            break;
        case "/content":
            (0, routing_1.content)(request, responce);
            break;
        default:
            (0, routing_1.page404)(request, responce);
            break;
    }
    listeners_1.myEvent.emit("responce");
})
    .listen(PORT, function () {
    console.log("Example app listening at http://localhost:".concat(PORT));
});
