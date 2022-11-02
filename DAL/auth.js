const User = require('../models/User')
const AppError = require('../errors/appErrors')
const bcrypt = require('bcrypt')

const loginUser = () => {}

const registerUser = async (email, userName, hash) => {
    // const user = await User.findOne({email})
    // if (!user) throw new AppError('Usuario no existe', 404);
    // if (!bcrypt.compareSync(password, user.password)) throw new AppError('Contraseña no valida', 404);
    user = new User({email, userName, password:hash})
    await user.save()
    return user
}

module.exports = {
    loginUser,
    registerUser,
}