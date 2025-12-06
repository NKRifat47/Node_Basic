const express = require("express");
const mongoose = require("mongoose");
const multer  = require('multer')


const app = express();
const PORT = 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test_image");
        console.log("DB is connected");
    } catch (error) {
        console.log("DB is not connected");
        console.log(error);
        process.exit(1);
    }
}

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required: [true, "User name is required"]
    },
    image: {
        type : String,
        required: [true, "Image is required"]
    }
})

const User = mongoose.model("user", userSchema);

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

app.post("/register", upload.single("image"), async (req, res, next) =>{
   try {
    const newuser = new User ({
        name : req.body.name,
        image : req.file.filename 
    });
    await newuser.save();
    res.status(201).send(newuser);
   } catch (error) {
    res.status(500).send(error.message);
   }
})

app.listen(PORT, async () =>{
    console.log(`Server is running at http://localhost:${PORT}`);
    await connectDB();
})