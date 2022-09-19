const http = require("http");
const fs = require ("fs");
const PORT = 3000;
const server = http.createServer();

server.on('request', (req,res)=>{
    res.writeHead(200, {
        'Content-type': 'text-plain'
    })

    const readStream = fs.createReadStream("test.txt");
    readStream.pipe(res);
    readStream.on('error', (err) => {
        console.error(err)
        res.statusCode = 404;
        res.end()
    });
    req.on('aborted', () => {
        console.log('aborted');
        readStream.destroy();
    })
    // readStream.on('data', (chunk) =>{
    //     const result = res.write(chunk);

    //     if (result === false){
    //         readStream.pause();
    //         res.once('drain', () =>{
    //             readStream.resume();
    //         })
    //     }
    // })

    readStream.on('end', () =>{
        res.end();
        readStream.destroy();
    })
})

server.listen(PORT, ()=> console.log(`Server http://localhost:${PORT}`))
