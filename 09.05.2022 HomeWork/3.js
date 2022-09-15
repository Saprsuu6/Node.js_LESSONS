const fs = require("node:fs");
const os = require("./1");
// функции из 1.js выполняются потомучто я использовал require

var CreateDir = (path) => {
  fs.mkdirSync(path, { recursive: true }, function (err) {
    if (err) console.error(err);
    else console.log("folder is created");
  });
};

var WriteFile = (info) => {
  fs.writeFile("./folder/systemInfo.txt", info, function (err) {
    if (err) console.error(err);
    else console.log("File is created");
  });
};

var WriteFileSync = (info) => {
  fs.writeFileSync("./folder/systemInfo.txt", info, function (err) {
    if (err) console.error(err);
    else console.log("File is created");
  });
};

var ReadFile = () => {
  fs.readFile("./folder/systemInfo.txt", "utf8", function (error, data) {
    if (error) throw error;
    else console.log(data);
  });
};

CreateDir("./folder");
//WriteFile("Free memmory is " + os.GetFreeMem() + " bytes (sync)");
WriteFileSync("Free memmory is " + os.GetFreeMem() + " bytes (sync)");
ReadFile();
