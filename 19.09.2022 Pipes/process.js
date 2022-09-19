var qs = ['How are you?', 'How old are you?', 'What\'s your name?'];
var answers = [];
var doAsk = function (idQs) {
    process.stdout.write(qs[idQs] + '\n');
    process.stdout.write(' >');
};
process.stdin.on('data', function (data) {
    answers.push(data.toString());
    //process.stdout.write(data);
    if (answers.length < qs.length) {
        doAsk(answers.length);
    }
    else {
        process.exit();
    }
});
process.on('exit', function () {
    console.log('\nBye\n');
});
doAsk(0);
