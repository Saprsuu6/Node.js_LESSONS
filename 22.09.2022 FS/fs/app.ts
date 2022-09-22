const fs = require("fs");
const path = require("path");

const myPath = path.join(__dirname, "dir1", "dir2", "dir3");

fs.mkdirSync(
    myPath,
    { recursive: true},
    (err) => {
        if (err) throw err;
        console.error(err);
    }
    );

// fs.writeFile(path.join(myPath, "doc.txt"), "Hello world", (err) => {
//     if (err) throw err;
//     console.error(err);
// });

fs.readFile("./doc.json", (err, data) => {
    if (err) throw err;
    console.error(err);

    const arr = data.toString();
    const jArr = JSON.parse(arr);
    console.log(jArr.name);
});

let student= {
    name: "Oleg",
    age: 40
};

const jsonStudent = JSON.stringify(student);
fs.writeFile("./doc.json", jsonStudent, (err) => {
    if (err) throw err;
    console.error(err);
})

