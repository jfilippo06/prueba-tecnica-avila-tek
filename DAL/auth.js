const User = require('../models/User')
const AppError = require('../errors/appErrors')
const bcrypt = require('bcrypt')

const loginUser = () => {}

const registerUser = async (email, userName, hash) => {
    const user = await User.findOne({email})
    if (user) throw new AppError('Usuario ya existe', 200);
    const data = new User({email, userName, password:hash})
    await data.save()
    return data
}

module.exports = {
    loginUser,
    registerUser,
}