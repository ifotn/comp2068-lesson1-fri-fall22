// link to node's built=in http lib to run a local web server
const http = require('http')

// start the web server and listen for http request events
http.createServer((req, res) => {
    // set the http response status
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.write('<h1>Hello world!</h1>')
    res.end()
}).listen(3000)

console.log('Server running on port 3000')