process.stdin.on('data', (data) => { // дуплексный поток ввода (событие ввода информации)
    console.log(`You typed ${data.toString()}`);
    process.exit();
  });

process.stdin.on('readable', () => { // дуплексный поток ввода (событие возможности чтения)
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
     process.stdout.write(`data: ${chunk}`); // дуплексный поток вывода в консоль
    }
  });

console.log(process.stderr) // возвращает информацию о потоке подключённого к stderr 