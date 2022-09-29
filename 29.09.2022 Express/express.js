var router = require("./routers");
var timeFix = require("./middleware");
var express = require("express");
var path = require("path");
var PORT = 3000;
var app = express();
app.use(timeFix);
app.use(router);
app.use(express.static(path.resolve(__dirname, "public")));
app.listen(PORT, function () {
    console.log("http://localhost:".concat(PORT));
});
