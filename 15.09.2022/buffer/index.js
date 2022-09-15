var buff = Buffer.alloc(8);
console.log(buff);
buff.write("string1234456565");
console.log(buff.toString());
var buff2 = Buffer.from("My String");
console.log(buff2.toString());
var buff3 = Buffer.alloc(1024, "s");
console.log(buff3);
var buff4 = Buffer.from("hello", "utf-8");
console.log(String.fromCharCode(buff4[0]));
var stringBuf = Buffer.from("I am a student");
var stringCopy = Buffer.from(stringBuf);
if (stringBuf === stringCopy)
    console.log(stringCopy.toString());
else
    console.log("-");
var b1 = Buffer.from("First buffer");
var b2 = Buffer.from("First1 buffer");
//b1.copy(b2); //в b2 нове значення
//console.log(b2.toString());
console.log(b1.compare(b2));
// const buff2 = new Buffer("my string");
// console.log(buff2.toString());
// const fs = require("fs");
// fs.readFile("doc.txt", (err, file) => {
//   if (err) throw err;
//   console.log(file);
// });
var buf1 = Buffer.from("a");
var buf2 = Buffer.from("b");
var buf3 = Buffer.from("c");
var arr = [buf1, buf2, buf3];
var buf = Buffer.concat(arr);
console.log(buf.toString());
