const bcrypt = require('bcrypt')
const auth = require('../config/auth')
const { registerUser, loginUser } = require('../DAL/auth')

const loginService = async (email, password) => {
    const data = await loginUser(email, password)
    return data
}

const registerService = async (email, userName, password) => {
    const salt = await bcrypt.genSalt(Number.parseInt(auth.rounds))
    const hash = await bcrypt.hash(password, salt)
    const data = await registerUser(email, userName, hash)
    return data
}

module.exports = {
    loginService,
    registerService,
}