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
var _this = this;
var tgBotApi = require("node-telegram-bot-api");
var token = "5623018287:AAH26SLFxRn9lAfJkJ49HW_oJwzeaOcirrs";
var bot = new tgBotApi(token, { polling: true });
var chats = {};
var _a = require('./options'), gameOptions = _a.gameOptions, againOptions = _a.againOptions;
var startGame = function (chatId) { return __awaiter(_this, void 0, void 0, function () {
    var rand;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, bot.sendMessage(chatId, "Окей. Я сейчас загадаю число от 1 до 9, а ты попробуй его отгадать.")];
            case 1:
                _a.sent();
                rand = Math.floor(Math.random() * 10);
                chats[chatId] = rand;
                return [4 /*yield*/, bot.sendMessage(chatId, 'Всё... язагадал. Отгадывай!', gameOptions)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
bot.setMyCommands([
    { command: '/start', description: 'Начальное приветствие' },
    { command: '/info', description: 'Получить информацию об авторе' },
    { command: '/game', description: 'Игра угадай цифру' }
]);
bot.on("message", function (msg) { return __awaiter(_this, void 0, void 0, function () {
    var text, сhatId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                text = msg.text;
                сhatId = msg.chat.id;
                if (!(text === '/start')) return [3 /*break*/, 2];
                return [4 /*yield*/, bot.sendSticker(сhatId, "https://cdn.tlgrm.app/stickers/b0d/85f/b0d85fbf-de1b-4aaf-836c-1cddaa16e002/192/1.webp")];
            case 1:
                _a.sent();
                return [2 /*return*/, bot.sendMessage(сhatId, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0431\u043E\u0442")];
            case 2:
                if (text === '/info') {
                    return [2 /*return*/, bot.sendMessage(сhatId, "\u0410\u0432\u0442\u043E\u0440 \u0431\u043E\u0442\u0430: ".concat(msg.chat.first_name, " ").concat(msg.chat.last_name))];
                }
                else if (text === '/game') {
                    return [2 /*return*/, startGame(сhatId)];
                }
                else {
                    return [2 /*return*/, bot.sendMessage(сhatId, "\u042F \u0442\u0435\u0431\u044F \u043D\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C:/")];
                }
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
bot.on('callback_query', function (msg) { return __awaiter(_this, void 0, void 0, function () {
    var data, chatId;
    return __generator(this, function (_a) {
        data = msg.data;
        chatId = msg.message.chat.id;
        if (data === 'again') {
            return [2 /*return*/, startGame(chatId)];
        }
        if (data === chats[chatId].toString()) {
            return [2 /*return*/, bot.sendMessage(chatId, "\u0418\u0438\u0438... \u0422\u044B \u043F\u043E\u0431\u0435\u0434\u0438\u043B. \u042D\u0442\u043E \u0431\u044B\u043B\u0430 \u0446\u0438\u0444\u0440\u0430 ".concat(chats[chatId]), againOptions)];
        }
        else {
            return [2 /*return*/, bot.sendMessage(chatId, "\u041F\u0440\u043E\u0441\u0442\u0438... \u041D\u043E \u0442\u044B \u043D\u0435 \u0443\u0433\u0430\u0434\u0430\u043B \u0447\u0438\u0441\u043B\u043E. \u042D\u0442\u043E \u0431\u044B\u043B\u043E \u0447\u0438\u0441\u043B\u043E ".concat(chats[chatId]), againOptions)];
        }
        return [2 /*return*/];
    });
}); });
