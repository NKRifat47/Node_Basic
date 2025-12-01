const http = require("http")
const port = 3030
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res) => {
    res.end("Hi. This is my first server.")
})

myServer.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});