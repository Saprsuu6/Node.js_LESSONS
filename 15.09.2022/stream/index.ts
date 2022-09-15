const fs = require("fs");

var path = "./song.wav";
var txtPath = "./asd.txt";

// read

var readStream = fs.createReadStream(path);

readStream.on("data", function (chunk) {
  console.log(chunk);
});
readStream.on("error", () => console.log("Error"));
readStream.on("open", () => {
  console.log("File opened");
});
readStream.on("end", () => {
  console.log("End");
});
readStream.on("close", () => {
  console.log("File closed");
});

// write

var writeStram = fs.createWriteStream(txtPath);

writeStram.on("open", () => {
  writeStram.write("Hello");
});
