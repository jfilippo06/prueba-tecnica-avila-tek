const { loginService } = require("../services/auth")

const loginController = (req, res) => {
    const {email, password} = req.body
}

const registerController = async (req, res) => {
    try {
        const {email, userName, password} = req.body
        const data = await loginService(email, userName,password)
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