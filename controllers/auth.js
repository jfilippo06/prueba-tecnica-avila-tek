const loginController = (req, res) => {
    const {email, password} = req.body
}

const registerController = (req, res) => {
    try {
        const {email, userName, password} = req.body
        
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