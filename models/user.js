const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    gender: {
        type: String,
    }
})
const User = mongoose.model("User", userSchema);


module.exports =User
