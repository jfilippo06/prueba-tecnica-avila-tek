const moongose = require('mongoose')
const {Schema} = moongose

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        index: {unique: true}
    },
    userName: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = moongose.model('User', userSchema)