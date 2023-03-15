const app = require("./app")
const PORT = 5000

// app.get('/',(req, res)=>{
//     res.send("Hi hello ki khobor?")
// })


app.listen(PORT, (req, res)=>{
    console.log(`Server is running on http://localhost/${PORT}`)
})