var mongoose = require('mongoose')

var userLoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

exports.Module = mongoose.model('userLoginModel', userLoginSchema);