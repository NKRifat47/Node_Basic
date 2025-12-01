const http = require("http")
const fs = require("fs")
const port= 3030
const hostname = "127.0.0.1"

const handelReadFile = (statusCode, filelocation, req, res) => {
    fs.readFile(filelocation, "utf-8", (err, data) => {
       if (err) {
        console.log(err);
       }
       else{
           res.writeHead(statusCode, { "Content-Type": "text/html" });
           res.write(data);
           res.end();
       }
    })
}

const server = http.createServer((req, res)=>{
    
    if(req.url === "/"){
        handelReadFile(200, "./views/index.html", req, res)
    }

    else if(req.url === "/about"){
        handelReadFile(200, "./views/about.html", req, res)
    }

    else if (req.url === "/contact"){
        handelReadFile(200, "./views/contact.html", req, res)
    }

    else {
        handelReadFile(404, "./views/error.html", req, res)
    }
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})
