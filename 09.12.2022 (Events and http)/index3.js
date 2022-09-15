"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var stream_1 = require("stream");
var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    function Timer(totalParam) {
        var _this = _super.call(this) || this;
        _this.total = totalParam;
        _this.ticks = 0;
        return _this;
    }
    Timer.prototype.start = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.tick();
        }, 1000);
        this.emit("start");
    };
    Timer.prototype.tick = function () {
        this.ticks += 1;
        if (this.ticks <= this.total) {
            this.emit("tick", this.ticks);
        }
        else {
            this.end();
        }
    };
    Timer.prototype.end = function () {
        clearInterval(this.interval);
        this.emit("end");
    };
    return Timer;
}(stream_1.EventEmitter));
var timer = new Timer(10);
timer.once("start", function () {
    console.log("Start...");
});
timer.on("tick", function (tick) {
    console.log("Tick: " + tick);
});
timer.once("end", function () {
    console.log("End...");
});
timer.start();
