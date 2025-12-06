const express = require("express");
const multer  = require('multer')

const app = express();
const PORT = 5000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const name = Date.now() + '-' + file.originalname;
    cb(null, name)
  }
})
const upload = multer({ storage: storage })

app.get("/", (req, res) =>{
    res.status(200).send("Welcome.");
})

app.get("/register", (req, res) =>{
    res.status(200).sendFile(__dirname + "/index.html");
})

app.post("/register", upload.single("image"), (req, res, next) =>{
    res.status(200).send("file uploaded successfully.")
})

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`);
})