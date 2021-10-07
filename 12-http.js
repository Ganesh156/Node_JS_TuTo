const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url=='/') {
        res.end('Welcome to code arena...')
    }
    if(req.url=='/about') {
        res.end('Here is what you lookig for....:)')
    }
    res.end(`
        <h1>Oh ohhoooo..</h1>
        <p>This page is note in our Arena..:(</p>
        <a href="/">Go To Arena</a>
    `)

})

server.listen(5000)