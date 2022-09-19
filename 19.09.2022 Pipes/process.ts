const qs = ['How are you?', 'How old are you?', 'What\'s your name?']
const answers = []

const doAsk= (idQs:number) =>{
    process.stdout.write(qs[idQs] + '\n')
    process.stdout.write(' >')
}

process.stdin.on('data', (data) =>{
    answers.push(data.toString())
    //process.stdout.write(data);
    if (answers.length < qs.length){
        doAsk(answers.length)
    }
    else {
        process.exit();
    }
})

process.on('exit', ()=>{
    console.log('\nBye\n')
})

doAsk(0)