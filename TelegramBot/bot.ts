const tgBotApi = require("node-telegram-bot-api");
const token = "5623018287:AAH26SLFxRn9lAfJkJ49HW_oJwzeaOcirrs";
const bot = new tgBotApi(token, {polling: true});
const chats = {};
const {gameOptions, againOptions} = require('./options');

const startGame = async (chatId) => {
    await bot.sendMessage(chatId, "Окей. Я сейчас загадаю число от 1 до 9, а ты попробуй его отгадать.");
       
    const rand = Math.floor(Math.random() * 10);
    chats[chatId] = rand;
    
    await bot.sendMessage(chatId, 'Всё... язагадал. Отгадывай!', gameOptions);
}

bot.setMyCommands([
    {command: '/start', description: 'Начальное приветствие'},
    {command: '/info', description: 'Получить информацию об авторе'},
    {command: '/game', description: 'Игра угадай цифру'}
])

bot.on("message", async (msg) => {
    const text = msg.text;
    const сhatId = msg.chat.id;

    if (text === '/start') {
        await bot.sendSticker(сhatId, "https://cdn.tlgrm.app/stickers/b0d/85f/b0d85fbf-de1b-4aaf-836c-1cddaa16e002/192/1.webp");
        return bot.sendMessage(сhatId, `Добро пожаловать в телеграм бот`)
    }
    else if(text === '/info') {
        return bot.sendMessage(сhatId, `Автор бота: ${msg.chat.first_name} ${msg.chat.last_name}`)
    }
    else if (text === '/game'){
        return startGame(сhatId);
    }
    else {
        return bot.sendMessage(сhatId, `Я тебя не понимать:/`)
    }
})

bot.on('callback_query', async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id

    if (data === 'again') {
        return startGame(chatId);
    }

    if(data === chats[chatId].toString()) {
        return bot.sendMessage(chatId, `Иии... Ты победил. Это была цифра ${chats[chatId]}`, againOptions);
    }
    else {
        return bot.sendMessage(chatId, `Прости... Но ты не угадал число. Это было число ${chats[chatId]}`, againOptions);
    }
})