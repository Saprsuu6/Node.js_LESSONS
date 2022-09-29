"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var tgBotApi = require("node-telegram-bot-api");
var localisation = require('./localisation.json');
var TelegrammBot = /** @class */ (function () {
    function TelegrammBot(token) {
        this.bot = new tgBotApi(token, { polling: true });
    }
    TelegrammBot.prototype.ctreateTask = function () {
        this.bot.sendMessage(this.chatID, localisation.commands.createtask.setname[this.language_cod]);
    };
    TelegrammBot.prototype.createMainComands = function () {
        this.bot.setMyCommands([
            { command: '/start', description: "".concat(localisation.commands.start[this.language_cod]) },
            { command: '/info', description: "".concat(localisation.commands.info[this.language_cod]) },
            { command: '/createtask', description: "".concat(localisation.commands.createtask[this.language_cod]) }
        ]);
    };
    TelegrammBot.prototype.listenMessage = function () {
        var _this = this;
        this.bot.on("message", function (msg) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.text = msg.text;
                        this.chatID = msg.chat.id;
                        this.language_cod = msg.from.language_code;
                        console.log(msg);
                        _a = this.text.toLocaleLowerCase();
                        switch (_a) {
                            case "/start": return [3 /*break*/, 1];
                            case "/info": return [3 /*break*/, 3];
                            case "/createtask": return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, this.bot.sendSticker(this.chatID, "https://tlgrm.ru/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/1.webp")];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, this.bot.sendMessage(this.chatID, localisation.greetings[this.language_cod], {
                                reply_markup: ({
                                    inline_keyboard: [
                                        [{ 'text': "\u270D ".concat(localisation.tasks.create[this.language_cod]), callback_data: 'createtask' },
                                            { 'text': "\uD83D\uDCD1 ".concat(localisation.tasks.edit[this.language_cod]), callback_data: 'edittask' },
                                            { 'text': "\uD83E\uDDFA ".concat(localisation.tasks.remove[this.language_cod]), callback_data: 'removetask' }]
                                    ]
                                })
                            })];
                    case 3: return [2 /*return*/, this.bot.sendMessage(this.chatID, localisation.author[this.language_cod])];
                    case 4: return [2 /*return*/, this.ctreateTask()];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    TelegrammBot.prototype.listenCallback = function () {
        var _this = this;
        this.bot.on('callback_query', function (msg) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(msg);
                this.callback_query = msg.data;
                switch (this.callback_query.toLocaleLowerCase()) {
                    case "createtask":
                        return [2 /*return*/, this.ctreateTask()];
                }
                return [2 /*return*/];
            });
        }); });
    };
    return TelegrammBot;
}());
var tgBot = new TelegrammBot("5623018287:AAH26SLFxRn9lAfJkJ49HW_oJwzeaOcirrs");
tgBot.createMainComands();
tgBot.listenMessage();
tgBot.listenCallback();
