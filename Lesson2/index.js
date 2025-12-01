const fs = require('fs') ;

// fs.appendFile('demo1.txt', 'I am 25 years old.', (err) =>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Successful")
//     }
// })

// fs.readFile('demo1.txt','utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data)
//     }
// })

// fs.rename('demo1.txt', 'demo2.txt', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("Successful")
//     }
// })

// fs.unlink('demo2.txt', (err) => {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log('successful.')
//     }
// })

fs.exists('demo2.txt', (result) => {
    if (result){
        console.log('Found')
    }
    else{
        console.log("Not Found.")
    }
})


