const { userService } = require("../services/user")

const userController = async (req, res) => {
    try {
        const { page, size } = req.query
        const data = await userService(page,size)
        res.status(200).json(data)
    } catch (error) {
        res.status(error.code).json(error.message)
    }
}

module.exports = {
    userController,
}