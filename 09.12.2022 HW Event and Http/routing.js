"use strict";
exports.__esModule = true;
exports.page404 = exports.content = exports.about = exports.homepage = void 0;
var fs = require("fs");
function homepage(request, responce) {
    fs.readFile("./documents/homepage.html", function (err, data) {
        if (err)
            responce.write(err);
        responce.write(data);
        responce.end();
    });
}
exports.homepage = homepage;
function about(request, responce) {
    fs.readFile("./documents/about.html", function (err, data) {
        if (err)
            responce.write(err);
        responce.write(data);
        responce.end();
    });
}
exports.about = about;
function content(request, responce) {
    fs.readFile("./documents/content.html", function (err, data) {
        if (err)
            responce.write(err);
        responce.write(data);
        responce.end();
    });
}
exports.content = content;
function page404(request, responce) {
    fs.readFile("./documents/404.html", function (err, data) {
        if (err)
            responce.write(err);
        responce.write(data);
        responce.end();
    });
}
exports.page404 = page404;
