const AppError = require("../errors/appErrors")
const { registerService, loginService } = require("../services/auth")

const loginController = async (req, res) => {
    try {
        const {email, password} = req.body
        const data = await loginService(email, password)
        req.login(data, (err,) => {
            if (err) throw new AppError('Error al crear la sesion', 403)
            res.redirect('/home')
        })
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

const logoutController = async (req, res) => {
    req.logout(()=>{})
    res.redirect('/')
}

module.exports = {
    loginController,
    registerController,
    logoutController,
}