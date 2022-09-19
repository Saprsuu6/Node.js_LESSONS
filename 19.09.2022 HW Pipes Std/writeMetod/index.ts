var writeLinesFunk=(lines: string[])=>{
    process.stdout.write(lines.toString() + '\n');
}

var lines = ["Hello", "Im", "Andry"]

writeLinesFunk(lines);

const filledBuf = Buffer.from('My name is Andry');

var writeBufferFunk=(buffer: Buffer)=>{
    process.stdout.write(buffer + '\n');
}

writeBufferFunk(filledBuf);