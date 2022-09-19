process.stdin.on('data', function (data) {
    console.log("You typed ".concat(data.toString()));
    process.exit();
});
process.stdin.on('readable', function () {
    var chunk;
    while ((chunk = process.stdin.read()) !== null) {
        process.stdout.write("data: ".concat(chunk)); // дуплексный поток вывода в консоль
    }
});
console.log(process.stderr); // возвращает информацию о потоке подключённого к stderr 
