const express = require("express");
const multer  = require("multer"); // похватывает загруженые файлы при помощи enctype="multipart/form-data"
  
const app = express(); // фрейм ворк который использует http
  
app.use(express.static(__dirname)); // использование директории для обнаружения всех необходимых документов
app.use(multer({dest:"uploads"}).single("filedata")); // dest - дериктория для загрузки файла single - будет передан один файл
app.post("/upload", function (req, res) {
   
    let filedata = req.file;
    console.log(filedata);

    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});
app.listen(3000);