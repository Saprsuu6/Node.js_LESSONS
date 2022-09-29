import { MyTask } from "../models/task";

const tgBotApi = require("node-telegram-bot-api");
const localisation = require('./localisation.json');

class TelegrammBot {
    token: string
    bot: any
    chatID: string
    text: string
    callback_query: string
    language_cod: string
    task: MyTask[];

    constructor(token) {
        this.bot = new tgBotApi(token, {polling: true});
    }

    ctreateTask() {
        this.bot.sendMessage(this.chatID, localisation.commands.createtask.setname[this.language_cod])
    }

    createMainComands() {
        this.bot.setMyCommands([
            {command: '/start', description: `${localisation.commands.start[this.language_cod]}`},
            {command: '/info', description: `${localisation.commands.info[this.language_cod]}`},
            {command: '/createtask', description: `${localisation.commands.createtask[this.language_cod]}`}
        ])        
    }

    listenMessage() {
        this.bot.on("message", async (msg) => {
            this.text = msg.text;
            this.chatID = msg.chat.id;
            this.language_cod = msg.from.language_code;
            
            console.log(msg);

            switch (this.text.toLocaleLowerCase()){
                case "/start":
                    await this.bot.sendSticker(this.chatID, "https://tlgrm.ru/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/1.webp")
                    return this.bot.sendMessage(this.chatID, localisation.greetings[this.language_cod], {
                        reply_markup: ({
                            inline_keyboard: [
                                [{'text': `✍ ${localisation.tasks.create[this.language_cod]}`, callback_data: 'createtask'},
                                {'text': `📑 ${localisation.tasks.edit[this.language_cod]}`, callback_data: 'edittask'},
                                {'text': `🧺 ${localisation.tasks.remove[this.language_cod]}`, callback_data: 'removetask'}]
                            ]
                        })
                    })
                case "/info":
                    return this.bot.sendMessage(this.chatID, localisation.author[this.language_cod]) 
                case "/createtask":
                    return this.ctreateTask();
            }
        })
    }

    listenCallback() {
        this.bot.on('callback_query', async (msg) => {
            console.log(msg);
            this.callback_query = msg.data;

            switch (this.callback_query.toLocaleLowerCase()){
                case "createtask":
                    return this.ctreateTask();
            }
        })
    }
}

var tgBot = new TelegrammBot("5623018287:AAH26SLFxRn9lAfJkJ49HW_oJwzeaOcirrs");
tgBot.createMainComands();
tgBot.listenMessage();
tgBot.listenCallback(); 
