const http = require('http')


const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res)=> {
    const path = req.url;
    res.setHeader('Content-Type', 'text/plain');
    if (path == '/') {
        res.statusCode = 200;
        res.end('Welcome home')
    } else if (path == '/admin') {
        res.statusCode = 200;
        res.end('Welcome Admin')
    } else {
        res.statusCode = 404;
        res.end('invalid url')
    }
})

server.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`)
})
