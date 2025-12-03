const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");
const bodyParser = require('body-parser');
app.use("/api/user", userRouter);

// http request with query parameter
// app.get("/", (req, res) => {
//     const id =req.query.id;
//     const name = req.query.name;
//     res.send(`Student id is ${id}, and name is ${name}`);
// });

// http request with route parameter
// app.get('/userid/:id/name/:name', (req, res) => {
//     const id = req.params.id;
//     const name = req.params.name;
//     res.send(`Student id is ${id}, and name is ${name}`);
// })

// http request with header parameter
// app.get("/", (req, res) => {
//     const id = req.header('id');
//     const name = req.header('name');

//     res.send(`Student id is ${id}, and name is ${name}`);
// })

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// create Users
// app.post("/users", (req, res) => {
//     const name = req.body.name;
//     const age = req.body.age;

//     res.send(`Welcome ${name}. Your age is ${age}`);
    
// })

// create from and then read data

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.post("/register", (req, res) => {
    const name = req.body.name
    const age = req.body.age
    res.send(`Your name is ${name} and your age is ${age}.`)
})

app.use("/register", (req, res) => {
    res.status(200).json({
        "name": "Rifat",
        "Message": "I am register route.",
        StatusCode: 200,
    })

})
app.use((req, res) =>{
    res.send("<h1>404 not found</h1>")
})

module.exports = app;
