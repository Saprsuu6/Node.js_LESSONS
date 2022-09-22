var fs = require("fs");
var path = require("path");
var myPath = path.join(__dirname, "dir1", "dir2", "dir3");
fs.mkdirSync(myPath, { recursive: true }, function (err) {
    if (err)
        throw err;
    console.error(err);
});
// fs.writeFile(path.join(myPath, "doc.txt"), "Hello world", (err) => {
//     if (err) throw err;
//     console.error(err);
// });
fs.readFile("./doc.json", function (err, data) {
    if (err)
        throw err;
    console.error(err);
    var arr = data.toString();
    var jArr = JSON.parse(arr);
    console.log(jArr.name);
});
var student = {
    name: "Oleg",
    age: 40
};
var jsonStudent = JSON.stringify(student);
fs.writeFile("./doc.json", jsonStudent, function (err) {
    if (err)
        throw err;
    console.error(err);
});
