const express = require('express')
const app = express()
const mongoose = require('mongoose')

const mongoUrl = "mongodb+srv://oumaima123:oumaima123@cluster0.yklel.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mongoUrl,(err)=>{
    err ? console.log(err) : console.log('database is connected')
})


app.use(express.json());
app.use("/person", require("./routers/router"));

const port = 5000
app.listen( port, (err)=> {
    err ? console.log(err) : console.log('server is running on port')
})