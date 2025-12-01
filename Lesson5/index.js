const http = require("http")
const fs = require("fs")
const port= 3030
const hostname = "127.0.0.1"

const server = http.createServer((req, res)=>{
    
    const handelReadFile = (statusCode, filelocation) => {
        fs.readFile(filelocation, (err, data) => {
            res.writeHead(statusCode , { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        })
    }

    if(req.url === "/"){
        handelReadFile(200, "./views/index.html")
    }

    else if(req.url === "/about"){
        handelReadFile(200, "./views/about.html")
    }

    else if (req.url === "/contact"){
        handelReadFile(200, "./views/contact.html")
    }

    else {
        handelReadFile(404, "./views/error.html")
    }
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})
