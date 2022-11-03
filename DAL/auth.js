const User = require('../models/User')
const AppError = require('../errors/appErrors')
const bcrypt = require('bcrypt')

const loginUser = async (email, password) => {
    const user = await User.findOne({email})
    if (!user) throw new AppError('Usuario no existe', 404);
    if (!bcrypt.compareSync(password, user.password)) throw new AppError('Contraseña no valida', 404);
    return user
}

const registerUser = async (email, userName, hash) => {
    const user = await User.findOne({email})
    if (user) throw new AppError('Email ya existe', 200);
    const data = new User({email, userName, password:hash})
    await data.save()
    return data
}

module.exports = {
    loginUser,
    registerUser,
}