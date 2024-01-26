const mongoose = require('mongoose')
async function connecttomongo(url){
    return mongoose.connect(url).then((req,res)=>console.log("mongoose connected successfully")).catch((err)=>console.log(err))
}
module.exports = {
    connecttomongo,
}