// const {totalmem, freemem} = require('os')

// // console.log(os.userInfo())
// // console.log(os.hostname())
// // console.log(os.homedir())
// console.log(totalmem())
// console.log(freemem())

const path = require("path");

// const extentionname = path.extname("index.html")
// console.log(extentionname)

const joinName = path.join(__dirname + "/../view")
console.log(joinName)