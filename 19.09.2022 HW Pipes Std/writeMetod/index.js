var writeLinesFunk = function (lines) {
    process.stdout.write(lines.toString() + '\n');
};
var lines = ["Hello", "Im", "Andry"];
writeLinesFunk(lines);
var filledBuf = Buffer.from('My name is Andry');
var writeBufferFunk = function (buffer) {
    process.stdout.write(buffer + '\n');
};
writeBufferFunk(filledBuf);
