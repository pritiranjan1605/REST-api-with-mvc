const express = require('express')
const mongoose = require('mongoose')
const{connecttomongo} = require('./connection')
const myroute = require('./routes/user')
connecttomongo("mongodb://127.0.0.1:27017/newinti")
const app = express()
app.use(express.urlencoded({extended:false}))
app.use('/user',myroute)
const port = 8000;
app.listen(port, () => {
    console.log("servser started")
})