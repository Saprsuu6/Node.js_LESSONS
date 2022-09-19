var fs = require("fs");
var writeStream = fs.createWriteStream("test.txt");
writeStream.setDefaultEncoding("utf-8"); // устанавливает изначальну кодировку
writeStream.on('write', function () {
    writeStream.cork();
    //writeStream.uncork();
    writeStream.write('Hello, Im Andry');
    console.log(writeStream.writableLength); // возвращает записанную длинну
    console.log(writeStream.writableCorked); // возвращает записанное колличество данных от метода cork до метода uncork
    //writeStream.end();
    //writeStream.destroy();
});
writeStream.emit('write');
console.log(writeStream.writableEnded); // возвращает true если поток был завершён иначе false
console.log(writeStream.destroyed); // возвращает true если буфер был очищен от потоковых данных иначе false
