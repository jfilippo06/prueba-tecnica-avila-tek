const { userService } = require("../services/user")

const userController = async (req, res) => {
    try {
        const { limit, page } = req.query
        const data = await userService(limit,page)
        res.status(200).json(data)
    } catch (error) {
        res.status(error.code).json(error.message)
    }
}

module.exports = {
    userController,
}