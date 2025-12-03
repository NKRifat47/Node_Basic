const app = require("./app")
const port=3030;

app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`);
})