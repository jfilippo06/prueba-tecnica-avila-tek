const { registerService, loginService } = require("../services/auth")

const loginController = async (req, res) => {
    try {
        const {email, userName, password} = req.body
        const data = await loginService(email, userName, password)
        res.status(200).json(data)
    } catch (error) {
        res.status(error.code).json(error.message)
    }
}

const registerController = async (req, res) => {
    try {
        const {email, userName, password} = req.body
        const data = await registerService(email, userName,password)
        res.status(201).json(data)
    } catch (error) {
        res.status(error.code).json(error.message)
    }
}

const logoutController = (req, res) => {}

module.exports = {
    loginController,
    registerController,
    logoutController,
}