var zlib = require('zlib');
var file = require("fs");
var streamWrite = file.createWriteStream('doctest.txt');
var streamRead = file.createReadStream('doc.txt');
var compressStrem = zlib.createGzip();
streamRead.pipe(compressStrem).pipe(streamWrite);
