var buffer = require("buffer").Buffer;
var buf1 = Buffer.alloc(10, "Hello", "utf-8"); // статическое выделение памяти (10 байт содержат байты слова Hello в кодировке utf-8)
console.log(buf1);
var buf2 = Buffer.from("Hello, Im andry", "ascii"); // выделение памяти исходя из колличства байтов  в кодировке ascii
console.log(buf2);
var buf3 = Buffer.from([1, 2, 3]); // выделение памяти исходя из колличства байтов (массив из 3 байтов))
console.log(buf3);
var buf4 = Buffer.from([1, 2, 3, 4]);
var uit32array = new Uint32Array(buf4); // создание полноценного массива из, в данном случае 4 байтов
console.log(uit32array);
var array = new Uint16Array(20);
var buf5 = Buffer.from(array.buffer, 0, 16); // добавление байтов
console.log(buf5.length);
var buf6 = Buffer.from([1, 2, 3]);
for (var _i = 0, buf6_1 = buf6; _i < buf6_1.length; _i++) {
    var b = buf6_1[_i];
    console.log(b); // итеративный перебо байтов
}
