const zlib = require('zlib');
const file = require ("fs");

const streamWrite = file.createWriteStream('doctest.txt');
const streamRead = file.createReadStream('doc.txt');
const compressStrem = zlib.createGzip();

streamRead.pipe(compressStrem).pipe(streamWrite);