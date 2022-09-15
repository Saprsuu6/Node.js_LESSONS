var fs = require("fs");
var txtPath = "./test.txt";
// read
var readStream = fs.createReadStream(txtPath);
readStream.on("data", function (chunk) {
    console.log(chunk); // чтение отдельных частей (чанков)
});
readStream.on("end", function () {
    console.log("End"); // событие закрытия файла
});
readStream.on("error", function () {
    console.log("Error"); // событие ошибки
});
readStream.on("open", function () {
    console.log("File opened"); // открытие файла
});
readStream.on("close", function () {
    console.log("File closed"); // закрытие файла
});
// write
var writeStram = fs.createWriteStream(txtPath);
writeStram.on("open", function () {
    writeStram.write("Hello"); // запись в документ
});
writeStram.on("pipe", function (src) {
    writeStram.write("\nIm reading this document");
});
readStream.pipe(writeStram); // по ходу чтения можно что-то выполнить
readStream.unpipe(writeStram); // отвязка потока для записи
var exception = new Error('Writing exception');
writeStram.destroy(exception); // передача явного исключения
writeStram.on('error', function (err) { return console.error(exception.message); });
