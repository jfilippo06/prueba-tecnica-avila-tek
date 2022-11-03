const moongose = require('mongoose')
const {Schema} = moongose
const mongoosePaginate = require('mongoose-paginate-v2')

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

userSchema.plugin(mongoosePaginate)

module.exports = moongose.model('User', userSchema)