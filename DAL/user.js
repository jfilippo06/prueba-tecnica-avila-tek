const User = require('../models/User')

const findAndCountAllUsers = async (options) =>  {
    const data = await User.paginate({}, options)
    return data
}

module.exports = {
    findAndCountAllUsers,
}