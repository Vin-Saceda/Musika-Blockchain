const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            maxlength: 50
        },
        lastName: {
            type: String,
            maxlength: 50
        },
        email: {
            type: String,
            trim: true
        },
        userName: {
            type: String,
            maxlength: 50,
            unique: 1
        },
        password: {
            type: String,
            minlength: 5
        },
        token: {
            type: String
        },
        tokenExp: {
            type: Number
        }
    }
)

const User = mongoose.model('User', userSchema)
module.exports = { User }