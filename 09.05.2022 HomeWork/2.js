const path = require("node:path");

console.log(path.win32); // For use system Windows functions
console.log(path.basename('./1.js', '.js')); // To show file name or with extention
console.log(path.basename('./2.js'));
console.log(path.parse('./1.js')); // To parse path to parts
console.log(path.join('/foo', 'baz/asdf', 'asd')); // Join path from parts
console.log(path.extname('index.html')); // To show file extention