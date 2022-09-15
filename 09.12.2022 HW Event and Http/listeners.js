"use strict";
exports.__esModule = true;
exports.myEvent = void 0;
var EventEmitter = require("events");
exports.myEvent = new EventEmitter();
exports.myEvent.on("request", function () {
    console.log("will be request");
});
exports.myEvent.on("responce", function () {
    console.log("was responce");
});
